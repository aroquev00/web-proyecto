// Get Date 

var setDate = function (){

    let d = new Date();
    let dNumber = d.getDate();
    
    let year = d.getFullYear();
    let day;
    switch(d.getDay()) {
        case 0:
            day = "Domingo";
            break;
        case 1:
            day = "Lunes";
            break;
        case 2:
            day = "Martes";
            break;
        case 3:
            day = "Miércoles";
            break;
        case 4:
            day = "Jueves";
            break;
        case 5:
            day = "Viernes";
            break;
        case 6:
            day = "Sábado";
            break;
    } 

    let month;
    switch(d.getMonth()) {
        case 0:
            month = "enero";
            break;
        case 1:
            month = "febrero";
            break;
        case 2:
            month = "marzo";
            break;
        case 3:
            month = "abril";
            break;
        case 4:
            month = "mayo";
            break;
        case 5:
            month = "junio";
            break;
        case 6:
            month = "julio";
            break;
        case 7:
            month = "agosto";
            break;
        case 8:
            month = "septiembre";
            break;
        case 9:
            month = "octubre";
            break;
        case 10:
            month = "noviembre";
            break;
        case 11:
            month = "diciembre";
            break;
    } 

    var html = day + " " + dNumber + ", " + month + " " + year;
    $("#fecha").html(html);
    $("#fecha").css({"color":"grey","font-weight":"lighter"});

}



$(document).ready(function(){
    setDate();
});