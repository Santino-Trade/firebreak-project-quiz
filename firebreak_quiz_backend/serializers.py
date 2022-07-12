from rest_framework import serializers
from .models import Answer, Question


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ("id", "answer", "correct")


class QuestionSerializer(serializers.HyperlinkedModelSerializer):
    # class QuestionSerializer(serializers.ModelSerializer):
    id = serializers.HyperlinkedIdentityField(view_name="question-detail")
    answers = serializers.HyperlinkedIdentityField(view_name="question-answers")
    # answers = AnswerSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = ("id", "title", "points", "answers")
