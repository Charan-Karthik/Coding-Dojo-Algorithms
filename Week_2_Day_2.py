pokemonList = [
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

# Print names of pokemon with id greater than 99
# for pokemon in pokemonList:
#     if pokemon['id'] > 99:
#         print(pokemon['name'])

# Print pokemon objects with id evenly divisible by 3
# for pokemon in pokemonList:
#     if pokemon['id'] % 3 == 0:
#         print(pokemon)

# Print pokemon objects with more than one type
# for pokemon in pokemonList:
#     if len(pokemon['types']) > 1:
#         print(pokemon)

# Print pokemon names whose only type is poison
# for pokemon in pokemonList:
#     if len(pokemon['types']) == 1 and pokemon['types'][0] == 'poison':
#         print(pokemon['name'])

# Print pokemon names whose second type is flying
# for pokemon in pokemonList:
#     if len(pokemon['types']) > 1 and pokemon['types'][1] == 'flying':
#         print(pokemon['name'])

# Print the reverse of the names of pokemon whose only type is poison
# for pokemon in pokemonList:
#     if len(pokemon['types']) == 1 and pokemon['types'][0] == 'poison':
#         print(pokemon['name'][::-1])