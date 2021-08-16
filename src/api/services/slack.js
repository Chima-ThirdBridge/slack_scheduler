import { config } from 'dotenv'
import  { WebClient } from '@slack/web-api'

config()

const token = process.env.SLACK_BOT_TOKEN
const webClient = new WebClient(token)

module.exports.postSpecialistSearch = (channel, response) => webClient.chat.postMessage({token: process.env.SLACK_BOT_TOKEN, channel, ...response})
module.exports.postProjectSearch = (channel, response) => webClient.chat.postMessage({token: process.env.SLACK_BOT_TOKEN, channel, ...response})