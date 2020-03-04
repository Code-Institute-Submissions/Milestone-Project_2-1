function search () {


    // GETTING USER INPUT
    var user_input = document.getElementById("user_input").value;
    //var query = $(#user_input).val() This is jQuery version of above
    console.log(user_input);

    // CALLING MY API

    // Building the request object
    // ADMIT THE FOLLOWING
    var api_request = new XMLHttpRequest();
    api_request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            // function to be run upon receiving a response
            the_response = api_request.responseText; // response = data
            // displayResults(the_response);
            console.log(typeof the_response);

            // THE RESPONSE YOU GET BACK IS OF STRING TYPE
            // WE NEED TO CONVERT IT TO AN OBJECT --> using JSON.parse()
            // EXTRA NOTE - BE SURE TO ORGANIZE DATA FROM API PROPERLY SO YOU CAN REFER CORRECTLY
            data_as_an_object = the_response;
            
            displayDataInMyPage (data_as_an_object);

        }
        
        else {

            // function to be called upon an error response
            console.log("This stuff is not working")
    }
    };

    // UNDERSTAND THE FOLLOWING
    var endpoint = "https://api.football-data.org/v2/competitions/2021/standings";         // who (www.example.com) - what server  // what data do you want
    var key = "&appid=b010fe05a02c4ddc8336e4c77243bb3c";        //key to identify yourself to the server : who is asking for data?
    var the_url = endpoint + key;                       // ELEMENTS FOR ALL API CALLS (maybe not key if api is public)
    
    api_request.open ("GET", the_url, true); // ADMIT "GET" AND "true"
    api_request.send()
    
    console.log(data_as_an_object);
}