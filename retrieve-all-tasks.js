var url = 'https://todoist.com/api/v7/sync?token=' + 
            todoist_token + 
            '&sync_token=*resource_types=["items"]';
            console.log('URL: ' + url);
var resp = syncrequest('GET', url);
var allItems = JSON.parse(resp.getBody('utf8')).items;
var allItemsSummary = '';
for (var i = 0; i < allItems.length; i++) {
    allItemsSummary += allItems[i].content;
    if (i < allItems-length - 2) {
        allItemsSummary += ', ';
    }
    else if (i == allItems.length - 2) {
        allItemsSummary += ' and ';
    }
    else {
        allItemsSummary += '.'
    }
}

response = 'You have ' + allItems.length + ' in your list. ' + allItemsSummary;
console.log(response);
