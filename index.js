'use strict'

// Google Home Bot

const request = require('request')
const syncrequest = require('sync-request')
const express = require('express')
const bodyParser = require('body-parser')
const moment = require('moment')
const uuid = require('node-uuid')

const app = express ()

app.set('port', (process.env.PORT || 5000))

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Process application/json
app.use(bodyParser.json () )

app.use(express.static('public'))

// Index route
app.get('/', function (req, res) {
    res.send('Hello world')
})

// Handle the intents
app.post('/home', function (req, res) {
    // Handle the intent code
    console.log('Request from Dialog Flow: ')
    console.log(req.body)
    var intent = req.body.result.metadata.intentName
    var botSpeech = 'Hello World'
    if (intent === 'inform_task_description') {
        var taskDescription = req.body.result.parameters.taskDescription
        addTask(taskDescription)
        botSpeech = 'Adding new task'
    }
    else if (intent === 'list_all_tasks') {
        botSpeech = getAllTasks ()
    }
})

// Spin upp the server
app.listen(app.get('port'), function () {
    console.log('Running on port: ' + app.get ('port') )
})

var out = { speech: botSpeech,
            displayText: botSpeech,
            data: null
        }
var outString = JSON.stringify(out)
console.log('Out: ' + outString)
res.send(outString)