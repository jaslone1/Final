

from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from authentication import views

router = routers.DefaultRouter()
router.register(r'authentication', views.UpkeepView, 'authentication')

urlpatterns = [
    path('admin/', admin.site.urls),         path('api/', include(router.urls))
]
