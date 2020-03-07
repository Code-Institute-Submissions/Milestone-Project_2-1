var _PLDATA
var _FL1DATA

function getFL1Data() {

var xhr = new XMLHttpRequest();
var APIKEY = "b010fe05a02c4ddc8336e4c77243bb3c";
var query = "competitions/FL1/standings";
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);


        the_response = xhr.responseText;
        console.log(typeof the_response);

        _FL1DATA = JSON.parse(the_response);

        displayDataInMyPage()
    }

    else {
        console.log("This isn't working")
    }
};
xhr.open("GET", "//api.football-data.org/v2/" + query);
xhr.setRequestHeader("X-Auth-Token", APIKEY)
xhr.send();

}



function getPLData() {

var xhr = new XMLHttpRequest();
var APIKEY = "b010fe05a02c4ddc8336e4c77243bb3c";
var query = "competitions/PL/standings";
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);


        the_response = xhr.responseText;
        console.log(typeof the_response);

        _PLDATA = JSON.parse(the_response);

        displayDataInMyPage()
    }

    else {
        console.log("This isn't working")
    }
};
xhr.open("GET", "//api.football-data.org/v2/" + query);
xhr.setRequestHeader("X-Auth-Token", APIKEY)
xhr.send();

}




function displayDataInMyPage() {

    // console.log(data_as_an_object);
    // console.log(data_as_an_object.standings[0].table);
    var pl_dropdown_div = document.getElementById("team-pl-list");
    var fl1_dropdown_div = document.getElementById("team-fl1-list");
    //console.log(team_dropdown_div.innerHTML);
    var pl_html_string = "";
    var fl1_html_string = "";
    var pl_table = _PLDATA.standings[0].table;
    var fl1_table = _FL1DATA.standings[0].table;
    for (let i in table) {
        // console.log(table[i]["team"]["name"]);
        // team_name.innerHTML += table[i]["team"]["name"] + "<br>";
        pl_html_string += "<p class=\"dropdown-item\" onclick=\"test(this)\">"  + table[i]["team"]["name"] + "</p>";
        fl1_html_string += "<p class=\"dropdown-item\" onclick=\"test(this)\">"  + table[i]["team"]["name"] + "</p>";
    }
    // console.log(html_string);
    pl_dropdown_div.innerHTML = pl_html_string;
    fl1_dropdsown_div.innerHTML = fl1_html_string;

}

getPLData();
getFL1Data();


function test(team) {
    alert (team.innerHTML);
};