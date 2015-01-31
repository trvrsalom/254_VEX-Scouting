function init() {
    var Skyrise = 7;
    var Cubes = 22;
    var CubeSkyrise = 8;
    var postOwn = 10;
    var auton = 0;
    var countFloorTiles = 0;
    var countPostOwn = 1;
    var countCubeScore = 1;
    var countCubeSkyriseScore = 1;
    var countSkyriseScore = 1;
    var allianceColor = "none";
    var armSpeedS = 0;
    var driveSpeedS = 0;
    var teamNoS = 0;
    var matchNoS = 0;
}

var PointTotal = 0;
var Skyrise = 7;
var Cubes = 22;
var CubeSkyrise = 8;
var postOwn = 10;
var auton = 0;
var countFloorTiles = 0;
var countPostOwn = 0;
var countCubeScore = 0;
var countCubeSkyriseScore = 0;
var countSkyriseScore = 0;
var countAuton = 0;
var startingPos = 0;
var Show=true;
var armWorkS=false;
function armWork(){armWorkS=!armWorkS;alert("gots");}
function FloorTiles() {
    if (Cubes > 0) {
        PointTotal += 1;
        Cubes -= 1;
        countFloorTiles += 1;
        Update();
    }
}
function minusFloorTiles() {
    if (countFloorTiles > 0) {
        countFloorTiles -= 1;
        PointTotal -= 1;
        Cubes += 1;
        Update();
    }
}
function PostOwn() {
    if (postOwn > 0) {
        PointTotal += 1;
        postOwn -= 1;
        countPostOwn += 1;
        Update();
    }

}
function minusPostOwn(){
    if(countPostOwn>0){
        countPostOwn -= 1;
        PointTotal -= 1;
        postOwn += 1;
        Update();
    }
}
function ScoreCube() {
    if (Cubes > 0) {
        PointTotal += 2;
        Cubes -= 1;
        countCubeScore += 1;
        Update();
    }
}
function minusScoreCube() {
    if (countCubeScore > 0) {
        countCubeScore -= 1;
        PointTotal -= 2;
        Cubes += 1;
        Update();
    }
}
function SkyriseScore() {
    if (Skyrise > 0) {
        PointTotal += 4;
        Skyrise -= 1;
        countSkyriseScore +=1;
        Update();       
    }
}
function minusSkyriseScore() {
    if (countSkyriseScore > 0){
        PointTotal -= 4;
        countSkyriseScore -= 1;
        Skyrise += 1;
        Update();
    }
}
function CubeSkyriseScore() {
    if (Cubes > 0) {
        if (CubeSkyrise > 0) {
                PointTotal += 4;
                Cubes = Cubes - 1;
                CubeSkyrise -= 1;
                countCubeSkyriseScore += 1;
                Update();
        }
    }
}
function minusCubeSkyriseScore() {
        countCubeSkyriseScore -= 1;
        PointTotal -= 4;
        Cubes += 1;
        CubeSkyrise += 1;
        Update();
    
}
function goAuton() {
    countAuton = countCubeScore*2 + countCubeSkyriseScore*4 + countPostOwn*1 + countFloorTiles*1 + countSkyriseScore*4;
    saveAuto();
    Update();
}

function noShow(){
    if(Show===true){
        Show=false;
    }
    Update();
}
function reverseShow(){
        Show=true;
}
function reverseAuton(){
    countAuton = 0;
}
function reset() {
    PointTotal = 0;
    Skyrise = 7;
    Cubes = 22;
    CubeSkyrise = 8;
    postOwn = 10;
    auton = 0;
    countFloorTiles = 0;
    countPostOwn = 0;
    countCubeScore = 0;
    countCubeSkyriseScore = 0;
    countSkyriseScore = 0;
    Show=true; 
    Update();
}
function Update() {
    document.getElementById("FloorTiles").innerHTML = countFloorTiles;
    document.getElementById("CubeScore").innerHTML = countCubeScore;
    document.getElementById("CubeSkyriseScore").innerHTML = countCubeSkyriseScore;
    document.getElementById("SkyriseScore").innerHTML = countSkyriseScore;
    document.getElementById("Points").innerHTML = PointTotal;
}
function teamNo(){
    var x = document.getElementById("teamNumber").value;
    teamNoS = x;
    alert("Got Team Number: " + teamNoS);
}
function matchNo() {
    var x = document.getElementById("matchNumber").value;
    matchNoS = x;
    alert("Got Match Number: " + matchNoS);
}
function cubeSkyrise(val) { cubeSkyriseS= val / 200; }
function armSpeed(val) { armSpeedS = val / 200; }
function driveSpeed(val) { driveSpeedS = val / 200; }
function colorDiv() {
    var selection = document.getElementById('bgcolor').selectedIndex;
    var div = document.getElementById('change');
    var div1 = document.getElementById('change1');
    var div2 = document.getElementById('change2');
    div.style.backgroundColor = '#9b59b6';
    var colors = ["red","blue"];

    switch (selection) {
        case 0:
            div.style.backgroundColor = '#9b59b6';//Default purple
            div1.style.backgroundColor = '#9b59b6';//Default purple
            div2.style.backgroundColor = '#9b59b6';//Default purple
            break;
        case 1:
            div.style.backgroundColor = '#3498db';//Blue
            div1.style.backgroundColor = '#3498db';//Blue
            div2.style.backgroundColor = '#3498db';//Blue
            allianceColor = "Blue";
            break;
        case 2:
            div.style.backgroundColor = '#e74c3c';//Red
            div1.style.backgroundColor = '#e74c3c';//Red
            div2.style.backgroundColor = '#e74c3c';//Red
            allianceColor = "Red";
            break;
    }
}

//MAIN
init();
Update();