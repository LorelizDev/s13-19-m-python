"""
URL configuration for restaurant project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
    openapi.Info(
        title="Restaurant API",
        default_version="v0.1.0",
        description="""Visualización de urls para las correspondientes
        peticiones en las sub-aplicaciones:
        - orders (ordenes)
        - payments (pagos)
        - products (productos)
        - reception (recepción)
        """,
        terms_of_service="",
        contact=openapi.Contact(email=""),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/reception/", include("apps.reception.urls")),
    path("api/payment/", include("apps.payments.urls")),
    path("api/products/", include("apps.products.routers")),
    path("api/orders/", include("apps.orders.routers")),
    path("api/reviews/", include("apps.reviews.urls")),
]

url_swagger = [
    path(
        "swagger<format>/", schema_view.without_ui(cache_timeout=0), name="schema-json"
    ),
    # A JSON view of your API specification at /swagger.json
    # A YAML view of your API specification at /swagger.yaml
    path(
        "swagger/",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
    path("redoc/", schema_view.with_ui("redoc", cache_timeout=0), name="schema-redoc"),
]

urlpatterns += url_swagger
