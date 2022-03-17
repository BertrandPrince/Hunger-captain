from django.db import models
from cloudinary.models import CloudinaryField
from config.constants import *

# Create your models here.
class Item(models.Model): 
    class Meta(object):
        db_table='items'

    status=models.CharField(
        'Status', blank=False, default='draft', max_length=50 , db_index=True, choices= STATUS
    )
    name=models.CharField(
        'Name', blank=False, null=False, max_length=120, db_index=True
    )

    price=models.DecimalField(
        "Price", blank=False, null=False, max_digits=11, decimal_places=2
    )

    image=CloudinaryField(
        'Image', blank=True, null=True
    )

    created_at = models.DateTimeField(
        'Created Date Time', blank=True, auto_now_add=True
    )

    updated_at = models.DateTimeField(
        'Updated Date Time', blank=True, auto_now=True
    )


