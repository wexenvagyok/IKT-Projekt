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

function masodikfeladat()
{
   document.querySelector('.eredmeny').innerHTML = "";

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
    if (aOldal >= 0) {
        document.querySelector('.eredmeny').innerHTML += `<p>a: ${aOldal}°</p>`;
    } else {
        document.querySelector('.eredmeny').innerHTML += `<p>a: ismeretlen</p>`;
    }

    if (bOldal >= 0) {
        document.querySelector('.eredmeny').innerHTML += `<p>b: ${bOldal}°</p>`;
    } else {
        document.querySelector('.eredmeny').innerHTML += `<p>b: ismeretlen</p>`;
    }

    if (cOldal >= 0) {
        document.querySelector('.eredmeny').innerHTML += `<p>c: ${cOldal}°</p>`;
    } else {
        document.querySelector('.eredmeny').innerHTML += `<p>c: ismeretlen</p>`;
    }

    //SZÖGEK
    if (alpha >= 0) {
        document.querySelector('.eredmeny').innerHTML += `<p>Alpha: ${alpha}°</p>`;
    } else {
        document.querySelector('.eredmeny').innerHTML += `<p>Alpha: ismeretlen</p>`;
    }

    if (beta >= 0) {
        document.querySelector('.eredmeny').innerHTML += `<p>Beta: ${beta}°</p>`;
    } else {
        document.querySelector('.eredmeny').innerHTML += `<p>Beta: ismeretlen</p>`;
    }

    if (gamma >= 0) {
        document.querySelector('.eredmeny').innerHTML += `<p>Gamma: ${gamma}°</p>`;
    } else {
        document.querySelector('.eredmeny').innerHTML += `<p>Gamma: ismeretlen</p>`;
    }
}