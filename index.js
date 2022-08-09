const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));
module.exports = class VOID {
    constructor(token, client) {
        this['token'] = token;
        this['client'] = client;
        return this;
    }

    async serverCount() {
        var response = await fetch(`http://localhost:3000/api/v1/bots/servers`, {
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
            return response.status;
        }
    }

    async search(id) {
        var response = await fetch(`http://localhost:3000/api/v1/bots/search/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': this.token
            },
        })
        return response.json();


    }

    async hasVoted(id) {
        var response = await fetch(`http://localhost:3000/api/v1/bots/check/${id}`, {
            method: 'GET', headers: {
                'Content-Type': 'application/json', 'Authorization': this.token
            }
        })
        return response.json();
    }
}
