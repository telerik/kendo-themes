import * as React from 'react';
import { Icon } from '../../icon';
import { Badge, BadgeNormal, KendoBadgeProps } from '..';

type SizeOption = KendoBadgeProps['size'];

const sizes: SizeOption[] = Badge.options.size.filter(Boolean);

const rows: {
    label: string;
    render: (size: SizeOption) => React.ReactElement;
}[] = [
    { label: 'Text', render: (size) => <BadgeNormal size={size}>Text</BadgeNormal> },
    {
        label: 'Leading Icon + Text',
        render: (size) => (
            <BadgeNormal size={size}>
                <Icon className="k-badge-icon" icon="plus-circle" />
                Text
            </BadgeNormal>
        )
    },
    {
        label: 'Text + Trailing Icon',
        render: (size) => (
            <BadgeNormal size={size}>
                Text
                <Icon className="k-badge-icon" icon="plus-circle" />
            </BadgeNormal>
        )
    },
    {
        label: 'Icon-only',
        render: (size) => (
            <BadgeNormal className="k-badge-icon-only" size={size}>
                <Icon className="k-badge-icon" icon="plus-circle" />
            </BadgeNormal>
        )
    },
    { label: 'Number', render: (size) => <BadgeNormal size={size}>1</BadgeNormal> },
    { label: 'Empty', render: (size) => <BadgeNormal size={size} /> },
];

const styles = `
    #test-area {
        grid-template-columns: 160px repeat(${sizes.length}, 1fr);
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span></span>
            {sizes.map((size) => (
                <span className="k-text-center" key={`label-${size}`}>{size}</span>
            ))}

            {rows.map(({ label, render }) => (
                <React.Fragment key={label}>
                    <span>{label}</span>
                    {sizes.map((size) => (
                        <span key={`${label}-${size}`}>{render(size)}</span>
                    ))}
                </React.Fragment>
            ))}
        </div>
    </>
);
