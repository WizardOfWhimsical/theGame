/*
Ok so i started this as just a conversation with my AI 
i will fully disclose any and all conversations pertaining
to this creation. This is all me, Echo, was just my guy to talk to.
He suggested ideas and i ran with them as well as research.
*/

// assigned numeric values for easy conditionals later
const enemy = 3, air = 2, wall = 1;

// object tiles for map
const wallBlock = {
    type: "solid",visual: "#", value: wall
}
const emptySpace = {
    type: "void", visual: "-", value: air
}
const enemytile = {
    type:undefined,visual: "E", value:enemy
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

// builds map while returning an array for acuall coord system
let arrayMapCoord = buildTiles(myMap)
 
/*

Now that the map is fully visable i need to place toon on screen and see if i can get him to move around with the key down events

note:
thats how i did it, i made every square an obj i just gotta figure out how to reach into said obj

[] get toon on screen
[] make him move based on square value
[] find enemy 
[] tigger fade out and fade in
[] create enemy obj
[] go back to planning stage becuae battle squence/logic is next
*/

// click event.targets el.data-coord
// run check on coordObj to see in movible



/*
this thing does all kinds of shit i need to modularize
loops throu the arrays down to the obj
places objs on map for visual
createGrid[] for more percices data access
    seperates the visual from the data interaction
 */

function buildTiles(arrayOfTiles) {
        // local var
        let i = 0;
        let j = 0;
        let coordMap = createGrid(9, 9)

        for (let arrayOfTile of arrayOfTiles) {
            for (let tilesArray of arrayOfTile) {
                for (let tiles of tilesArray) {
                    for (let tile of tiles) {
                        // scoped var
                        let x = j;
                        let y = (i % 9);  
                let tileElement = document.getElementById(`small${x}-tile${y}`);

                        // sets tile.viual
                        tileElement.innerHTML = tile.visual; 
                        // data coord for e.listener to access dataObj
                        tileElement.setAttribute("data-coord", x + "," + y);
                        // incrementer that is used for the y var
                        i++;
                        // making flat map for easy cord click event access via the data attribute
                        coordMap[x][y] = tile;
                     }
                }j++
            } 
        }
    return coordMap;
    }

// i didnt know i needed an empty array to push the data in.
function createGrid(cols, rows) {
    let array2D = [];
    for (let x = 0; x < cols; x++){
        let col = [];
        for (let y = 0; y < rows; y++){
            // let row = [];
            col.push(null)
        }
        array2D.push(col)    
    }
    return array2D
}