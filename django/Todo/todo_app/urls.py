from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from.views import ListTodoView, todo_list

urlpatterns = [
    path('todos/', ListTodoView.as_view(), name="todo_all")
    # path('todos/', todo_list)
]

urlpatterns = format_suffix_patterns(urlpatterns)
