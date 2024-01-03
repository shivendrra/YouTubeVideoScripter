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
n_pages = 10
n_results = 0

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

def data_collector(input, pages, n_results):
  for page in range(0, pages):
    start = page * 10 + 1  # Google's result indexing starts at 1
    results = google_search(input, api_key, cx_id, num=10, start=start)
    for result in results['items']:
      n_results += 1
      data = {
        'index': n_results,
        'title': result['title'],
        'link': result['link'],
        'snippet': result['snippet']
      }
      output_data.append(data)
  return output_data

output_json = data_collector(user_input, n_pages, n_results)

with open('data/search_results.json', 'w') as file:
  json.dump(output_json, file, indent=2)
  print(f'total no of results were {len(output_json)}')
  print('data written in the file successfully!')