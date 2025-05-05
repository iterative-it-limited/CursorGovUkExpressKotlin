const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');
const session = require('express-session');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "http://localhost:8080"]
    }
  }
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: process.env.NODE_ENV === 'production' }
}));

// Static files
app.use('/assets', express.static(path.join(__dirname, '../public')));
app.use('/govuk-frontend', express.static(path.join(__dirname, '../node_modules/govuk-frontend/govuk')));

// View engine setup
nunjucks.configure(path.join(__dirname, '../views'), {
  autoescape: true,
  express: app,
  noCache: process.env.NODE_ENV === 'development'
});

// Routes
app.get('/', (req, res) => {
  res.render('index.njk', {
    title: 'Welcome to GOV.UK Service',
    serviceName: 'GOV.UK Service'
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error.njk', {
    title: 'Error',
    serviceName: 'GOV.UK Service',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 