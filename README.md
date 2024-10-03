# Why the bot was made:
This bot was made for the JT-99 Discord Bot Competition. Wish me luck. Hosted version [can be found here](https://discord.com/api/oauth2/authorize?client_id=1173829509066276944&permissions=274877959168&scope=bot%20applications.commands). Use `/help` to see all the commands. 

# 10/2/24 Update
The bot was rewritten to use Buape's new HTTP bot libray called Carbon! Find it [here](https://carbon.buape.com/carbon)


# You can also host your version here:
#### In your terminal run:
```bash
git clone https://github.com/Xanderxx46/That-One-Friend
cd That-One-Friend
```

#### Install requirements:
Inside the bots folder run:
```bash
npm install
```

#### Setting up the .env:

Run the following commands:
```bash
npx wrangler secret put CLIENT_ID
npx wrangler secret put PUBLIC_KEY
npx wrangler secret put DISCORD_TOKEN
```

#### Then do:
```bash
npm run build
```

#### Other hosting methods:
Follow the guides here for other hosting methods [here](https://carbon.buape.com/carbon/getting-started)
