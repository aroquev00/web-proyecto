
            
$(document).ready(function(){
    


    //Llamada de ajax para traer información básica 
    $.ajax({
        url: 'back/getInfoBasica.php',
        type: 'POST',
        dataType: 'JSON',
    })
    .done(function(res){
        console.log('RES: '+res);
        if (res == "fail")
            console.log("Error in query (back/getPatientInfo.php)");
        else {
            var patientInfo = res;
            var cantEntradas = patientInfo.length;
            
            document.getElementById("nombre").innerHTML = patientInfo[0]["nombre"];
            document.getElementById("sexo").innerHTML = patientInfo[0]["sexo"];
            document.getElementById("dob").innerHTML = patientInfo[0]["dob"];
            document.getElementById("curp").innerHTML = patientInfo[0]["curp"];
            document.getElementById("telefono").innerHTML = patientInfo[0]["telefono"];
            document.getElementById("correo").innerHTML = patientInfo[0]["correo"];
            document.getElementById("domicilio").innerHTML = patientInfo[0]["domicilio"];
            document.getElementById("nss").innerHTML = patientInfo[0]["nss"];
            document.getElementById("sangre").innerHTML = patientInfo[0]["sangre"];
            document.getElementById("nombrePapa").innerHTML = patientInfo[0]["padre"];
            document.getElementById("nombreMama").innerHTML = patientInfo[0]["madre"];
            document.getElementById("compañia").innerHTML = patientInfo[0]["compañia"];
            document.getElementById("polizaNum").innerHTML = patientInfo[0]["polizaNum"];
            document.getElementById("fechaVen").innerHTML = patientInfo[0]["fechaVen"];  
       
        }
    })
    .fail(function(e) { 
        console.log(e); 
    })


    //Llamada de ajax para traer información de consultas
    $.ajax({
        url: 'back/getConsultas.php',
        type: 'GET',
        dataType: 'JSON',
    })
    .done(function(res){
        if (res == "fail")
            console.log("Error in query (back/getPatientInfo.php)");
        else {
            var patientInfo = res;
            var cantEntradas = patientInfo.length;
            
             /*  document.getElementById("nombre").innerHTML = patientInfo[0]["nombre"];
            document.getElementById("sexo").innerHTML = patientInfo[0]["sexo"];
            document.getElementById("dob").innerHTML = patientInfo[0]["dob"];
            document.getElementById("curp").innerHTML = patientInfo[0]["curp"];
            document.getElementById("telefono").innerHTML = patientInfo[0]["telefono"];
            document.getElementById("correo").innerHTML = patientInfo[0]["correo"];
            document.getElementById("domicilio").innerHTML = patientInfo[0]["domicilio"];
            document.getElementById("nss").innerHTML = patientInfo[0]["nss"];
            document.getElementById("sangre").innerHTML = patientInfo[0]["sangre"];
            document.getElementById("nombrePapa").innerHTML = patientInfo[0]["padre"];
            document.getElementById("nombreMama").innerHTML = patientInfo[0]["madre"];
            document.getElementById("compañia").innerHTML = patientInfo[0]["compañia"];
            document.getElementById("polizaNum").innerHTML = patientInfo[0]["polizaNum"];
            document.getElementById("fechaVen").innerHTML = patientInfo[0]["fechaVen"];  */

            // Despliegue de las entradas de tipo consulta
            for(var i=0;i<cantEntradas;i++){

                var j = i+1;
                const newDiv = document.createElement("div");
                newDiv.setAttribute("class", "entrada consulta");
                
                const newHeader = document.createElement("h1");
                newHeader.innerText = "Consulta #"+j;

                
                const newB = document.createElement("b");
                newB.innerText = "Tipo:"
                
                const newS = document.createElement("span");
                newS.innerText = " Consulta";
                newS.setAttribute("class","tipoEntrada");
                
                const newBr = document.createElement("br");

                const newDivFlex = document.createElement("div");
                newDivFlex.setAttribute("class","flex-container");
                
                //Creación de fecha
                const newDivFlexFecha = document.createElement("div");
                newDivFlexFecha.setAttribute("class","flex-item-info flex-4");
                const newBFecha = document.createElement("b");
                newBFecha.innerText = "Fecha: ";
                const newSFecha = document.createElement("span");
                newSFecha.setAttribute("id", "fecha"+i);
                newDivFlexFecha.appendChild(newBFecha);
                newDivFlexFecha.appendChild(newSFecha);
                newDivFlex.appendChild(newDivFlexFecha);

                
                //Creación de peso
                const newDivFlexPeso = document.createElement("div");
                newDivFlexPeso.setAttribute("class","flex-item-info flex-4");
                const newBPeso = document.createElement("b");
                newBPeso.innerText = "Peso: ";
                const newSPeso = document.createElement("span");
                newSPeso.setAttribute("id", "peso"+i);
                newDivFlexPeso.appendChild(newBPeso);
                newDivFlexPeso.appendChild(newSPeso);
                newDivFlex.appendChild(newDivFlexPeso);

                //Creación de altura
                const newDivFlexAlt = document.createElement("div");
                newDivFlexAlt.setAttribute("class","flex-item-info flex-4");
                const newBAlt = document.createElement("b");
                newBAlt.innerText = "Altura: ";
                const newSAlt = document.createElement("span");
                newSAlt.setAttribute("id", "altura"+i);
                newDivFlexAlt.appendChild(newBAlt);
                newDivFlexAlt.appendChild(newSAlt);
                newDivFlex.appendChild(newDivFlexAlt);

                //Creación de presión
                const newDivFlexPresion = document.createElement("div");
                newDivFlexPresion.setAttribute("class","flex-item-info flex-4");
                const newBPresion = document.createElement("b");
                newBPresion.innerText = "Presión: ";
                const newSPresion = document.createElement("span");
                newSPresion.setAttribute("id", "presion"+i);
                newDivFlexPresion.appendChild(newBPresion);
                newDivFlexPresion.appendChild(newSPresion);
                newDivFlex.appendChild(newDivFlexPresion);

                //Creación de razón
                const newDivFlexRazon = document.createElement("div");
                const newBRazon = document.createElement("b");
                newBRazon.innerText = "Razon: ";
                const newSRazon = document.createElement("span");
                newSRazon.setAttribute("id", "razon"+i);
                newDivFlexRazon.appendChild(newBRazon);
                newDivFlexRazon.appendChild(newSRazon);
                

                //Creación de comentarios
                const newDivFlexComen = document.createElement("div");
                const newBComen = document.createElement("b");
                newBComen.innerText = "Comentarios: \n";
                const newSComen = document.createElement("span");
                newSComen.setAttribute("id", "comentario"+i);
                newDivFlexComen.appendChild(newBComen);
                newDivFlexComen.appendChild(newBr);
                newDivFlexComen.appendChild(newSComen);
                
                
                newDiv.appendChild(newHeader);
                newDiv.appendChild(newB);
                newDiv.appendChild(newS);
                newDiv.appendChild(newBr);
                newDiv.appendChild(newDivFlex);
                newDiv.appendChild(newDivFlexRazon);

                newDiv.appendChild(newDivFlexComen);
                document.getElementById("consultas").appendChild(newDiv); 

                document.getElementById("razon"+i).innerHTML = patientInfo[i]["razon"];
                document.getElementById("altura"+i).innerHTML = patientInfo[i]["altura"];
                document.getElementById("presion"+i).innerHTML = patientInfo[i]["presion"];
                document.getElementById("peso"+i).innerHTML = patientInfo[i]["peso"];
                document.getElementById("comentario"+i).innerHTML = patientInfo[i]["comentario"];
                document.getElementById("fecha"+i).innerHTML = patientInfo[i]["fecha"];


            }
       
        }
    })
    .fail(function(){
        console.log("Error in ajax call for consultas");
    });

    //llamada ajax para traer hospitalizaciones del paciente
    $.ajax({
        url: 'back/getHospital.php',
        type: 'POST',
        dataType: 'JSON',
    })
    .done(function(res){
        if (res == "fail")
            console.log("Error in query (back/getPatientInfo.php)");
        else {
            var patientInfo = res;
            var cantHosp = patientInfo.length;
            
            for(var i=0;i<cantHosp;i++){
                var j = i+1;
            
                //Creación de div
                const newDiv = document.createElement("div");
                newDiv.setAttribute("class", "entrada hospitalizacion");
                const newHeader = document.createElement("h1");
                newHeader.innerText = "Hospitalización #"+j;
                const newBr = document.createElement("br");
                const newDivFlex = document.createElement("div");
                newDivFlex.setAttribute("class","flex-container");


                //Creación de hospital
                const newDivFlexH = document.createElement("div");
                newDivFlexH.setAttribute("class","flex-item-info flex-3");
                const newBH = document.createElement("b");
                newBH.innerText = "Hospital: ";
                const newSH = document.createElement("span");
                newSH.setAttribute("id", "hospital"+i);
                newDivFlexH.appendChild(newBH);
                newDivFlexH.appendChild(newSH);
                newDivFlex.appendChild(newDivFlexH);

                //Creación de fecha ingreso
                const newDivFlexFechaIn = document.createElement("div");
                newDivFlexFechaIn.setAttribute("class","flex-item-info flex-3");
                const newBFechaIn = document.createElement("b");
                newBFechaIn.innerText = "Fecha de Ingreso: ";
                const newSFechaIn = document.createElement("span");
                newSFechaIn.setAttribute("id", "fechaIn"+i);
                newDivFlexFechaIn.appendChild(newBFechaIn);
                newDivFlexFechaIn.appendChild(newSFechaIn);
                newDivFlex.appendChild(newDivFlexFechaIn);

                //Creación de fecha de Salida
                const newDivFlexFechaSal = document.createElement("div");
                newDivFlexFechaSal.setAttribute("class","flex-item-info flex-3");
                const newBFechaSal = document.createElement("b");
                newBFechaSal.innerText = "Fecha de Salida: ";
                const newSFechaSal = document.createElement("span");
                newSFechaSal.setAttribute("id", "fechaOut"+i);
                newDivFlexFechaSal.appendChild(newBFechaSal);
                newDivFlexFechaSal.appendChild(newSFechaSal);
                newDivFlex.appendChild(newDivFlexFechaSal);

                //Creación de doctor tratante
                const newDivFlexDrt = document.createElement("div");
                newDivFlexDrt.setAttribute("class","flex-item-info flex-1");
                const newBDrt = document.createElement("b");
                newBDrt.innerText = "Doctor Tratante: ";
                const newSDrt = document.createElement("span");
                newSDrt.setAttribute("id", "drT"+i);
                newDivFlexDrt.appendChild(newBDrt);
                newDivFlexDrt.appendChild(newSDrt);
               

                //Creación de doctor interconsultantes
                const newDivFlexInter = document.createElement("div");
                newDivFlexInter.setAttribute("class","flex-item-info flex-3");
                const newBInter = document.createElement("b");
                newBInter.innerText = "Doctor(es) Interconsultante(s): \n ";
                const newSInter = document.createElement("span");
                newSInter.setAttribute("id", "drInter"+i);
                newDivFlexInter.appendChild(newBInter);
                newDivFlexInter.appendChild(newSInter);
                
                //Creación de comentarios
                const newDivFlexCom = document.createElement("div");
                newDivFlexCom.setAttribute("class","flex-item-info flex-3");
                const newBCom = document.createElement("b");
                newBCom.innerText = "Comentarios: \n ";
                const newSCom = document.createElement("span");
                newSCom.setAttribute("id", "comentarios"+i);
                newDivFlexCom.appendChild(newBCom);
                newDivFlexCom.appendChild(newSCom);

                newDiv.appendChild(newHeader);
                newDiv.appendChild(newDivFlex);
                newDiv.appendChild(newDivFlexDrt);
                newDiv.appendChild(newDivFlexInter);
                newDiv.appendChild(newDivFlexCom);
                document.getElementById("hospitalizaciones").appendChild(newDiv); 


                document.getElementById("hospital"+i).innerHTML = patientInfo[i]["hospital"];
                document.getElementById("fechaIn"+i).innerHTML = patientInfo[i]["fechaIn"];
                document.getElementById("fechaOut"+i).innerHTML = patientInfo[i]["fechaOut"];
                document.getElementById("drT"+i).innerHTML = patientInfo[i]["drTratante"];
                document.getElementById("comentarios"+i).innerHTML = patientInfo[i]["comentarios"]; 


                ruta = "fechaIn="+patientInfo[i]["fechaIn"];
                
                $.ajax({
                    url: 'back/getDrsInter.php',
                    type: 'POST',
                    data: ruta,
                    dataType: 'JSON',
                    async: false,
                })
                .done(function(res){
                    var drsInter = res;
                    for(var j=0;j<drsInter.length;j++){
                        //console.log(i + " " + drsInter[j]["nombre"]);
                        document.getElementById("drInter"+i).innerHTML = document.getElementById("drInter"+i).innerHTML + " " + drsInter[j]["nombre"] + ","; 
                    } 
                    
                })
                .fail(function(){
                    console.log("Error in ajax call for doctores interconsultantes")
                })  
                

            }
        }

    })
    .fail(function(){
        console.log("Error in ajax call for Hospitalizaciones")
    })

});