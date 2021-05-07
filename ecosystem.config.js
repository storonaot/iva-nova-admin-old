module.exports = {
  apps : [
      {
        name: "iva-nova",
        script: "./app.js",
        watch: true,
        env: {
            "PORT": 1337,
            "NODE_ENV": "development"
        },
        env_production: {
            "PORT": 80,
            "NODE_ENV": "production",
        }
      }
  ]
}