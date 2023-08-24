function delay(time){

    return new Promise(resolve => setTimeout(resolve, time));
        
}

async function showUserName(){
    let nameElement = document.getElementById("nameUser");
    let titleElement = document.getElementById("mainTitle");
    
    

    document.querySelector(".nameUserInput").style.display="none";
    document.getElementById("majorasMask").style.display="none";
    document.getElementById("buttonUser").style.display="none";
    document.querySelector(".all-container").style="background: #000";
    document.getElementById("mainTitle").style.display="none";
    await delay(1500);


    document.getElementById("maskSeller").style.display="block";
    titleElement.textContent = nameElement.value + ", You have had a terrible fate, haven't you?";
    document.getElementById("mainTitle").style.display="block";


}

/** You've met a terrible fate, haven't you? */