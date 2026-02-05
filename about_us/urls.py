from django.urls import path, include
from . import views


urlpatterns = [
    path('about_us/', views.aboutUs, name = 'about_us'),
]
