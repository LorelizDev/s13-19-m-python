from django.urls import path
from .views import (
    PaymentListView,
    PaymentCreateView,
    PaymentTypeListView,
    PaymentDetailView,
)

urlpatterns = [
    path("", PaymentCreateView.as_view(), name="payment"),
    path("<int:pk>/", PaymentDetailView.as_view(), name="payment-detail"),
    path("type/", PaymentTypeListView.as_view(), name="payment-type"),
    path("payments/", PaymentListView.as_view(), name="payment-list"),
]
