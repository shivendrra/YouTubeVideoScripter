// fetches all the available links from the Britannica.com

const fs = require('fs');
const axios = require('axios');
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const file_path = '../data/json outputs/searched_strings.json';
const search_query = ['antarctica', 'colonization', 'world war', 'asia', 'africa', 'australia', 'holocaust', 'voyages', ''];
const out_file = '../data/json outputs/britannica_links.json';
let n_results = 0;
let pageNo = 1;
const start_time = Date.now();

async function scrapeHtml(input, pgNo) {
  const formattedQuery = input.split(' ').join('%20');
  const url = `https://www.britannica.com/search?query=${formattedQuery}&page=${pgNo}`;
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
  };

  try {
    const response = await axios.get(url, { headers });
    return response;
  } catch (error) {
    console.error(`Error in search for '${input}': ${error.message}`);
    return null;
  }
}

async function scrapeLinks(htmlContent) {
  const $ = cheerio.load(htmlContent);
  const links = [];

  $('.search-results.col ul.list-unstyled.results li').each((index, element) => {
    const linkElement = $(element).find('a.font-weight-bold');
    const href = linkElement.attr('href');
    links.push(href);
  });
  return links;
}

async function main(search_query, pgNo) {
  for (const query of search_query) {
    const response = await scrapeHtml(query, pgNo);
    if (response.status === 200) {
      const links = await scrapeLinks(response.data);
      n_results += 10;
      const resultObject = { query, links };
      fs.appendFileSync(out_file, JSON.stringify({ query, links }) + '\n');
    } else {
      console.error(`Error in search for '${query}': ${response}`);
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  console.log(`Total ${n_results} results`);
}

main(search_query, pageNo).then(() => {
  const end_time = Date.now();
  console.log(`Time to fetch and process the results: ${(end_time - start_time) / 1000} secs`);
});
