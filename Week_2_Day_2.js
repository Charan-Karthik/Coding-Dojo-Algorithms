var pokemon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

// Console log pokemon names with id greater than 99
for(var i=0; i<pokemon.length; i++){
    if(pokemon[i].id > 99){
        console.log(pokemon[i]);
    }
}
// Console log pokemon objects with id evenly divisible by 3
for(var i=0; i<pokemon.length; i++){
    if(pokemon[i].id % 3 === 0){
        console.log(pokemon[i]);
    }
}
// Console log pokemon objects with more than one type
for(var i=0; i<pokemon.length; i++){
    if(pokemon[i].types.length>1){
        console.log(pokemon[i]);
    }
}
// Console log pokemon names with only type being poison
for(var i=0; i<pokemon.length; i++){
    if(pokemon[i].types.length === 1  && pokemon[i].types[0] === "poison"){
        console.log(pokemon[i].name);
    }
}
// Console log first type of pokemon whose second type is flying
for(var i=0; i<pokemon.length; i++){
    // This also works:
    // if(pokemon[i].types[1] === "flying")
    if(pokemon[i].types.length > 1  && pokemon[i].types[1] === "flying"){
        console.log(pokemon[i].types[0])
    }
}
// Console log the reverse of the names of the pokemon whose only type is poison
for(var i=0; i<pokemon.length; i++){
    if(pokemon[i].types.length === 1  && pokemon[i].types[0] === "poison"){
        var nameArray = pokemon[i].name.split("");
        var reversedArray = nameArray.reverse();
        var reversedName = reversedArray.join("");

        console.log(reversedName);

        // This also works:
        // let reverseName = "";
        // for (let n = pokemon[m].name.length - 1; n >= 0; n--) {
        // reverseName += pokemon[m].name[n];
    }
}
