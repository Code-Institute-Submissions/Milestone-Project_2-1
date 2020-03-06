function getData() {

var xhr = new XMLHttpRequest();
var APIKEY = "b010fe05a02c4ddc8336e4c77243bb3c";
var query = "competitions/PL/standings";
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);


        the_response = xhr.responseText;
        console.log(typeof the_response);

        data_as_an_object = JSON.parse(the_response);

        displayDataInMyPage()
        console.log(datas_as_an_object);
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

    console.log(data_as_an_object);
    console.log(data_as_an_object.standings[0].table);

    var team_name = document.getElementById("team_name")
    var table = data_as_an_object.standings[0].table;
    for (let i in table) {
        console.log(table[i]["team"]["name"]);
        team_name.innerHTML += table[i]["team"]["name"] + "<br>";
    }

}

getData();


