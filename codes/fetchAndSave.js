const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

const jsonData = fs.readFileSync('../data/search_results.json')
const searchResults = JSON.parse(jsonData);
const outputFileName = '../data/output.txt';

async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } 
  catch (error) {
    console.error(`Error fetching data from ${url}:`, error.message);
    return null;
  }
}

function extractTextFromHtml(html) {
  const $ = cheerio.load(html);
  const paragraphs = $('p').map((index, element) => $(element).text()).get();
  return paragraphs.join('\n');
}

async function saveTextToFile(text, fileName) {
  try {
    fs.appendFileSync(fileName, text);
    console.log(`Text data saved to ${fileName}`);
  }
  catch (error) {
    console.error('Error saving data to file:', error.message);
  }
}

async function main() {
  for (const result of searchResults) {
    const htmlData = await fetchData(result.link);
    if (htmlData) {
      const textData = extractTextFromHtml(htmlData);
      await saveTextToFile(textData, outputFileName);
    }
  }
}

main();