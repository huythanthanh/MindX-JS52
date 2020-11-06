var $yes = document.getElementById("yes");
var $no = document.getElementById("no");
let opacity = 1;
$yes.onclick = () => {
        alert("i know that 😎🙌🙌");
}
$no.onmouseenter = () => {
    let ran = Math.floor(Math.random() * 180);
    let ran2 = Math.floor(Math.random() * 1100);
    $no.style.top = `${ran}`;  
    $no.style.left = `${ran2}`;
    opacity = opacity - 0.2;
    $no.style.opacity = `${opacity}`;
}