function showHibaUzenet(uzenet) {
    const container = document.querySelector('.hibauzenet');

    container.innerHTML = `
        <div class="alert alert-warning" role="alert">
            ${uzenet}
        </div>
    `;

    // 5 másodperc után töröljük
    setTimeout(() => {
        container.innerHTML = '';
    }, 5000);
}
function elsoFeladat() {

    let alpha = Number(document.getElementById("alphaSzog")?.value);
    let beta  = Number(document.getElementById("betaSzog")?.value);
    let gamma = Number(document.getElementById("gammaSzog")?.value);

    if (alpha + beta + gamma > 180) {
        showHibaUzenet("A szögek összege nem lehet nagyobb, mint 180°!");
        return;
    }

    //SZÖGEK

    If (alpha != 0) {
        document.querySelector('.eredmeny').innerHTML += `<p>Alpha: ${alpha}°</p>`;
    }
}
