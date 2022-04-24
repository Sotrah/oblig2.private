$(() => {
    $("#register").click(() => {
        const film = $("film");
        const antall = $("#antall");
        const fornavn = $("#fornavn");
        const etternavn = $("#etternavn");
        const telefonnummer = $("#telefonnummer");
        const epost = $("#epost");

        const billett = {
            film: film.val(),
            antall: antall.val(),
            fornavn: fornavn.val(),
            etternavn: etternavn.val(),
            telefonnummer: telefonnummer.val(),
            epost: epost.val()
        }

        if (inputval(billett)) {
            $.post("/api", billett, () => fetchBillett())
            film.val("")
            antall.val("")
            fornavn.val("")
            etternavn.val("")
            telefonnummer.val("")
            epost.val("")
        } else {
            console.log("Feil input")
        }
    })

    $("#deleteAll").click(() => {
        $.ajax("/api", {
            type: "DELETE",
            success: () => fetchBillett(),
            error: (jqXhr, textStatus, errorMessage) => console.log(errorMessage)
        })
    });
})

const fetchBillett = () => $.get("/api", list => formatList(list))

const formatList = list => {
    let msg = "";

    if (list.length > 0) {
        msg += "<table class='table table-striped'><tr><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>E-post</th></tr>"

        for (let billett of list) {
            msg += "<tr><td>"+ billett.film + "</td><td>" + billett.antall + "</td><td>" + billett.fornavn + "</td><td>" + billett.etternavn + "</td>" +
                "<td>" + billett.telefonnummer + "</td><td>" + billett.epost + "</td></tr>"
        }

        msg += "</table>";
    }

    $("#list").html(msg)
}

const inputval = billett => {
    if (billett.film === "") return false
    else if (billett.antall === "") return false
    else if (billett.fornavn === "") return false
    else if (billett.etternavn === "") return false
    else if (billett.telefonnummer === "") return false
    else if (billett.epost === "") return false
    else return billett.type !== "";
}
