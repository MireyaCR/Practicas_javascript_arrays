// Add your code here
const lyricsGenerator=(arr)=>{
var counter=0;
const beatArray= arr.map(element =>{
    if(element===1){
        counter ++;
        if(counter===3){
            counter=0;
            return "Drop the base !!!Break the base!!!"
            }
            return "Drop the base"
        }
        counter=0;
        return 'Boom';
    });
    return beatArray.join(" ");
}
// Don't change anything bellow this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))