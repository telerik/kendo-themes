// Behavior for the experimental RangeSlider thumb showcase.
// Writes only CSS custom properties / classes / aria-valuenow - all animation is CSS.
(function () {
    const MIN = 0, MAX = 100, STEP = 1, LARGE_STEP = 10;
    const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let forcedMotion = null;

    function isReduced() {
        return forcedMotion ? forcedMotion === 'reduced' : reducedQuery.matches;
    }

    function applyMotion() {
        document.documentElement.setAttribute('data-motion', isReduced() ? 'reduced' : 'full');
    }

    reducedQuery.addEventListener('change', applyMotion);
    applyMotion();

    window.addEventListener('message', (e) => {
        if (e.data && e.data.type === 'tp-motion') {
            forcedMotion = e.data.value === 'system' ? null : e.data.value;
            applyMotion();
        }
    });

    const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

    function createSliderMarkup(opts) {
        const { variant, orientation, dir, start, end, label, width, height } = opts;
        const vertical = orientation === 'vertical';
        const el = document.createElement('div');
        el.className = `k-slider k-slider-${orientation} tp-v${variant}`;
        if (dir === 'rtl') { el.setAttribute('dir', 'rtl'); el.classList.add('k-slider-rtl'); }
        if (vertical) { el.style.height = height || '220px'; } else { el.style.width = width || '100%'; }
        el.style.setProperty('--kendo-slider-start', start);
        el.style.setProperty('--kendo-slider-end', end);

        const handle = (pos, name, value) => `<span class="k-draghandle k-draghandle-${pos}" role="slider" tabindex="0"
            data-value="${value}" aria-label="${label} ${name}" aria-valuenow="${value}"
            ${vertical ? 'aria-orientation="vertical"' : ''}></span>`;

        el.innerHTML = `<div class="k-slider-track-wrap"><div class="k-slider-track">
            <div class="k-slider-selection"></div>
            ${handle('start', 'start', start)}${handle('end', 'end', end)}
        </div></div>`;
        return el;
    }

    function initSlider(root) {
        const wrap = root.querySelector('.k-slider-track-wrap');
        const sel = root.querySelector('.k-slider-selection');
        const handles = { start: root.querySelector('.k-draghandle-start'), end: root.querySelector('.k-draghandle-end') };
        const vertical = root.classList.contains('k-slider-vertical');
        const rtl = root.getAttribute('dir') === 'rtl';
        const elastic = root.classList.contains('tp-v2');
        const state = {
            start: +root.style.getPropertyValue('--kendo-slider-start'),
            end: +root.style.getPropertyValue('--kendo-slider-end')
        };
        root.classList.add('tp-smooth');
        void sel;

        const measure = () => {
            const r = wrap.getBoundingClientRect();
            root.style.setProperty('--tp-len', `${vertical ? r.height : r.width}px`);
        };
        new ResizeObserver(measure).observe(wrap);
        measure();

        function render() {
            root.style.setProperty('--kendo-slider-start', state.start);
            root.style.setProperty('--kendo-slider-end', state.end);
            for (const k of ['start', 'end']) {
                const h = handles[k];
                h.dataset.value = state[k];
                h.setAttribute('aria-valuenow', state[k]);
                h.setAttribute('aria-valuemin', k === 'end' ? state.start : MIN);
                h.setAttribute('aria-valuemax', k === 'start' ? state.end : MAX);
            }
        }

        function setValue(which, v) {
            v = Math.round(v / STEP) * STEP;
            state[which] = which === 'start' ? clamp(v, MIN, state.end) : clamp(v, state.start, MAX);
            render();
        }

        function valueFromPointer(e) {
            const r = wrap.getBoundingClientRect();
            let ratio = vertical ? 1 - (e.clientY - r.top) / r.height : (e.clientX - r.left) / r.width;
            if (!vertical && rtl) { ratio = 1 - ratio; }
            return MIN + clamp(ratio, 0, 1) * (MAX - MIN);
        }

        // elastic: smoothed, velocity-driven stretch toward the drag direction
        let drag = null;
        let raf = 0;

        function elasticLoop() {
            if (!drag) { return; }
            const target = clamp(.18 + Math.abs(drag.velocity) * .012, 0, .6);
            drag.k += (target - drag.k) * .25;
            drag.velocity *= .85;
            const h = drag.handle;
            h.style.setProperty('--tp-k', drag.k.toFixed(3));
            const dirSign = drag.dir * (rtl && !vertical ? -1 : 1);
            // pin the trailing edge so the thumb stretches toward the motion
            if (vertical) { h.style.setProperty('--tp-oy', dirSign > 0 ? '100%' : '0%'); }
            else { h.style.setProperty('--tp-ox', dirSign > 0 ? '0%' : '100%'); }
            raf = requestAnimationFrame(elasticLoop);
        }

        function pick(e) {
            const handle = e.target.closest('.k-draghandle');
            if (handle) { return handle === handles.start ? 'start' : 'end'; }
            const v = valueFromPointer(e);
            if (state.start === state.end) { return v < state.start ? 'start' : 'end'; }
            return Math.abs(v - state.start) <= Math.abs(v - state.end) ? 'start' : 'end';
        }

        wrap.addEventListener('pointerdown', (e) => {
            if (e.button !== undefined && e.button > 0) { return; }
            const which = pick(e);
            const h = handles[which];
            wrap.setPointerCapture(e.pointerId);
            h.focus({ preventScroll: true });
            h.classList.remove('tp-release');
            h.classList.add('k-pressed');
            root.classList.add('tp-dragging');
            drag = { which, handle: h, id: e.pointerId, last: valueFromPointer(e), velocity: 0, dir: 1, k: 0 };
            setValue(which, drag.last);
            if (elastic && !isReduced()) { raf = requestAnimationFrame(elasticLoop); }
            e.preventDefault();
        });

        wrap.addEventListener('pointermove', (e) => {
            if (!drag || e.pointerId !== drag.id) { return; }
            const v = valueFromPointer(e);
            const delta = v - drag.last;
            if (delta !== 0) {
                drag.dir = Math.sign(delta);
                drag.velocity = delta * (vertical ? 1 : 1) * 4;
            }
            drag.last = v;
            setValue(drag.which, v);
        });

        function end(e) {
            if (!drag || (e && e.pointerId !== drag.id)) { return; }
            const h = drag.handle;
            const k = drag.k;
            cancelAnimationFrame(raf);
            h.classList.remove('k-pressed');
            root.classList.remove('tp-dragging');
            h.style.removeProperty('--tp-k');
            h.style.removeProperty('--tp-ox');
            h.style.removeProperty('--tp-oy');
            if (elastic && !isReduced() && k > .02) {
                h.classList.remove('tp-release');
                void h.offsetWidth;
                h.classList.add('tp-release');
                h.addEventListener('animationend', () => h.classList.remove('tp-release'), { once: true });
            }
            drag = null;
        }

        wrap.addEventListener('pointerup', end);
        wrap.addEventListener('pointercancel', end);
        wrap.addEventListener('lostpointercapture', end);

        for (const which of ['start', 'end']) {
            handles[which].addEventListener('keydown', (e) => {
                const horizontalFlip = !vertical && rtl ? -1 : 1;
                let next = null;
                switch (e.key) {
                    case 'ArrowRight': next = state[which] + STEP * horizontalFlip; break;
                    case 'ArrowUp': next = state[which] + STEP; break;
                    case 'ArrowLeft': next = state[which] - STEP * horizontalFlip; break;
                    case 'ArrowDown': next = state[which] - STEP; break;
                    case 'PageUp': next = state[which] + LARGE_STEP; break;
                    case 'PageDown': next = state[which] - LARGE_STEP; break;
                    case 'Home': next = which === 'start' ? MIN : state.start; break;
                    case 'End': next = which === 'start' ? state.end : MAX; break;
                }
                if (next !== null) {
                    e.preventDefault();
                    setValue(which, next);
                }
            });
        }
        render();
    }

    window.TPThumbs = { createSliderMarkup, initSlider };
})();
