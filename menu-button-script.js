let timesClicked = 0;

document.querySelector(".menu-button").addEventListener("click", () => {
    if(timesClicked == 0)
    {
        document.querySelector(".menu-wrapper").style.display ="flex";
        timesClicked++;
    }
    else
    {
        if(timesClicked % 2 != 0){
            document.querySelector(".menu-wrapper").style.display ="none";
            timesClicked++;
        }
        else{
            document.querySelector(".menu-wrapper").style.display ="flex";
            timesClicked++;
        }
    }
});