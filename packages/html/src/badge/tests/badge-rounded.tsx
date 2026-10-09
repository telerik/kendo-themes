import * as React from 'react';
import { Icon } from '../../icon';
import { Badge, BadgeNormal, KendoBadgeProps } from '..';

type RoundedOption = KendoBadgeProps['rounded'];

const icon = <Icon className="k-badge-icon" icon="plus-circle" />;
const roundedOptions: RoundedOption[] = Badge.options.rounded.filter(Boolean);

const rows: { label: string, render: (rounded: RoundedOption) => React.ReactElement }[] = [
    { label: 'Text', render: (rounded) => <BadgeNormal rounded={rounded}>Text</BadgeNormal> },
    { label: 'Text + Icon', render: (rounded) => <BadgeNormal rounded={rounded}>{icon}Text</BadgeNormal> },
    { label: 'Icon + Text', render: (rounded) => <BadgeNormal rounded={rounded}>Text{icon}</BadgeNormal> },
    { label: 'Icon', render: (rounded) => <BadgeNormal className="k-badge-icon-only" rounded={rounded}>{icon}</BadgeNormal> },
    { label: 'Number', render: (rounded) => <BadgeNormal rounded={rounded}>1</BadgeNormal> },
    { label: 'Empty', render: (rounded) => <BadgeNormal rounded={rounded}></BadgeNormal> },
];

const styles = `
    #test-area {
        grid-template-columns: 100px repeat(${roundedOptions.length}, 1fr);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            {roundedOptions.map((rounded) => (
                <span className="k-text-center" key={`label-${rounded}`}>{`${rounded}`}</span>
            ))}

            {rows.map(({ label, render }) => (
                <>
                    <span>{label}</span>
                    {roundedOptions.map((rounded) => (
                        <span key={`${label}-${rounded}`}>{render(rounded)}</span>
                    ))}
                </>
            ))}
        </div>
    </>
);
