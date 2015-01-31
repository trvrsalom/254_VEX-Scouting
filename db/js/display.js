var data = null;
var targetTable = 0;
var targetTeam = "invalid";

function updateData() {
    $.ajax({
      dataType: "json",
      url: "https://preview.c9.io/nukemm/vexscout/db/data.json",
      success: 
        function(result){           
            for(var i = 0; i < result.teams.length; i++) {
            var tarTable = document.getElementById("teamNums");
            var newRow = tarTable.insertRow(i+1);
            var newCell = newRow.insertCell(0);
            newCell.innerHTML = result.teams[i].num;
            }
            console.log(result);
        }
    });
}
/*
function updateTeamData() {
    $.ajax({
      dataType: "json",
      url: "https://preview.c9.io/nukemm/vexscout/db/data.json",
      success: 
        function(result){     
            var table = document.getElementById("teamData");
            var count = 0;
            while (result.teams[targetTable].[count]) {
                count++;
            }
            for(var i = 0; )
        }
    });
}
*/
function debug() {
    console.log(data.teams.length);
}

function getRowIndex(e){
 e= window.event || e;
 var  sib, who= e.target || e.srcElement;
 while(who && who.nodeName!= 'TR') who= who.parentNode;
 if(who){
  targetTable = who.sectionRowIndex - 1;
  console.log(targetTable);
  if(e.stopPropagation) e.stopPropagation();
  else e.cancelBubble= true;
  // do something with who...
 }
}


 document.getElementById('teamNums').onclick= getRowIndex;
 updateData();
 //updateTeamData();


function dispTeams() {
    var teams = loadTeams();
    //alert("Data does not correspond  - will fix");
    for(var i = 0; i < teams.length; i++) {
        $("#dataTable").append("<tr id='currRow'></td>");
        $("#currRow").append("<td onclick='moreData(" + i + ");'>" + teams[i] + "</td>");
        $("#currRow").append("<td>" + getAverage(i,1) + "</td>");
        $("#currRow").append("<td>" + getAverage(i,2) + "</td>");
        $("#currRow").append("<td>" + getAverage(i,3) + "</td>");
        $("#currRow").append("<td>" + getAverage(i,4) + "</td>");
        $("#currRow").append("<td>" + getAverage(i,9) + "</td>");
        document.getElementById("currRow").id = "old";
    }
}

function getAverage(teamIndex, tarIndex) {
    var tarTeam = loadTeams()[teamIndex];
    var average;
    var sum = 0;
    for(var i = 0; i < teamInfo(loadTeams()[teamIndex]).length; i++) {
        sum = sum + parseInt(teamInfo(loadTeams()[teamIndex])[i][0][tarIndex]);
    }
    return (sum/(teamInfo(loadTeams()[teamIndex]).length));
}

function moreData(teamIndex) {
    alert("Team #: " + loadTeams()[teamIndex] + "\nArm Speed Rating: " + getAverage(teamIndex, 5) + "\nDrive Speed Rating: " + getAverage(teamIndex, 6) + "\nCube Intake Rating: " + getAverage(teamIndex,7) + "\nSkyrise Intake Rating: " + getAverage(teamIndex, 8));
}