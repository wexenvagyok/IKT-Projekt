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


    let aOldal = Number(document.getElementById("aOldal")?.value);
    let bOldal = Number(document.getElementById("bOldal")?.value);
    let cOldal = Number(document.getElementById("cOldal")?.value);


    //OLDALAK
    if (aOldal != 0) {
        document.querySelectorAll('.eredmeny div')[0].innerHTML += `a: ${aOldal}`;
    } else {
        document.querySelectorAll('.eredmeny div')[0].innerHTML += `a: ismeretlen`;
    }

    if (bOldal != 0) {
        document.querySelectorAll('.eredmeny div')[1].innerHTML += `<p>b: ${bOldal}</p>`;
    } else {
        document.querySelectorAll('.eredmeny div')[1].innerHTML += `<p>b: ismeretlen</p>`;
    }

    if (cOldal == 0) {
        document.querySelectorAll('.eredmeny div')[2].innerHTML += `<p>c: ismeretlen</p>`;
        
    } else {
        document.querySelectorAll('.eredmeny div')[2].innerHTML += `<p>c: ${cOldal}</p>`;
    }

    //tétel számítása
    if(aOldal !=0 && bOldal !=0 && cOldal != 0){
        showHibaUzenet("Mindegyik adat megadásra került.");
        return;
    } else if (aOldal != 0 && bOldal != 0) {
        let c = Math.sqrt(aOldal ** 2 + bOldal ** 2)
        //let c = aOldal**2 + bOldal**2
        let megoldas = Math.round(c * 100) / 100;
        //let megoldas = Math.sqrt(c)

        document.querySelector('.eredmeny').innerHTML += `<p>c: ${megoldas} /2 tizedesjegyre kerekítve/</p>`;

    } else if(bOldal != 0 && cOldal != 0){

        let a = Math.sqrt(cOldal ** 2 + bOldal ** 2)
        let megoldas = Math.round(a * 100) / 100;

        document.querySelector('.eredmeny').innerHTML += `<p>a: ${megoldas} /2 tizedesjegyre kerekítve/</p>`;

    }  else if (aOldal != 0 && cOldal != 0) {

        let b = Math.sqrt(aOldal**2 + cOldal**2)
        let megoldas = Math.round(b * 100) / 100;

        document.querySelector('.eredmeny').innerHTML += `<p>b: ${megoldas} /2 tizedesjegyre kerekítve/</p>`;

    } else{
        showHibaUzenet("Legalább két adatot adj meg.");
        return;
    };

    //2 adat segítségével kiszámolja az adatokat
    // pl két szög: 180-a szög - b szög = c szög
    // pl két oldal: a^2 + b^2 = c^ / √ => c oldal
}