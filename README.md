# Octank Nextjs Demo

## Deployment on EC2
User data for EC2:
```bash
#!/bin/bash
sudo yum update -y
sudo yum install -y git nodejs
git -v
node -v  # Check node version
npm -v   # Check npm version
npm i -g pm2

git clone https://github.com/piotrekwitkowski/nextjs-octank-demo.git app
cd app
npm i
npm run build
npm start
# export PM2_HOME=/home/ec2-user
# export HOME=/home/ec2-user
# pm2 startup -u ec2-user --hp /home/ec2-user
# PORT=80 pm2 start npm --name app -- start
# pm2 save
```

Useful for further monitoring: 
```bash
tail -f /var/log/cloud-init-output.log
```

pm2 resurrect # 
pm2 kill      # kill all processes started with pm2
pm2 list      # list ...
pm2 monit     # monitor ...
```


## Deployment on Lambda
Based on https://github.com/sladg/nextjs-lambda
1. Adjust `next.config.js` like described here: https://github.com/sladg/nextjs-lambda#:~:text=next.config.js

1. Install dependencies locally: `npm install`

1. Make sure `node prebuild.js` is included in package.json's prebuild script to fix [this Next bug](https://github.com/vercel/next.js/issues/49169) when app is running in standalone mode 
 
1. Run `next build` (will generate standalone next folder).
1. Run `npx --package @sladg/nextjs-lambda cli pack` (will create ZIPs).
1. Run `npx --package @sladg/nextjs-lambda cli deploy` (will deploy to AWS).
