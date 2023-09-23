document.getElementById("scan").addEventListener("click", ()=>{
    const success = confirm(`The scanner read "000000". Is this correct?`);
    if (success) {
        window.open("../download/index.html", "_self");
    }
});