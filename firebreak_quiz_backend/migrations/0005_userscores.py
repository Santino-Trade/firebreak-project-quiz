# Generated by Django 3.2.14 on 2022-07-12 11:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('firebreak_quiz_backend', '0004_added_points_to_question'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserScores',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('final_score', models.IntegerField()),
            ],
        ),
    ]
