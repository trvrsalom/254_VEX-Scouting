var db = localStorage;
var currCode;
var lastCode = "";
var currTeam;

function parseData(str) {
  str = str.toString();
  currTeam = str.substring(0,5);
  currCode = str.substring(5,8) + "!" +//Match #
  str.substring(8, 10) + "!" + //Floor Tiles
  str.substring(10,12) + "!" + //Cube Score
  str.substring(12,13) + "!" + //cube Skyrise Score
  str.substring(13,14) + "!" + //skyrise Score
  str.substring(14,15) + "!" + //armSpeedness
  str.substring(15,16) + "!" + //driveSpeedness
  str.substring(16,17) + "!" + //cubeIntakeness
  str.substring(17,18) + "!" + //skyriseIntakeness
  str.substring(18,20); //autonPoints
}

function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}
/**
   * DB SCHEMA
   * ------------
   * One thing to keep in mind is that this function translates the localStorage object/string to an object/array
   * SCHEMA - All teams are kept in localStorage["teams"] which is String that will be translated into an array of Strings that contains all teamNumbers
   * localStorage["teamNum(fill in the real one)"] contains a string with all match data for the team
   *  Matches will be seperated by "&", in each match teleop data and auto data will be seperated by "," and internally seperated with a "!"
   *  Eg. localStorage["254q"]="1!2!3!4!5,1!2!3!4!5&1!2!3!4!5,1!2!3!4!5"
   */

/**
 * RETRIVE DATA
 */
function teamInfo(teamNum){
  //Accesses the information stored for a team and returns the array of data
  var team = localStorage[teamNum]
  team = team.split("&");
  for(i=0;i < team.length; i++)
  {
    team[i] = team[i].split(",")
  }
  for(q=0; q < team.length; q++)
  {
    team[q][0] = team[q][0].split("!");
  }
  //console.log(team)
  return team;
}
function loadData(){
  $.getJSON("data.json", function(json) {
    console.log(json); // this will show the info it in firebug console
  });
  /*data = JSON.parse(result); need to check
  data = data.repalce("qg", "&")
  return data;*/
}

function loadTeams(){
  return localStorage["teams"].split(",")
}
/**
 * SAVE DATA
 */
function saveDataToServerStorage(){
  //saves data to a .json file by input.php
  var data = 'data="' + JSON.stringify(localStorage) + '"'
  data = data.replace("&", "qg")
  console.log("https://vexscout-nukemm.c9.io/db/input.php?"+data)
  //console.log(test);
  /*
  $.ajax({
    type: "GET",
    url: "input.php",
    data: test,
    success: function() {
     alert("done")
    }
  });*/
  httpGet("https://vexscout-nukemm.c9.io/db/input.php?"+data)
}
function httpGet(theUrl)
{
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
function saveDataToLocalStorage(teamNumber, data){
  //Parse the data outside of the function and input to this function
  //This function expects to have data as the string of Data that is needed to be inserted
  //teamNumber is a string
  if (typeof(localStorage["teams"]) == "undefined"){
    localStorage["teams"] = []
  }
  if(!containsString(localStorage["teams"], teamNumber)){
    if((localStorage["teams"].length < 1)){
      localStorage["teams"] += teamNumber
    }else{
      localStorage["teams"]+= "," + teamNumber
    }
    localStorage[teamNumber] = data
  }else{
    localStorage[teamNumber] += "&" + data;
  }
}
/**
 * GENERAL
 */
function containsString(strn, contains){
  if (contains === null){
    contains = ""
  }
  if (strn === null){
    strn = ""
  }
  return strn.indexOf(contains) > -1;
}
function initalizeDB(){
  //ONLY USE THIS FUNCTION ONCE AND NEVER FROM THE CODE
  localStorage["teams"] = "";
}
