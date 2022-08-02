// Random 6-sided die roll
function d6Roll(){
    var roll = Math.random(); // Math.random() returns a random number in the range [0, 1)
    roll = Math.ceil(roll*6);

    return roll
}

var playerRoll = d6Roll();
console.log("The player rolled: "+playerRoll)


//
//
// Magic Eight Ball
function magicEight(){
    var lifesAnswers = [
        'It is certain', 
        'It is decidedly so',
        'Without a doubt',
        'Yes, definitely',
        'You may rely on it',
        'As I see it, yes',
        'Most likely', 
        'Outlook good',
        'Signs point to yes',
        'Yes',
        'Reply hazy, try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        "Don't bet on it", 
        'My reply is no',
        'My sources say no',
        'Outlook not so good',
        'Very doubtful'];
        
    var i = Math.floor(Math.random()*lifesAnswers.length);

    return lifesAnswers[i];
}

console.log(magicEight())