import express from 'express'
import { config } from 'dotenv'
import  { createMessageAdapter } from '@slack/interactive-messages'
import  { WebClient } from '@slack/web-api'
import { specialistScheduleDetailsJson, specialistScheduleListJson, specialistAddAvailabilityJson, specialistScheduleCallJson } from '../blocks/specialist'
import { projectSpecialistsJson } from '../blocks/project'
config()

const token = process.env.SLACK_BOT_TOKEN
const webClient = new WebClient(token)
const app = express.Router()
const slackInteractions = createMessageAdapter(process.env.SLACK_SIGNING_SECRET)

app.use('/slack/actions', slackInteractions.expressMiddleware())

// Specialist

slackInteractions.action({ actionId: 'view_specialist_for_project' }, async (payload) => {
    console.log('action')
    try {
      await webClient.chat.postMessage({  ...projectSpecialistsJsonBlock, trigger_id: payload.trigger_id, channel: payload.channel.id })
      } catch (e) {
      console.log(JSON.stringify(e))
      }
    
      return {
      text: "Processed..."
      }
  })

slackInteractions.action({ actionId: 'view_scheduled_call_details' }, async (payload) => {
	try {
	  await webClient.views.push({
		  trigger_id: payload.trigger_id,
		  view: specialistScheduleDetailsJson
		}
	  )
	} catch (e) {
	  console.log(JSON.stringify(e))
	}
  
	return {
	  text: 'Processing...'
	}	
})

slackInteractions.action({ actionId: 'view_specialist_schedule' }, async (payload) => {
	console.log('logged')
    try {
      await webClient.views.open({
          trigger_id: payload.trigger_id,
          view: specialistScheduleListJson
        }
      )
    } catch (e) {
      console.log(JSON.stringify(e))
    }
  
    return {
      text: 'Processing...'
    }
  })

slackInteractions.action({ actionId: 'add_specialist_availability' }, async (payload) => {
	try {
	  await webClient.views.push({
		  trigger_id: payload.trigger_id,
		  view: specialistAddAvailabilityJson
		}
	  )
	} catch (e) {
	  console.log(JSON.stringify(e))
	}
  
	return {
	  text: 'Processing...'
	}
  })


slackInteractions.action({ actionId: 'add_specialist_scheduled_call' }, async (payload) => {
	try {
		await webClient.views.open({
			trigger_id: payload.trigger_id,
			view: specialistScheduleCallJson
		  }
		)
	  } catch (e) {
		console.log(JSON.stringify(e))
	  }
	
	  return {
		text: 'Processing...'
	  }
})

slackInteractions.viewSubmission('post_specialist_availability' , async (payload) => {
	const blockData = payload.view.state
	
	const datepicker = blockData.values.datepicker_block.datepicker.selected_date
	const timepicker_start_time = blockData.values.timepicker_block_start.start_time.selected_time
	const timepicker_end_time = blockData.values.timepicker_block_end.end_time.selected_time
	let errorsList = new Object();
	let errors = false

	if (timepicker_end_time < timepicker_start_time) {
		errors = true
		errorsList.timepicker_block_end = "You cannot select a start time before the end time."
	}
	const currentDate = new Date().toISOString().slice(0,10)
	const datePickerFormatted = new Date(datepicker).toISOString().slice(0,10)


	if (currentDate > datePickerFormatted) {
		errors = true
		errorsList.datepicker_block = "Date cannot be in the past"
	}

	if (new Date().toISOString() > [datePickerFormatted,'T',timepicker_start_time,':00.000Z'].join('')) {
		errors = true
		errorsList.datepicker_block = "Date and start time must be greater than now"
	}

	if (errors) {
		return {
			"response_action": "errors",
			"errors": { ...errorsList }
		}
	}
})

// Project

slackInteractions.action({ actionId: 'view_project_specialists' }, async (payload) => {
	try {
		await webClient.chat.postMessage({  ...projectSpecialistsJson, trigger_id: payload.trigger_id, channel: payload.channel.id })
	  } catch (e) {
		console.log(JSON.stringify(e))
	  }
	
	  return {
		text: "Processed..."
	  }
})

slackInteractions.action({ actionId: 'view_project_specialist' }, async (payload) => {
	console.log('hello')
	const jsonToAdd = 
	{
	"type": "view",
	"external_id": "project_client_specialist_matched",
	"callback_id": "specialist_schedule_modal_submit",
	"title": {
	  "type": "plain_text",
	  "text": "Consultations Scheduler",
	  "emoji": true
	},
	"blocks": []
	}

	const blockData = payload.state.values
	console.log('payload', blockData)
	const buttonBlock = { "type": "section", "text": { "type": "mrkdwn", "text": "" } }
	let filteredOptions = ""

	blockData.project_specialist_filter.view_project_specialist_action.selected_options.forEach(element => {
		filteredOptions += "`"+element.value+"` "
	});
	
	try {
		buttonBlock.text = { "type": "mrkdwn", "text": filteredOptions }
		jsonToAdd.blocks.push(buttonBlock)
		await webClient.views.push({ view: jsonToAdd, view_id: "project_matched", "external_id": "project_client_specialist_matched" })
	  } catch (e) {
		console.log(JSON.stringify(e))
	  }
	
	  return {
		text: jsonToAdd
	  }
})

slackInteractions.action({ actionId: 'view_project_specialist' }, async (payload) => {
	
})


export default app

module.exports.app = app
module.exports.specialistActions = slackInteractions