var _DATAGLOBAL = {};
const _APIKEY = "b010fe05a02c4ddc8336e4c77243bb3c";

// To get data from API
function getData(leagueCode, teamNumber, callback) {

    
    var query = "competitions/" + leagueCode + "/standings";

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            the_response = xhr.responseText;            
            var league_data = JSON.parse(the_response);
            _DATAGLOBAL[leagueCode] = league_data;
        }

        else {
            console.log("This isn't working") 
        }
        if (callback) {
            // Callback to make other functions wait until API data is received
            callback();
        }
    };
    xhr.open("GET", "https://api.football-data.org/v2/" + query);
    xhr.setRequestHeader("X-Auth-Token", _APIKEY)
    xhr.send();
};

// To supply dropdown items in the team selection dropdown menu
function dropDownOptionsInMyPage(teamNumber, leagueCode, teamListData) {

    var team_dropdown_div = document.getElementById("team-list-" + teamNumber);
    var dropdown_html_string = "";
    var table = teamListData.standings[0].table;
    for (let i in table) {
        
        dropdown_html_string += "<a class=\"dropdown-item\" onclick=\"teamMatchUp('"+leagueCode+"', 'team-stats-" + teamNumber + "'," + i + ")\">"  + table[i]["team"]["name"] + "</a>";
       
    }
    team_dropdown_div.innerHTML = dropdown_html_string;

};

function secondDropDownOptionsInMyPage(teamNumber, leagueCode, teamListData) {

    var table = teamListData.standings[0].table;
    for (let i in table) {
        
       teamMatchUp(leagueCode, teamNumber, i)
    }
};

// Gets the API data and passes on to function where team stats will be displayed
function getsDataAndSetsTeamStats (teamNumber, statsDiv, selectedTeam) {
    var selectedLeague = getSelectedLeague(teamNumber);

    // Provides callback function for displaying team stats data
    function callsDataDisplay ()  {
        teamStatsInMyPage(selectedLeague, statsDiv, selectedTeam);
    };
    getData(selectedLeague, teamNumber, callsDataDisplay);
};

// To provide team match-up feature based on (indexed) league position
function teamMatchUp (leagueCode, teamDataId, selectedTeam) {
     if(teamDataId === 'team-stats-2') {
         getsDataAndSetsTeamStats("1", "team-stats-1", selectedTeam);
    } 
    else {
        getsDataAndSetsTeamStats("2", "team-stats-2", selectedTeam);
    }
    teamStatsInMyPage(leagueCode, teamDataId, selectedTeam);
};

// Function's Responsibility: To specify which team stats to display, followecby displaying these in HTML when function is called
function teamStatsInMyPage(leagueCode, teamDataId, selectedTeam) {
    var team_stats_div = document.getElementById(teamDataId);
   
    var league_table = _DATAGLOBAL[leagueCode].standings[0].table[selectedTeam];
    var stats_html_string = "<p> Team Name: " + league_table.team.name + "</p>" + "<p> League Position: " + league_table.position + "</p>" +  "<p> Played Games: " + league_table.playedGames + "</p>" + "<p> Wins: " + league_table.won + "</p>" + "<p> Draws: " + league_table.draw + "</p>" + "<p> Losses: " + league_table.lost + "</p>" +
                            "<p> Points: " + league_table.points + "</p>" + "<p> Goals For: " + league_table.goalsFor + "</p>" + "<p> Goals Against: " + league_table.goalsAgainst + "</p>" + "<p> Goal Difference: " + league_table.goalDifference + "</p>";

    team_stats_div.innerHTML = stats_html_string;

    //"<img src=\"" + league_table.team.crestURL + "\">" need to figure out how I can convert this

};


// Getting the options values (that are league codes) plus the list numbers for later dropdown ID references
function getSelectedLeague (v) {
    var myselect = document.getElementById("list-" + v);
    var league = myselect.options[myselect.selectedIndex].value;
    return league;
};


// Take stored league codes and list numbers and pass them throiugh to getData functions
function populate(v) {
    var left_league = getSelectedLeague("1")
    var league_right = getSelectedLeague('2');
    getData(left_league, v);
    getData(league_right, v);
    dropDownOptionsInMyPage(leagueCode, teamNumber, _DATAGLOBAL)
    secondDropDownOptionsInMyPage(leagueCode, teamNumber, _DATAGLOBAL)
};

populate();
