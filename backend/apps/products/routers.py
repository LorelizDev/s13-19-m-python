from rest_framework.routers import DefaultRouter

from . import viewsets

router = DefaultRouter()

router.register(r"products", viewsets.ProductViewSet, basename="Products")
router.register(r"category", viewsets.CategoryViewSet, basename="Category")

urlpatterns = router.urls
