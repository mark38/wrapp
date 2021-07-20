from django.db import models

# Create your models here.

class Indicator(models.Model):
    name = models.CharField(max_length=128, db_index=True)
    unit = models.CharField(max_length=8)

    def __str__(self):
        return self.name

class Statistics(models.Model):
    indicator = models.ForeignKey('Indicator', on_delete=models.CASCADE)
    value = models.FloatField()
    date = models.DateField()

    def __str__(self):
        return self.value