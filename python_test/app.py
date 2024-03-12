import os
from flask import Flask, request, send_file, render_template
import requests

# Initialize the Flask app
app = Flask(__name__)

# Route for the main page (index.html)
@app.route("/")
def index():
    return send_file("index.html")


# Route for processing form data
@app.route('/process', methods=['POST'])
def process_data():
    query = request.form.get('query')
    print(f"Received data: {query}")

    # Make the Foursquare API request
    url = "https://api.foursquare.com/v3/places/search"
    params = {
        "query": query,
        "near": "Lagos, NG",
        "limit": 5,
        "open_now": "true",
        "sort": "DISTANCE",
    }
    headers = {
        "Accept": "application/json",
        "Authorization": "fsq3MWgFcBJamwcit7YSOP11g4P/fBwxZG+XjE+CLcLDLkI=",
    }
    response = requests.request("GET", url, params=params, headers=headers)

    # Process the API response
    results = response.json()  # Access the JSON data after the request is made

    # Extract the relevant information and render the results template
    return render_template('results.html', results=results)

#Run the app
def main():
    app.run(port=int(os.environ.get('PORT', 2000)))

if __name__ == "__main__":
    main()