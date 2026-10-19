import { AvatarImage } from './avatar-image';
import { useId, useLayoutEffect, useRef, useState } from 'react';

export const avatarPreviewSizes = [
    { label: 'XS', pixels: 16 },
    { label: 'S', pixels: 24 },
    { label: 'M', pixels: 32 },
    { label: 'L', pixels: 48 },
    { label: 'XL', pixels: 64 }
] as const;

export type AvatarPreviewSize = (typeof avatarPreviewSizes)[number];
export type AvatarPreviewPixels = AvatarPreviewSize['pixels'];

export const AvatarIntegrationImage = ({ pixels, alt = '' }: { pixels: AvatarPreviewPixels; alt?: string }) => (
    <AvatarImage
        size={pixels >= 48 ? 'large' : pixels === 32 ? 'medium' : 'small'}
        style={{ width: pixels, height: pixels, flexBasis: pixels, flexGrow: 0, flexShrink: 0 }}
    >
        <img src="/packages/html/assets/avatar.jpg" alt={alt} />
    </AvatarImage>
);

export const avatarIntegrationStyles = `
    #test-area { grid-template-columns: repeat(2, minmax(320px, 1fr)); gap: 24px; align-items: start; }
    #test-area > section { min-width: 0; padding: 12px; border: 1px solid var(--kendo-color-border); }
    #test-area h3 { margin: 0 0 8px; }
    #test-area .avatar-controls { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; }
    #test-area .avatar-controls select { min-width: 100px; }
    #test-area .avatar-guidance { margin: 10px 0 0; font-size: 12px; }
    #test-area .avatar-row { display: flex; align-items: center; gap: 8px; }
    #test-area .avatar-slot { display: inline-flex; position: relative; width: var(--avatar-slot-size);
        height: var(--avatar-slot-size); flex: 0 0 var(--avatar-slot-size); overflow: hidden;
        align-items: center; justify-content: center; vertical-align: middle; }
    #test-area .avatar-slot > .k-avatar { position: absolute; flex: none;
        width: var(--avatar-preview-size); height: var(--avatar-preview-size); }
`;

export const AvatarIntegrationSlot = ({ pixels, capacity, alt }: {
    pixels: AvatarPreviewPixels; capacity: AvatarPreviewPixels; alt?: string;
}) => (
    <span className="avatar-slot" style={{
        '--avatar-slot-size': `${capacity}px`,
        '--avatar-preview-size': `${pixels}px`
    } as React.CSSProperties}>
        <AvatarIntegrationImage pixels={pixels} alt={alt} />
    </span>
);

export const AvatarIntegrationExample = ({ title, defaultSize, capacity, hostSelector, rationale, children }: {
    title: string;
    defaultSize: AvatarPreviewPixels;
    capacity: AvatarPreviewPixels;
    hostSelector: string;
    rationale: string;
    children: (pixels: AvatarPreviewPixels) => React.ReactNode;
}) => {
    const [pixels, setPixels] = useState<AvatarPreviewPixels>(defaultSize);
    const id = useId();
    const example = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const host = example.current?.querySelector<HTMLElement>(hostSelector);
        const slot = example.current?.querySelector<HTMLElement>('.avatar-slot');
        if (!host || !slot) {
            throw new Error(`Missing Avatar preview host or slot for ${title}`);
        }
        const measure = () => {
            host.style.height = '';
            host.style.minHeight = '';
            host.style.maxHeight = '';
            host.style.boxSizing = '';
            host.style.overflow = '';
            slot.style.display = 'none';
            const height = host.getBoundingClientRect().height;
            slot.style.display = '';
            if (height <= 0) {
                throw new Error(`Cannot measure Avatar preview host for ${title}`);
            }
            host.style.boxSizing = 'border-box';
            host.style.height = `${height}px`;
            host.style.minHeight = '0';
            host.style.maxHeight = `${height}px`;
            host.style.overflow = 'hidden';
            host.dataset.avatarBaselineHeight = String(height);
        };
        measure();
        const themeLink = document.querySelector('link[data-role="kendo-theme"]');
        themeLink?.addEventListener('load', measure);
        window.addEventListener('resize', measure);
        return () => {
            themeLink?.removeEventListener('load', measure);
            window.removeEventListener('resize', measure);
        };
    }, [hostSelector, title]);

    return (
        <section>
            <h3>{title}</h3>
            <div className="avatar-controls">
                <label htmlFor={id}>Avatar size</label>
                <select id={id} value={pixels} onChange={(event) => setPixels(Number(event.target.value) as AvatarPreviewPixels)}>
                    {avatarPreviewSizes.map((size) => (
                        <option key={size.pixels} value={size.pixels}>{size.label} - {size.pixels}px</option>
                    ))}
                </select>
            </div>
            <div className="avatar-example" ref={example}>{children(pixels)}</div>
            <p className="avatar-guidance">
                Recommended: {defaultSize}px. {rationale} The slot stays {capacity}px.
                {capacity < 64 && ' Sizes above it are clipped, not fully usable at this component height.'}
            </p>
        </section>
    );
};
