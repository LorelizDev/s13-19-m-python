from rest_framework.routers import DefaultRouter

from . import viewsets

router = DefaultRouter()

router.register(r"list_of_orders", viewsets.UserOrderViewset, basename="List of orders")
router.register(
    r"orders_by_table", viewsets.OrdersByTableViewset, basename="Orders by table"
)
router.register(
    r"orders_by_user", viewsets.OrdersByUserViewset, basename="Orders by user"
)


urlpatterns = router.urls
