console.log("ser");
let Array;

let token = localStorage.getItem('token');

function getNotes(listtype) {
  $.ajax({
    url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList',
    type: 'GET',
    // data:JSON.stringify(req),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    success: function (result) {
      console.log(result.data.data);
      Array = result.data.data;
      if (listtype == "Notes") {
        getAllNotes(Array);
      }
      else if (listtype == "Archive") {
        archiveNotes(Array)
      }
      else if (listtype == "Trash") {
        trashNotes(Array)
      }


    },
    error: function (error) {
      console.log(error);
    }
  });
}

function getAllNotes(Array) {
  let noteArray = Array.filter((e) => {
    return e.isArchived === false && e.isDeleted === false;
  })
  noteArray = noteArray.reverse();
  console.log(noteArray);
  
  document.getElementById('notes').innerHTML = noteArray.map((note) => `
    <div class="dispNote">
                <div class="oneNote" style="background-color:${note.color}">
                    <div id=${note.id} title="update">
                    <p class="notettl" id=${note.id} title="update">${note.title}</p>
                    <p title="update" id=${note.id}>${note.description}</p>
                    </div>
                    <div class="noteicons">
                    <img class="images" id=${note.id} title="reminder" src="../assets/notifications_black_24dp (copy).svg" alt="">
                    <img class="images" id=${note.id} title="collab" src="../assets/person_add_alt_black_24dp (copy).svg" alt="">
                    <div class="dropdown1">
                        <img class="images" id=${note.id} title="colorpallet" src="../assets/color_lens_black_24dp (copy).svg" alt="">
                        <div id="myDropdown" class="dropdown-content1">
                            <button id=${note.id} class="clr" title="#ffffff" style="background-color:#ffffff;"></button>
                            <button id=${note.id} class="clr" title="#FF6347" style="background-color:#FF6347;"></button>
                            <button id=${note.id} class="clr" title="#FF4500" style="background-color:#FF4500;"></button>
                            <button id=${note.id} class="clr" title="#FFFF00" style="background-color:#FFFF00;"></button>
                            <button id=${note.id} class="clr" title="#ADFF2F" style="background-color:#ADFF2F;"></button>
                            <button id=${note.id} class="clr" title="#43C6DB" style="background-color:#43C6DB;"></button>
                            <button id=${note.id} class="clr" title="#728FCE" style="background-color:#728FCE;"></button>
                            <button id=${note.id} class="clr" title="#2B65EC" style="background-color:#2B65EC;"></button>
                            <button id=${note.id} class="clr" title="#D16587" style="background-color:#D16587;"></button>
                            <button id=${note.id} class="clr" title="#F9A7B0" style="background-color:#F9A7B0;"></button>
                            <button id=${note.id} class="clr" title="#E2A76F" style="background-color:#E2A76F;"></button>
                            <button id=${note.id} class="clr" title="#D3D3D3" style="background-color:#D3D3D3;"></button>
                        </div>
                    </div>
                    <img class="images" id=${note.id} title="photo" src="../assets/insert_photo_black_24dp.svg" alt="">
                    <img class="images" id=${note.id} title="archive" src="../assets/archive_black_24dp (copy).svg" alt="">
                    <div class="dropdown">
                    <img class="images" id=${note.id} title="more" src="../assets/more_vert_black_24dp (copy).svg" alt="">
                        <div id="myDropdown" class="dropdown-content">
                            <a id=${note.id} title="delete">Delete Note</a>
                            <a href="#about">About</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </div>
                  </div>
           
                </div>
           

    </div>
    `

  ).join(' ');
}

function archiveNotes(Array) {
  let noteArray = Array.filter((e) => {
    return e.isArchived === true;
  })
  noteArray = noteArray.reverse();
  console.log(noteArray);
  document.getElementById('notes').innerHTML = noteArray.map((note) => `
    <div class="dispNote">
                <div class="oneNote" style="background-color:${note.color}">
                    <div id=${note.id} title="update">
                    <p class="notettl" id=${note.id} title="update">${note.title}</p>
                    <p title="update" id=${note.id}>${note.description}</p>
                    </div>
                    <div class="noteicons">
                    <img class="images"  title="reminder" src="../assets/notifications_black_24dp (copy).svg" alt="">
                    <img class="images"  title="collab" src="../assets/person_add_alt_black_24dp (copy).svg" alt="">
                    <div class="dropdown1">
                        <img class="images" id=${note.id} title="colorpallet" src="../assets/color_lens_black_24dp (copy).svg" alt="">
                        <div id="myDropdown" class="dropdown-content1">
                            <button id=${note.id} class="aclr" title="#ffffff" style="background-color:#ffffff;"></button>
                            <button id=${note.id} class="aclr" title="#FF6347" style="background-color:#FF6347;"></button>
                            <button id=${note.id} class="aclr" title="#FF4500" style="background-color:#FF4500;"></button>
                            <button id=${note.id} class="aclr" title="#FFFF00" style="background-color:#FFFF00;"></button>
                            <button id=${note.id} class="aclr" title="#ADFF2F" style="background-color:#ADFF2F;"></button>
                            <button id=${note.id} class="aclr" title="#43C6DB" style="background-color:#43C6DB;"></button>
                            <button id=${note.id} class="aclr" title="#728FCE" style="background-color:#728FCE;"></button>
                            <button id=${note.id} class="aclr" title="#2B65EC" style="background-color:#2B65EC;"></button>
                            <button id=${note.id} class="aclr" title="#D16587" style="background-color:#D16587;"></button>
                            <button id=${note.id} class="aclr" title="#F9A7B0" style="background-color:#F9A7B0;"></button>
                            <button id=${note.id} class="aclr" title="#E2A76F" style="background-color:#E2A76F;"></button>
                            <button id=${note.id} class="aclr" title="#D3D3D3" style="background-color:#D3D3D3;"></button>
                        </div>
                    </div>
                    <img class="images"  title="photo" src="../assets/insert_photo_black_24dp.svg" alt="">
                    <img class="images" id=${note.id} title="unarchive" src="../assets/unarchive_black_24dp.svg" alt="">
                    <div class="dropdown">
                    <img class="images" id=${note.id} title="more" src="../assets/more_vert_black_24dp (copy).svg" alt="">
                        <div id="myDropdown" class="dropdown-content">
                        <a id=${note.id} title="arcdelete">Delete Note</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                        </div>
                    </div>
                  </div>
           
                </div>
           

    </div>
    `

  ).join(' ');
}

function trashNotes(Array) {
  let noteArray = Array.filter((e) => {
    return e.isDeleted === true;
  })
  noteArray = noteArray.reverse();
  console.log(noteArray);
  document.getElementById('notes').innerHTML = noteArray.map((note) => `
    <div class="dispNote">
                <div class="oneNote" style="background-color:${note.color}">
                    <div id=${note.id} title="update">
                    <p class="notettl">${note.title}</p>
                    <p>${note.description}</p>
                    </div>
                    <div class="trashnoteicons">
                    <img class="images" id=${note.id} title="deleteforever" src="../assets/delete_forever_black_24dp.svg" alt="">
                    <img class="images" id=${note.id} title="restore" src="../assets/restore_from_trash_black_24dp.svg" alt="">                    
                  </div>
           
                </div>
           

    </div>
    `

  ).join(' ');
}

function addnote(ttl, desc) {
  console.log("called", ttl, desc);
  let req = {
    title: ttl,
    description: desc
  }
  $.ajax({
    url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes',
    type: 'POST',
    data: JSON.stringify(req),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    success: function (result) {
      console.log(result);
      getNotes("Notes");
      var x = document.getElementById("snackbar");
      x.innerHTML="Note added successfully..!";
      x.className = "show";
      setTimeout(function () {
         x.className = x.className.replace("show", "");
         
         }, 3000);
      document.getElementById('titlenote').style.display = "none";
      document.getElementById('closenote').style.display = "none";
      document.querySelector('.takeicons').style.display = "block";
      document.getElementById('title').value = "";
      document.getElementById('description').value = "";
    },
    error: function (error) {
      console.log(error);
    }
  });
}

const archive = (id) => {
  let req = {
    noteIdList: [id],
    isArchived: true
  }
  $.ajax({
    url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes',
    type: 'POST',
    data: JSON.stringify(req),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    success: function (result) {
      console.log(result);
      var x = document.getElementById("snackbar");
      x.innerHTML="Note archived successfully..!";
      x.className = "show";
      setTimeout(function () {
         x.className = x.className.replace("show", "");
         
         }, 3000);
      getNotes("Notes");
    },
    error: function (error) {
      console.log(error);
    }
  });
}

const unarchive = (id) => {
  let req = {
    noteIdList: [id],
    isArchived: false
  }
  $.ajax({
    url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes',
    type: 'POST',
    data: JSON.stringify(req),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    success: function (result) {
      console.log(result);
      var x = document.getElementById("snackbar");
      x.innerHTML="Note unarchived successfully..!";
      x.className = "show";
      setTimeout(function () {
         x.className = x.className.replace("show", "");
         
         }, 3000);
      getNotes("Archive");
    },
    error: function (error) {
      console.log(error);
    }
  });
}

const trash = (id) => {
  let req = {
    noteIdList: [id],
    isDeleted: true
  }
  $.ajax({
    url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes',
    type: 'POST',
    data: JSON.stringify(req),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    success: function (result) {
      console.log(result);
      var x = document.getElementById("snackbar");
      x.innerHTML="Note trashed successfully..!";
      x.className = "show";
      setTimeout(function () {
         x.className = x.className.replace("show", "");
         
         }, 3000);
      getNotes("Notes");
    },
    error: function (error) {
      console.log(error);
    }
  });
}

const restore = (id) => {
  let req = {
    noteIdList: [id],
    isDeleted: false
  }
  $.ajax({
    url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes',
    type: 'POST',
    data: JSON.stringify(req),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    success: function (result) {
      console.log(result);
      var x = document.getElementById("snackbar");
      x.innerHTML="Note restored successfully..!";
      x.className = "show";
      setTimeout(function () {
         x.className = x.className.replace("show", "");
         
         }, 3000);
      getNotes("Trash");
    },
    error: function (error) {
      console.log(error);
    }
  });
}

const deleteforever = (id) => {
  let req = {
    noteIdList: [id],
    isDeleted: true
  }
  $.ajax({
    url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/deleteForeverNotes',
    type: 'POST',
    data: JSON.stringify(req),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    success: function (result) {
      console.log(result);
      var x = document.getElementById("snackbar");
      x.innerHTML="Note deleted successfully..!";
      x.className = "show";
      setTimeout(function () {
         x.className = x.className.replace("show", "");
         
         }, 3000);
      getNotes("Trash");
    },
    error: function (error) {
      console.log(error);
    }
  });
}

const colorchanges = (id, code, list, type) => {
  let req = {
    noteIdList: [id],
    color: code
  }
  $.ajax({
    url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes',
    type: 'POST',
    data: JSON.stringify(req),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    success: function (result) {
      console.log(result);
      var x = document.getElementById("snackbar");
      x.innerHTML="Color updated successfully..!";
      x.className = "show";
      setTimeout(function () {
         x.className = x.className.replace("show", "");
         
         }, 3000);
      if (list === "Notes") {
        getNotes("Notes");
      } else if ((list === "Archive")) {
        getNotes("Archive");
      }
      if(type=== "regular"){

      }else if(type=== "update"){
        document.querySelector(".form-container").style.backgroundColor = code;
      }

    },
    error: function (error) {
      console.log(error);
    }
  });
}

let note_id;

const updateview = (id)=>{
  document.getElementById("myForm").style.display = "block";
  note_id =id
  console.log(id);
  let noteArray = Array.filter((e) => {
    return e.id === id;
  })
  console.log(noteArray[0].title);
  document.querySelector(".form-container").style.backgroundColor = noteArray[0].color;
  document.getElementById('updatettl').innerHTML=noteArray[0].title;
  document.getElementById("updatedesc").innerHTML=noteArray[0].description;
 return note_id;
}

const updateNotes = (ttl, desc)=>{
  let data = {
    title: ttl,
    description: desc,
    noteId:note_id
  }

  $.ajax({
    url: 'http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes',
    type: 'POST',
    data: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    },
    success: function (result) {
      console.log(result);
      var x = document.getElementById("snackbar");
      x.innerHTML="Note updated successfully..!";
      x.className = "show";
      setTimeout(function () {
         x.className = x.className.replace("show", "");
         
         }, 3000);
      
        getNotes("Notes");
     

    },
    error: function (error) {
      console.log(error);
    }
  });
}
