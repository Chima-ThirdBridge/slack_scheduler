import express from 'express'
import { postProjectSearch } from '../services/slack'
import { projectMatchedJson, projectNotMatchedJson } from '../blocks/project'

const app = new express.Router()

app.post('/project', async (req, res) => {
    var responseJson
    let status = 200
  
    const { trigger_id } = req.body;
    const { channel_id } = req.body;

    if (req.body.text) {
        switch (req.body.text) {
          case "CQ-5192":
              responseJson = { trigger_id, ...projectMatchedJson }
            break;
          default:
              responseJson = { trigger_id, ...projectNotMatchedJson }
        }
    }

    await postProjectSearch( channel_id, responseJson )
        .catch((e) => {
            console.log(e)
            status = 503
        })

    res.status(status).send("Slash command `/scheduler-project "+req.body.text+"` search completed");
  });

export default app
