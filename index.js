



let xhr = new XMLHttpRequest();
let APIKEY = "b010fe05a02c4ddc8336e4c77243bb3c";
let query = "competitions?areas=2072";
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    };

    else{ 
        
        console.log("This isn't working")

    };
}
xhr.open("GET", "//api.football-data.org/v2/" + query);
xhr.setRequestHeader("X-Auth-Token", APIKEY)
xhr.send();
