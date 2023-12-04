# marryme/urls.py

from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', obtain_auth_token, name='login'),
    path('', include('budget.urls')),
]
