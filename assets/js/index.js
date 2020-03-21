var _DATAGLOBAL = {};
const _APIKEY = "b010fe05a02c4ddc8336e4c77243bb3c";
 
// Requests and obtains data from API
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
                // Callback to make sure other functions wait until API data is received
                callback();
            }
        }
    };

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    xhr.onerror = function() {
        modal.style.display = "block";
    };
        span.onclick = function() {
            modal.style.display = "none";
        };
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                }
            };
    xhr.open("GET", "https://api.football-data.org/v2/" + query);
    xhr.setRequestHeader("X-Auth-Token", _APIKEY);
    xhr.send();
}
 
// Supplies dropdown items in the team selection dropdown menu
function dropDownOptionsInMyPage(teamNumber, leagueCode, teamListData) {

    var team_dropdown_div = document.getElementById("team-list-" + teamNumber);
    var dropdown_html_string = "";
    var table = teamListData.standings[0].table;
    for (let i in table) {
        
        dropdown_html_string += "<a class=\"dropdown-item\" href=\"#team-stats-1\" onclick=\"teamMatchUp('"+leagueCode+"', 'team-stats-" + teamNumber + "', '" + i + "', '" + teamNumber + "')\">"  + table[i]["team"]["name"] + "</a>";
    }
    
    team_dropdown_div.innerHTML = dropdown_html_string;

    // Ensures when a team is selected the slidedown animation activates in displaying stats and graphs
    $(".dropdown-item").click(function() {
        $(".chart-container, .team-stats-div").slideDown( "slow" );
    });

}
 
// Gets the API data and passes on to function where team stats will be displayed
function getsDataAndSetsTeamStats (teamNumber, statsDiv, selectedTeam) {
    var selectedLeague = getSelectedLeague(teamNumber);
 
    // Provides callback function, ensuring the script waits until API data is received before resuming
    function callsDataDisplay ()  {
        teamStatsInMyPage(selectedLeague, statsDiv, selectedTeam, teamNumber);
    }
 
    getData(selectedLeague, teamNumber, callsDataDisplay);
}
 
// Provides team match-up feature based on (indexed) league position
function teamMatchUp (leagueCode, teamDataId, selectedTeam, teamNumber) {

    if(teamDataId === 'team-stats-2') {
         getsDataAndSetsTeamStats("1", "team-stats-1", selectedTeam);
    } 
    else {
        getsDataAndSetsTeamStats("2", "team-stats-2", selectedTeam);
    }

    teamStatsInMyPage(leagueCode, teamDataId, selectedTeam, teamNumber);

}
 
// Specifies which team stats to display, followed by displaying these in HTML when function is called
function teamStatsInMyPage(leagueCode, teamDataId, selectedTeam, teamNumber) {

    var team_stats_div = document.getElementById(teamDataId);
    var league_table = _DATAGLOBAL[leagueCode].standings[0].table[selectedTeam];

    var stats_html_string = "<div class=\"card\"><div class=\"card-body\"><h5>" + league_table.team.name + "</h5>" +
    "<img src=\"" + league_table.team.crestUrl.replace("http:", "https:") + "\" alt=\"Club crest of " + league_table.team.name + "\" id=\"club-crest\">" + "<p class=\"league-position\"> League Position: " +
    league_table.position + "</p>" +  "<p> Played Games: " + league_table.playedGames + "</p>" + "<p> Wins: " + league_table.won +
    "</p>" + "<p> Draws: " + league_table.draw + "</p>" + "<p> Losses: " + league_table.lost + "</p>" +
    "<p> Points: " + league_table.points + "</p>" + "<p> Goals For: " + league_table.goalsFor + "</p>" + "<p> Goals Against: " +
    league_table.goalsAgainst + "</p>" + "<p> Goal Difference: " + league_table.goalDifference + "</p></div></div>";

    team_stats_div.innerHTML = stats_html_string;

    teamStatsGraphs(league_table, teamNumber);
}
 
// Getting the options values (that are league codes) plus the list numbers for later dropdown ID references
function getSelectedLeague (listNumber) {
    var my_select = document.getElementById("list-" + listNumber);
    var league = my_select.options[my_select.selectedIndex].value;
    return league;
}

// Take stored league codes and list numbers and pass them throiugh to getData function
function populateTeamDropdowns(listNumber) {
    var league = getSelectedLeague(listNumber);
    getData(league, listNumber);
}

// To hide the team-stats and graphs as soon as the page has loaded
$( ".chart-container, .team-stats-div" ).hide();

// Anmimation and hiding stats and graphs when league selection changes
$( "select" ).change(function() {
    $( ".chart-container, .team-stats-div" ).slideUp( "slow", function() {
        $( ".chart-container, .team-stats-div" ).hide();
    });
});

// Following code ensures that users cannot choose the same league in both league dropdowns
document.getElementById("list-1").addEventListener("change", function(e) {
    let i = e.target.options.selectedIndex;
    document.getElementById("list-2")[i].setAttribute("disabled", true);
});
document.getElementById("list-1").addEventListener("click", function(e) {
    for (let i of document.getElementById("list-2")) {
        i.removeAttribute("disabled");
    }
});
document.getElementById("list-2").addEventListener("change", function(e) {
    let i = e.target.options.selectedIndex;
    document.getElementById("list-1")[i].setAttribute("disabled", true);
});
document.getElementById("list-2").addEventListener("click", function(e) {
    for (let i of document.getElementById("list-1")) {
        i.removeAttribute("disabled");
    }
});

// Initiates Bootstrap tooltip component
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// This onchange function called twice for both league dropdowns to load default team dropdown items
populateTeamDropdowns('1');
populateTeamDropdowns('2');

