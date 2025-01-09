from django.urls import include, path
from RD.views import ItemViewSet
from rest_framework.routers import DefaultRouter

# obj=register(r'urlpattern',viewsetclassname)

router=DefaultRouter()
router.register(r'item',ItemViewSet)

urlpatterns=[
    path('',include(router.urls)),
]