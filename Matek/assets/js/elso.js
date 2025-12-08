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

    document.querySelector('.eredmeny').innerHTML = "<div></div><div></div><div></div>";

    let alpha = Number(document.getElementById("alphaSzog")?.value);
    let beta = Number(document.getElementById("betaSzog")?.value);
    let gamma = Number(document.getElementById("gammaSzog")?.value);

    let aOldal = Number(document.getElementById("aOldal")?.value);
    let bOldal = Number(document.getElementById("bOldal")?.value);
    let cOldal = Number(document.getElementById("cOldal")?.value);

    if (alpha + beta + gamma > 180) {
        showHibaUzenet("A szögek összege nem lehet nagyobb, mint 180°!");
        return;
    }

    
    //OLDALAK
    if (aOldal != 0) {
        document.querySelectorAll('.eredmeny div')[0].innerHTML += `a: ${aOldal}`;
    } else {
        document.querySelector('.eredmeny div')[1].innerHTML += `a: ismeretlen`;
    }

    if (bOldal != 0) {
        document.querySelector('.eredmeny div').innerHTML += `<p>b: ${bOldal}</p>`;
    } else {
        document.querySelector('.eredmeny div').innerHTML += `<p>b: ismeretlen</p>`;
    }

    if (cOldal != 0) {
        document.querySelector('.eredmeny div').innerHTML += `<p>c: ${cOldal}</p>`;
    } else {
        document.querySelector('.eredmeny div').innerHTML += `<p>c: ismeretlen</p>`;
    }
    //tétel számítása
    if (aOldal != 0 && bOldal != 0) {
        let megoldas = aOldal**2 + bOldal**2
        document.querySelector('.eredmeny').innerHTML += `<p>c: ${megoldas}</p>`;
    }

    //2 adat segítségével kiszámolja az adatokat
    // pl két szög: 180-a szög - b szög = c szög
    // pl két oldal: a^2 + b^2 = c^ / √ => c oldal
}