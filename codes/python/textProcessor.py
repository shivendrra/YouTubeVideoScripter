import os
os.chdir('D:/Machine Learning/Scripting Application/')
import re

def process_text(input_file, output_file):
  with open(input_file, 'r', encoding='utf-8') as infile:
    content = infile.read()
    cleaned_text = re.sub(r'\s+', ' ', content)
    cleaned_text = re.sub(r'\n+', '\n', cleaned_text)
    paragraphs = re.split(r'\n\s*\n', cleaned_text)

    with open(output_file, 'w', encoding='utf-8') as outfile:
      for paragraph in paragraphs:
        sentences = re.split(r'(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s', paragraph)

        for sentence in sentences:
          words = sentence.split()
          if words:
            outfile.write(' '.join(words) + '\n')

if __name__ == "__main__":
  input_file = 'data/scrapped files/output.txt'
  output_file = 'data/scrapped files/processed_output.txt'
  process_text(input_file, output_file)
  print(f"Text processing completed. Result written to '{output_file}'")