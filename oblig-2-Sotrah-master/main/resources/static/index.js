
let utBillett;
let arrayBilletter = [];

function kjopBillett() {
    let enBillett = {
        antall: document.getElementById('antall').value,
        film: document.getElementById('velgFilm').value,
        fornavn: document.getElementById('fornavn').value,
        etternavn: document.getElementById('etternavn').value,
        telefonnummer: document.getElementById('telefonnummer').value,
        epost: document.getElementById('epost').value
    }

    let antallBilletter = document.getElementById('antall').value;
    let antall = Number(antallBilletter);
    let feilmelding = false;

    // Splitter input boksen e-post for å sjekke om den inneholder "@" i inputet fra bruker
    let epostGyldighet = document.getElementById("epost").innerHTML = enBillett.epost.split("@");


    // ANTALL
    if ((isNaN(antall) || antall <= 0) || antall === null) {
        document.getElementById("intetTall").innerHTML = "Må skrive noe inn i antall";
        feilmelding = true;
    } else {
        document.getElementById("intetTall").innerHTML = "";
    }

    // FILM
    if (enBillett.film === "feilFilm") {
        document.getElementById("ikkeValgtFilm").innerHTML = "Må velge en film";
        feilmelding = true;
    } else {
        document.getElementById("ikkeValgtFilm").innerHTML = "";
    }

    // FORNAVN
    if (!isNaN(enBillett.fornavn) || enBillett.fornavn === "") {
        document.getElementById("fornavnFeil").innerHTML = "Må skrive noe inn i fornavnet";
        feilmelding = true;
    }
    else if (enBillett.fornavn.length < 2) {
        document.getElementById("fornavnFeil").innerHTML = "Fornavet er for kort";
        feilmelding = true;
    }
    else {
        document.getElementById("fornavnFeil").innerHTML = "";
    }



    // ETTERNAVN
    if (!isNaN(enBillett.etternavn) || enBillett.etternavn === "") {
        document.getElementById("etternavnFeil").innerHTML = "Må skrive noe inn i etternavnet"
        feilmelding = true;
    }
    else if (enBillett.etternavn.length < 2) {
        document.getElementById("etternavnFeil").innerHTML = "Etternavnet er for kort";
        feilmelding = true;
    }
    else {
        document.getElementById("etternavnFeil").innerHTML = "";
    }

    // TELEFONNUMMER
    if (isNaN(enBillett.telefonnummer) || enBillett.telefonnummer === "" || enBillett.telefonnummer.length != 8) {
        document.getElementById("telefonnummerFeil").innerHTML = "Må skrive noe inn i telefonnummer";
        feilmelding = true;
    }
    else {
        document.getElementById("telefonnummerFeil").innerHTML = "";
    }

    // E-POST
    if (!isNaN(enBillett.epost) || enBillett.epost === "") {
        document.getElementById("epostFeil").innerHTML = "Må skrive noe inn i e-post ";
        feilmelding = true;
    }
    else if (enBillett.epost.length < 6 || epostGyldighet.length != 2) {
        document.getElementById("epostFeil").innerHTML = "E-posten for kort eller mangler @"
        feilmelding = true;
    }
    else {
        document.getElementById("epostFeil").innerHTML = "";
    }

    // Dersom feilmeldingene ikke er "true" vil all input nullstilles:
    if (feilmelding === false) {
        document.getElementById("reset").reset();
    }
    else {
        return;
    }

    // Utskrift av billettene - skrives kun ut dersom alle feltene er fylt inn
    if (arrayBilletter.antall === "" && arrayBilletter.film === "feilFilm" && arrayBilletter.fornavn === "" &&
        arrayBilletter.etternavn === "" && arrayBilletter.telefonnummer === "" && arrayBilletter.epost === "") {
        return;
    }
    else {
        arrayBilletter.push(enBillett);
    }

    // Tabellen over billetten
    utBillett = "<table><tr>" +
        "<th>Film</th>" +
        "<th>Antall</th>" +
        "<th>Fornavn</th>" +
        "<th>Etternavn</th>" +
        "<th>Telefonnummer</th>" +
        "<th>E-post</th>" +
        "</tr>";

    for (let billett of arrayBilletter) {
        utBillett += "<tr>" +
            "<td>" + billett.film + "</td>" +
            "<td>" + billett.antall + "</td>" +
            "<td>" + billett.fornavn + "</td>" +
            "<td>" + billett.etternavn + "</td>" +
            "<td>" + billett.telefonnummer + "</td>" +
            "<td>" + billett.epost + "</td>" +
            "</tr>";
    }
    document.getElementById("registertabell").innerHTML = utBillett;
    utBillett += "<table>";
}

function slettAlleBilletter() {
    //Her må du ikke glemme å nulstille arrayet
    document.getElementById("registertabell").innerHTML = "";





}
