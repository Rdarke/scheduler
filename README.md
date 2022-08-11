# Interview Scheduler [![Netlify Status](https://api.netlify.com/api/v1/badges/ce43af4f-163e-468b-81b1-51911edaec64/deploy-status)](https://effulgent-mandazi-32a117.netlify.app)

Interview Scheduler is a React application that allows users to book and cancel interviews. This project combines a concise API with a WebSocket server to build a realtime experience.

This project was built for learning purposes. Published as part of our learnings at Lighthouse Labs.

## Application Demo

!["Screenshot of day selection"](https://github.com/Rdarke/scheduler/blob/master/demo/Scheduler_days_demo.gif?raw=true)

!["Screenshot of CRUD"](https://github.com/Rdarke/scheduler/blob/master/demo/Scheduler_CRUD_demo.gif?raw=true)

## Technical Specifications
- React
- Webpack, Babel
- Axios, WebSockets
- Axios
- Storybook, Webpack Dev Server, Jest, Testing Library
- The Scheduler client application created using Create React App. Express is the basis for the Scheduler API server application.

Both servers run concurrently; requests are proxied from the Webpack development server to the API server.

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```


