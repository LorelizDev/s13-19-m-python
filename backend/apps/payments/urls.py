from django.urls import path
from .views import PaymentListCreateView, PaymentTypeListView, PaymentDetailView

urlpatterns = [
    path("", PaymentListCreateView.as_view(), name="payment"),
    path("<int:pk>/", PaymentDetailView.as_view(), name="payment-detail"),
    path("type/", PaymentTypeListView.as_view(), name="payment-type"),
    path("payments/", PaymentListCreateView.as_view(), name="payment-list"),
]
