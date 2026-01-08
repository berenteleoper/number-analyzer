# 📌 Number Analyzer – Full Stack Mini Project

A simple full-stack application built with **Node.js, Express, and React** that analyzes a number to determine whether it is even and positive. 
This project was created to practice backend–frontend integration, clean API design, and component-based React architecture.

---

## 🚀 Features

* **Real-time Analysis:** Analyze numbers via a dedicated backend API.
* **Logic Checks:**
    * ✅ Even / Odd detection.
    * ✅ Positive / Not Positive detection.
* **User Experience:**
    * Clean and minimal UI.
    * Input validation & Error handling.
    * Reset functionality to clear state.
* **Architecture:** Fully componentized React frontend with CSS Modules.

---

## 🧠 Tech Stack

### Backend
* **Node.js** - Runtime environment.
* **Express** - Web framework for the API.
* **CORS** - Cross-Origin Resource Sharing middleware.

### Frontend
* **React (Vite)** - UI Library and build tool.
* **Fetch API** - For backend communication.
* **CSS Modules** - Scoped styling per component.

---

## 📡 API Design

### Endpoint
`GET /analyze?number={value}`

### Example Response
```json
{
  "number": 5,
  "isEven": false,
  "isPositive": true
}
