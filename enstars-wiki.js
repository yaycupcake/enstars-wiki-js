// ==UserScript==
// @name         enstars wiki story test code
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://ensemble-stars.fandom.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
//////////
    



const d = document



const charArray = [
    "Kohaku Oukawa",
    "Aira Shiratori",
    "Tomoya Mashiro",
    "Yuta Aoi",
    "Hinata Aoi",
    "Tori Himemiya",
    "Hiiro Amagi",
    "Mitsuru Tenma",
    "Midori Takamine",
    "Hajime Shino",
    "Sora Harukawa",
    "Tetora Nagumo",
    "Shinobu Sengoku",
    "Tsukasa Suou",
    "Arashi Narukami",
    "Mao Isara",
    "Natsume Sakasaki",
    "Tatsumi Kazehaya",
    "Mika Kagehira",
    "Hokuto Hidaka",
    "Ibara Saegusa",
    "Yuzuru Fushimi",
    "Adonis Otogari",
    "Jun Sazanami",
    "Koga Oogami",
    "HiMERU",
    "Subaru Akehoshi",
    "Mayoi Ayase",
    "Makoto Yuuki",
    "Souma Kanzaki",
    "Wataru Hibiki",
    "Kuro Kiryu",
    "Eichi Tenshouin",
    "Kaoru Hakaze",
    "Izumi Sena",
    "Shu Itsuki",
    "Nagisa Ran",
    "Niki Shiina",
    "Ritsu Sakuma",
    "Chiaki Morisawa",
    "Keito Hasumi",
    "Kanata Shinkai",
    "Tsumugi Aoba",
    "Hiyori Tomoe",
    "Madara Mikejima",
    "Leo Tsukinaga",
    "Nazuna Nito",
    "Rei Sakuma",
    "Rinne Amagi",
    "Akiomi Kunugi",
    "Jin Sagami",
    "Seiya Hidaka",
    "Anzu"
]



// const tabList = d.querySelector("ul.tabs")
// console.log(tabList)


function adjustImages() {
    console.log("adjusting")

    let storyImgs = d.querySelectorAll("img[data-image-name*='Dialogue Render']")

    //console.log(storyImgs)


    storyImgs.forEach(img => {

        img.style.maxWidth = "100px"
        img.style.height = "auto"
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
        // let parentTd = img.parentNode.parentNode.parentNode
        let parentTd = img.closest("td")
        let nextTd = parentTd.nextSibling
        if (nextTd) {
            nextTd.classList.add("nextTd")
        } else {
            return
        }

        //need to account for edge cases in which
        //there may be 2 images in one cell
        //after this loop, find all td with 2 div class=center
        //with the character images and then appropriately
        //align them possibly stacked

        parentTd.style.verticalAlign = "top"
        parentTd.style.paddingTop = "1em"
        parentTd.style.fontSize = "1.5em"
        parentTd.style.lineHeight = "1.2em"

        // console.log("showing contents")

        let dialogueBox = d.createElement("div")
        dialogueBox.classList.add("dialigue-box")


        let contents = d.querySelectorAll(".nextTd > *")
        // console.log(contents)

        contents.forEach(node => {
            dialogueBox.appendChild(node)
        })

        parentTd.appendChild(dialogueBox)

        nextTd.remove()

        parentTd.style.display = "flex"
        parentTd.style.alignItems = "flex-start"
        parentTd.style.justifyContent = "flex-start"

        let imageDiv = img.parentNode.parentNode
        imageDiv.style.width = "150px"
        imageDiv.style.flex = "0 0 150px"

        dialogueBox.style.paddingLeft = "2em"

    })

}

adjustImages()



// Function for parsing file names for each character

function findCharName(file) {
    if (file.includes("Dialogue Render")) {
        //search for string of character's name with if/else statement
        //and return their name without the rest of the filename.
        //console.log(file)

        let name = ""


        const parseName = (file, chName) => {
            if (file.includes(chName)) {
                name = chName
            }
            return name
        }

        charArray.forEach(chName => {
          
          if (parseName(file, chName)) {
            console.log(name)
            return name
          }

        })


        return name

        // return parseName(file)




    } //else if other kind of render, card? character? need to double check...


}














//////////
    // Your code here...
})();


// Below is the file name format for the small circle icons, for reference.
// [[File:Hokuto Hidaka Circle.png|center|90px]]<br>'''[[Hokuto Hidaka]]