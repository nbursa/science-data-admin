# Science Data Admin - Vue 3 + TypeScript + Vite

⚠️ Work in progress.

Here's the updated description with the link added:

---

## Description

Science Data Admin is an administrative panel for managing science articles aggregated from various sources ([Science Data Service](https://github.com/nbursa/science-data-service)). Built with Vue 3 and TypeScript, and powered by Vite for fast builds and hot module replacement, this admin panel provides a robust and efficient way to oversee content, including article management, user authentication, and future plans for discussion forums.

## Features

- Admin panel for managing science articles
- Built with Vue 3 and TypeScript
- Uses Vite for fast builds and hot module replacement
- Article fetching and categorization
- Dynamic loading of more articles
- Real-time statistics and summaries
- Detailed article view with sanitization

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm 6.x or higher

### Setup

#### Clone the repository
```bash
git clone https://github.com/nbursa/science-data-admin.git
cd science-data-admin
```

#### Install dependencies
```bash
npm install
```

### Running the Application

#### Start the development server
```bash
npm run dev
```

#### Build for production
```bash
npm run build
```

#### Preview the production build
```bash
npm run preview
```

## Usage

### Accessing the Admin Panel
After starting the development server, you can access the admin panel at:
```
http://localhost:5173
```

### Type Checking
Use `vue-tsc` for type checking:
```bash
npx vue-tsc --noEmit
```

### Environment Variables
Make sure to set the necessary environment variables for connecting to backend services.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
