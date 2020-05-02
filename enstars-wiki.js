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


// I HAVE TO USE ES5 BECAUSE MEDIAWIKI IS OUTDATED AF WHY



    
console.log("script is running!994235423");
//anyone reading this just ignore the random numbers lmao
var d = document;


// d.addEventListener("load",respondToPageLoad)

// var tabContainers = d.querySelectorAll(".tabBody");
    
// tabContainers.forEach(defineTabBehavior);

// function defineTabBehavior(tab,index,arr) {
//     tab.addEventListener("DOMNodeInserted",handleTabLoad);
//     console.log('added listener...');
// }

// d.querySelectorAll("li[data-tab*='flytabs']").forEach(function(tab){
//     tab.addEventListener("click",function(){
//         setTimeout(function(){ alert("Hello"); }, 5000);
//     });
// });

// function handleTabLoad() {
//     console.log("loaded new tab");
// }






/////actual working code below.....





function jumpToStory() {
    
}


var jumpButton = d.createElement("button");
jumpButton.classList.add("jumpButton");
jumpButton.style.height="75px";
jumpButton.textContent="Jump to Story";
jumpButton.addEventListener("click",jumpToStory);

var jumpButtonLink = d.createElement("a");
jumpButtonLink.href="#flytabs_0-content-wrapper";
jumpButtonLink.appendChild(jumpButton);


var activator = d.createElement("button");
activator.classList.add("activator");
activator.style.height = "75px";
activator.textContent="Activate Theme";
activator.addEventListener("click",activateTheme);
 
var body = d.querySelector("body");
body.appendChild(activator);


body.appendChild(jumpButtonLink);

 
body.style.position = "relative";
activator.style.position = "fixed";
activator.style.bottom = "0px";
activator.style.zIndex = "999";


jumpButtonLink.style.position="fixed";
jumpButtonLink.style.bottom="0px";
jumpButtonLink.style.left="100px";
jumpButtonLink.style.zIndex="999";
 
function activateTheme() {
 
var charArray = [
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
    "Mao Isara",
    "Arashi Narukami",
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
];
 
function adjustImages() {
    var storyImgs = d.querySelectorAll("img[data-image-name*='Render']");
 
    storyImgs.forEach(function(img) {
 
        img.style.maxWidth = "100px";
        img.style.height = "auto";
        img.classList.add("story-image");
 
        // console.log("find char name start")
 
        var charFileName = img.getAttribute("data-image-name");
        // console.log("char file name is...")
        // console.log(charFileName)
 
        var charName = findCharName(charFileName);
        //console.log(`the character name found is ${charName}`)
 
        var nameNode = d.createElement("p");
        nameNode.appendClass = "speaker-name";
        nameNode.textContent = charName;

        if (window.matchMedia("(max-width: 700px)").matches) {
            nameNode.style.textAlign = "left";
            nameNode.textContent+=":"
        }


        img.insertAdjacentElement("afterend",nameNode);
 
        //select td parent of image
        // let parentTd = img.parentNode.parentNode.parentNode
        var parentTd = img.closest("td");
        var nextTd = parentTd.nextSibling;
        if (nextTd) {
            nextTd.classList.add("nextTd");
        } else {
            return;
        };
 
        //need to account for edge cases in which
        //there may be 2 images in one cell
        //after this loop, find all td with 2 div class=center
        //with the character images and then appropriately
        //align them possibly stacked
 
        parentTd.style.verticalAlign = "top";
        parentTd.style.paddingTop = "1em";
        parentTd.style.fontSize = "1.5em";
        parentTd.style.lineHeight = "1.2em";
 
        // console.log("showing contents")
 
        var dialogueBox = d.createElement("div");
        dialogueBox.classList.add("dialigue-box");
 
        //also need to account for text content which is not contained in a p tag or other tag for some reason
 
            // let nonParagraphContent = nextTd.textContent
 
            // let newP = d.createElement("p")
            // newP.textContent = nonParagraphContent
 
            // dialogueBox.appendChild(newP)
 
 
 
//potentially instead of this
//with the above code making a new p
//and the below code taking p tags,
//just grab the inner html of the nextTd
//and simply add that to the dialogueBox...
//worth testing out...
//// the above note has been implemented! obsolete code commented out
 
 
 
 
 
            // let contents = d.querySelectorAll(".nextTd > *")
            // // console.log(contents)
 
            // contents.forEach(node => {
            //     dialogueBox.appendChild(node)
            // })
 
 
 
        var contents = nextTd.innerHTML;
 
        dialogueBox.innerHTML = contents;
 
 
 
        parentTd.appendChild(dialogueBox);
 
        nextTd.remove();
 
        parentTd.style.display = "flex";
        parentTd.style.alignItems = "flex-start";
        parentTd.style.justifyContent = "flex-start";
 
        if (window.matchMedia("(max-width: 700px)").matches) {
            parentTd.style.flexDirection = "column";
        }
        if (window.matchMedia("(min-width: 701px)").matches) {
            parentTd.style.flexDirection = "row";
        }
 
 
        //may need to adjust this part to make sure it
        //will hit all images even if two or more are
        //sharing a td initially
 
        var imageDiv = img.parentNode.parentNode;

        if (window.matchMedia("(min-width: 701px)").matches) {
            imageDiv.style.width = "150px";
            imageDiv.style.flex = "0 0 150px";
            dialogueBox.style.paddingLeft = "2em";
        }
 
    });




     if (window.matchMedia("(max-width: 700px)").matches) {
        storyImgs.forEach(function(img) {
            img.style.display = "none"
        });
     }

    if (window.matchMedia("(min-width: 701px)").matches) {
        storyImgs.forEach(function(img) {
            img.style.display = "static"
        });
     }


 
}
 
adjustImages();
 
 
 
// Function for parsing file names for each character
 
function findCharName(file) {
    if (file.includes("Render")) {
        //search for string of character's name with if/else statement
        //and return their name without the rest of the filename.
        //console.log(file)
 
        var name = "";
 
 
        var parseName = function(file, chName) {
            if (file.includes(chName)) {
                name = chName;
            }
            return name;
        };
 
        charArray.forEach(function(chName){
 
          if (parseName(file, chName)) {
            console.log(name);
            return name;
          }
 
        });
 
        return name;
 
 
    } //else if other kind of render, card? character? need to double check...
    //may not need to do this part bc i just reduced the
    //requirement for matching to "Render" from "Dialogue Render" but we'll see, it works rn so imma leave it for now... yeah
 
 
}
 
 
 
 
 
 
//still gotta consider how it loads on the pages with tabs
//potentially have it wait for a tab to load
//need to check how it functions when js is loaded directly on the wiki and not externally
//possibly can store a user's preference in localstorage
}
 
 
 
 
 
 
//////////
//future consisderation:
//see if external images can be loaded when using the common.js
//page on the wiki itself. unsure if that will work or be
//allowed but it's worth at least seeing if it's doable or not.
 
 
 
//also try to separate into different functions,
//particularly separating font size from the rest
//and/or add a separate toggle to increase or decrease font size
 
 
//also add some style changes like
//less borders, more bg color changes, etc.
 
//also possibly font changes/options
 
 
 
//// also to do: either copy tabs to bottom of page, or
//// add a jump to top button at the bottom --
//// latter option may require adding an id to the body
//// or another element which shows up high on the page
 
 
 
 
// ALSO see if it's possible to load the script
// simply upon loading/rendering/activating a tab
// rather than having to do it based on a manual click
// each time a new tab is loaded
// note that it seems to be lazy loading the tabs
// or something along those lines
// so unsure if it's doable or not
// but we can experiment and see
// -- on a new branch ofc. that's a note to self
// bc otherwise i will forget... lmao
 
 
 
 
//it seems the script breaks reference links
//and the jumping between the context and the explanation
//at the bottom of the page
//should look into what's causing it
//and try to apply a fix...




//////////
    // Your code here...
})();


// Below is the file name format for the small circle icons, for reference.
// [[File:Hokuto Hidaka Circle.png|center|90px]]<br>'''[[Hokuto Hidaka]]