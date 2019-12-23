from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import permissions
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser

from .models import Todo
from .serializer import TodoSerializer

# Create your views here.


class ListTodoView(generics.ListCreateAPIView):
    queryset = Todo.objects.all().order_by('id')
    serializer_class = TodoSerializer
    permission_classes = (permissions.AllowAny,)



@api_view(['GET', 'POST'])
def todo_list(request, format=None):
    """
    list all todo or create a new one
    :param request:
    :return:
    """
    if request.method == 'GET':
        todos = Todo.objects.all()
        serializer = TodoSerializer(todos, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TodoSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)