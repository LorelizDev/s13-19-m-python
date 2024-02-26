from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Table, User
from .serializers import TableInfoSerializer, UserInforSerializer


# Table views
class TableListAPIView(APIView):
    def get(self, request):
        tables = Table.objects.all()
        serializer = TableInfoSerializer(tables, many=True)
        return Response(serializer.data)


class ActiveTableListApiView(APIView):
    def get(self, request):
        active_tables = Table.objects.filter(is_active=True)
        serializer = TableInfoSerializer(active_tables, many=True)
        return Response(serializer.data)


class InactiveTableListApiView(APIView):
    def get(self, request):
        active_tables = Table.objects.filter(is_active=False)
        serializer = TableInfoSerializer(active_tables, many=True)
        return Response(serializer.data)


class ClearTableApiView(APIView):
    def post(self, request, table_id):
        try:
            table = Table.objects.get(id=table_id, is_active=True)
        except Table.DoesNotExist:
            return Response(
                {"error": "Table is not active or not exist"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Check if table has users
        if not table.has_users():
            return Response(
                {"error": "Table is not possible cleaned. Not Users at the table"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        table.clear_table()
        return Response({"message": "Table was cleaned, successfully"})


# User views
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
            table = Table.objects.get(id=user.table.id)
            user.assign_to_table(table)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UsersInTableApiView(APIView):
    def get(self, request, table_id):
        try:
            table = Table.objects.get(id=table_id)
        except Table.DoesNotExist:
            return Response(
                {"error": "Table not exist"}, status=status.HTTP_404_NOT_FOUND
            )
        users = table.user_set.all()
        serializer = UserInforSerializer(users, many=True)
        return Response(serializer.data)


class DeleteUserApiView(APIView):
    def delete(self, request, user_id):
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return Response(
                {"error": "User not exist."}, status=status.HTTP_404_NOT_FOUND
            )
        table = user.table
        if table.has_users():
            user.delete()
            # check if table not has users
            if not table.has_users():
                table.deactivate()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(
                {"error": "It's not possible delete the user from a table"},
                status=status.HTTP_400_BAD_REQUEST,
            )
