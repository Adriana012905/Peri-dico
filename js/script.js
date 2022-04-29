var url="https://carlosreneas.github.io/endpoints/noticias.json";
var noticias;

function mostrarDetalle2(elid){
  document.getElementById(elid).style.visibility = "visible";
}

function leernoticias(){
  var cabecera = new Headers();

  var myInit = { method: 'GET',
                 headers: cabecera,
                 mode: 'cors',
                 cache: 'default' 
               };

  var miPeticion = new Request(url, myInit);

  fetch(miPeticion)  
    .then(res => res.json())
    .catch(error => console.error('Error:',error))
    .then(response => {
       noticias = response; 
       console.log('Noticias:',noticias);
       text = "<div id='todo'>";
       for(let i in noticias){
          let noti    = "n" + noticias[i].id;
          let resumen = "r" + noticias[i].id;
          let detalle = "d" + noticias[i].id;
          text += "<article id='"+noti+"'>";
          text += "<div id='"+resumen+"' style='border-style: ridge;'>";
          text += "<span style='color:blue;'><b>"+ noticias[i].titulo + " - " + noticias[i].categoria + " - " + noticias[i].fecha + "</b></span>";
          text += "<div>"+ noticias[i].descripcion;
          const proceso = "mostrarDetalle(\'"+detalle+"\',\'"+noticias[i].img+"\',\'"+noticias[i].detalle+"\')";
          text += "<span style='color:blue;' onclick=\""+proceso+"\"><b>Ver Mas</b></span>";
          text += "</div>";
          text += "</div>";
          text += "<div  id='"+detalle+"' style='display:none;'>";
          text += "<img src='"+noticias[i].img+"'>";
          text += "<div>"+ noticias[i].detalle + " ver menos " + "</div>";
          text += "</div>";          
          text += "</article><br>";          
       }
       text += "</div>";       
      document.getElementById("salida").innerHTML = text;       
    });
}
function mostrarDetalle(elid,imagen,detalle){
    text = "";
    text += "<div  id='lanoticia' style='top:100px;left:50px;'>";
    text += "<img src='"+imagen+"'>";
    text += "<div>"+ detalle + " ver menos " + "</div>";
    text += "</div>"; 
    document.getElementById(elid).style.display = '';
}
