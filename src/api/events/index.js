import express from 'express'
import { config } from 'dotenv'
import { createEventAdapter } from '@slack/events-api'
import  { WebClient } from '@slack/web-api'
import appHomeJson from '../blocks/home'
import mentionMessageJson from '../blocks/mention'

config()

const token = process.env.SLACK_BOT_TOKEN
const webClient = new WebClient(token)

const app = express.Router()

const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET)

app.use('/slack/events', slackEvents.expressMiddleware())

// home

slackEvents.on("app_home_opened", async (event) => {
    
  try {
    await webClient.views.publish({
      "user_id": process.env.USER_ID,
      "view": {
        "type":"home",
        ...appHomeJson
      },
      notify_on_close: true
    })
  } catch (e) {
    console.log(JSON.stringify(e))
  }
  return {
    text: 'Processing...'
  }
})

// mention

slackEvents.on('app_mention', async (event) => {
    console.log('mention fired')
    try {
      const mentionResponseBlock = { ...mentionMessageJson, ...{channel: event.channel}}
      const res = await webClient.chat.postMessage(mentionResponseBlock)
    } catch (e) {
      console.log(JSON.stringify(e))
    }
  })

export default app

module.exports.app = app
module.exports.specialistEvents = slackEvents