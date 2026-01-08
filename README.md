📌 Number Analyzer – Full Stack Mini Project
A simple full-stack application built with Node.js, Express, and React that analyzes a number to determine whether it is even and positive.
This project was created to practice backend–frontend integration, clean API design, and component-based React architecture.

🚀 Features
+Analyze a number using a single backend API
Check:
  +Even / Odd
  +Positive / Not Positive
+Clean and minimal UI
+Input validation
+Error handling
+Reset functionality
+Fully componentized React frontend

🧠 Tech Stack
+Backend
  Node.js
  Express
  CORS

+Frontend
  React (Vite)
  Fetch API
  Component-based architecture
  CSS modules per component

📡 API Design
 Endpoint
 --GET /analyze?number=5

Response
{
  "number": 5,
  "isEven": false,
  "isPositive": true
}

src/
├─ components/
│  ├─ NumberInput.jsx
│  ├─ AnalyzeButton.jsx
│  ├─ ResetButton.jsx
│  ├─ ResultCard.jsx
│
├─ styles/
│  ├─ App.css
│  ├─ NumberInput.css
│  ├─ Button.css
│  ├─ ResultCard.css
│  ├─ ResetButton.css
│
├─ App.jsx
├─ main.jsx
├─ index.css

🎯 What I Learned
+Designing clean backend APIs
+Connecting React to a Node.js backend
+Handling CORS issues
+Managing state in React
+Improving UX with small features like reset and validation
+Structuring scalable React components

🔮 Possible Improvements
+Loading indicator
+Keyboard submit (Enter key)
+Unit tests
+Deployment (Render / Netlify)
