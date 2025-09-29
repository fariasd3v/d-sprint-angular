const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Basic routes
app.get('/', (req, res) => {
  res.json({ message: 'Ford API Server is running!' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Mock vehicle data endpoint
app.get('/api/vehicles', (req, res) => {
  res.json([
    {
      id: 1,
      modelo: 'Ford Mustang',
      ano: 2023,
      cor: 'Azul',
      combustivel: 'Gasolina'
    },
    {
      id: 2,
      modelo: 'Ford F-150',
      ano: 2022,
      cor: 'Preto',
      combustivel: 'Gasolina'
    }
  ]);
});

// Mock authentication endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  
  // Simple mock authentication
  if (email && password) {
    res.json({
      success: true,
      token: 'mock-jwt-token',
      user: {
        id: 1,
        email: email,
        nome: 'Usuario Teste'
      }
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Credenciais inválidas'
    });
  }
});

module.exports = app;