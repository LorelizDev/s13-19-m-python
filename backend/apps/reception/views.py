from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from drf_yasg.utils import swagger_auto_schema
from rest_framework.permissions import IsAdminUser
from rest_framework.decorators import permission_classes, parser_classes
from .models import Table, User
from .serializers import TableInfoSerializer, UserInfoSerializer


# Table views
class TableListAPIView(APIView):
    """
    Show all tables
    """

    permission_classes = [IsAdminUser]

    @swagger_auto_schema(response={200: TableInfoSerializer(many=True).data})
    def get(self, request):
        tables = Table.objects.all()
        serializer = TableInfoSerializer(tables, many=True)
        return Response(serializer.data)


class ActiveTableListApiView(APIView):
    """
    Show only the active tables
    """

    permission_classes = [IsAdminUser]

    @swagger_auto_schema(response={200: TableInfoSerializer(many=True).data})
    def get(self, request):
        active_tables = Table.objects.filter(is_active=True)
        serializer = TableInfoSerializer(active_tables, many=True)
        return Response(serializer.data)


class InactiveTableListApiView(APIView):
    """
    Show only the inactive tables.
    All users can watch the Inactive tables
    """

    @swagger_auto_schema(response={200: TableInfoSerializer(many=True).data})
    def get(self, request):
        active_tables = Table.objects.filter(is_active=False)
        serializer = TableInfoSerializer(active_tables, many=True)
        return Response(serializer.data)


class ClearTableApiView(APIView):
    """
    Clean all users at a table
    """

    permission_classes = [IsAdminUser]

    @swagger_auto_schema(response={204: {"message": "Table was cleaned, successfully"}})
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
        return Response(
            {"message": "Table was cleaned, successfully"},
            status=status.HTTP_204_NO_CONTENT,
        )


# User views
class UserAPIView(APIView):
    """
    - GET: All users in the restaurant
    - POST: Assign a user to a table
    """

    @permission_classes([IsAdminUser()])
    @swagger_auto_schema(response={200: UserInfoSerializer(many=True).data})
    def get(self, request):
        """
        Get all users/clients
        """
        users = User.objects.all()
        serializer = UserInfoSerializer(users, many=True)
        return Response(serializer.data)

    @swagger_auto_schema(
        request_body=UserInfoSerializer, response={201: UserInfoSerializer()}
    )
    def post(self, request):
        """
        Assign a user to a table
        param: username
        param: table

        Ex:
            {
              "username": "Ambrossio",
              "table": 1, # table_id
            }
        """
        serializer = UserInfoSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            # assign table to user
            table = Table.objects.get(id=user.table.id)
            user.assign_to_table(table)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UsersInTableApiView(APIView):
    """
    Show users in a table
    """

    @swagger_auto_schema(request_body=Table.id, response={201: UserInfoSerializer()})
    def get(self, request, table_id):
        try:
            table = Table.objects.get(id=table_id)
        except Table.DoesNotExist:
            return Response(
                {"error": "Table not exist"}, status=status.HTTP_404_NOT_FOUND
            )
        users = table.user_set.all()
        serializer = UserInfoSerializer(users, many=True)
        return Response(serializer.data)


class DeleteUserApiView(APIView):
    """
    Delete a user from a table
    """

    permission_classes = [IsAdminUser]

    def delete(self, request, user_id):
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return Response(
                {"error": "User not exist."}, status=status.HTTP_404_NOT_FOUND
            )
        table = user.table
        if table.has_users():
            user_deleted = user
            user.delete()
            # check if table not has users
            if not table.has_users():
                table.deactivate()
            return Response(
                f"{user_deleted.__str__()} from {table.__str__()}",
                status=status.HTTP_202_ACCEPTED,
            )
        else:
            return Response(
                {"error": "It's not possible delete the user from a table"},
                status=status.HTTP_400_BAD_REQUEST,
            )
