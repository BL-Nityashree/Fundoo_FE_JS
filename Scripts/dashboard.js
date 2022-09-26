// window.addEventListener('DOMContentLoaded', ()=>{
// })
console.log("helloooo");
const ttl = document.getElementById('title').value;
const desc = document.getElementById('description').value;

let updatenoteID;

getNotes("Notes");
document.getElementById('note').style.backgroundColor = "NavajoWhite";

document.getElementById('takenote').addEventListener('click', () => {
    document.getElementById('titlenote').style.display = "block";
    document.getElementById('closenote').style.display = "block";
    document.querySelector('.takeicons').style.display = "none";

})

document.getElementById('close').addEventListener('click', () => {
    const ttl = document.getElementById('title').value;
    const desc = document.getElementById('description').value;
    console.log(ttl, desc);
    if (ttl == "" && desc == "") {
        document.getElementById('titlenote').style.display = "none";
      document.getElementById('closenote').style.display = "none";
      document.querySelector('.takeicons').style.display = "block";
    } else {
        addnote(ttl, desc);
    }
})

document.getElementById('note').addEventListener('click', () => {
    document.querySelector('.takenote').style.display = "block";
    document.getElementById('note').style.backgroundColor = "NavajoWhite";
    document.getElementById('rem').style.backgroundColor = "transparent";
    document.getElementById('edit').style.backgroundColor = "transparent";
    document.getElementById('archive').style.backgroundColor = "transparent";
    document.getElementById('trash').style.backgroundColor = "transparent";
    getNotes("Notes");
})

document.getElementById('archive').addEventListener('click', () => {
    document.querySelector('.takenote').style.display = "none";
    document.getElementById('note').style.backgroundColor = "transparent";
    document.getElementById('rem').style.backgroundColor = "transparent";
    document.getElementById('edit').style.backgroundColor = "transparent";
    document.getElementById('archive').style.backgroundColor = "NavajoWhite";
    document.getElementById('trash').style.backgroundColor = "transparent";
    getNotes("Archive");

})

document.getElementById('trash').addEventListener('click', () => {
    document.querySelector('.takenote').style.display = "none";
    document.getElementById('note').style.backgroundColor = "transparent";
    document.getElementById('rem').style.backgroundColor = "transparent";
    document.getElementById('edit').style.backgroundColor = "transparent";
    document.getElementById('archive').style.backgroundColor = "transparent";
    document.getElementById('trash').style.backgroundColor = "NavajoWhite";
    getNotes("Trash");
})


document.getElementById('notes').addEventListener('click', (e) => {
    console.log("notes data====", e.target);
    let id = e.target.id;
    if (e.target.title === "delete") {
        // let noteId = document.getElementById('myDropdown');
        console.log("notes ====", e.target.title);
        trash(e.target.id);
    } else if (e.target.title === "archive") {
        console.log("notes ====", e.target.title);
        archive(e.target.id);
    } else if (e.target.title === "restore") {
        console.log("notes ====", e.target.title);
        restore(e.target.id);
    } else if (e.target.title === "unarchive") {
        console.log("notes ====", e.target.title);
        unarchive(e.target.id);
    } else if (e.target.title === "deleteforever") {
        console.log("notes ====", e.target.title);
        deleteforever(e.target.id);
    } else if (e.target.className === "clr") {
        console.log("notes ====", e.target.title, e.target.className);
        colorchanges(e.target.id, e.target.title, "Notes", "regular");
    } else if (e.target.className === "aclr") {
        console.log("notes ====", e.target.title, e.target.className);
        colorchanges(e.target.id, e.target.title, "Archive", "regular");
    }else if (e.target.title === "update") {
        console.log("notes ====", e.target.title, e.target.className);
        updatenoteID= updateview(e.target.id);
    }

})

function updateclose(){
    document.getElementById("myForm").style.display = "none";
}

function updateNote(){
    const ttl = document.getElementById('updatettl').value;
    const desc = document.getElementById("updatedesc").value;
    console.log(ttl, desc);
    updateNotes(ttl, desc);
    document.getElementById("myForm").style.display = "none";
}


function colour(color){
    console.log("colour");
    colorchanges(updatenoteID, color, "Notes", "update");
}
let count=0;
document.getElementById("menu").addEventListener('click', (a)=>{
    count++;
    console.log(count,count / 2);
    
    if(count % 2 !=0){
        console.log("if");
        document.querySelector(".sideNav").style.width="40px";
        document.querySelector(".names").style.display="none";
        document.querySelector(".rnames").style.display="none";
        document.querySelector(".enames").style.display="none";
        document.querySelector(".anames").style.display="none";
        document.querySelector(".tnames").style.display="none";
        document.querySelector(".maincontent").style.width="98%";
        document.querySelector(".notes").style.marginLeft="3%";
        
    }else if(2 % 2 ==0){
        console.log("else");
        document.querySelector(".sideNav").style.width="250px";
        document.querySelector(".names").style.display="block";
        document.querySelector(".rnames").style.display="block";
        document.querySelector(".enames").style.display="block";
        document.querySelector(".anames").style.display="block";
        document.querySelector(".tnames").style.display="block";
       
    }
    
})
