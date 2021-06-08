function Tspain(){
    document.getElementById('precio1').innerHTML="7 <span> €/mes</span>";
    document.getElementById('precio2').innerHTML="15 <span> €/mes</span>";
    document.getElementById('precio3').innerHTML="20 <span> €/mes</span>";

    document.getElementById('texto1').innerHTML="Acceso al contenido y descarga de codigo";
    document.getElementById('texto2').innerHTML="Acceso al contenido y descarga de codigo + 1 taller";
    document.getElementById('texto3').innerHTML="Acceso al contenido y descarga de codigo + 1 taller + 1 Web";

    cambio();
}

function Tfrance(){
    document.getElementById('precio1').innerHTML="7 <span> €/ mois</span>";
    document.getElementById('precio2').innerHTML="15 <span> €/ mois</span>";
    document.getElementById('precio3').innerHTML="20 <span> €/ mois</span>";

    document.getElementById('texto1').innerHTML="Accès au contenu et code de téléchargement";
    document.getElementById('texto2').innerHTML="Accès au contenu et téléchargement du code + 1 atelier";
    document.getElementById('texto3').innerHTML="Accès au contenu et téléchargement du code + 1 atelier + 1 Web";

    cambio();
}

function cambio(){
    if (document.getElementById('mesano').checked){
        document.getElementById('precio1').innerHTML="70 <span> €/A</span>";
        document.getElementById('precio2').innerHTML="150 <span> €/A</span>";
        document.getElementById('precio3').innerHTML="200 <span> €/A</span>";
    }
    else{
        document.getElementById('precio1').innerHTML="7 <span> €/M</span>";
        document.getElementById('precio2').innerHTML="15 <span> €/M</span>";
        document.getElementById('precio3').innerHTML="20 <span> €/M</span>";
    }
    
}