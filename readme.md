# Botscord API Documentation
version: 1.0.4


## Introduction
```js
const botscord = require('botscord');
var botscordToken = 'botscordToken'; // Get this from https://botscord.xyz/bot/<botID>/settings
var client = // Your discord.js client
const botscord_client = new botscord(botscordToken, client);

```


## Post serverCount
```js
client.on('ready', () => {
    botscord_client.serverCount();
}
```