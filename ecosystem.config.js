module.exports = {
  apps: [
    {
      name: 'malekaiOrgBeta',
      script: 'npm',
      args: 'run dev',
      watch: true,
      max_restarts: 3,
      restart_delay: 3000,
      autorestart: true
    },
    {
      name: 'malekaiOrg',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      max_restarts: 3,
      watch: true,
      instances: 'max',
      exec_mode: "cluster",
      restart_delay: 5000,
      autorestart: true
    }
  ]
}
