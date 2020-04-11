function run() {
    console.log("script running")

//////////

const d = document

// const tabList = d.querySelector("ul.tabs")
// console.log(tabList)


function adjustImages() {
    console.log("adjusting")

    let storyImgs = d.querySelectorAll("img[data-image-name*='Dialogue Render']")

    //console.log(storyImgs)


    storyImgs.forEach(img => {

        img.style.height = "150px"
        img.style.width = "auto"
        img.classList.add("story-image")

        // console.log("find char name start")

        let charFileName = img.getAttribute("data-image-name")
        // console.log("char file name is...")
        // console.log(charFileName)

        let charName = findCharName(charFileName)
//console.log(`the character name found is ${charName}`)

        let nameNode = d.createElement("p")
        nameNode.appendClass = "speaker-name"
        nameNode.textContent = charName
        img.insertAdjacentElement("afterend",nameNode)

        //select td parent of image
        let parentTd = img.parentNode.parentNode.parentNode
        let nextTd = parentTd.nextSibling

        // parentTd.style.verticalAlign = "top"
        // nextTd.style.verticalAlign = "top"

        // parentTd.style.paddingTop = "1em"

        // nextTd.style.fontSize = "1.5em"
        // nextTd.style.lineHeight = "1.2em"

console.log("showing contents")
        let contents = parentTd.children
        console.log(contents)


    })

}

adjustImages()



// Function for parsing file names for each character

function findCharName(file) {
    if (file.includes("Dialogue Render")) {
        //search for string of character's name with if/else statement
        //and return their name without the rest of the filename.
        //console.log(file)

        const parseName = (file) => {

            //console.log(file.includes("Leo Tsukinaga"))

            let name = ""

            if (file.includes("Leo Tsukinaga")) {
                name = "Leo Tsukinaga"
            } else if (file.includes("Tsukasa Suou")) {
                name = "Tsukasa Suou"
            } else {
                name = "unknown"
            }

            return name

        }

        return parseName(file)




    } //else if other kind of render, card? character? need to double check...


}














//////////
}
run()