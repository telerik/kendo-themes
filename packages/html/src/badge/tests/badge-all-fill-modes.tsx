import * as React from 'react';
import { Badge, BadgeNormal, KendoBadgeProps } from '..';

type SizeOption = KendoBadgeProps['size'];
type ThemeColorOption = KendoBadgeProps['themeColor'];
type FillModeOption = 'solid' | 'outline' | 'tint';

const sizes: SizeOption[] = [ 'small', 'medium', 'large' ];
const themeColors: ThemeColorOption[] = Badge.options.themeColor.filter(Boolean);
const fillModes: FillModeOption[] = [ 'solid', 'outline', 'tint' ];

const shapes = [
    { label: 'Rectangle', rounded: 'none' as const, content: 'Rectangle' },
    { label: 'Rounded Rectangle', rounded: 'medium' as const, content: 'Rounded' },
    { label: 'Circle', rounded: 'full' as const, content: '1' },
    { label: 'Pill', rounded: 'full' as const, content: 'Pill Badge' },
    { label: 'Dot', rounded: 'full' as const, content: '' },
];

const styles = `
    #test-area {
        grid-template-columns: 90px repeat(${shapes.length * fillModes.length}, max-content);
        gap: 16px 12px;
        align-items: center;
    }

    .size-heading {
        grid-column: 1 / -1;
        margin-top: 12px;
        color: var(--kendo-color-subtle);
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
    }

    .shape-heading {
        grid-column: span 3;
        display: grid;
        gap: 6px;
        justify-items: center;
        color: var(--kendo-color-subtle);
        font-size: 11px;
        text-align: center;
        text-transform: uppercase;
    }

    .fill-heading {
        font-size: 10px;
        font-weight: 400;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span></span>
            {shapes.map((shape) => (
                <span className="shape-heading" key={shape.label}>
                    <span>{shape.label}</span>
                    <span className="k-d-grid" style={{ gridTemplateColumns: `repeat(${fillModes.length}, max-content)`, gap: '12px' }}>
                        {fillModes.map((fillMode) => <span className="fill-heading" key={`${shape.label}-${fillMode}`}>{fillMode}</span>)}
                    </span>
                </span>
            ))}

            {sizes.map((size) => (
                <React.Fragment key={size}>
                    <span className="size-heading">{size}</span>
                    {themeColors.map((themeColor) => (
                        <React.Fragment key={`${size}-${themeColor}`}>
                            <span>{themeColor}</span>
                            {shapes.flatMap((shape) => fillModes.map((fillMode) => (
                                <span key={`${size}-${themeColor}-${shape.label}-${fillMode}`}>
                                    <BadgeNormal
                                        fillMode={fillMode}
                                        rounded={shape.rounded}
                                        size={size}
                                        themeColor={themeColor}
                                    >
                                        {shape.content}
                                    </BadgeNormal>
                                </span>
                            )))}
                        </React.Fragment>
                    ))}
                </React.Fragment>
            ))}
        </div>
    </>
);
