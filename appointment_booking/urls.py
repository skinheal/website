from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.appointment_booking, name = 'appoint_book'),
]
