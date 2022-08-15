const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));
var url = 'https://botscord.xyz/api/v1';
module.exports = class VOID {
    constructor(token, client) {
        this['token'] = token;
        this['client'] = client;
        return this;
    }

    async serverCount() {
        var response = await fetch(`${url}/bots/servers`, {
            method: 'POST',
            headers: {
                'serverCount': this.client.guilds.cache.size,
                'Content-Type': 'application/json',
                'Authorization': this.token
            },
        });
        if (response.status === 200) {
            return "Server count updated";
        } else {
            return response;
        }
    }

    async search(id) {
        var response = await fetch(`${url}/bots/search/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': this.token
            },
        })
        return response.json();


    }

    async hasVoted(id) {
        var response = await fetch(`${url}/bots/checkvote/${id}`, {
            method: 'GET', headers: {
                'Content-Type': 'application/json', 'Authorization': this.token
            }
        })
        return response.json();
    }
}
