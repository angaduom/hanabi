# Design
## Intialization
- create a single array of objects that will have all cards
example = [{'number':1,'color':'white', 'information':null },{'number':2,'color':'red','information':null},...]

## Once a game starts
- Copy this file from the main server to the admin of the table.
- The admin server will generate a list of players and the cards that they have. This will allow us to save the state of the game as well, and people can resume when they join again.
- Shuffle the contents of the array and pop the cards to all the players
 
## Table management
- Let a new player create a table or join and existing table.
- When creating a table let the person provide a password that can be accessed by the website server alone. would be nice to implement something like encryption to keep the passwords safe.
- Once all players have joined, then the admin should be able to say start game, no need for confirmation. 

