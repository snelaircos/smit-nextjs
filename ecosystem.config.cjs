module.exports = {
  apps: [
    {
      name: "smit-site",
      script: "node_modules/.bin/next",
      args: "start",
      cwd: "/var/www/smit-site",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: 3001,
      },
      // Logs: PM2-standaard → /home/smitsite/.pm2/logs/smit-site-{out,error}-0.log
      log_date_format: "YYYY-MM-DD HH:mm:ss",
    },
  ],
};
