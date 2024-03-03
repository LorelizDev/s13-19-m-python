from rest_framework.routers import DefaultRouter

from . import viewsets

router = DefaultRouter()

router.register(
    r"products_orders", viewsets.OrderProductViewset, basename="Product orders"
)
router.register(
    r"list_of_orders", viewsets.UserOrderListViewset, basename="List of orders"
)
router.register(
    r"orders_by_table", viewsets.OrdersByTableViewset, basename="Orders by table"
)


urlpatterns = router.urls
