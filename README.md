# Why the bot was made:
This bot was made for the JT-99 Discord Bot Competition. Wish me luck. Hosted version [can be found here](https://discord.com/api/oauth2/authorize?client_id=1173829509066276944&permissions=274877959168&scope=bot%20applications.commands). Use `/help` to see all the commands. 


# You can also host your version here:
#### In your terminal run:
```bash
git clone https://github.com/Xanderxx69/jt99botcomp
cd jt99botcomp
```

#### Install requirements:
Inside the bots folder run:
```bash
npm install
```

#### Setting up the .env:

Copy the .env.example and fill in the values needed:
```bash
TOKEN={YOUR_BOTS_TOKEN}
CLIENT_ID={YOUR_BOTS_APPLICATION_ID}
```

#### Then do:
```bash
node slash.js
node index.js
```

#### If you wanna use pm2:
Inside the bots folder run:
```bash
pm2 start pm2.json
```
