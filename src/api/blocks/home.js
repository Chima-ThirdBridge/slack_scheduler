const appHomeJson = {
	"type": "home",
	"blocks": [
		{
			"type": "header",
			"text": {
				"type": "plain_text",
				"text": "Here's what you can do with Scheduler:"
			}
		},
		{
			"type": "divider"
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*Today, 16 August*"
			}
		},
		{
			"type": "actions",
			"elements": [
				{
					"type": "datepicker",
					"initial_date": "2021-08-16",
					"placeholder": {
						"type": "plain_text",
						"text": "Select a date",
						"emoji": true
					}
				}
			]
		},
		{
			"type": "actions",
			"elements": [
				{
					"type": "button",
					"text": {
						"type": "plain_text",
						"text": "Add Specialist Availability",
						"emoji": true
					},
					"style": "primary",
					"value": "create_task"
				},
				{
					"type": "button",
					"text": {
						"type": "plain_text",
						"text": "View Specialists Schedule",
						"emoji": true
					},
					"value": "create_project"
				},
				{
					"type": "button",
					"text": {
						"type": "plain_text",
						"text": "Get Help",
						"emoji": true
					},
					"value": "help"
				}
			]
		},
		{
			"type": "divider"
		},
		{
			"type": "header",
			"text": {
				"type": "plain_text",
				"text": "Recent Searches",
				"emoji": true
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "*<intranet.thirdbridge.com|Ben Burbridge>*\nSenior Director of Technology Services"
			},
			"accessory": {
				"type": "overflow",
				"options": [
					{
						"text": {
							"type": "plain_text",
							"text": "View Details",
							"emoji": true
						},
						"value": "view_details"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Add Availability",
							"emoji": true
						},
						"value": "add_availability"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "View Schedule",
							"emoji": true
						},
						"value": "view_schedule"
					}
				]
			}
		},
		{
			"type": "actions",
			"elements": [
				{
					"type": "button",
					"text": {
						"type": "plain_text",
						"text": "Remove from list",
						"emoji": true
					},
					"value": "join"
				}
			]
		},
		{
			"type": "divider"
		}
	]
}

export default appHomeJson