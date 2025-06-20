{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import json\
import boto3\
dynamodb = boto3.resource('dynamodb')\
table = dynamodb.Table('serverless-web-application-on-aws')\
def lambda_handler(event, context):\
    response = table.get_item(Key=\{\
        'id':'0'\
    \})\
    views = response['Item']['views']\
    views = views + 1\
    \
    print(views)\
    \
    response = table.put_item(Item=\{\
        'id':'0',\
        'views': views\
    \})\
    \
    return views}