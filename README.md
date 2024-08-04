# Analytics Dashboard Backend

This is the backend server for the Analytics Dashboard project. It is built with Node.js, Express, and TypeScript and provides API endpoints for accessing and downloading survey data. Swagger is used for API documentation.

## Table of Contents

- [Analytics Dashboard Backend](#analytics-dashboard-backend)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Project Structure](#project-structure)
  - [Available Scripts](#available-scripts)
  - [Environment Variables](#environment-variables)
  - [API Documentation](#api-documentation)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- Provides API endpoints for accessing and downloading survey data.
- API documentation available through Swagger.
- Error handling middleware for better API responses.

## Tech Stack

- **Backend Framework:** Express
- **Language:** TypeScript
- **API Documentation:** Swagger, swagger-autogen
- **Environment Management:** dotenv
- **Excel Processing:** xlsx
- **HTTP Server:** express
- **Middleware:** cors, errorHandler

## Getting Started

Follow these steps to get the backend project up and running on your local machine:

### Prerequisites

Ensure you have the following installed:

- Node.js (>=14.x)
- npm (>=6.x) or yarn (>=1.x)

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/nitinrahane/analytics-backend.git
cd analytics-backend
```

2. **Install dependencies:**

 ```bash
npm install
# or
yarn install
```

3. **Create a .env file in the root directory with the following content:**

PORT=4000

4. **Building the Project**
To build the project, run:

```bash
npm run build
# or
yarn build
```

5. **Running the Project**
To start the project, run:

```bash
npm start
# or
yarn start
```

The backend server should now be running on <http://localhost:4000>.

## Project Structure

```plaintext
analytics-backend/
├── src/
│   ├── data/
│   │   └── survey_dummy_data.xlsx
│   ├── middleware/
│   │   └── errorHandler.ts
│   ├── routes/
│   │   └── data.ts
│   ├── server.ts
│   ├── swagger.ts
│   └── types/
│       └── index.ts
├── .env
├── package.json
├── tsconfig.json
└── swagger-output.json
```

## Available Scripts

- **`npm start` or `yarn start`:** Start the backend server.
- **`npm run build` or `yarn build`:** Build the project.
- **`npm run swagger-autogen` or `yarn swagger-autogen`:** Generate Swagger documentation.

## Environment Variables

The project uses environment variables to configure the server port. Create a `.env` file in the root directory and add the following:

```
PORT=4000
```

## API Documentation

API documentation is available at [http://localhost:4000/api-docs](http://localhost:4000/api-docs) once the server is running. The documentation is generated using Swagger and swagger-autogen.

To generate/update the Swagger documentation, run:

```bash
npm run swagger-autogen
# or
yarn swagger-autogen
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch with a descriptive name.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your fork.
5. Create a pull request to the main repository.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

Author: Nitin Rahane  
Email: [nitin.rahane11@gmail.com](mailto:nitin.rahane11@gmail.com)
