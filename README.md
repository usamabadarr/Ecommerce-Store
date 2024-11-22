# Ecommerce-Store
An e-commerce web application that allows users to browse products, filter by categories, add items to a cart, and proceed to checkout. Built with a full-stack architecture featuring GraphQL, Apollo Server, React, and Cypress for testing.

## Table of Contents
Features

Technologies

Getting Started

Installation

Running the Application

Contributing

License

## Features
Product Listing: Browse available products with essential details (name, price, description, stock).

Search and Filters: Search products by name and filter by categories like "Electronics" or "Clothing."

Shopping Cart: Add/remove items from the cart and view totals.

User Authentication: Register, log in, and maintain user sessions securely.

GraphQL API: Fast and flexible queries/mutations for managing users, products, and orders.

Responsive Design: Optimized for desktops, tablets, and mobile devices.

End-to-End Testing: Validates functionality with Cypress.

# Technologies
## Backend
Node.js with Express

Apollo Server for GraphQL

Sequelize with PostgreSQL

JWT for authentication

## Frontend
React with TypeScript

Apollo Client for GraphQL queries

Styled Components for UI styling


# Getting Started
## Installation
Clone the repository:

```git clone git@github.com:usamabadarr/Ecommerce-Store.git```

cd ecommerce-store
Set up environment variables:

Copy .env.example to .env in both server and client directories.
Update database credentials, JWT secret, and API URLs.

## Install dependencies:

```npm install```

```cd server && npm install```

```cd ../client && npm install```

## Run the Application

Start the development servers:

```npm run start:dev```

Open your browser and navigate to:

```http://localhost:3000```

The backend GraphQL server runs on:

```http://localhost:3001/graphql```

## Contributing
We welcome contributions! To contribute:

Fork the repository.

Create a new branch:

```git checkout -b feature-name```

Commit your changes and push:

```git push origin feature-name```

Open a Pull Request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.