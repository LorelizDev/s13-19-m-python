
from django.urls import path, include
from .views import OrderUserListAPIView, OrderUserDetailAPIView, OrderCreateView, OrderDeleteView

urlpatterns = [
        path('orders/', OrderUserListAPIView.as_view()),
        path('orders/<int:pk>/', OrderUserDetailAPIView.as_view()),
        path('create/', OrderCreateView.as_view(), name='create_order'),
        path('delete/<int:pk>/', OrderDeleteView.as_view(), name='delete_order')
    ]
