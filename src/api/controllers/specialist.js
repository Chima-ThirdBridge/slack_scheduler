import express from 'express'
import { postSpecialistSearch } from '../services/slack'
import { specialistMatchJson, specialistsMatchedJson, specialistNoMatchJson } from '../blocks/specialist'

const app = new express.Router()

app.post('/specialist', (req, res) => {
    var specialistName
    var responseJson
    let status = 200
  
    const { trigger_id } = req.body;
    const { channel_id } = req.body;

    var responseJson
    var searchText
    res.status(200).send('');
    (async (specialistName) => {
      if (req.body.text) {
        specialistName = req.body.text
          switch (req.body.text) {
            case "Ben Burbridge":
                searchText = "ScheduleBot is checking for the Specialist name *"+ specialistName +"*"
                responseJson = { ...specialistMatchJson, text: searchText }
              break;
            case "Burbridge":
                responseJson = specialistsMatchedJson
                break;
            default:
                searchText = "ScheduleBot is checking for the Specialist name *"+ specialistName +"*"
                responseJson = { ...specialistNoMatchJson, text: searchText }
          }

          await postSpecialistSearch( channel_id, responseJson )
          .catch((e) => {
              console.log(e)
              status = 503
          })
      } else {
        searchText = "ScheduleBot is checking for the Specialist name *"+ specialistName +"*"
        res.status(200).send({ ...noMatchingSpecialistFound, text: searchText })
      }
    })();
  });

export default app
