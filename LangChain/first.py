import os
from dotenv import load_dotenv
load_dotenv()
os.chdir('d:/Machine learning/Scripting Application')
openai_key = os.getenv('openai_key')

from langchain.llms import llamacpp
import streamlit as slt

slt.title("Scripting Application")
input_text = slt.text_input("Search topic")
# input_text = input("Enter to search something ")

llm = llamacpp()

if input_text:
  slt.write(llm(input_text))
  # print(llm(input_text))