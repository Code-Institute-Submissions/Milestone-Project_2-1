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

        dropdownOptionsInMyPage(teamListId, league_data)
        
    }

    else {
        console.log("This isn't working") // why isn't this working?
    }
};
xhr.open("GET", "//api.football-data.org/v2/" + query);
xhr.setRequestHeader("X-Auth-Token", APIKEY)
xhr.send();
}

function dropdownOptionsInMyPage(teamListId, teamListData) {

    var team_dropdown_div = document.getElementById(teamListId);
    var dropdown_html_string = "";
    var table = teamListData.standings[0].table;
    for (let i in table) {
        // console.log(table[i]["team"]["name"]);
        // team_name.innerHTML += table[i]["team"]["name"] + "<br>";
        dropdown_html_string += "<p class=\"dropdown-item\" onclick=\"teamStatsInMyPage("+i+")\">"  + table[i]["team"]["name"] + "</p>";
        
    }
 
    // console.log(html_string);
    team_dropdown_div.innerHTML = dropdown_html_string;
}

getData("PL", "team-list-1");
getData("FL1", "team-list-2");

function teamStatsInMyPage(i) {

    // alert(_DATAGLOBAL["PL"].standings[0].table[i].team.name)
     // alert(_DATAGLOBAL["FL1"].standings[0].table[i].team.name)

    var team_stats_div = document.getElementById("team-stats-1");
    var stats_html_string = "";
    var team_name = _DATAGLOBAL["PL"].standings[0].table[i].team.name;
    var team_logo = _DATAGLOBAL["PL"].standings[0].table[i].team.crestURL;
    var position = _DATAGLOBAL["PL"].standings[0].table[i].position;
    var played_games = _DATAGLOBAL["PL"].standings[0].table[i].playedGames;
    var won = _DATAGLOBAL["PL"].standings[0].table[i].won;
    var draw = _DATAGLOBAL["PL"].standings[0].table[i].draw;
    var lost = _DATAGLOBAL["PL"].standings[0].table[i].lost;
    var points = _DATAGLOBAL["PL"].standings[0].table[i].points;
    var goals_for = _DATAGLOBAL["PL"].standings[0].table[i].goalsFor;
    var goals_against = _DATAGLOBAL["PL"].standings[0].table[i].goalsAgainst;
    var goal_difference = _DATAGLOBAL["PL"].standings[0].table[i].goalDifference;

    stats_html_string += "<p> Team Name: " + team_name + "</p>" + "<img src=\"" + team_logo + "\">" + "<p> League Position: " + position + "</p>" + 
    "<p> Played Games: " + played_games + "</p>" + "<p> Wins: " + won + "</p>" + "<p> Draws: " + draw + "</p>" + "<p> Losses: " + lost + "</p>" +
    "<p> Points: " + points + "</p>" + "<p> Goals For: " + goals_for + "</p>" + "<p> Goals Aginst: " + goals_against + "</p>" + "<p> Goal Difference: " + goal_difference + "</p>";
    
    team_stats_div.innerHTML = stats_html_string;
    // html_string += (_DATAGLOBAL["PL"].standings[0].table[i].team.name);
};
