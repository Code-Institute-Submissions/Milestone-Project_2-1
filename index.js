var _DATAGLOBAL = {};

function getData(leagueCode, teamListId) {

var xhr = new XMLHttpRequest();
var APIKEY = "b010fe05a02c4ddc8336e4c77243bb3c";
var query = "competitions/" + leagueCode + "/standings";
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {


        the_response = xhr.responseText;
        
        var league_data = JSON.parse(the_response);

        _DATAGLOBAL[leagueCode] = league_data;

        displayDataInMyPage(teamListId, league_data)
        
    }

    else {
        console.log("This isn't working") // why isn't this working?
    }
};
xhr.open("GET", "//api.football-data.org/v2/" + query);
xhr.setRequestHeader("X-Auth-Token", APIKEY)
xhr.send();
}

function displayDataInMyPage(teamListId, teamListData) {

    var team_dropdown_div = document.getElementById(teamListId);
    var html_string = "";
    var table = teamListData.standings[0].table;
    for (let i in table) {
        // console.log(table[i]["team"]["name"]);
        // team_name.innerHTML += table[i]["team"]["name"] + "<br>";
        html_string += "<p class=\"dropdown-item\" onclick=\"test("+i+")\">"  + table[i]["team"]["name"] + "</p>";
        
    }
 
    // console.log(html_string);
    team_dropdown_div.innerHTML = html_string;
}

getData("PL", "team-list-1");
getData("FL1", "team-list-2");

function test(i) {

    alert(_DATAGLOBAL["PL"].standings[0].table[i].team.name)
     alert(_DATAGLOBAL["FL1"].standings[0].table[i].team.name)  
        
    
    // html_string += (_DATAGLOBAL["PL"].standings[0].table[i].team.name);
};
