
    //call ajax
    let ajax = new XMLHttpRequest();
    let method = "GET";
    let url = "back/meds.php";
    let asynchronous = true;

    ajax.open(method, url, asynchronous);
    //send ajax request
    ajax.send();

    //receive response from meds.php
    ajax.onreadystatechange = function (){
    if (this.readyState = 4 && this.status == 200){
    //convertir JSON a array
    let data = JSON.parse(this.responseText);
    console.log(data); //nomas para debuggear
    //html valores para tabla
    let html = "";
    //looping through the data

    for (let a = 0; a < data.length; a++){
    let nombre = data[a][0];
    let recetados = data[a][1];

    html += "<tr>";
    html += "<th scope='row'>" + (a + 1) + "</th>"
    html += "<td>" + nombre + "</td>";
    html += "<td>" + recetados + "</td>";
    html += "</tr>";
}
    document.getElementById("data").innerHTML = html;
}
}
