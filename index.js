
function displayDataInMyPage() {

    console.log(data_as_an_object);
    console.log(data_as_an_object.standings[0].table);

    var team_name = document.getElementById("team_name")
    team_name.innerHTML = data_as_an_object.standings[0].table;






}


function search(){

    var user_input = document.getElementById("user_input").value;
    console.log(user_input);


var xhr = new XMLHttpRequest();
var APIKEY = "b010fe05a02c4ddc8336e4c77243bb3c";
var query = "competitions/PL/standings";
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        //console.log(this.responseText);


        the_response = xhr.responseText;
        console.log(typeof the_response);

        data_as_an_object = JSON.parse(the_response);

        displayDataInMyPage (data_as_an_object);
    }

    else {
        console.log("This isn't working")
    }
};
xhr.open("GET", "//api.football-data.org/v2/" + query);
xhr.setRequestHeader("X-Auth-Token", APIKEY)
xhr.send();

}