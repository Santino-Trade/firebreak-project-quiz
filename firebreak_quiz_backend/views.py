from django.shortcuts import get_object_or_404, render
from rest_framework import generics, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .serializers import AnswerSerializer, QuestionSerializer, UserScoresSerializer
from .models import Answer, Question, UserScores

from pprint import pprint


class QuestionView(viewsets.ModelViewSet):
    serializer_class = QuestionSerializer
    queryset = Question.objects.all()

    @action(detail=True)
    def answers(self, request, pk=None):
        """
        Returns a list of all the possible answers for a  questions.

        Args:
            request (_type_): _description_
            pk (_type_, optional): _description_. Defaults to None.
        """
        question = get_object_or_404(Question, id=pk)
        queryset = Answer.objects.filter(question_id=pk)
        serializer = AnswerSerializer(queryset, many=True)
        return Response(serializer.data)

class UserScoresView(viewsets.ModelViewSet):
    serializer_class = UserScoresSerializer
    queryset = UserScores.objects.all()
