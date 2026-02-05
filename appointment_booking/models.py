from django.db import models
from django.utils import timezone
# Create your models here.

class PatientData(models.Model):
    name= models.CharField(max_length = 100)
    phone= models.CharField(max_length= 15)
    email = models.EmailField()
    date = models.DateField() 
    time = models.TimeField(
        default=timezone.now,
        blank=True
    )
    branch = models.CharField(max_length=50)

    area = models.CharField(max_length = 100)
    city = models.CharField(max_length = 50)
    state = models.CharField(max_length = 50)
    post_code = models.CharField(max_length = 10)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.phone}"
    