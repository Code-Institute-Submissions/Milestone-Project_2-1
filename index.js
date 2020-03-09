var _DATAGLOBAL = {};

function getData(leagueCode, teamListId) {

    var APIKEY = "b010fe05a02c4ddc8336e4c77243bb3c";
    var query = "competitions/" + leagueCode + "/standings";

    var xhr = new XMLHttpRequest();
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
    xhr.open("GET", "https://api.football-data.org/v2/" + query);
    xhr.setRequestHeader("X-Auth-Token", APIKEY)
    xhr.send();
};

function dropdownOptionsInMyPage(teamListId, teamListData) {

    var team_dropdown_div = document.getElementById(teamListId);
    var dropdown_html_string = "";
    var table = teamListData.standings[0].table;
    for (let i in table) {
        // console.log(table[i]["team"]["name"]);
        // team_name.innerHTML += table[i]["team"]["name"] + "<br>";
        dropdown_html_string += "<p class=\"dropdown-item\" onclick=\"teamStatsInMyPage("+i+")\">"  + table[i]["team"]["name"] + "</p>";
        // dropdown ==> onclick ==> to be replaced by event listeners so we can use "real" dropdown (jquery code)
    }
 
    // console.log(html_string);
    team_dropdown_div.innerHTML = dropdown_html_string;

}

getData("PL", "team-list-1");
getData("FL1", "team-list-2");

function teamStatsInMyPage(i, team_stat_container) {

    // alert(_DATAGLOBAL["PL"].standings[0].table[i].team.name)
     // alert(_DATAGLOBAL["FL1"].standings[0].table[i].team.name)

    var team_stats_div = document.getElementById("team-stats-1");
    var stats_html_string = "";
    var league_table = _DATAGLOBAL["PL"].standings[0].table[i];

    stats_html_string += "<p> Team Name: " +  league_table.team.name + "</p>" + "<img src=\"" + team.crestURL + "\">" + "<p> League Position: " + League_table.position + "</p>" + 
    "<p> Played Games: " + league_table.playedGames + "</p>" + "<p> Wins: " + league_table.won + "</p>" + "<p> Draws: " + league_table.draw + "</p>" + "<p> Losses: " + league_table.lost + "</p>" +
    "<p> Points: " + league_table.points + "</p>" + "<p> Goals For: " + league_table.goalsFor + "</p>" + "<p> Goals Against: " + league_table.goalsAgainst + "</p>" + "<p> Goal Difference: " + league_table.goalDifference + "</p>";
    
    team_stats_div.innerHTML = stats_html_string;
    // html_string += (_DATAGLOBAL["PL"].standings[0].table[i].team.name);
};



