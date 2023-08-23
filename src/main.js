function showUserName(){
    let nameElement = document.getElementById("nameUser");
    let titleElement = document.getElementById("mainTitle");

    titleElement.textContent = "You've had a terrible fate, haven't you, " + nameElement.value + "?";
}

/** You've met a terrible fate, haven't you? */