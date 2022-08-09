const fetch = require("node-fetch");
module.exports = class VOID {
    constructor(token, client) {
        this['token'] = token;
        this['client'] = client;
        return this;
    }

    serverCount(message) {
        fetch(`http://localhost:3000/api/v1/servers`, {
            method: 'POST',
            headers: {
                'serverCount': this.client.guilds.cache.size,
                'Content-Type': 'application/json',
                'Authorization': this.token
            },
        });
        return true;
    }

    async search(id) {
        return await fetch(`https://botscord.site/api/bots/${id}`, {
            method: 'GET'
        })
            .then(res => res.json()).then(json => json);
    }

    async hasVoted(id) {
        return await fetch(`https://botscord.site/api/bots/check/${id}`, {
            method: 'GET', headers: {
                'Content-Type': 'application/json', 'Authorization': this.token
            }
        }).then(res => res.json()).then(async json => json.voted);
    }
}
