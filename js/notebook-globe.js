// Flat, zoomed-in map of the northern hemisphere. Hover an orange dot to see what happened there.
// Edit PLACES to add or change spots: [longitude, latitude].
const PLACES = [
    {
        name: "Sonipat",
        coords: [77.0151, 28.9931],
        note: "Studied at Ashoka University and finished third in my class."
    },
    {
        name: "Lausanne",
        coords: [6.6323, 46.5197],
        note: "Master's at EPFL, and now a post-training engineer at Swiss AI at the EPFL AI Center, working on how language models are tuned after pretraining."
    },
    {
        name: "Geneva",
        coords: [6.1432, 46.2044],
        note: "Research at EPFL's Campus Biotech, with the Laboratory of Cognitive Neuroscience."
    },
    {
        name: "Zurich",
        coords: [8.5417, 47.3769],
        note: "My Master's thesis at ETH Zurich, with the IVIA Lab and the Social Computing Lab, on how multilingual LLMs borrow geometry across languages."
    },
    {
        name: "London",
        coords: [-0.1276, 51.5072],
        note: "Software engineering intern at Google, building reusable chart components for the Fitbit app."
    },
    {
        name: "New York City",
        coords: [-74.006, 40.7128],
        note: "Time with the New York Academy of Sciences (NYAS)."
    },
    {
        name: "Stockholm",
        coords: [18.0686, 59.3293],
        note: "Nobel Week in Stockholm, with NSHSS, the National Society of High School Scholars."
    },
    {
        name: "Istanbul",
        coords: [28.9784, 41.0082],
        note: "The best meal of my life."
    },
    {
        name: "Chile",
        coords: [-68.2, -22.9],
        note: "Saw the Milky Way, the Atacama Desert and the mountains of Patagonia."
    },
    {
        name: "Hong Kong",
        coords: [114.1694, 22.3193],
        note: "HKU's Academy for the Talented, and the International Symposium on STEM Education."
    },
    {
        name: "Daejeon",
        coords: [127.3845, 36.3504],
        note: "DH2026, the annual conference of the Alliance of Digital Humanities Organizations (ADHO)."
    }
];

(function () {
    const wrap = document.getElementById("globe-wrap");
    const canvas = document.getElementById("globe-canvas");
    const tip = document.getElementById("globe-tip");
    if (!wrap || !canvas || !window.d3 || !window.topojson) return;

    const ctx = canvas.getContext("2d");
    const INK = "#2b2a28";
    const ORANGE = "rgb(255,133,3)";

    const projection = d3.geoMercator();
    // visible window of the map, in degrees (zoomed in on where the dots are)
    const LON_MIN = -82, LON_MAX = 132;
    const rad = d => (d * Math.PI) / 180;
    const mercY = d => Math.log(Math.tan(Math.PI / 4 + rad(d) / 2));
    const invMercY = y => ((2 * Math.atan(Math.exp(y)) - Math.PI / 2) * 180) / Math.PI;
    const path = d3.geoPath(projection, ctx);
    const graticule = d3.geoGraticule10();
    const sphere = { type: "Sphere" };
    let land = null;
    let W = 0, H = 0, k = 1;
    let hovered = null;
    const t0 = performance.now();

    function resize() {
        const w = wrap.clientWidth;
        if (!w) return;
        const dpr = window.devicePixelRatio || 1;
        W = w;
        const pad = 3;
        const scale = (W - 2 * pad) / rad(LON_MAX - LON_MIN);
        // map and photo share one box: roughly 4 wide to 3 tall, a whole number of ruled lines high
        const unit = parseFloat(getComputedStyle(document.documentElement).fontSize) * 1.75;
        H = Math.ceil((W * 0.73) / unit) * unit;
        projection.scale(scale).translate([pad - scale * rad(LON_MIN), H * 0.58]);
        projection.clipExtent([[pad, pad], [W - pad, H - pad]]);
        canvas.width = W * dpr;
        canvas.height = H * dpr;
        canvas.style.width = W + "px";
        canvas.style.height = H + "px";
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        wrap.style.height = H + "px";
        const photo = document.getElementById("photo-wrap");
        if (photo) photo.style.height = H + "px";
        k = Math.min(1.5, Math.max(0.9, W / 420));
    }

    function draw(now) {
        ctx.clearRect(0, 0, W, H);

        ctx.beginPath(); path(graticule);
        ctx.strokeStyle = "rgba(43,42,40,0.14)"; ctx.lineWidth = 0.6; ctx.stroke();

        if (land) {
            ctx.beginPath(); path(land);
            ctx.strokeStyle = INK; ctx.lineWidth = 1; ctx.stroke();
        }

        ctx.strokeStyle = INK; ctx.lineWidth = 1.4;
        ctx.strokeRect(3, 3, W - 6, H - 6);

        const t = ((now - t0) / 1600) % 1;
        PLACES.forEach(p => {
            const [x, y] = projection(p.coords);
            p._xy = [x, y];
            const active = p === hovered;
            ctx.beginPath();
            ctx.arc(x, y, (4 + t * 9) * k * 0.75, 0, 2 * Math.PI);
            ctx.strokeStyle = "rgba(255,133,3," + (0.5 * (1 - t)) + ")";
            ctx.lineWidth = 1; ctx.stroke();
            ctx.beginPath();
            ctx.arc(x, y, (active ? 6 : 4.5) * k * 0.75, 0, 2 * Math.PI);
            ctx.fillStyle = ORANGE; ctx.fill();
            ctx.strokeStyle = "#fbf7ee"; ctx.lineWidth = 1.2; ctx.stroke();
        });
    }

    function frame(now) {
        // static map: only the dots' pulse animates
        if (W) draw(now);
        requestAnimationFrame(frame);
    }

    function placeTip() {
        if (!hovered || !hovered._xy) return;
        const [x, y] = hovered._xy;
        const tw = tip.offsetWidth, th = tip.offsetHeight;
        const left = Math.max(tw / 2, Math.min(W - tw / 2, x));
        const below = y < th + 24;
        tip.classList.toggle("below", below);
        tip.style.left = left + "px";
        tip.style.top = y + "px";
    }

    function showTip(p) {
        tip.querySelector(".globe-tip-name").textContent = p.name;
        tip.querySelector(".globe-tip-note").textContent = p.note;
        tip.classList.add("show");
        placeTip();
    }

    function hideTip() { tip.classList.remove("show"); }

    function pick(e) {
        const rect = canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left, my = e.clientY - rect.top;
        let best = null, bestD = 14;
        PLACES.forEach(p => {
            if (!p._xy) return;
            const d = Math.hypot(p._xy[0] - mx, p._xy[1] - my);
            if (d < bestD) { best = p; bestD = d; }
        });
        return best;
    }

    canvas.addEventListener("mousemove", e => {
        const p = pick(e);
        if (p !== hovered) {
            hovered = p;
            p ? showTip(p) : hideTip();
        }
    });
    canvas.addEventListener("mouseleave", () => { hovered = null; hideTip(); });
    canvas.addEventListener("touchstart", e => {
        const p = pick(e.touches[0]);
        hovered = p;
        p ? showTip(p) : hideTip();
    }, { passive: true });

    window.addEventListener("resize", resize);
    resize();

    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/land-110m.json")
        .then(r => r.json())
        .then(w => { land = topojson.feature(w, w.objects.land); })
        .catch(() => { /* map still renders without coastlines */ });

    requestAnimationFrame(frame);
})();
