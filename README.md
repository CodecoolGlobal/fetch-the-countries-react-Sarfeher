# Fetch the Countries - React Project

This project is a simple React application that fetches data from the REST Countries API and displays a list of countries. Users can sort the countries alphabetically and view detailed information about each country.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Fetch and Display Data**: Retrieves data from the REST Countries API and displays a list of countries.
- **Sort Functionality**: Allows users to sort the countries alphabetically in ascending or descending order.
- **Detailed View**: Click on a country to view detailed information about it.
- **Responsive Design**: The application is designed to be responsive and user-friendly.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v14 or higher) and npm

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/CodecoolGlobal/fetch-the-countries-react-Sarfeher
    cd fetch-the-countries-react
    ```

2. **Install the dependencies**:
    ```bash
    npm install
    ```

### Running the Application

1. **Start the development server**:
    ```bash
    npm start
    ```

2. **Access the application**:
    Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
fetch-the-countries-react/
├── public/                # Public assets
├── src/
│   ├── components/        # React components (Countries, CountryData)
│   ├── App.css            # Styles for the application
│   ├── App.js             # Main application component
│   ├── index.css          # Global styles
│   ├── index.js           # Application entry point
└── package.json           # Project dependencies and scripts
```

## Usage

- **Country List**: Upon loading, the app fetches data and displays a list of countries.
- **Sorting**: Click the "Sort" button to toggle between ascending and descending alphabetical order of the country names.
- **Country Details**: Click on a country name to view more detailed information about that country. Click again to go back to the list.

## API Reference

- **REST Countries API**:
  - Base URL: `https://restcountries.com/v3.1/all`
  - Fetches all countries with detailed information such as name, population, region, subregion, capital, and more.

