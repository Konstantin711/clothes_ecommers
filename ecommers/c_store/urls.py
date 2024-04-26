from django.urls import path
from . import views


urlpatterns = [
    path('', views.getBasicPage),
    path('<str:slug>/all/', views.getAllByParent, name='get all by parent')
]