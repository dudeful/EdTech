module.exports = {
  apps : [
    {
      name   : "Frontend:5005",
      script : "server.js",
      cwd: "frontend/",
      watch: true
    },
    {
      name   : "Backend:5004",
      script : "server.js",
      cwd: "backend/",
      watch: true
    }
  ]
}
