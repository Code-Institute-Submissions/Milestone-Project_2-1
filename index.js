
function displayData() {

    
}


function search(){

    var user_input = document.getElementById("user_input").value;
    console.log(user_input);


var xhr = new XMLHttpRequest();
var APIKEY = "b010fe05a02c4ddc8336e4c77243bb3c";
var query = "competitions/PL/standings";
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);

    }

    else {
        console.log("This isn't working")
    }

    displayData()
};
xhr.open("GET", "//api.football-data.org/v2/" + query);
xhr.setRequestHeader("X-Auth-Token", APIKEY)
xhr.send();

}