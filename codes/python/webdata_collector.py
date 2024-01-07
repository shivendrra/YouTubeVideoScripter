import os
os.chdir('D:/Machine Learning/Scripting Application')

import json
with open('data/search_results.json') as f:
  json_data = json.load(f)

print(type(json_data))

web_url = []
for item in json_data:
  web_url.append(item['link'])

print(web_url[:2])

import requests
from bs4 import BeautifulSoup
bs = BeautifulSoup()
req = requests()