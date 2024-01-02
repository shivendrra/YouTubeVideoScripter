from dotenv import load_dotenv
import os

load_dotenv()
os.chdir('D:/Machine Learning/Scripting Application/')
api_key = os.getenv('search_key')
cx_id = os.getenv('cx_id')

import requests
import json

user_input = input('Enter the search term: ')
output_data = []

def google_search(search_term, api_key, cx_id, **kwargs):
  url = 'https://www.googleapis.com/customsearch/v1'
  params = {
    'q': search_term,
    'key': api_key,
    'cx': cx_id
  }
  params.update(kwargs)
  response = requests.get(url, params)
  return response.json()

def data_parser():
  results = google_search(user_input, api_key, cx_id, num=10)
  for result in results['items']:
    data = json.dumps({
      'title': result['title'],
      'link': result['link'],
      'snippet': result['snippet']
    })
    output_data.append(data)
  with open('data/search_results.json', 'w') as file:
    json.dump(output_data, file, indent=2)
    print('data written in the file successfully!')

data_parser()