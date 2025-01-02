# Productivity Tracker (MERN Practice) - Server

This is the **backend** of the Productivity Tracker application, built using **Node.js** and **Express.js**. It handles data storage, retrieval, and API management.

## Features

- Add new activities.
- Retrieve all activities.

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)

## Getting Started

To get a local copy of the server up and running, follow these steps.

### Prerequisites

- Node.js installed on your machine.
- MongoDB installed and running locally.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/productivity-server.git
   cd productivity-server
   ```

### Project Structures

server/
├── controllers/ # Business logic
│ └── activity.controller.js
├── models/ # Mongoose schemas
│ └── activity.model.js
├── routes/ # API routes
│ └── activity.route.js
├── server.js # Main server file
├── .env # Environment variables
├── package.json # Dependencies
