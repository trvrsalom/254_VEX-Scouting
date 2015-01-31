var floorTiles=0;
var cubeScore=0;
var cubeSkyriseScore=0;
var skyriseScore=0;
var autonPoints=0;
var teamNum;
var matchNum;
var armSpeedness=0;
var driveSpeedness=0;
var cubeIntakeness=0;
var skyriseIntakeness=0;
var floorTryness=false;
var cubeTryness=false;
var cubeSkyriseTryness=false;
var skyriseTryness=false;
var autonTryness=false;
var armS=false;
var cubeS=false;
var driveS=false;
var skyriseS=false;

var savedStrings=[];
var savedIndex = 0;
//Need
var startPos = 0;

function hideDIVs(hide, show) {
    $(hide).css("display", "none");
    $(show).css("display", "block");
}
	
function generateCodes() {
    
}
function minusFloorTiles(){
    if (floorTiles > 0) {
        floorTiles--;
    }
    update();
}

function plusFloorTiles() {
    floorTiles++;
    document.getElementById("floorTry").setAttribute("checked", "true");
    update();
}

function plusCubeScore() {
    cubeScore++;
    document.getElementById("cubeTry").setAttribute("checked", "true");
    update();
}

function minusCubeScore() {
    if(cubeScore > 0) {
        cubeScore--;
    }
    update();
}
function plusCubeSkyriseScore() {
    cubeSkyriseScore++;
    document.getElementById("cubeSkyriseTry").setAttribute("checked", "true");
    update();
}

function minusCubeSkyriseScore() {
    if(cubeSkyriseScore > 0) {
        cubeSkyriseScore--;
    }
    update();
}

function plusSkyriseScore() {
    skyriseScore++;
    document.getElementById("skyriseTry").setAttribute("checked", "true");
    update();
}

function minusSkyriseScore() {
    if(skyriseScore > 0) {
        skyriseScore--;
    }
    update();
}

function saveAutoScore() {
    autonPoints = (floorTiles * 1) + (cubeScore * 2) + (cubeSkyriseScore * 4) + (skyriseScore * 4);
    document.getElementById("scoredAuton").innerHTML = "Score: " + autonPoints;
    if(autonPoints != 0) {
        document.getElementById("autoTry").setAttribute("checked", "true");
    }
}

function floorTry(data){floorTryness=!floorTryness;}
function cubeTry(data){cubeTryness=!cubeTryness;}
function cubeSkyriseTry(data){cubeSkyriseTryness=!cubeSkyriseTryness;}
function skyriseTry(data){skyriseTryness=!skyriseTryness;}
function autonTry(data){autonTryness=!autonTryness;}
function armOrNot(data){armS=!armS;alert(data);}
function cubeOrNot(data){cubeS=!cubeS;}
function driveOrNot(data){driveS=!driveS;}
function skyriseOrNot(data){skyriseTryness=!skyriseTryness;}
function stuff(){
    teamNum=document.getElementById("teamNum").value;
    matchNum=document.getElementById("matchNum").value;
    //autonPoints=document.getElementById("autonScore").value;
}
function armSpeed(data){armSpeedness=data;}
function driveSpeed(data){driveSpeedness=data;}
function cubeIntake(data){cubeIntakeness=data;}
function skyriseIntake(data){skyriseIntakeness=data;}
function update(){
    document.getElementById("floorTiles").innerHTML = floorTiles;
    document.getElementById("cubeScore").innerHTML = cubeScore;
    document.getElementById("cubeSkyriseScore").innerHTML = cubeSkyriseScore;
    document.getElementById("skyriseScore").innerHTML = skyriseScore;
}

/**
   * DB SCHEMA
   * ------------
   * SCHEMA - All teams are kept in localStorage["teams"] which is String that will be translated into an array of Strings that contains all teamNumbers
   * localStorage["teamNum(fill in the real one)"] contains a string with all match data for the team
   *  Matches will be seperated by "&", in each match teleop data and auto data will be seperated by "," and internally seperated with a "!"
   *  Ex. localStorage["254q"]="1!2!3!4!5,1!2!3!4!5&1!2!3!4!5,1!2!3!4!5"
   *  Ex. [String to be passed] team#&match#,floorTiles,cubeScore,cubeSkyriseScore,SkyriseScore!autonPoints,startPos
   */

function stringify() {
    stuff();
    return pad(teamNum.toUpperCase().replace(/\s/g, ''), 5) + 
    pad(matchNum, 3) +  
    pad(floorTiles, 2) +  
    pad(cubeScore,2) +  
    cubeSkyriseScore +  
    skyriseScore +  
    Math.round(armSpeedness/10) +
    Math.round(driveSpeedness/10) + 
    Math.round(cubeIntakeness/10) + 
    Math.round(skyriseIntakeness/10) + 
    pad(autonPoints,2);
}

function initLS() {
    localStorage["scoutedString"] = "";
    localStorage["scoutedIndex"] = "";
}

function saveData() {
    savedStrings[savedIndex] = stringify();
    localStorage["scoutedString"] = JSON.stringify(savedStrings);
    savedIndex++;
    localStorage["scoutedIndex"] = savedIndex;
}

function pad(n, len) {
    var s = "" + n;
    if (s.length < len) {
        s = ('0000000000' + s).slice(-len);
    }
    return s;
}

function genCode() {
	var qrHolder = document.getElementById("codes");
    for(var i = 0; i < JSON.parse(localStorage.scoutedString).length; i++) {
    	$("#codes").append("<div class='dispCode' id='newCode'></div>");
    	var renderDiv = document.getElementById("newCode");
    	jQuery('#newCode').qrcode({
		    width : 300,
		    height : 300,
		    render	: "table",
	    	text	:  JSON.parse(localStorage.scoutedString)[i]
    	});
    	$("#newCode").append("Team #: " + JSON.parse(localStorage.scoutedString)[i].substring(0,5) + " - Match #: " + JSON.parse(localStorage.scoutedString)[i].substring(5,8));
		renderDiv.id = "qrcodeDone";
    }
    hideDIVs('.mainContainer', '.qrCodes');
}

function reset() {
    floorTiles=0;
    cubeScore=0;
    cubeSkyriseScore=0;
    skyriseScore=0;
    autonPoints=0;
    document.getElementById("teamNum").value = "";
    document.getElementById("matchNum").value = "";
    armSpeedness=0;
    driveSpeedness=0;
    cubeIntakeness=0;
    skyriseIntakeness=0;
    floorTryness=false;
    cubeTryness=false;
    cubeSkyriseTryness=false;
    skyriseTryness=false;
    autonTryness=false;
    armS=false;
    cubeS=false;
    driveS=false;
    skyriseS=false;
    saveAutoScore();
    document.getElementById("scoredAuton").innerHTML = "Save";
    document.getElementById("armOrNotReset").value = false;
    update();
}

function resetAuto() {
    floorTiles=0;
    cubeScore=0;
    cubeSkyriseScore=0;
    skyriseScore=0;
    update();
}

function clearQR() {
    document.getElementById("codes").innerHTML = "";
}

function clearCodes() {
    savedStrings=[];
    savedIndex = 0;
    localStorage["scoutedString"] = JSON.stringify(savedStrings);
    localStorage["scoutedIndex"] = savedIndex;
}