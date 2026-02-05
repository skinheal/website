from django.shortcuts import render, redirect
from .models import PatientData
from django.contrib import messages
# Create your views here.

def appointment_booking(request):
    if request.method == "POST":
        name = request.POST.get("name")
        phone = request.POST.get("phone")
        date = request.POST.get("date")
        branch = request.POST.get("branch")

        if not name or not phone or not date or not branch:
            messages.error(
                request,
                "❌ Please fill all required fields before booking."
            )
            return redirect("appoint_book")

        PatientData.objects.create(
            name = name,
            phone = phone,
            email = request.POST.get("email"),
            date = date,
            branch = branch,
            area = request.POST.get("area"),
            city = request.POST.get("city"),
            state = request.POST.get("state"),
            post_code = request.POST.get("post_code"),
        )

        messages.success(
            request,
            "✅ Appointment booked successfully! We will contact you shortly."
        )
        return redirect("appoint_book")
    return render(request, 'appointment_booking/appointment_booking.html')