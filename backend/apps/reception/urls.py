from django.urls import path
from .views import (
    TableListAPIView,
    ActiveTableListApiView,
    InactiveTableListApiView,
    ClearTableApiView,
    UserAPIView,
    UsersInTableApiView,
    DeleteUserApiView,
)

urlpatterns = [
    path("tables/", TableListAPIView.as_view(), name="table-list"),
    path("tables/active/", ActiveTableListApiView.as_view(), name="active-tables-list"),
    path(
        "tables/inactive/",
        InactiveTableListApiView.as_view(),
        name="inactive-tables-list",
    ),
    path(
        "users-in-table/<int:table_id>",
        UsersInTableApiView.as_view(),
        name="users-in-table",
    ),
    path("clear-table/<int:table_id>", ClearTableApiView.as_view(), name="clear-table"),
    path("users/", UserAPIView.as_view(), name="user-create"),
    path("user/delete/<int:user_id>", DeleteUserApiView.as_view(), name="user-delete"),
]
