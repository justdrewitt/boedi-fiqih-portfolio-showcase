module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8080),
  app: {
    keys: env.array('APP_KEYS', ['testKey1', 'testKey2']),
  },
  url: env('PUBLIC_URL', 'https://boedi-fiqih.up.railway.app'),
  proxy: true,
  cron: {
    enabled: false
  },
  emitErrors: false,
}); 