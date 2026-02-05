from django.contrib import admin
from .models import PatientData

@admin.register(PatientData)
class PatientDataAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "phone",
        "email",
        "branch",
        "date",
        "time",
        "city",
        "created_at",
    )
    search_fields = ("name", "phone", "email")
    list_filter = ("branch", "date")
