import os
os.chdir('D:/Machine Learning/Scripting Application/')

from dotenv import load_dotenv
load_dotenv()

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

def g_search(search_term, cx_id):
  search_term = str(search_term).split()
  search_term = '%'.join(search_term)
  url = f"https://cse.google.com/cse?cx={cx_id}#gsc.tab=0&gsc.q={search_term}&gsc.sort="
  response = requests.get(url)
  return response

def data_collector(input, pages, n_results):
  for page in range(0, pages):
    start = page * 10 + 1
    results = g_search(input, cx_id)
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
  # time.sleep(1000)
  output_json = data_collector(inputs, n_pages, n_results)

with open('data/search_results_v1.json', 'w') as file:
  json.dump(output_json, file, indent=2)
  print(f'total no of results were {len(output_json)}')
  print('data written in the file successfully!')

end_time = timeit.default_timer()
print(f'time taken to fetch and write the results is: {(end_time-start_time) / 60} mins')
