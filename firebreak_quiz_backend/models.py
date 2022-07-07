from django import forms
from django.db import models
from django.contrib import admin

# Create your models here.


class Question(models.Model):
    title = models.CharField(max_length=1024)

    def __str__(self):
        return self.title


class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    answer = models.CharField(max_length=1024)
    correct = models.BooleanField(default=False)

    def __str__(self):
        return self.answer
