var task = {'type': 'item_add',
            'temp_id': uuid.v4(),
            'uuid': uuid.v4(),
            'args': {
                'content': taskDescription
            }
        };
var url = 'https://todoist.com/api/v7/sync?token=' + 
            todoist_token + 
            '&sync_token=*resource_types=["items"]&commands=[' +
            JSON.stringify(task) +']';
            console.log('URL: ' + url)
request ({
    url: url,
    method:'GET'
    },
    function (error, response, body) {
        //response is from the bot
        if (!error && response.statusCode == 200) {
            console.log(JSON.parse(body));
        } else {
            console.log('Error: ' + error)
            console.log('Status Code: ' + response.statusCode)
        }
    }
);