
A simple Node.js web server built using Express. This project demonstrates basic functionality, including serving static files and handling form submissions.

Features:
Serves an index.html file at the root URL.
Accepts JSON-formatted POST requests at the /signup endpoint to register users.
Saves user data (username, email, password) to a local user_data.txt file.
Installation
Clone the repository.
Run npm install to install the necessary dependencies (like express).
Start the server with npm start or node server.js.
Dependencies
Express 4.21.0 - A lightweight web framework for Node.js.
Usage
Start the server and navigate to http://localhost:3000 to access the homepage.
Use the /signup endpoint to submit user registration data in JSON format.
