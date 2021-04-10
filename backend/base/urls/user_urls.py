from django.urls import path
from base.views import user_views as views

print('came in base/urls/user_urls')

urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pai'),
    path('register/', views.registerUser, name='registar'),
    path('profile/', views.getUserProfile, name="users-profile"),
    path('profile/update/', views.updateUserProfile, name="user-profile-update"),
    path('', views.getUsers, name="users"),

    path('<str:pk>/', views.getUserById, name='user'),

    path('update/<str:pk>/', views.updateUser, name='user-update'),

    path('delete/<str:pk>/', views.deleteUser, name='user-delete'),
]
print("clear user")