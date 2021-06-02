$(document).ready(function() {
    document.getElementById('result').style.display = "none";

    $("#erase").click(function() {
        resetErrorMessages();
    });

    $("form").submit(function(event) {

        // $("#submit").click( function () {
        resetErrorMessages();
        //event.preventDefault();

        var formData = {
            primerNombre: $("#primerNombre").val(),
            apellido: $("#apellido").val(),
            sexo: $("#sexo").val(),
            dob: $("#dob").val(),
            curp: $("#curp").val(),
            cedula: $("#cedula").val(),
            password: $("#password").val(),
        }

        // console.log("Xd");
        console.log(formData);

        $.ajax({
            type: "POST",
            url: "back/crearDoc.php",
            data: formData,
            dataType: "json",
            encode: true,
        }).done(function(data) {
            console.log(data);
            if (!data.success) {
                const errorMessageSpan = document.createElement("span");
                errorMessageSpan.id = 'errorMessage';
                errorMessageSpan.innerText = data.error.description;

                document.getElementById(data.error.id).after(errorMessageSpan);
                errorMessageSpan.scrollIntoView();
            } else {
                // MARK SUCCESS
                document.getElementById('form').style.display = 'none';
                document.getElementById('result').style.display = "block";
            }

        });

        event.preventDefault();
    });

    $('#otroExpediente').click(function() {
        location.reload();
    });
});

function resetErrorMessages() {
    var element = document.getElementById('errorMessage');
    if (element != null) {
        element.remove();
    }
}
