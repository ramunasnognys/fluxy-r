# Fluxy-R

Fluxy-R is a Next.js-based web application with a Node.js backend that utilizes the Replicate API for image generation.

## Project Structure

The project is divided into two main parts:

1. Frontend (Next.js)
2. Backend (Node.js with Express)

### Frontend

The frontend is a Next.js application with TypeScript and Tailwind CSS. It uses the ShadCN UI library for components.

Key files and directories:

- `frontend/app`: Contains the main application pages and layout
- `frontend/components`: Custom React components
- `frontend/styles`: Global CSS styles
- `frontend/lib`: Utility functions

### Backend

The backend is a Node.js application using Express.js. It handles API requests and communicates with the Replicate API for image generation.

Key files:

- `backend/index.js`: Main server file
- `backend/routes.js`: API route definitions

## Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/fluxy-r.git
   cd fluxy-r
   ```

2. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

3. Install backend dependencies:
   ```
   cd ../backend
   npm install
   ```

4. Set up environment variables:
   Create a `.env` file in the backend directory and add your Replicate API token:
   ```
   REPLICATE_API_TOKEN=your_api_token_here
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   node index.js
   ```

2. In a new terminal, start the frontend development server:
   ```
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

## Features

- Image generation using Replicate API
- Customizable image parameters (aspect ratio, quality, prompt strength)
- Responsive UI with ShadCN components

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
