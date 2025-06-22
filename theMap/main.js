/*
Ok so i started this as just a conversation with my AI 
i will fully disclose any and all conversations pertaining
to this creation. This is all me, Echo, was just my guy to.
He suggested ideas and i ran with them as well as research.
*/

// assigned numeric values for easy conditionals later
const enemy = 3, air = 2, wall = 1;

// object tiles for map
const wallBlock = {
    type: "solid",visual: "#", value: wall
}
const emptySpace = {
    type: "void", visual: "-", value: 2
}
const enemytile = {
    type:undefined,visual: "E", value:3
} 

// tiles assigned to an array to loop through for creation
const topLeftCornerTile = [
    [wallBlock, wallBlock, wallBlock],
    [wallBlock, emptySpace, emptySpace],
    [wallBlock, emptySpace, emptySpace]
]
const topCenterTile = [
    [wallBlock, wallBlock, wallBlock],
    [emptySpace, emptySpace, emptySpace],
    [emptySpace, emptySpace, emptySpace]
]
const topRightCornerTile = [
    [wallBlock, wallBlock, wallBlock],
    [emptySpace, emptySpace, wallBlock],
    [emptySpace, emptySpace, wallBlock]
]
const rightCenterTile = [
    [emptySpace, emptySpace, wallBlock],
    [emptySpace, emptySpace, wallBlock],
    [emptySpace, emptySpace, wallBlock]
]


const bottomRightCornerTile = [
    [emptySpace, emptySpace, wallBlock],
    [emptySpace, emptySpace, wallBlock],
    [wallBlock, wallBlock, wallBlock]
]

const bottomCenterTile = [
   [emptySpace, emptySpace, emptySpace],
    [emptySpace, emptySpace, emptySpace],
    [wallBlock, wallBlock, wallBlock] 
]
const bottomLeftCornerTile = [
    [wallBlock, emptySpace, emptySpace],
    [wallBlock, emptySpace, emptySpace],
    [wallBlock, wallBlock, wallBlock]
]

const leftCenterTile = [
     [wallBlock, emptySpace, emptySpace],
    [wallBlock, emptySpace, emptySpace],
    [wallBlock, emptySpace, emptySpace]
]

const centerTile = [
    [emptySpace, emptySpace, emptySpace],
    [emptySpace, emptySpace, emptySpace],
    [emptySpace, emptySpace, emptySpace]
]

const myMap = [
    [topLeftCornerTile, topCenterTile, topRightCornerTile],
    [leftCenterTile, centerTile, rightCenterTile],
    [bottomLeftCornerTile, bottomCenterTile, bottomRightCornerTile]
]

/*
once i build all the pieces i can then make\
the build function loop through All the arrays
the loop system is going to get nuts tho
look into a while loop
once the second number reaches 9 i can reset the 
incementer and add to j
*/
// corner tiles
// buildTiles(topLeftCornerTile, 1)
// buildTiles(topRightCornerTile, 3)
// buildTiles(bottomLeftCornerTile, 7)
// buildTiles(bottomRightCornerTile, 9)
// buildTiles(topCenterTile, 2)
// buildTiles(rightCenterTile, 6)
// buildTiles(bottomCenterTile, 8)
// buildTiles(leftCenterTile, 4)
// buildTiles(centerTile, 5)

buildTiles(myMap)

/*

Now that the map is fully visable i need to place toon on screen and see if i can get him to move around with the key down events

note
thats how i did it, i made every square an obj i just gotta figure out how to reach into said obj

[] get toon on screen
[] make him move based on square value
[] find enemy 
[] tigger fade out and fade in
[] create enemy obj
[] go back to planning stage becuae battle squence/logic is next


*/


// multidiminsional arrays dude


    function buildTiles(arrayOfTiles) {
        let i = 1;
        let j = 1;
        for (let arrayOfTile of arrayOfTiles) {
            for (let tilesArray of arrayOfTile) {
                
                for (let tiles of tilesArray) {
                    
                    for (let tile of tiles) {
                        let x = j;
                         let y = (i % 9) + 1;   
                            // console.log("X 1-9", x)
                            // console.log("Y repeated 1-9", y)
                            console.log(x,y)
                            console.log(tile)
// document.getElementById("small"+[x]+"-tile" + [y]).innerHTML = tile.visual; 
document.getElementById("small"+[x]+"-tile" + [y]).innerHTML = tile.visual; 
                i++
                // console.log(i) 
                     }
                }j++
            }
        }
        
    }

    // function wholeMap() {
//     let num = 1;
//     for (let my of myMap) {
//         buildTiles(my, num)
//         num += 1;
//     }
// }

// wholeMap()