document.addEventListener('DOMContentLoaded', function() {
  window.masodikFeladat = function() {
    const outSides = document.getElementById('oldalakEredmeny');
    const outAngles = document.getElementById('szogekEredmeny');
    if (!outSides || !outAngles) { console.error('Nincs eredmény elem'); return; }
    outSides.innerHTML = '';
    outAngles.innerHTML = '';

    const toRad = d => d * Math.PI / 180;
    const toDeg = r => r * 180 / Math.PI;
    const isNum = v => typeof v === 'number' && !Number.isNaN(v) && v !== Infinity && v !== -Infinity;

    
    let a = parseFloat(document.getElementById('aOldal')?.value);
    let b = parseFloat(document.getElementById('bOldal')?.value);
    let c = parseFloat(document.getElementById('cOldal')?.value);
    let A = parseFloat(document.getElementById('alphaSzog')?.value);
    let B = parseFloat(document.getElementById('betaSzog')?.value);
    let G = parseFloat(document.getElementById('gammaSzog')?.value);
    const sel = document.getElementById('valaszto')?.value || 'sin';

    if (!isNum(a)) a = NaN; if (!isNum(b)) b = NaN; if (!isNum(c)) c = NaN;
    if (!isNum(A)) A = NaN; if (!isNum(B)) B = NaN; if (!isNum(G)) G = NaN;

    if (isNum(a) && isNum(b) && isNum(c)) {
      A = toDeg(Math.acos((b*b + c*c - a*a) / (2*b*c)));
      B = toDeg(Math.acos((a*a + c*c - b*b) / (2*a*c)));
      G = 180 - A - B;
    }

    const angCount = [A, B, G].filter(isNum).length;
    if (angCount >= 2) {
      if (!isNum(A)) A = 180 - (B + G);
      if (!isNum(B)) B = 180 - (A + G);
      if (!isNum(G)) G = 180 - (A + B);
    }

    if (isNum(a) && isNum(A) && isNum(B) && !isNum(b)) {
      const R = a / Math.sin(toRad(A));
      b = R * Math.sin(toRad(B));
      if (isNum(G)) c = R * Math.sin(toRad(G));
    }
    if (isNum(b) && isNum(B) && isNum(A) && !isNum(a)) {
      const R = b / Math.sin(toRad(B));
      a = R * Math.sin(toRad(A));
      if (isNum(G)) c = R * Math.sin(toRad(G));
    }
    if (isNum(c) && isNum(G) && isNum(A) && !isNum(a)) {
      const R = c / Math.sin(toRad(G));
      a = R * Math.sin(toRad(A));
      if (isNum(B)) b = R * Math.sin(toRad(B));
    }

    if (isNum(b) && isNum(c) && !isNum(a) && isNum(A)) a = Math.sqrt(b*b + c*c - 2*b*c*Math.cos(toRad(A)));
    if (isNum(a) && isNum(c) && !isNum(b) && isNum(B)) b = Math.sqrt(a*a + c*c - 2*a*c*Math.cos(toRad(B)));
    if (isNum(a) && isNum(b) && !isNum(c) && isNum(G)) c = Math.sqrt(a*a + b*b - 2*a*b*Math.cos(toRad(G)));

    let note = '';
    if (!isNum(a) && !isNum(b) && !isNum(c) && isNum(A) && isNum(B) && isNum(G)) {
      note = ' (arányos, R=1)';
      a = Math.sin(toRad(A));
      b = Math.sin(toRad(B));
      c = Math.sin(toRad(G));
    }

    outSides.innerHTML += '<p>a: ' + (isNum(a) ? a.toFixed(4) : 'ismeretlen') + '</p>';
    outSides.innerHTML += '<p>b: ' + (isNum(b) ? b.toFixed(4) : 'ismeretlen') + '</p>';
    outSides.innerHTML += '<p>c: ' + (isNum(c) ? c.toFixed(4) : 'ismeretlen') + note + '</p>';

    outAngles.innerHTML += '<p>α: ' + (isNum(A) ? A.toFixed(4) + '°' : 'ismeretlen') + '</p>';
    outAngles.innerHTML += '<p>β: ' + (isNum(B) ? B.toFixed(4) + '°' : 'ismeretlen') + '</p>';
    outAngles.innerHTML += '<p>γ: ' + (isNum(G) ? G.toFixed(4) + '°' : 'ismeretlen') + '</p>';

    function showTrig(angle) {
      if (!isNum(angle)) return 'ismeretlen';
      const r = toRad(angle);
      if (sel === 'sin') return Math.sin(r).toFixed(6);
      if (sel === 'cos') return Math.cos(r).toFixed(6);
      if (sel === 'tan') return Math.tan(r).toFixed(6);
      return '';
    }

    outAngles.innerHTML += '<hr>';
    outAngles.innerHTML += '<p>Választott: ' + sel + '</p>';
    outAngles.innerHTML += '<p>' + sel + '(α): ' + showTrig(A) + '</p>';
    outAngles.innerHTML += '<p>' + sel + '(β): ' + showTrig(B) + '</p>';
    outAngles.innerHTML += '<p>' + sel + '(γ): ' + showTrig(G) + '</p>';
  }
});
