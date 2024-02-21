from django.urls import path
from .views import TableAPIView, UserAPIView

urlpatterns = [
    path("tables/", TableAPIView.as_view(), name="table-list"),
    path("users/", UserAPIView.as_view(), name="user-create"),
    path("users/<int:user_id>/", UserAPIView.as_view(), name="user-delete"),
]
