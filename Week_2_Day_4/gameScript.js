// SOLUTION INCOMPLETE
// need case for when the player wins, otherwise everything else is working as intended

var theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
                [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
                [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
                [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];
var dojoDiv = document.querySelector("#the-dojo");
    
// Creates the rows of buttons for this game
function render(theDojo) {
    var result = "";
    for(var i=0; i<theDojo.length; i++) {
        for(var j=0; j<theDojo[i].length; j++) {
            result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
        }
    }
    return result;
}
    
// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
    console.log({i, j});

    // BONUS CHALLENGES
    // 3. if you click on a ninja you must restart the game
    if (theDojo[i][j] != 0) { 
        alert("Game Over! Try again!");
        newGame();
        return;
    }

    // line below was provided as a comment with Bonus Challenge 3
    // dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;

    // Need to work on making this work as a loop instead
    if(i===0){
        if(j===0){
            var numNinjas = theDojo[i][j+1] + theDojo[i+1][j] + theDojo[i+1][j+1];
        }
        else if(j===theDojo[i].length-1){
            var numNinjas = theDojo[i+1][j] + theDojo[i][j-1] + theDojo[i+1][j-1];
        }
        else{
            var numNinjas = theDojo[i][j-1]+theDojo[i][j+1]+theDojo[i+1][j]+theDojo[i+1][j-1]+theDojo[i+1][j+1];
        }
    }
    else if(i===theDojo.length-1){
        if(j===0){
            var numNinjas = theDojo[i][j+1] + theDojo[i-1][j] + theDojo[i-1][j+1];
        }
        else if(j===theDojo[i].length-1){
            var numNinjas = theDojo[i][j-1]+theDojo[i-1][j-1]+theDojo[i-1][j];
        }
        else{
            var numNinjas = theDojo[i][j-1] + theDojo[i][j+1] + theDojo[i-1][j] + theDojo[i-1][j-1] + theDojo[i-1][j+1];
        }
    }
    else if(j===0){
        var numNinjas = theDojo[i][j+1]+theDojo[i-1][j]+theDojo[i+1][j]+theDojo[i+1][j+1]+theDojo[i-1][j+1];
    }
    else if(j===theDojo[i].length-1){
        var numNinjas = theDojo[i][j-1]+theDojo[i-1][j]+theDojo[i+1][j]+theDojo[i-1][j-1]+theDojo[i+1][j-1];
    }
    else {
        var numNinjas = theDojo[i][j-1]+theDojo[i][j+1]+theDojo[i+1][j-1]+theDojo[i+1][j+1]+theDojo[i+1][j]+theDojo[i-1][j-1]+theDojo[i-1][j+1]+theDojo[i-1][j];
    }

    // alert("There are " + numNinjas + " ninjas hiding in adjacent squares.");

    // BONUS CHALLENGES
    // 1. draw the number onto the button instead of alerting it
    element.innerText = numNinjas; 
}
    
// BONUS CHALLENGES
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
function randomBoard() {
    //clear the board
    for (var i = 0; i < theDojo.length; i++)
        for (var j = 0; j < theDojo[i].length; j++)
            theDojo[i][j] = 0;

    var count = 0;
    while (count < 10) {
      var i = Math.floor(Math.random() * theDojo.length);
      var j = Math.floor(Math.random() * theDojo[i].length);
        if (theDojo[i][j] == 0) {
            theDojo[i][j] = 1;
            count++;
        }
    }
}

function newGame() {
    //clear the board
    dojoDiv.innerHTML = "";
    //generate random board
    randomBoard();
    // shows the dojo for debugging purposes
    console.table(theDojo);
    // adds the rows of buttons into <div id="the-dojo"></div> 
    dojoDiv.innerHTML = render(theDojo);
}


// start the game
newGame();
// message to greet a user of the game
var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
