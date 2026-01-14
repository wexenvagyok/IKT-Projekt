function szamtaniSorozat() {
  const a1 = parseFloat(document.getElementById("elsoElem").value);
  const d = parseFloat(document.getElementById("kulonbseg").value);
  const n = parseInt(document.getElementById("elemszam").value);

  const eredmenyDiv = document.getElementById("szamtaniEredmeny");

  if (isNaN(a1) || isNaN(d) || isNaN(n) || n <= 0) {
    eredmenyDiv.innerHTML = "<p class='text-danger'>Hibás adatok!</p>";
    return;
  }

  let sorozat = [];
  let aktualis = a1;

  for (let i = 1; i <= n; i++) {
    sorozat.push(`a<sub>${i}</sub> = ${aktualis}`);
    aktualis += d;
  }

  eredmenyDiv.innerHTML = `
    <p><strong>A számtani sorozat első ${n} eleme:</strong></p>
    <ul>
      ${sorozat.map(elem => `<li>${elem}</li>`).join("")}
    </ul>
  `;
}
