from django.urls import path
from .views import ReviewListView, ReviewCreateView, ReviewUpdateView

urlpatterns = [
    path("", ReviewListView.as_view(), name="reviews"),
    path("create/", ReviewCreateView.as_view(), name="review-create"),
    path("<int:pk>/", ReviewUpdateView.as_view(), name="review-update"),
]
