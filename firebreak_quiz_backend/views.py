from django.shortcuts import render
from rest_framework import viewsets
from .serializers import AnswerSerializer, QuestionSerializer
from .models import Answer, Question

# Create your views here.


class QuestionView(viewsets.ModelViewSet):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()


# TODO Filter by Question ID
class AnswerView(viewsets.ModelViewSet):
    serializer_class = AnswerSerializer
    queryset = Answer.objects.all()
