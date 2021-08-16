const mentionMessageJson = {
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "I can help you create and manage schedules and availability for Specialists and Clients through Slack!\n\nThere are two ways to work with Specialist Scheduler:"
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": ":one:  Type `/scheduler-specialist` followed by the Specialists' full name - I'll do my best to return relevant matches"
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": ":two:  Type `/scheduler-project` followed by the unique Project code: e.g. _CQ-5192_"
			}
		},
		{
			"type": "divider"
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": ":rocket: Protip: *add me to a channel* and I'll introduce myself. Type `/invite @Schedulebot` from the channel or pick a channel on the right."
			},
			"accessory": {
				"type": "conversations_select",
				"placeholder": {
					"type": "plain_text",
					"text": "Select a channel...",
					"emoji": true
				}
			}
		},
		{
			"type": "divider"
		}
	]
}

export default mentionMessageJson