
from django.urls import path, include
from .views import OrderUserListAPIView, OrderUserDetailAPIView

urlpatterns = [
        path('orders/', OrderUserListAPIView.as_view()),
        path('orders/<int:pk>/', OrderUserDetailAPIView.as_view()),
    ]
