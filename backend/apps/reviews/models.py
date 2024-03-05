from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from cloudinary.models import CloudinaryField


class Review(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=50, null=True, blank=True)
    image = CloudinaryField("image")
    title = models.CharField(max_length=255)
    rating = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} - Calificación: {self.rating}"
