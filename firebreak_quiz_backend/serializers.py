from rest_framework import serializers
from .models import Answer, Question


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ("id", "answer", "correct")


class QuestionSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.HyperlinkedIdentityField(view_name="question-detail")
    answers = serializers.HyperlinkedIdentityField(view_name="question-answers")

    class Meta:
        model = Question
        fields = ("id", "title", "points", "answers")
