var text="we found out a problem while extracting the app to continue press 'start'";
speed=40;
var i=0;
function typing() {
    var textplace=document.getElementById('textplace');
    var button=document.getElementById('button');
    if (i<=text.length) {
        textplace.textContent+=text.charAt(i);
        i++;
        setTimeout(typing,speed);

    }
    if (i==text.length) {
        button.style.visibility="visible";
    }
};
setTimeout(typing,1000);

function start() {
    var message=document.getElementById("message");
    
    alert("hey wait a second here is your surprise")
            alert("wait till the end ok.....")
            window.location.reload()
            window.location.href="hacking1.html"


};

    