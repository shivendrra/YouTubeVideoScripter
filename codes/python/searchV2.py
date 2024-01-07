from dotenv import load_dotenv
import os

load_dotenv()
os.chdir('D:/Machine Learning/Scripting Application/')
api_key = os.getenv('search_key')
cx_id = os.getenv('cx_id')

import requests
import json

file_path = 'data/search_strings.json'
with open(file_path, 'r') as file:
  search_strings = json.load(file)
output_data = []
n_pages = 10
n_results = 0

import timeit
import time
start_time = timeit.default_timer()

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
    start = page * 10 + 1
    results = google_search(input, api_key, cx_id, num=10, start=start)
    if 'items' in results:
      for result in results['items']:
        n_results += 1
        data = {
          'index': n_results,
          'title': result.get('title', ''),
          'link': result.get('link', ''),
          'snippet': result.get('snippet', '')
        }
        output_data.append(data)
    else:
      print(f'No "items" key in results for search term: {input}. Skipping...')
  return output_data

for inputs in search_strings:
  print(inputs)
  output_json = data_collector(inputs, n_pages, n_results)

with open('data/search_results_v1.json', 'w') as file:
  json.dump(output_json, file, indent=2)
  print(f'total no of results were {len(output_json)}')
  print('data written in the file successfully!')

end_time = timeit.default_timer()
print(f'time taken to fetch and write the results is: {(end_time-start_time) / 60} mins')