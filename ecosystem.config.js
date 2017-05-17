module.exports = {
  apps: [{
    name: 'ChowPlace',
    script: './app.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-34-205-55-168.compute-1.amazonaws.com',
      key: '~/.ssh/jacob-keypair.pem',
      ref: 'origin/master',
      repo: 'git@github.com:jmerizia/chowplace.git',
      path: '/home/ubuntu/chowplace',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
