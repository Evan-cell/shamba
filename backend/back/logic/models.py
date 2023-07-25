from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Shamba(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL,null=True)
    name = models.CharField(max_length=200,null=True,blank=True)
    location = models.CharField(max_length=200,null=True,blank=True)
    image= models.ImageField(null=True,blank=True)
    agency = models.CharField(max_length=200,null=True,blank=True)
    category = models.CharField(max_length=200,null=True,blank=True)
    description = models.TextField(null=True,blank=True)
    rating = models.DecimalField(decimal_places=2,max_digits=7,null=True,blank=True)
    numReviews = models.IntegerField(null=True,blank=True,default=0)
    price = models.DecimalField(decimal_places=2,max_digits=7,null=True,blank=True)
    _id = models.AutoField(primary_key=True,editable=False)

    def __str__(self):
        return self.name

class Review(models.Model):
    shamba = models.ForeignKey(Shamba, on_delete=models.SET_NULL,null=True)
    user = models.ForeignKey(User,on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200,null=True,blank=True)
    rating = models.IntegerField(null=True,blank=True,default=0)
    comment = models.TextField(null=True,blank=True)
    _id = models.AutoField(primary_key=True,editable=False)

    def __str__(self):
        return self.rating   

class Order(models.Model):
    user = models.ForeignKey(User,on_delete=models.SET_NULL,null=True)
    totalPrice = models.DecimalField(decimal_places=2,max_digits=7,null=True,blank=True)   
    isPaid = models.BooleanField(default=False)
    createdAt = models.DateTimeField(auto_now_add=False,null=True,blank=True)
    _id  = models.AutoField(primary_key=True,editable=False)

    def __str__(self):
        return str(self.createdAt)    
    
class OrderItem(models.Model):
    shamba = models.ForeignKey(Shamba,on_delete=models.SET_NULL,null=True)
    order = models.ForeignKey(Order,on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200,blank=True,null=True)
    price = models.DecimalField(decimal_places=2,max_digits=7, null=True, blank=True)
    image = models.ImageField(null=True,blank=True)
    _id = models.AutoField(primary_key=True,editable=False)

    def __str__(self):
        return str(self.name)    



          
