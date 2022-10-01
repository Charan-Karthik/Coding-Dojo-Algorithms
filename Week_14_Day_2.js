/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//                           v
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

function rehash(str) {
    const hashmap = {};
    let numStr = "";
    let key;

    // Phase 1
    for(char of str){
        if(isNaN(char)){
            
            if(hashmap.hasOwnProperty(key)){
                hashmap[key] += parseInt(numStr);
                numStr = ""
            }

            if(hashmap.hasOwnProperty(char)){
                key = char;
                continue
            } else {
                key = char;
                hashmap[key] = 0;
            }

        } else {
            numStr += char;
        }
    }
    hashmap[key] += parseInt(numStr);

    // Phase 2
    const keyArr = Object.keys(hashmap);
    keyArr.sort((l1, l2) => l1 > l2 ? 1 : -1);
    
    let resultStr = "";
    for(char of keyArr){
        resultStr += char;
        resultStr += hashmap[char];
    }

    return resultStr
}

console.log(rehash(str1));
// console.log(rehash(str1) === expected1, "<-- should be \"true\"");