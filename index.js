const got = require('got')
const endpoints = require('./endpoints.json')

const base = "https://waifu.pics/api"

module.exports = class WaifuClient {
    constructor() {
        this.sfw = {}
        this.nsfw = {}

        // SFW Endpoints
        endpoints.sfw.forEach(async (endpoint) => {
            this.sfw[endpoint] = async function() {
                const response = await got(`${base}/sfw/${endpoint}`)
                return JSON.parse(response.body).url
            }
        })

        // NSFW Endpoints
        endpoints.nsfw.forEach(async (endpoint) => {
            this.nsfw[endpoint] = async function() {
                const response = await got(`${base}/nsfw/${endpoint}`)
                return JSON.parse(response.body).url
            }
        })
    }
}