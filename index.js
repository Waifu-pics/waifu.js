const got = require('got');
const endpoints = require('./endpoints.json');

const base = "https://waifu.pics/api";

class WaifuClient {
    constructor() {
        this.sfw = {};
        this.nsfw = {};

        // Initialize SFW Endpoints
        endpoints.sfw.forEach(endpoint => {
            this.sfw[endpoint] = async () => {
                try {
                    const response = await got(`${base}/sfw/${endpoint}`);
                    return JSON.parse(response.body).url;
                } catch (error) {
                    console.error(`Error fetching SFW endpoint "${endpoint}":`, error);
                    throw error; // Rethrow the error to handle it elsewhere if needed
                }
            };
        });

        // Initialize NSFW Endpoints
        endpoints.nsfw.forEach(endpoint => {
            this.nsfw[endpoint] = async () => {
                try {
                    const response = await got(`${base}/nsfw/${endpoint}`);
                    return JSON.parse(response.body).url;
                } catch (error) {
                    console.error(`Error fetching NSFW endpoint "${endpoint}":`, error);
                    throw error; // Rethrow the error to handle it elsewhere if needed
                }
            };
        });
    }
}

module.exports = WaifuClient;
