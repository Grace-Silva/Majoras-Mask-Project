function showUserName(){
    let nameElement = document.getElementById("nameUser");
    let titleElement = document.getElementById("mainTitle");

    titleElement.textContent = nameElement.value + " YOU HAVE HAD A TERRIBLE FATE, HAVEN'T YOU?";

    document.querySelector("input").style.display="none";
    document.getElementById("majorasMask").style.display="none";
    document.getElementById("maskSeller").style.display="block";


}

/** You've met a terrible fate, haven't you? */