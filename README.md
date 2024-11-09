---

# TJI

Welcome to **Tech Job Insider (TJI)**! This mobile application, built with **React Native** (Expo) for the frontend and **Node.js Express** for the backend, helps users stay updated on job trends and tech opportunities.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Contributing](#contributing)
  - [Using GitHub Commands](#using-github-commands)
  - [Using the GitHub Interface](#using-the-github-interface)
- [License](#license)

## Getting Started

This guide will help you set up **TJI** on your local machine for development and testing. Follow each step in the **Setup Instructions** section to get started.

## Project Structure

The project is organized as follows:

```
Will update soon
```

## Setup Instructions

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v14 or above): [Download Node.js here](https://nodejs.org/)
- **npm** (comes with Node.js): Check by running `npm -v` in a terminal or command prompt.
- **Expo CLI** for React Native. Install by running:
  ```bash
  npm install -g expo-cli
  ```

### 1. Fork and Clone the Repository

1. **Fork the Repository**:
   - Go to the **TJI GitHub Repository**: [https://github.com/TechJobInsider/TJI-App.git](https://github.com/TechJobInsider/TJI-App.git).
   - Click on the **Fork** button in the top right. This creates a personal copy of the project under your GitHub account.

2. **Clone Your Forked Repository**:
   - In **your forked repository**, click **Code** and copy the HTTPS URL.
   - Open a terminal or command prompt on your computer.
   - **Navigate to the folder** where you want to store the project (use `cd <folder-path>` to move to a different folder).
   - Type the following command to clone your fork:
     ```bash
     git clone <your-forked-repo-url>
     ```
   - Replace `<your-forked-repo-url>` with the URL you copied. This will create a new folder named `TJI-App` on your computer.

3. **Navigate to the Project Directory**:
   ```bash
   cd TJI-App
   ```

### Frontend Setup

1. **Navigate to the frontend folder**:
   ```bash
   cd frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Expo and Navigation**:
   ```bash
   npm install axios
   npx expo install @react-navigation/native
   npx expo install @react-navigation/native-stack
   ```

4. **Start the Expo Development Server**:
   ```bash
   npx expo start
   ```

   This command will open Expo DevTools in your browser, allowing you to run the app on a mobile device using the Expo Go app or an emulator.

### Backend Setup

1. **Navigate to the backend folder**:
   ```bash
   cd ../backend
   ```

2. **Install Dependencies**:
   ```bash
   npm install express body-parser cors morgan bcrypt jsonwebtoken pg pg-hstore dotenv
   ```

3. **Create a `.env` File** in the backend directory with the following environment variables:
   ```plaintext
   PORT=5000
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_HOST=your_db_host
   DB_PORT=your_db_port
   DB_NAME=your_db_name
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the Express Server**:
   ```bash
   node server.js
   ```

   The server should now be running at `http://localhost:5000`.

## Contributing

We welcome contributions to **TJI**! Please follow these steps to contribute. Contributions go through a review process before being added to the main project.

### Using GitHub Commands

For those comfortable with commands:

1. **Fetch Updates from the Main Repository**:
   ```bash
   git checkout main
   git pull upstream main
   ```

2. **Create a New Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes** and **Commit**:
   ```bash
   git add 'file location of new feature'
   git commit -m "Add description of your changes"
   ```

4. **Push Your Branch**:
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request**:
   - Go to **Pull Requests** in the GitHub repository.
   - Click **New Pull Request** and select your branch for comparison.
   - Submit for review.

### Using the GitHub Interface 
_(this is for small changes only)_

If you’re new to GitHub, here’s how to do this without commands:

1. **Create a Branch on GitHub**:
   - In **your forked repository** on GitHub, click the **Branch** dropdown, type a new branch name like `feature/your-feature-name`, and hit **Create branch**.

2. **Edit Files**:
   - Navigate to a file you want to change, click the **pencil icon** to edit, and make your changes.
   - Scroll down, add a **commit message**, and click **Commit changes**.

3. **Open a Pull Request**:
   - Go to the [TJI GitHub Repository](https://github.com/TechJobInsider/TJI-App.git).
   - Click **Pull Requests** > **New Pull Request**.
   - Choose **compare across forks**, select your fork and branch, and submit your pull request.

Each contribution will be reviewed before merging into the main codebase. 

---
