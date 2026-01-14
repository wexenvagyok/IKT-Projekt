const canvas = document.getElementById('graph');
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        const originX = width / 2;
        const originY = height / 2;

        function tengelyrajz() {
            ctx.beginPath();
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 1;
            ctx.moveTo(0, originY);
            ctx.lineTo(width, originY);
            ctx.moveTo(originX, 0);
            ctx.lineTo(originX, height);
            ctx.stroke();

            ctx.beginPath();
            for (let i = 0; i <= width; i += 20) {
                ctx.moveTo(i, originY - 4);
                ctx.lineTo(i, originY + 4);
            }
            for (let j = 0; j <= height; j += 20) {
                ctx.moveTo(originX - 4, j);
                ctx.lineTo(originX + 4, j);
            }
            ctx.stroke();
        }

        function linearisFuggveny(x, m, b) {
            return m * x + b;
        }

        function masodfokuFuggveny(x, a, b, c) {
            return a * Math.pow(x, 2) + b * x + c;
        }

        function oldalfunkcio(fn, color, scale) {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            let started = false;
            for (let px = -originX; px <= originX; px++) {
                const xLogical = px / scale;
                const yLogical = fn(xLogical);
                const cx = originX + px;
                const cy = originY - yLogical * scale;
                if (!started) {
                    ctx.moveTo(cx, cy);
                    started = true;
                } else {
                    ctx.lineTo(cx, cy);
                }
            }
            ctx.stroke();
        }
        function rajzollinearis() {
            const linearisCheckbox = document.getElementById('linearis');
            if (linearisCheckbox.checked) {
                torles();
                const m = parseFloat(document.getElementById('m').value) || 0;
                const b = parseFloat(document.getElementById('b').value) || 0;
                const scale = 20;
                oldalfunkcio(x => linearisFuggveny(x, m, b), 'blue', scale);
            } 
            else {
                torles();
            }
        }
        function rajzolmasodfoku() {
            const masodfokuCheckbox = document.getElementById('masodfoku');
            if (masodfokuCheckbox.checked) {
                torles();
                const a = parseFloat(document.getElementById('a').value) || 0;
                const b2 = parseFloat(document.getElementById('b2').value) || 0;
                const c = parseFloat(document.getElementById('c').value) || 0;
                const scale = 20;
                oldalfunkcio(x => masodfokuFuggveny(x, a, b2, c), 'red', scale);
            } else {
                torles();
                
            }
        }

        function rajzoljFuggvenyeket(m, b, a, b2, c) {
            ctx.clearRect(0, 0, width, height);
            tengelyrajz();

            const scale = 20;

            oldalfunkcio(x => linearisFuggveny(x, m, b), 'blue', scale);

            oldalfunkcio(x => masodfokuFuggveny(x, a, b2, c), 'red', scale);
        }

        function rajzol() {
            const m = parseFloat(document.getElementById('m').value) || 0;
            const b = parseFloat(document.getElementById('b').value) || 0;
            const a = parseFloat(document.getElementById('a').value) || 0;
            const b2 = parseFloat(document.getElementById('b2').value) || 0;
            const c = parseFloat(document.getElementById('c').value) || 0;

            rajzoljFuggvenyeket(m, b, a, b2, c);
        }
        function torles() {
            ctx.clearRect(0, 0, width, height);
            tengelyrajz();
        }

        window.addEventListener('load', () => {
            tengelyrajz();
            rajzol();
            torles();
        });