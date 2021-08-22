var settings = {
  'cache': false,
  "async": false,
  "crossDomain": true,
  "url": "https://www1.nseindia.com/live_market/dynaContent/live_watch/fomktwtch_OPTSTK.htm",
  "method": "GET",
  "headers": {
      "accept": "application/json",
      "Access-Control-Allow-Origin":"*"
  }
}

$.ajax(settings)
  .done(function (response) {
    
    try {
      
      console.log(response)
    } catch(e) {
      
    }
  })
  .fail(function(jqXHR, exception) {
    
  });
