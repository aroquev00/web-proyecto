CREATE TABLE Personas (
	nombre varchar(100),
    sexo   char(1),
    dob    date,
    curp   char(18),
    PRIMARY KEY(curp)
);


CREATE TABLE Medicos(
    cedula     varchar(8),
    personaID  char(18),
    PRIMARY KEY(cedula),
    FOREIGN KEY(personaID) REFERENCES Personas(curp)
);


CREATE TABLE Pacientes(
	nss char(11),
    correo varchar(60),
    domicilio varchar(130),
    telefono varchar(20),
    tipoSangre varchar(5),
    personaID  char(18),
    madre 	   char(11),
    padre	   char(11),
    contraseña varchar(50),
    PRIMARY KEY(nss),
    FOREIGN KEY(personaID) REFERENCES Personas(curp),
    FOREIGN KEY(madre) REFERENCES Personas(curp),
    FOREIGN KEY(padre) REFERENCES Personas(curp)
);


CREATE TABLE ConsultasMedicoPaciente(
	medicoID varchar(8),
    pacienteID char(11),
    altura float,
    peso   float, 
    presion varchar(6),
    razon   tinytext,
    comentario text(1000),
    fecha date,
    PRIMARY KEY(cedula, nss, fecha),
    FOREIGN KEY(medicoID) REFERENCES Medicos(cedula),
    FOREIGN KEY(pacienteID) REFERENCES Pacientes(nss)
);


CREATE TABLE SegurosMedicos(
    compania varchar(50),
    polizanum varchar(20),
    fechaVen date,
    pacienteID char(11),
    PRIMARY KEY(compania, polizanum),
    FOREIGN KEY(pacienteID) REFERENCES Pacientes(nss)
);

CREATE TABLE Padecimientos(
	pacienteID char(11),
    padecimiento varchar(50),
    PRIMARY KEY(pacienteID, padecimiento),
    FOREIGN KEY(pacienteID) REFERENCES Pacientes(nss)
);

CREATE TABLE Alergias(
	pacienteID char(11),
    alergia varchar(50),
    PRIMARY KEY(pacienteID, alergia),
    FOREIGN KEY(pacienteID) REFERENCES Pacientes(nss)
);



CREATE TABLE Internados(
	hospital varchar(100),
    pacienteID char(11),
    fechaIn    date,
    fechaOut   date,
    razon      tinytext,
    drTratante varchar(100),
    drTratanteID varchar(8),
    comentarios text(1000),
  	PRIMARY KEY(pacienteID, fechaIn),
    FOREIGN KEY(pacienteID) REFERENCES Pacientes(nss),
    FOREIGN KEY(drTratanteID) REFERENCES Medicos(cedula)
);

CREATE TABLE DocInterconsultantes(
	hospital varchar(100),
    pacienteID char(11),
    fechaIn    date,
    nombre     varchar(100),
    PRIMARY KEY(pacienteID, fechaIn, nombre),
    FOREIGN KEY(pacienteID, fechaIn) REFERENCES Internados(pacienteID, fechaIn)
);

CREATE TABLE Meds(
    nombre varchar(100),
    dosis  varchar(20),
    indicaciones varchar(100),
    pacienteID  char(11),
    PRIMARY KEY(pacienteID, nombre),
    FOREIGN KEY(pacienteID) REFERENCES Pacientes(nss)
);
