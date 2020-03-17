var myPieChart = {};
function teamStatsGraphs(leagueTable, teamGraphID, selectedTeam, teamNumber) {
    if (typeof myPieChart[teamNumber] !== "undefined") {
        myPieChart[teamNumber].destroy();
      }
    var target = "games-chart-" + teamNumber;
    var games_chart = document.getElementById(target).getContext('2d');
        myPieChart[teamNumber] = new Chart(games_chart, {
        type: 'pie',
        data: {
        labels: ['Won', 'Drawn', 'Lost'],
        datasets: [{
            label: 'Number of Games',
            data: [leagueTable.won, leagueTable.draw, leagueTable.lost],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ]
        }]
    },
    options: {
        cutoutpercentage: 0,
        responsive: true,
        title: {
            display: true,
            text: '' +leagueTable.team.name+ ''
        } 
    }
});
}