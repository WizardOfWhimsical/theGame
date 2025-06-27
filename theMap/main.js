/*
Ok so i started this as just a conversation with my AI 
i will fully disclose any and all conversations pertaining
to this creation. This is all me, Echo, was just my guy to talk to.
He suggested ideas and i ran with them as well as research.
*/

// assigned numeric values for easy conditionals later
const enemy = 3, air = 2, wall = 1, player = 0;

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

character = {
type: null,visual: "@", value: player
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
[x] click.event pulls (x,y) value
    [] set up fail safes for clicking outside div
    [] toon moves, change old spot to void
[x] get toon on screen
[] make him move based on square value
[] find enemy 
[] tigger fade out and fade in
[] create enemy obj
[] go back to planning stage becuae battle squence/logic is next
*/

// builds map while returning an array for actual coord system with x,y
let arrayMapCoord = buildTiles(myMap)

//should be global just to be safe
const gridMap = document.getElementById("gridContainer");

gridMap.addEventListener("click", (e) => {
    let target = e.target;
    let coordnates = target.dataset["coord"];
    // console.log(coordnates);
    let [x, y] = coordnates.split(",").map(Number);
    console.log(x, y)


    updating2dArray(arrayMapCoord[x][y])
    updatingScreen(arrayMapCoord[x][y], x, y)

console.log(arrayMapCoord)
})


/*
hope to replace all this with a tile class and extends to map
seperating each oof these things into methods
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


    //NEED POSITIONS TO UPDATE PROPERLY
// i didnt know i needed an empty array to push the data in.
//keep this helper guy, doing big things lmfao
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

// const enemy = 3, air = 2, wall = 1;
//thats not an array,it is the specific obj 
//in the array, rethink this formula
function updating2dArray(array) {
    //updates 2d array
    let clickedPosition = array
    console.log(clickedPosition)

    if (clickedPosition.value === 3) {
        //enemy trigger logic
        console.log("enemy Inbound");
    } else if (clickedPosition.value === 1) {
        //wall logic
            console.log("thats a wall")
    } else (
        clickedPosition=character
    )

    console.log(clickedPosition)
    console.log(arrayMapCoord)
}

function updatingScreen(obj,xPos,yPos) {
    //puts character onscreen
    //i feel like i should abstract:
    // [] the character.visual
    // [] x,y

    if (obj.value !== 2) {
        console.log("not valid spot")
    } else (document.getElementById(`small${xPos}-tile${yPos}`).innerHTML = character.visual)
    debugger;
}