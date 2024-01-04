const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

const targetUrl = 'https://www.nasa.gov/';
const outputFileName = '../data/output.txt';

async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    process.exit(1);
  }
}

function extractTextFromHtml(html) {
  const $ = cheerio.load(html);
  const paragraphs = $('p').map((index, element) => $(element).text()).get();
  return paragraphs.join('\n');
}

async function saveTextToFile(text, fileName) {
  try {
    fs.writeFileSync(fileName, text);
    console.log(`Text data saved to ${fileName}`);
  } catch (error) {
    console.error('Error saving data to file:', error.message);
  }
}

async function main() {
  const htmlData = await fetchData(targetUrl);
  const textData = extractTextFromHtml(htmlData);
  await saveTextToFile(textData, outputFileName);
}

main();
