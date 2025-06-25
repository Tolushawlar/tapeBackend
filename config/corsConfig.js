const corsOptions = {
  origin: ['http://localhost:3000', 'http://localhost:5173', 'http://tape-lemon.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 200
};

module.exports = corsOptions;