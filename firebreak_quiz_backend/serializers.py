from rest_framework import serializers
from .models import Answer, Question, UserScores


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ("id", "answer", "correct")


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ("id", "title", "points")

class UserScoresSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserScores
        fields = ("id", "name", "final_score")