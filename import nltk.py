import nltk

try:
    nltk.data.find('tokenizers/punkt')
except nltk.downloader.DownloadError:
    nltk.download('punkt')
    print("Downloaded punkt tokenizer.")

try:
    nltk.data.find('taggers/averaged_perceptron_tagger')
except nltk.downloader.DownloadError:
    nltk.download('averaged_perceptron_tagger')
    print("Downloaded averaged_perceptron_tagger.")

try:
    nltk.data.find('corpora/wordnet')
except nltk.downloader.DownloadError:
    nltk.download('wordnet')
    print("Downloaded wordnet corpus.")

print("NLTK data download check complete.")