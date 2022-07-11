from django.contrib import admin
from .models import Answer, Question


class AnswerInline(admin.TabularInline):
    model = Answer


class QuestionAdmin(admin.ModelAdmin):
    inlines = [
        AnswerInline,
    ]


class AnswerAdmin(admin.ModelAdmin):
    list_display = ["answer"]


# Register your models here.

admin.site.register(Question, QuestionAdmin)
admin.site.register(Answer, AnswerAdmin)
