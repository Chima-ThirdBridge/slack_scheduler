export default (req, res, next) => {
    console.log('req.body.token', req.body.token)
    console.log('SLACK_BOT_TOKEN', process.env.SLACK_BOT_TOKEN)
    if (req.body.token == process.env.SLACK_BOT_TOKEN) {
        console.log('next')
        next()
    } else {
        res.sendStatus(403)
    }
}