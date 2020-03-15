var _DATAGLOBAL = {};
const _APIKEY = "b010fe05a02c4ddc8336e4c77243bb3c";
 
// Function's Responsibility: To get data from API
function getData(leagueCode, teamNumber, callback) {
 
    
    var query = "competitions/" + leagueCode + "/standings";
 
    var xhr = new XMLHttpRequest();
 
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
 
            the_response = xhr.responseText;            
            var league_data = JSON.parse(the_response);
            _DATAGLOBAL[leagueCode] = league_data;
 
            dropDownOptionsInMyPage(teamNumber, leagueCode, league_data);
            
        }
        
        if (callback) {
            // Function's Responsibility: Callback to make other functions wait until API data is received
            callback();
        }
    };
    xhr.open("GET", "https://api.football-data.org/v2/" + query);
    xhr.setRequestHeader("X-Auth-Token", _APIKEY);
    xhr.send();
}
 
// Function's Responsibility: To supply dropdown items in the team selection dropdown menu
function dropDownOptionsInMyPage(teamNumber, leagueCode, teamListData) {

    var league_list_1 = document.getElementById("list-1");
    var league_list_2 = document.getElementById("list-2");
    var league_selection_1 = league_list_1.options[league_list_1.selectedIndex].value
    var league_selection_2 = league_list_2.options[league_list_2.selectedIndex].value

    if(league_selection_1 === league_selection_2) {
        alert("Please choose another league")
        var team_dropdown_div = document.getElementById("team-list-" + teamNumber);
        team_dropdown_div.innerHTML = ""

    }

    else {
    var team_dropdown_div = document.getElementById("team-list-" + teamNumber);
    var dropdown_html_string = "";
    var table = teamListData.standings[0].table;
    for (let i in table) {
        
        dropdown_html_string += "<a class=\"dropdown-item\" href=\"#\" onclick=\"teamMatchUp('"+leagueCode+"', 'team-stats-" + teamNumber + "'," + i + ")\">"  + table[i]["team"]["name"] + "</a>";
       
    }
    team_dropdown_div.innerHTML = dropdown_html_string;
    }
}
 
// Function's Responsibility: Gets the API data and passes on to function where team stats will be displayed
function getsDataAndSetsTeamStats (teamNumber, statsDiv, selectedTeam) {
    var selectedLeague = getSelectedLeague(teamNumber);
 
    // Function's Responsibility:
    function callsDataDisplay ()  {
        teamStatsInMyPage(selectedLeague, statsDiv, selectedTeam);
    }
 
    getData(selectedLeague, teamNumber, callsDataDisplay);
}
 
// Function's Responsibility: To provide team match-up feature based on (indexed) league position
function teamMatchUp (leagueCode, teamDataId, selectedTeam) {
     if(teamDataId === 'team-stats-2') {
         getsDataAndSetsTeamStats("1", "team-stats-1", selectedTeam);
    } 
    else {
        getsDataAndSetsTeamStats("2", "team-stats-2", selectedTeam);
    }
    teamStatsInMyPage(leagueCode, teamDataId, selectedTeam);
}
 
// Function's Responsibility: To specify which team stats to display, followecby displaying these in HTML when function is called
function teamStatsInMyPage(leagueCode, teamDataId, selectedTeam) {
    var team_stats_div = document.getElementById(teamDataId);
   
    var league_table = _DATAGLOBAL[leagueCode].standings[0].table[selectedTeam];
    var stats_html_string = "<p> Team Name: " + league_table.team.name + "</p>" + "<p> League Position: " + league_table.position + "</p>" +  "<p> Played Games: " + league_table.playedGames + "</p>" + "<p> Wins: " + league_table.won + "</p>" + "<p> Draws: " + league_table.draw + "</p>" + "<p> Losses: " + league_table.lost + "</p>" +
                            "<p> Points: " + league_table.points + "</p>" + "<p> Goals For: " + league_table.goalsFor + "</p>" + "<p> Goals Against: " + league_table.goalsAgainst + "</p>" + "<p> Goal Difference: " + league_table.goalDifference + "</p>";
 
    team_stats_div.innerHTML = stats_html_string;
 
    //"<img src=\"" + league_table.team.crestURL + "\">" need to figure out how I can convert this
 
}
 
// Function's Responsibility: Getting the options values (that are league codes) plus the list numbers for later dropdown ID references
function getSelectedLeague (v) {
    var my_select = document.getElementById("list-" + v);
    var league = my_select.options[my_select.selectedIndex].value;
    return league;
}
 
 
// Function's Responsibility: Take stored league codes and list numbers and pass them throiugh to getData function
function populate(v) {
    var league = getSelectedLeague(v)
    getData(league, v);
}

populate('1');
populate('2');

