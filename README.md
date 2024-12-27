# Targus

Main website of BEST Warsaws's Engineering Job Fair

## Structure

This is a fullstack app it is made by three main services:

- NextJS React Frontend
- Strapi Backend (Headless CMS)
- Postgres Database

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (Latest LTS version recommended)
- Docker and Docker Compose
- Git

## Installation

1. Clone the repository:

```bash
git clone https://github.com/0noder4/targus.git
cd targus
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

Then edit `.env` with your specific configuration.

4. Start the development environment:

```bash
docker-compose up --build
```

## Development

- Backend server runs at: `http://localhost:1337`
- Frontend development server runs at: `http://localhost:3000`

## Contact

bartosz.kuklewski@best.pw.edu.pl
