const goImpulso = document.getElementById("goImpulso");
goImpulso.addEventListener("submit", (e) => {
    e.preventDefault();
});

function openCorujao(){
    const codigo = document.getElementById('codigo').value;

    if (codigo === "COVID-IMPULSO"){
        window.location.replace("./impulso.html")
    }
    else{
        alert("Código errado!")
    }
};