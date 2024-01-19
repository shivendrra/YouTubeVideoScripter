import os
os.chdir('D:/Machine Learning/Scripting Application/codes/pyhton/webscrapper')
import json

def scrapeUrls(query, pgNo):
  formattedQuery = '%20'.join(query.split(' '))
  url = f"https://www.britannica.com/search?query={formattedQuery}&page={pgNo}"
  return url

def getLinks():
  out_file = 'scraped_urls.json'
  query_file = 'search_queries.json'
  with open(query_file, 'r') as file:
    search_queries = json.load(file)
  max_limit = 10
  links = []
  for query in search_queries:
    pageNo = 1
    for i in range(max_limit):
      links.append(scrapeUrls(query, pageNo))
      pageNo += 1

  # writing the links in other files
  # with open(out_file, 'w') as outfile:
  #   json.dump(links, outfile, indent=2)
  return links

if __name__ == "__main__":
  getLinks()