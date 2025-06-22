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

/*
once i build all the pieces i can then make\
the build function loop through All the arrays
the loop system is going to get nuts tho
look into a while loop
once the second number reaches 9 i can reset the 
incementer and add to j
*/
// corner tiles
buildTiles(topLeftCornerTile, 1)
buildTiles(topRightCornerTile, 3)
buildTiles(bottomLeftCornerTile, 7)
buildTiles(bottomRightCornerTile, 9)

buildTiles(topCenterTile, 2)
buildTiles(rightCenterTile, 6)
buildTiles(bottomCenterTile, 8)
buildTiles(leftCenterTile, 4)
buildTiles(centerTile, 5)











// function buildTiles(arrayOfTiles) {
//     let i = 1;
//     for (let tile of arrayOfTiles) {
//         for (let t of tile) {
//             // its prints the visual
//             // now i can assign it to its square
//             // console.log(t)
             
//             document.getElementById("small1-tile" + [i]).innerHTML = t.visual; 
//             i++
//             console.log(i)
//             }
//         }
       
//     }

    function buildTiles(arrayOfTiles,square) {
        let i = 1;
        let j = square;
    for (let tile of arrayOfTiles) {
        for (let t of tile) {

            document.getElementById("small"+[j]+"-tile" + [i]).innerHTML = t.visual; 
            i++
            console.log(i)
            }
        }
       
    }