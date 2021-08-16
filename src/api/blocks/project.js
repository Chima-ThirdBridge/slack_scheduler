const projectMatchedJson = {
    "text": "ScheduleBot is checking for the Project code *[CQ-5192]*",
    "blocks": [
        {
            "block_id": "view_project_specialist-action",
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "_The following Project matched your search criteria:_ *[CQ-5192]*"
            }
        },
        {
            "type": "divider"
        },
        {
            "type": "header",
            "text": {
                "type": "plain_text",
                "text": "Project Overview",
                "emoji": true
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*AMSEC-DAVID-ELECTRICAL GRID [CQ-5192]*"
            }
        },
        {
            "type": "divider"
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*Type*: Commercial Due Diligence"
            }
        },
        {
            "type": "context",
            "elements": [
                {
                    "type": "mrkdwn",
                    "text": ":bust_in_silhouette: Team"
                }
            ]
        },
        {
            "type": "divider"
        },
        {
            "type": "section",
            "fields": [
                {
                    "type": "mrkdwn",
                    "text": "<mailto:anna.moorhead@thirdbridge.com|Anna Moorhead>\nProject Manager"
                },
                {
                    "type": "mrkdwn",
                    "text": "<mailto:courtney.weisse@thirdbridge.com|Courtney Weisse>\nSupervisor"
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
                    "text": "Client: <https://intranet.thirdbridge.com/clients.php?view=VIEW_CLIENT&pageaction=display_client&client_id=4&filter=Bain+Atlanta|Bain Atlanta>"
                },
                {
                    "type": "mrkdwn",
                    "text": "|"
                },
                {
                    "type": "mrkdwn",
                    "text": "Client Topic: Asset Lifecycle Management space (ALM)"
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
                "text": "Client Part",
                "emoji": true
            }
        },
        {
            "type": "context",
            "elements": [
                {
                    "type": "plain_text",
                    "text": "Retrieve Specialists using the filter button below",
                    "emoji": true
                }
            ]
        },
        {
            "type": "section",
            "block_id": "project_specialist_filter",
            "text": {
                "type": "mrkdwn",
                "text": "View Client Part Specialists"
            },
            "accessory": {
                "action_id": "view_project_specialisttype-action",
                "type": "multi_static_select",
                "placeholder": {
                    "type": "plain_text",
                    "text": "Set Filter"
                },
                "options": [
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "New"
                        },
                        "value": "new"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Scheduled (1)"
                        },
                        "value": "scheduled"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Requested (2)"
                        },
                        "value": "requested"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Updated (0)"
                        },
                        "value": "updated"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Consulted (3)"
                        },
                        "value": "consulted"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Has availability (7)"
                        },
                        "value": "has_availability"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "CID Approved (6)"
                        },
                        "value": "CID Blocked (5)"
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
                        "text": "View",
                        "emoji": true
                    },
                    "value": "view_project_specialists",
                    "action_id": "view_project_specialists"
                }
            ]
        }
    ]
}

const projectNotMatchedJson = {
	"attachments": [
		{
			"blocks": [
				{
					"type": "section",
					"text": {
						"type": "plain_text",
						"text": "Sorry - No matching Project found.",
						"emoji": true
					}
				}
            ]
        }
    ],    
    "response_type": "in_channel"
}

const projectSpecialistsMatchedJson = {
	"attachments": [
		{
			"color": "#00FF00",
			"blocks": [
				{
					"type": "section",
					"text": {
						"type": "plain_text",
						"text": "3 Client Part Specialists returned - please choose from the list below or search again:",
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
					"type": "section",
					"text": {
						"type": "mrkdwn",
						"text": "Pick an action for this Specialist"
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
									"text": "View Schedule",
									"emoji": true
								},
								"value": "view_schedule"
							},
							{
								"text": {
									"type": "plain_text",
									"text": "Add availability",
									"emoji": true
								},
								"value": "add_availability"
							},
							{
								"text": {
									"type": "plain_text",
									"text": "Schedule a call",
									"emoji": true
								},
								"value": "schedule_call"
							}
						],
						"action_id": "project_specialist_schedule_call-action"
					}
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
					"type": "section",
					"text": {
						"type": "mrkdwn",
						"text": "Pick an action for this Specialist"
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
									"text": "View Schedule",
									"emoji": true
								},
								"value": "view_schedule"
							},
							{
								"text": {
									"type": "plain_text",
									"text": "Add availability",
									"emoji": true
								},
								"value": "add_availability"
							},
							{
								"text": {
									"type": "plain_text",
									"text": "Schedule a call",
									"emoji": true
								},
								"value": "schedule_call"
							}
						],
						"action_id": "project_specialist_schedule_call-action"
					}
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
					"type": "section",
					"text": {
						"type": "mrkdwn",
						"text": "Pick an action for this Specialist"
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
									"text": "View Schedule",
									"emoji": true
								},
								"value": "view_schedule"
							},
							{
								"text": {
									"type": "plain_text",
									"text": "Add availability",
									"emoji": true
								},
								"value": "add_availability"
							},
							{
								"text": {
									"type": "plain_text",
									"text": "Schedule a call",
									"emoji": true
								},
								"value": "schedule_call"
							}
						],
						"action_id": "project_specialist_schedule_call-action"
					}
				}
			]
		}
	]
}

const matchingProjectFound = {
    "callback_id": "project_matched",
    "text": "Project code *[CQ-5192]*",
    "blocks": [
        {
            "block_id": "project_view_specialist_action",
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "_The following Project matched your search criteria:_ *[CQ-5192]*"
            }
        },
        {
            "type": "divider"
        },
        {
            "type": "header",
            "text": {
                "type": "plain_text",
                "text": "Project Overview",
                "emoji": true
            }
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*AMSEC-DAVID-ELECTRICAL GRID [CQ-5192]*"
            }
        },
        {
            "type": "divider"
        },
        {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "*Type*: Commercial Due Diligence"
            }
        },
        {
            "type": "context",
            "elements": [
                {
                    "type": "mrkdwn",
                    "text": ":bust_in_silhouette: Team"
                }
            ]
        },
        {
            "type": "divider"
        },
        {
            "type": "section",
            "fields": [
                {
                    "type": "mrkdwn",
                    "text": "<mailto:anna.moorhead@thirdbridge.com|Anna Moorhead>\nProject Manager"
                },
                {
                    "type": "mrkdwn",
                    "text": "<mailto:courtney.weisse@thirdbridge.com|Courtney Weisse>\nSupervisor"
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
                    "text": "Client: <https://intranet.thirdbridge.com/clients.php?view=VIEW_CLIENT&pageaction=display_client&client_id=4&filter=Bain+Atlanta|Bain Atlanta>"
                },
                {
                    "type": "mrkdwn",
                    "text": "|"
                },
                {
                    "type": "mrkdwn",
                    "text": "Client Topic: Asset Lifecycle Management space (ALM)"
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
                "text": "Client Part",
                "emoji": true
            }
        },
        {
            "type": "context",
            "elements": [
                {
                    "type": "plain_text",
                    "text": "Retrieve Specialists using the filter button below",
                    "emoji": true
                }
            ]
        },
        {
            "type": "section",
            "block_id": "project_specialist_filter",
            "text": {
                "type": "mrkdwn",
                "text": "View Client Part Specialists"
            },
            "accessory": {
                "action_id": "view_project_specialist_action",
                "type": "multi_static_select",
                "placeholder": {
                    "type": "plain_text",
                    "text": "Set Filter"
                },
                "options": [
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "New"
                        },
                        "value": "new"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Scheduled (1)"
                        },
                        "value": "scheduled"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Requested (2)"
                        },
                        "value": "requested"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Updated (0)"
                        },
                        "value": "updated"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Consulted (3)"
                        },
                        "value": "consulted"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "Has availability (7)"
                        },
                        "value": "has availability"
                    },
                    {
                        "text": {
                            "type": "plain_text",
                            "text": "CID Approved (6)"
                        },
                        "value": "cid blocked"
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
                        "text": "View",
                        "emoji": true
                    },
                    "value": "view_project_specialists",
                    "action_id": "view_project_specialist"
                }
            ]
        }
    ]
}

const projectSpecialistsJson = {
	"attachments": [
		{
			"color": "#00FF00",
			"blocks": [
				{
					"type": "section",
					"text": {
						"type": "plain_text",
						"text": "3 Client Part Specialists returned - please choose from the list below or search again:",
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
					"type": "section",
					"text": {
						"type": "mrkdwn",
						"text": "Pick an action for this Specialist"
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
									"text": "View Schedule",
									"emoji": true
								},
								"value": "view_specialist_schedule"
							},
							{
								"text": {
									"type": "plain_text",
									"text": "Add availability",
									"emoji": true
								},
								"value": "add_specialist_availability"
							},
							{
								"text": {
									"type": "plain_text",
									"text": "Schedule a call",
									"emoji": true
								},
								"value": "add_scheduled_call"
							}
						],
						"action_id": "add_specialist_scheduled_call"
					}
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
					"type": "section",
					"text": {
						"type": "mrkdwn",
						"text": "Pick an action for this Specialist"
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
									"text": "View Schedule",
									"emoji": true
								},
								"value": "view_schedule"
							},
							{
								"text": {
									"type": "plain_text",
									"text": "Add availability",
									"emoji": true
								},
								"value": "add_availability"
							},
							{
								"text": {
									"type": "plain_text",
									"text": "Schedule a call",
									"emoji": true
								},
								"value": "schedule_call"
							}
						],
						"action_id": "project_specialist_schedule_call-action"
					}
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
					"type": "section",
					"text": {
						"type": "mrkdwn",
						"text": "Pick an action for this Specialist"
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
									"text": "View Schedule",
									"emoji": true
								},
								"value": "view_schedule"
							},
							{
								"text": {
									"type": "plain_text",
									"text": "Add availability",
									"emoji": true
								},
								"value": "add_availability"
							},
							{
								"text": {
									"type": "plain_text",
									"text": "Schedule a call",
									"emoji": true
								},
								"value": "schedule_call"
							}
						],
						"action_id": "project_specialist_schedule_call-action"
					}
				}
			]
		}
	]
}

module.exports.projectMatchedJson = projectMatchedJson
module.exports.projectNotMatchedJson = projectNotMatchedJson
module.exports.projectSpecialistsMatchedJson = projectSpecialistsMatchedJson
module.exports.projectSpecialistsJson = projectSpecialistsJson