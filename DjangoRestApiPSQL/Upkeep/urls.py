from django.conf.urls import url
from Upkeep import views

urlpatterns = [
    url(r'^api/upkeep$', views.bike_list),
    url(r'^api/upkeep/(?P<pk>[0-9]+)$', views.bike_detail),
    url(r'^api/upkeep/published$', views.bike_list_published)
]
