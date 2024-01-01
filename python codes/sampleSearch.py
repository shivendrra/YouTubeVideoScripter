import requests
import json

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
        api_key='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', 
        cx_id='27d4bab791cce4187', 
        num=10
    )
    for result in results['items']:
        print(json.dumps({
            'title': result['title'],
            'link': result['link'],
            'snippet': result['snippet']
        }, indent=4))

if __name__ == '__main__':
    main()