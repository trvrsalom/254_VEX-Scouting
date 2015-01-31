var floorTiles=0;
var cubeScore=0;
var cubeSkyriseScore=0;
var skyriseScore=0;
var autonPoints=0;

function minusFloorTiles(){
    floorTiles--;
    update();
}

function plusFloorTiles() {
    floorTiles++;
    update();
}

function plusCubeScore() {
    cubeScore++;
    update();
}

function minusCubeScore() {
    cubeScore--;
    update();
}
function plusCubeSkyriseScore() {
    cubeSkyriseScore++;
    update();
}

function minusCubeSkyriseScore() {
    cubeSkyriseScore--;
    update();
}

function plusSkyriseScore() {
    skyriseScore++;
    update();
}

function minusSkyriseScore() {
    skyriseScore--;
    update();
}
function goAuton(){autonPoints=document.getElementById("autonScore").value;}
function update(){
    document.getElementById("floorTiles").innerHTML = floorTiles;
    document.getElementById("cubeScore").innerHTML = cubeScore;
    document.getElementById("cubeSkyriseScore").innerHTML = cubeSkyriseScore;
    document.getElementById("skyriseScore").innerHTML = skyriseScore;
}