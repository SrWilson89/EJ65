var hotelTa=[
    {
        nombre:"Hotel Ebora",
        precio1:30,
        precio2:40,
        precio3:55,
        city:"Talavera de Reina"
    },
    {
        nombre:"Hotel Roma",
        precio1:35,
        precio2:45,
        precio3:65,
        city:"Talavera de Reina"
    },
    {
        nombre:"Hotel Be Live City",
        precio1:81,
        precio2:112,
        precio3:150,
        city:"Talavera de Reina"
    },
    {
        nombre:"Hotel Perales",
        precio1:35,
        precio2:45,
        precio3:55,
        city:"Talavera de Reina"
    }
]

var hotelTo=[
    {
        nombre:"Hotel Isabel IV",
        precio1:60,
        precio2:70,
        precio3:85,
        city:"Toledo"
    },
    {
        nombre:"Hotel Fernando V",
        precio1:120,
        precio2:170,
        precio3:285,
        city:"Toledo"
    }
]

desplegable();

function desplegable(){
    if (document.getElementById('talavera').checked){
        var selector="";
        selector=`<select name="talavera" id ="selectala" onchange"detectavalor()">`;
        for (let x=0; x<hotelTa.length; x++){
            selector+=`<option value="${x}"> ${hotelTa[x].nombre} </option>`;
        }
        selector+=`<select>`;
        document.getElementById("contenido").innerHTML=selector;
    }else{
        var selector="";
        selector=`<select name="talavera" id ="selectole" onchange"detectavalor()">`;
        for (let x=0; x<hotelTo.length; x++){
            selector+=`<option value="${x}"> ${hotelTo[x].nombre} </option>`;
        }
        selector+=`<select>`;
        document.getElementById("contenido").innerHTML=selector;
    }
}

function detectavalor(){
    if(document.getElementById("selectala").value){
        document.getElementById("precio").innerHTML=hotelTa[document.ge]
    }
}