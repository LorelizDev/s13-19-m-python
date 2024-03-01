from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


class Review(models.Model):
    id = models.AutoField(primary_key=True)
    image = models.ImageField(null=True, blank=True, upload_to="assets/images/reviews")
    title = models.CharField(max_length=255)
    rating = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    message = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} - Calificación: {self.rating}"
