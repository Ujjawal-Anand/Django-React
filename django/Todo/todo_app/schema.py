import graphene
from graphene_django.types import DjangoObjectType, ObjectType

from.models import Todo


class TodoType(DjangoObjectType):
    class Meta:
        model = Todo


# create Query
class Query(ObjectType):
    todo = graphene.Field(TodoType, id=graphene.Int())
    todos = graphene.List(TodoType)

    def resolve_todo(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return Todo.objects.get(pk=id)

        return None

    def resolve_todos(self, info, **kwargs):
        return Todo.objects.all()


# create input object type
class TodoInput(graphene.InputObjectType):
    id = graphene.ID()
    title = graphene.String()
    body = graphene.String()
    is_completed = graphene.Boolean()


# create mutation
class CreateTodo(graphene.Mutation):
    class Arguments:
        input = TodoInput(required=True)

    ok = graphene.Boolean()
    todo = graphene.Field(TodoType)

    @staticmethod
    def mutate(root, info, input=None):
        ok = True
        todo_instance = Todo(title=input.title, body=input.body, is_completed=input.is_completed)
        todo_instance.save()
        return CreateTodo(ok=ok, todo=todo_instance)


class UpdateTodo(graphene.Mutation):
    class Arguments:
        id = graphene.Int(required=True)
        input = TodoInput(required=True)

    ok = graphene.Boolean()
    todo = graphene.Field(TodoType)

    @staticmethod
    def mutate(root, info, id, input=None):
        ok = False
        todo_instance = Todo.objects.get(pk=id)

        if todo_instance:
            ok = True
            todo_instance.body = input.body
            todo_instance.title = input.title
            todo_instance.is_completed = input.is_completed
            todo_instance.save()
            return UpdateTodo(ok=ok, todo=todo_instance)
        return UpdateTodo(ok=ok, todo=None)


class Mutation(graphene.ObjectType):
    create_todo = CreateTodo.Field()
    update_todo = UpdateTodo.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)