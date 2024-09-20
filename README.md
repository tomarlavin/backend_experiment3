Basic Node.js Web Server with Express

This project, exp3, is a simple yet powerful web server built using Node.js and the Express framework. It demonstrates fundamental web server operations such as serving static files and handling user form submissions via POST requests.

The main goal of this project is to provide a lightweight backend server that can capture user signups, store data locally, and deliver static web content efficiently. It's a perfect starting point for developers looking to explore server-side programming with Node.js and Express.

Key Features
Serve Static Files: The server delivers an index.html file when accessed via the root URL (/).
Handle User Signups: The server listens for POST requests on the /signup endpoint, accepting user details in JSON format (username, email, password).
Data Storage: User signup data is appended to a local text file (user_data.txt), demonstrating basic file handling and data persistence.

Error Handling: Simple error handling is implemented to ensure users receive feedback in case of issues during signup.

How It Works
Root Route (/): When users access the root URL, the server responds by serving a static index.html file, allowing users to interact with the application.
Signup Route (/signup): Users can submit their data (username, email, and password) to the /signup route. The server processes this POST request, appends the user details to a local file, and responds with either a success or error message.

Installation
Step 1: Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/exp3.git
cd exp3
Step 2: Install Dependencies
Install the project’s dependencies by running:

bash
Copy code
npm install
Step 3: Run the Server
Start the server with:

bash
Copy code
npm start
or

bash
Copy code
node server.js
Step 4: Access the Application
Once the server is running, you can open your browser and navigate to:

arduino
Copy code
http://localhost:3000
You’ll be able to interact with the application’s main page and use the /signup endpoint to submit user data.

Usage
Home Page: The server responds with the main webpage (index.html) when accessed at the root URL.

POST Signup Requests: Use tools like Postman or your frontend form to send JSON data (username, email, password) to the /signup endpoint. Here’s an example of the required format:

json
Copy code
{
  "username": "johndoe",
  "email": "johndoe@example.com",
  "password": "yourpassword"
}
The user data will be stored in a text file (user_data.txt) located in the project’s root directory.

Dependencies
Express (v4.21.0): A minimal and flexible Node.js web application framework.
File System (fs): For handling file operations (reading and writing user data).
Path Module: For resolving file paths
