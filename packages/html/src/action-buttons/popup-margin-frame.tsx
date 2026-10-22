import { useEffect, useRef } from 'react';

// Renders another component test in an isolated iframe so its page-level styles and
// absolutely positioned popups don't collide with the other scenarios.
export const TestFrame = ({ component, test }: { component: string, test: string }) => {
    const ref = useRef<HTMLIFrameElement>(null);
    const path = location.pathname.includes('/dist/')
        ? `/packages/html/dist/${component}/tests/${test}/`
        : `/${component}/${test}`;

    useEffect(() => {
        const iframe = ref.current;
        let timer: number;
        let ticks = 0;

        const fit = () => {
            const doc = iframe?.contentDocument;
            if (!iframe || !doc || !doc.body) {
                return;
            }

            if (!doc.getElementById('popup-margin-frame-style')) {
                const style = doc.createElement('style');
                style.id = 'popup-margin-frame-style';
                style.textContent = '.devkit-wrapper { display: none !important; }';
                doc.head.appendChild(style);
            }

            const height = Math.max(doc.documentElement.scrollHeight, doc.body.scrollHeight);
            iframe.style.height = `${height}px`;
        };

        timer = window.setInterval(() => {
            fit();
            if (++ticks > 20) {
                window.clearInterval(timer);
            }
        }, 500);

        return () => window.clearInterval(timer);
    }, []);

    return (
        <iframe
            ref={ref}
            title={`${component}/${test}`}
            src={`${path}${location.search}`}
            style={{ width: '100%', height: 300, border: 0, display: 'block' }}
        />
    );
};
