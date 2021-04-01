alert("welcome in my web");
alert("I hope to learn new something every day");
var username =prompt("please enter your name");
document.write(`<h1>${username}</h1>`);
var car =prompt ("Please add your favort car","bmw or mazda or lada");

if (car== "bmw") {
    document.write("<img src='https://read.os-cdn.com/wp-content/uploads/2019/09/bmw-750-2019-e1568886603337.jpg' />")
}
else if (car== "mazda") {document.write("<img src='https://wheelz.me/wp-content/uploads/2020/09/2021-Mazda-CX-30-2.5-Turbo_01.jpg' />")
}
else if (car== "lada") {document.write("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQON3sTKnkZSImpY0csm3LC_hD9WIB9Ry_wCnS0y4hFFod0QHRhwvBJt0goxbHlUvxW3Fo&usqp=CAU' />")
}

