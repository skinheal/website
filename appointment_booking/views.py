from django.shortcuts import render

# Create your views here.

def appointment_booking(request):
    return render(request, 'appointment_booking/appointment_booking.html')