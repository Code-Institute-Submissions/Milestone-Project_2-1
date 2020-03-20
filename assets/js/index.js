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
         
            
             if (callback) {
                // Function's Responsibility: Callback to make other functions wait until API data is received
                callback();
            }
        }
    };
    xhr.onerror = function() {
        alert("Too many api calls, wait 1 min")
    };
    xhr.open("GET", "https://api.football-data.org/v2/" + query);
    xhr.setRequestHeader("X-Auth-Token", _APIKEY);
    xhr.send();
}
 
// Function's Responsibility: To supply dropdown items in the team selection dropdown menu
function dropDownOptionsInMyPage(teamNumber, leagueCode, teamListData) {

    var team_dropdown_div = document.getElementById("team-list-" + teamNumber);
    var dropdown_html_string = "";
    var table = teamListData.standings[0].table;
    for (let i in table) {
        
        dropdown_html_string += "<a class=\"dropdown-item\" href=\"#games-chart-1\" onclick=\"teamMatchUp('"+leagueCode+"', 'team-stats-" + teamNumber + "', '" + i + "', '" + teamNumber + "')\">"  + table[i]["team"]["name"] + "</a>";
    }
    
    team_dropdown_div.innerHTML = dropdown_html_string;
        
    $(".dropdown-item").click(function() {
        $(".chart-container, .team-stats-div").slideDown( "slow" )
    });

}
 
// Function's Responsibility: Gets the API data and passes on to function where team stats will be displayed
function getsDataAndSetsTeamStats (teamNumber, statsDiv, selectedTeam) {
    var selectedLeague = getSelectedLeague(teamNumber);
 
    // Function's Responsibility:
    function callsDataDisplay ()  {
        teamStatsInMyPage(selectedLeague, statsDiv, selectedTeam, teamNumber);
    }
 
    getData(selectedLeague, teamNumber, callsDataDisplay);
}
 
// Function's Responsibility: To provide team match-up feature based on (indexed) league position
function teamMatchUp (leagueCode, teamDataId, selectedTeam, teamNumber) {

    if(teamDataId === 'team-stats-2') {
         getsDataAndSetsTeamStats("1", "team-stats-1", selectedTeam);
    } 
    else {
        getsDataAndSetsTeamStats("2", "team-stats-2", selectedTeam);
    }

    teamStatsInMyPage(leagueCode, teamDataId, selectedTeam, teamNumber);

}
 
// Function's Responsibility: To specify which team stats to display, followecby displaying these in HTML when function is called
function teamStatsInMyPage(leagueCode, teamDataId, selectedTeam, teamNumber) {

    var team_stats_div = document.getElementById(teamDataId);
    var league_table = _DATAGLOBAL[leagueCode].standings[0].table[selectedTeam];

    var stats_html_string = "<div class=\"card\"><div class=\"card-body\"><h5>" + league_table.team.name + "</h5>" +
    "<img src=\"" + league_table.team.crestUrl.replace("http:", "https:") + "\" alt=\"Club crest of" + league_table.team.name + "\" id=\"club-crest\">" + "<p> League Position: " +
    league_table.position + "</p>" +  "<p> Played Games: " + league_table.playedGames + "</p>" + "<p> Wins: " + league_table.won +
    "</p>" + "<p> Draws: " + league_table.draw + "</p>" + "<p> Losses: " + league_table.lost + "</p>" +
    "<p> Points: " + league_table.points + "</p>" + "<p> Goals For: " + league_table.goalsFor + "</p>" + "<p> Goals Against: " +
    league_table.goalsAgainst + "</p>" + "<p> Goal Difference: " + league_table.goalDifference + "</p></div></div>";

    team_stats_div.innerHTML = stats_html_string;

    teamStatsGraphs(league_table, teamDataId, selectedTeam, teamNumber)
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

// Below function attempting to fix user feedback with this function for league lists
// Aiming to pass 2 arguments, selected league and the value of the option to be removed in second dropdown
// Theorizing that if select value == option to remove (value), continue and append options except the one skipped
function leagueListPreventDuplicate(selectedLeague, removedOption) {
    
    var selected_league = document.getElementById("list-" + selectedLeague);
    console.log(selected_league);
    console.log(removedOption)
    for (let i in selected_league) {

        if(removedOption === i) {
          continue
        }
}
}

$( ".chart-container, .team-stats-div" ).hide();

leagueListPreventDuplicate('1', 'FL1')
leagueListPreventDuplicate('2', 'PL')

populate('1');
populate('2');
