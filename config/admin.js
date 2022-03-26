module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd7fdbd2c8fd074fe0db5c97c5dca3321'),
  },
});
