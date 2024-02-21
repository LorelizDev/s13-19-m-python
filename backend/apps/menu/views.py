from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Table, User
from .serializers import TableInfoSerializer, UserInforSerializer


class TableAPIView(APIView):
    def get(self, request):
        tables = Table.objects.all()
        serializer = TableInfoSerializer(tables, many=True)
        return Response(serializer.data)


class UserAPIView(APIView):
    def get(self, request):
        users = User.objects.all()
        serializer = UserInforSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserInforSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            # assign table to user
            table = Table.objects.get(id=user.table)
            user.assign_to_table(table)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, user_id):
        user = User.objets.get(id=user_id)
        table = user.table
        user.clear_from_table(table)
        return Response(status=status.HTTP_204_NO_CONTENT)
