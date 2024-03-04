from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from drf_yasg.utils import swagger_auto_schema

from .models import Review
from .serializers import ReviewSerializer


class ReviewListView(APIView):

    def get(self, request):
        reviews = Review.objects.all()
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class ReviewCreateView(APIView):
    @swagger_auto_schema(
        request_body=ReviewSerializer,
        response={201: ReviewSerializer},
    )
    def post(self, request):
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"succes": "Review created successfully"},
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ReviewUpdateView(APIView):
    @swagger_auto_schema(
        request_body=ReviewSerializer,
        responses={200: ReviewSerializer},
    )
    def patch(self, request, pk):
        try:
            review = Review.objects.get(id=pk)
            serializer = ReviewSerializer(instance=review, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(
                    {"success": "Review updated successfully"},
                    status=status.HTTP_200_OK,
                )
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        except Review.DoesNotExist:
            return Response(
                {"message": "Review not found"}, status=status.HTTP_404_NOT_FOUND
            )

    @swagger_auto_schema(
        request_body=ReviewSerializer,
        responses={204: ReviewSerializer},
    )
    def delete(self, request, pk):
        try:
            review = Review.objects.get(id=pk)
            review.delete()
            return Response(
                {"message": "Review deleted successfully"},
                status=status.HTTP_204_NO_CONTENT,
            )
        except Review.DoesNotExist:
            return Response(
                {"message": "Review not found"}, status=status.HTTP_404_NOT_FOUND
            )
