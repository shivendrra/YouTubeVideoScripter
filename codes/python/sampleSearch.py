# sample code

import requests
import json
from dotenv import load_dotenv
import os

os.chdir('D:/Machine Learning/Scripting Application/')
load_dotenv()

api_key = os.getenv('search_key')
cx_id = os.getenv('cx_id')

def google_search(search_term, api_key, cx_id, **kwargs):
    url = "https://www.googleapis.com/customsearch/v1"
    params = {
        'q': search_term,
        'key': api_key,
        'cx': cx_id
    }
    params.update(kwargs)
    response = requests.get(url, params=params)
    return response.json()

def main():
    search_term = input("Enter the search term: ")
    results = google_search(
        search_term, 
        api_key=api_key, 
        cx_id=cx_id, 
        num=1
    )
    with open('data/sample_results.json', 'w') as file:
        json.dump(results, file, indent=2)

if __name__ == '__main__':
    main()