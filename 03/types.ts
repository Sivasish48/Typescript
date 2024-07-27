// Type in TypeScript are used to define custom types or shapes of the object like the interfaces  
//  type in typescript are needed to be equated .
// Type cannot be implemented by the classes .
// type doesnot extend.

// example 
 type  Player = {
    name: string;
    score: number;  
    age : number;
 };

 type MoreInfo = {
    playerInfo: Player;
    gender: string;
    location: string;
    currentlyActive: boolean;
 }

 function getPlayerInfo(Aboutplayer: MoreInfo){
    return `The Great ${Aboutplayer.gender} ${Aboutplayer.playerInfo.name} with ${Aboutplayer.playerInfo.score} runs at the age of ${Aboutplayer.playerInfo.age} born in ${Aboutplayer.location} ${Aboutplayer.currentlyActive ? 'and has a lot cricket left in him.' : 'has retired.'}`;
 }


 console.log(getPlayerInfo({
   playerInfo: {
     name: 'Sachin Tendulkar',
     score: 100,
     age: 27,
   },
   gender: 'male',
   location: 'Mumbai',
   currentlyActive: true,
 }));
 
 // output --  The Great male Sachin Tendulkar with 100 runs at the age of 27 born in Mumbai and has a lot cricket left in him.