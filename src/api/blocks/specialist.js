const specialistMatchJson = {
    "callback_id": "specialist_matched",
    "text": "Querying...",
    "response_type": "ephemeral",
    "text": "ScheduleBot is checking for the Specialist name *'Burbridge'*",
	"attachments": [
        {
            "color": "#36a64f",
            "blocks": [
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "_The following Specialist matched your search criteria:_ *Ben Burbridge*"
                    }
                },
                {
                    "type": "divider"
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "*Mr Ben BURBRIDGE*\n*Senior Director of Technology Services*"
                    }
                },
                {
                    "type": "divider"
                },
                {
                    "type": "context",
                    "elements": [
                        {
                            "type": "mrkdwn",
                            "text": "Location: United States"
                        },
                        {
                            "type": "mrkdwn",
                            "text": "|"
                        },
                        {
                            "type": "mrkdwn",
                            "text": "Rate: USD 1610/hr"
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
                                "text": "View Specialist schedule",
                                "emoji": true
                            },
                            "value": "view_specialist_schedule",
                            "action_id": "view_specialist_schedule"
                        }
                    ]
                },
                {
                    "type": "divider"
                }
            ]            
        }
    ]
}

const specialistsMatchedJson = {
    "text": "ScheduleBot is checking for the Specialist name *'Burbridge'*",
	"attachments": [
		{
            "color": "#ea7710",
			"blocks": [
				{
					"type": "section",
					"text": {
						"type": "plain_text",
						"text": "More than one Specialist matched - please choose from the list below or search again:",
						"emoji": true
					}
				},
				{
					"type": "divider"
				},
				{
					"type": "section",
					"text": {
						"type": "mrkdwn",
						"text": ":one: *Mr Ben BURBRIDGE*\n*Senior Director Of Technology Services*"
					}
				},
				{
					"type": "context",
					"elements": [
						{
							"type": "mrkdwn",
							"text": "Location: United States"
						},
						{
							"type": "mrkdwn",
							"text": "|"
						},
						{
							"type": "mrkdwn",
							"text": "Rate: USD 1610/hr"
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
                                "text": "View Specialist schedule",
                                "emoji": true
                            },
                            "value": "1000",
                            "action_id": "view_specialist_schedule"
                        }
                    ]
                },
				{
					"type": "divider"
				},
				{
					"type": "section",
					"text": {
						"type": "mrkdwn",
						"text": ":two: *Mr Brian BURBRIDGE*\n*Vice President, Strategic Accounts*"
					}
				},
				{
					"type": "context",
					"elements": [
						{
							"type": "mrkdwn",
							"text": "Location: United States"
						},
						{
							"type": "mrkdwn",
							"text": "|"
						},
						{
							"type": "mrkdwn",
							"text": "Rate: USD 1270/hr"
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
                                "text": "View Specialist schedule",
                                "emoji": true
                            },
                            "value": "1001",
                            "action_id": "view_specialist_schedule"
                        }
                    ]
                },
				{
					"type": "divider"
				},
				{
					"type": "section",
					"text": {
						"type": "mrkdwn",
						"text": ":three: *Ms Susan BURBRIDGE*\n*Head of FP&A/Associate Finance Director*"
					}
				},
				{
					"type": "context",
					"elements": [
						{
							"type": "mrkdwn",
							"text": "Location: United Kingdom"
						},
						{
							"type": "mrkdwn",
							"text": "|"
						},
						{
							"type": "mrkdwn",
							"text": "Rate: GBP 800/hr"
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
                                "text": "View Specialist schedule",
                                "emoji": true
                            },
                            "value": "1002",
                            "action_id": "view_specialist_schedule"
                        }
                    ]
                }
			]
		}
	]
}

const specialistNoMatchJson = {
	"attachments": [
		{
            "color": "#ff0000",
			"blocks": [
				{
					"type": "section",
					"text": {
						"type": "plain_text",
						"text": "Sorry - No matching Specialist(s) found.",
						"emoji": true
					}
				}
            ]
        }
    ],    
    "response_type": "in_channel"
}

const specialistScheduleDetailsJson = {
	"type": "modal",
	"close": {
		"type": "plain_text",
		"text": "Close",
		"emoji": true
	},
	"title": {
		"type": "plain_text",
		"text": "Call details",
		"emoji": true
	},
	"blocks": [
		{
			"type": "header",
			"text": {
				"type": "plain_text",
				"text": ":radio_button: AMSEC-DAVID-ELECTRICAL GRID [IB-9270]"
			}
		},
		{
			"type": "context",
			"elements": [
				{
					"type": "plain_text",
					"text": "Wed 11 Aug 12:00pm - 1:00pm (GMT-04:00)",
					"emoji": true
				}
			]
		},
		{
			"type": "divider"
		},
		{
			"type": "context",
			"elements": [
				{
					"type": "mrkdwn",
					"text": ":busts_in_silhouette:  *Client(s)*"
				}
			]
		},
		{
			"type": "section",
			"fields": [
				{
					"type": "mrkdwn",
					"text": "<intranet.thirdbridge.com|David Portnoy>"
				},
				{
					"type": "mrkdwn",
					"text": "*Dial in*: Dial in to be confirmed"
				}
			]
		},
		{
			"type": "divider"
		},
		{
			"type": "context",
			"elements": [
				{
					"type": "mrkdwn",
					"text": ":bust_in_silhouette: *Specialist*"
				}
			]
		},
		{
			"type": "section",
			"fields": [
				{
					"type": "mrkdwn",
					"text": "<intranet.thirdbridge.com|Ben Burbridge>\nSenior Director of Technology Services at INNOCARE LTD"
				},
				{
					"type": "mrkdwn",
					"text": "*Dial in*: Dial in to be confirmed"
				}
			]
		},
		{
			"type": "divider"
		},
		{
			"type": "context",
			"elements": [
				{
					"type": "mrkdwn",
					"text": ":clock2: *Administration*"
				}
			]
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Stephen Moran +1 646 518 5329 (Project Manager)\nPriscilla Mbimadong +1 646 518 5358 (Specialist Manager)"
			}
		}
	]
}

const specialistAddAvailabilityJson = {
	"callback_id": "post_specialist_availability",
	"type": "modal",
	"notify_on_close": false,
	"title": {
		"type": "plain_text",
		"text": "Add Availability",
		"emoji": true
	},
	"submit": {
		"type": "plain_text",
		"text": "Add"
	},
	"blocks": [
		{
			"type": "input",
			"block_id": "datepicker_block",			
			"element": {
				"type": "datepicker",
				"initial_date": "2021-08-11",
				"placeholder": {
					"type": "plain_text",
					"text": "Select a date",
					"emoji": true
				},
				"action_id": "datepicker"
			},
			"label": {
				"type": "plain_text",
				"text": "Date",
				"emoji": true
			}
		},
		{
			"type": "input",
			"block_id": "timepicker_block_start",
			"element": {
				"type": "timepicker",
				"initial_time": "08:00",
				"placeholder": {
					"type": "plain_text",
					"text": "Select time",
					"emoji": true
				},
				"action_id": "start_time"
			},
			"label": {
				"type": "plain_text",
				"text": "Start",
				"emoji": true
			}
		},
		{
			"type": "input",
			"block_id": "timepicker_block_end",
			"element": {
				"type": "timepicker",
				"initial_time": "17:00",
				"placeholder": {
					"type": "plain_text",
					"text": "Select time",
					"emoji": true
				},
				"action_id": "end_time"
			},
			"label": {
				"type": "plain_text",
				"text": "End",
				"emoji": true
			}
		},
		{
			"type": "divider"
		}
	]
}

const specialistScheduleCallJson = {
	"type": "modal",
	"title": {
		"type": "plain_text",
		"text": "Schedule a Call",
		"emoji": true
	},
	"submit": {
		"type": "plain_text",
		"text": "Next",
		"emoji": true
	},
	"close": {
		"type": "plain_text",
		"text": "Cancel",
		"emoji": true
	},
	"blocks": [
		{
			"type": "context",
			"elements": [
				{
					"type": "plain_text",
					"text": "9:00am - 10:00am (GMT-4:00)",
					"emoji": true
				}
			]
		},
		{
			"type": "divider"
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Reply to:"
			},
			"accessory": {
				"type": "static_select",
				"placeholder": {
					"type": "plain_text",
					"text": "Select employee...",
					"emoji": true
				},
				"options": [
					{
						"text": {
							"type": "plain_text",
							"text": "Aaron Avalos",
							"emoji": true
						},
						"value": "aaron_avalos"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Abby Jakus",
							"emoji": true
						},
						"value": "abby_jackus"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Abigail Bolton",
							"emoji": true
						},
						"value": "abigail_bolton"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Abigail Rall",
							"emoji": true
						},
						"value": "abigail_rall"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Abraham Lowenstein",
							"emoji": true
						},
						"value": "abraham_lowenstein"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Aditi Joshi",
							"emoji": true
						},
						"value": "aditi_joshi"
					}
				],
				"action_id": "static_select-action"
			}
		},
		{
			"type": "input",
			"element": {
				"type": "plain_text_input",
				"action_id": "plain_text_input-action",
				"placeholder": {
					"type": "plain_text",
					"text": "Third Bridge Call - Ben BURBRIDGE - Senior Director Of Technology Services"
				}
			},
			"label": {
				"type": "plain_text",
				"text": "Subject line:",
				"emoji": true
			}
		},
		{
			"type": "input",
			"element": {
				"type": "plain_text_input",
				"action_id": "plain_text_input-action",
				"placeholder": {
					"type": "plain_text",
					"text": "Dial in to be confirmed"
				}
			},
			"label": {
				"type": "plain_text",
				"text": "Dial in Details/Location:",
				"emoji": true
			}
		},
		{
			"type": "input",
			"element": {
				"type": "plain_text_input",
				"multiline": true,
				"action_id": "plain_text_input-action",
				"placeholder": {
					"type": "plain_text",
					"text": "If this consultation is taking place via Zoom (see link above) <b>the Third Bridge Specialist may determine your identity or the... "
				}
			},
			"label": {
				"type": "plain_text",
				"text": "Body",
				"emoji": true
			}
		},
		{
			"type": "header",
			"text": {
				"type": "plain_text",
				"text": "External Attendees",
				"emoji": true
			}
		},
		{
			"type": "divider"
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "<mailto:richard.murray@bain.com|Richard Murray>"
			},
			"accessory": {
				"type": "static_select",
				"placeholder": {
					"type": "plain_text",
					"text": "Select an item",
					"emoji": true
				},
				"options": [
					{
						"text": {
							"type": "plain_text",
							"text": "Required",
							"emoji": true
						},
						"value": "reuiqred"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Optional",
							"emoji": true
						},
						"value": "optional"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Not invited",
							"emoji": true
						},
						"value": "not_invited"
					}
				],
				"action_id": "static_select-action"
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "<mailto:katie.paradies@bain.com|Katie Paradies>"
			},
			"accessory": {
				"type": "static_select",
				"placeholder": {
					"type": "plain_text",
					"text": "Select an item",
					"emoji": true
				},
				"options": [
					{
						"text": {
							"type": "plain_text",
							"text": "Required",
							"emoji": true
						},
						"value": "reuiqred"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Optional",
							"emoji": true
						},
						"value": "optional"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Not invited",
							"emoji": true
						},
						"value": "not_invited"
					}
				],
				"action_id": "static_select-action"
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "<mailto:charlotte.yang@bain.com|Charlotte Yang>"
			},
			"accessory": {
				"type": "static_select",
				"placeholder": {
					"type": "plain_text",
					"text": "Select an item",
					"emoji": true
				},
				"options": [
					{
						"text": {
							"type": "plain_text",
							"text": "Required",
							"emoji": true
						},
						"value": "reuiqred"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Optional",
							"emoji": true
						},
						"value": "optional"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Not invited",
							"emoji": true
						},
						"value": "not_invited"
					}
				],
				"action_id": "static_select-action"
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "<mailto:brandon.wong@bain.com|Brandon Wong>"
			},
			"accessory": {
				"type": "static_select",
				"placeholder": {
					"type": "plain_text",
					"text": "Select an item",
					"emoji": true
				},
				"options": [
					{
						"text": {
							"type": "plain_text",
							"text": "Required",
							"emoji": true
						},
						"value": "reuiqred"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Optional",
							"emoji": true
						},
						"value": "optional"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Not invited",
							"emoji": true
						},
						"value": "not_invited"
					}
				],
				"action_id": "static_select-action"
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "<mailto:kat.forbis@bain.com|Kat Forbis>"
			},
			"accessory": {
				"type": "static_select",
				"placeholder": {
					"type": "plain_text",
					"text": "Select an item",
					"emoji": true
				},
				"options": [
					{
						"text": {
							"type": "plain_text",
							"text": "Required",
							"emoji": true
						},
						"value": "reuiqred"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Optional",
							"emoji": true
						},
						"value": "optional"
					},
					{
						"text": {
							"type": "plain_text",
							"text": "Not invited",
							"emoji": true
						},
						"value": "not_invited"
					}
				],
				"action_id": "static_select-action"
			}
		}
	]
}

const specialistScheduleListJson = {
	"type": "modal",
	"callback_id": "specialist_schedule_modal_submit",
	"title": {
	  "type": "plain_text",
	  "text": "Consultations Scheduler",
	  "emoji": true
	},
	"blocks": [
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "The next 7 days schedule for Specialist: *Ben Burbridge*"
			}
		},
		{
			"type": "divider"
		},
		{
			"type": "header",
			"text": {
				"type": "plain_text",
				"text": "Available",
				"emoji": true
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Thursday, 12 August 9:00am-6:00pm"
			}
		},
		{
			"type": "actions",
			"elements": [
				{
					"type": "button",
					"text": {
						"type": "plain_text",
						"text": "Add availability",
						"emoji": true
					},
					"value": "add_availability_action",
					"action_id": "add_specialist_availability"
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
				"text": "Scheduled",
				"emoji": true
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Tuesday, 10 August 4:00pm-4:30pm"
			},
			"accessory": {
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "View Details",
					"emoji": true
				},
				"value": "click_me_123",
				"action_id": "view_scheduled_call_details"
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Wednesday, 11 August 12:00pm-1:00pm"
			},
			"accessory": {
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "View Details",
					"emoji": true
				},
				"value": "view_scheduled_call_details",
				"action_id": "view_scheduled_call_details"
			}
		},
		{
			"type": "section",
			"text": {
				"type": "mrkdwn",
				"text": "Friday, 13 August 11:00am-2:00pm"
			},
			"accessory": {
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "View Details",
					"emoji": true
				},
				"value": "click_me_123",
				"action_id": "view_scheduled_call_details"
			}
		},
		{
			"type": "divider"
		},
		{
			"type": "context",
			"elements": [
				{
					"type": "mrkdwn",
					"text": ":calendar: Times are set to (GMT-4:00) New York."
				}
			]
		}
	]
}

module.exports.specialistMatchJson = specialistMatchJson
module.exports.specialistsMatchedJson = specialistsMatchedJson
module.exports.specialistNoMatchJson = specialistNoMatchJson
module.exports.specialistScheduleListJson = specialistScheduleListJson
module.exports.specialistScheduleDetailsJson = specialistScheduleDetailsJson
module.exports.specialistAddAvailabilityJson = specialistAddAvailabilityJson
module.exports.specialistScheduleCallJson = specialistScheduleCallJson