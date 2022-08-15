# BotsCord-API
Api to access your servers/bots on BotsCord.xyz 

- API Routes
- NPM Wrapper
## API Routes
### Default URL: https://botscord.xyz/api/v1

#### URI: /search/{Id/Name}

Method: GET

Example: /search/test

Response: 
```json
{
    "array": [
        {
            "name": "test",
            "id": "112321321321321321",
            "description": "Test bot for BotsCord",
            "type": "server"
        }
    ]
}
```

#### URI: /server/banner/{Id}

Method: GET

Example: /server/banner/BotsCord

Response: 

![image](https://user-images.githubusercontent.com/88144943/184626517-7c555f48-2c42-4db3-89c9-ab2ffed27dd2.png)

#### URI: /bots/servers

Method: POST

Example: /bots/servers

Headers: 
```
authorization: "3Xydzk2nwObMWtpJTNht4NXgOFQFpcyBZrYI00tpDoZBdbaehvBavpvKXsJNY8ob",
servercount: 100
```

Response: 
```json
{
  "message": "Success",
}
```

#### URI: /bots/search/{Id}

Get all info about bot.
Method: GET

Example: /bots/search/112321321321321321

Headers: 
```
authorization: "3Xydzk2nwObMWtpJTNht4NXgOFQFpcyBZrYI00tpDoZBdbaehvBavpvKXsJNY8ob"
```

Response: 
```json
{
    "id": "112321321321321321",
    "name": "test",
    "description": "Test bot for BotsCord",
    "long_description": "Test bot for BotsCord",
    "tags":[
        "test",
        "bot"
    ],
    "owners": [
        "123123123123123123"
    ],
    "premium": false,
    "servers": 100,
    "users": 100,
    "votes": 100
}
```

#### URI: /bots/checkvote/{Id}

Check if user has voted.

Method: GET

Example: /bots/checkvote/123123123123123123

Headers: 
```
authorization: "3Xydzk2nwObMWtpJTNht4NXgOFQFpcyBZrYI00tpDoZBdbaehvBavpvKXsJNY8ob"
```

Response: 
```json
{
   "vote": true
}
```


NPMJS Wrapper
# How to install

```bash
npm install botscord-api
```
