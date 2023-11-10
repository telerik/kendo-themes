import { classNames, kendoThemeMaps, stateClassNames, States } from '../misc';
import { Button } from '../button';

export const ORGCHARTGROUP_CLASSNAME = `k-orgchart-node-group`;

const states = [
    States.focus
];

export type KendoOrgchartGroupProps = {
    title?: string;
    subtitle?: string;
    line?: boolean;
    plus?: boolean,
    focus?: boolean,
    orientation?: 'horizontal' | 'vertical';
};

export type KendoOrgchartGroupState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    orientation: 'horizontal'
};

export const OrgchartGroup = (
    props: KendoOrgchartGroupProps &
        KendoOrgchartGroupState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        title,
        subtitle,
        line,
        plus,
        focus,
        orientation = defaultProps.orientation,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                ORGCHARTGROUP_CLASSNAME,
                'k-vstack',
                'k-align-items-center',
            )}>

            <div
                className={classNames(
                    'k-orgchart-node-group-container',
                    'k-vstack',
                    stateClassNames('k-orgchart-node-group-container', {
                        focus,
                    }),
                )}>

                {title && <div className="k-orgchart-node-group-title">{title}</div>}
                {subtitle && <div className="k-orgchart-node-group-subtitle">{subtitle}</div>}

                <div
                    className={classNames(
                        'k-orgchart-node-container',
                        {
                            [`k-${kendoThemeMaps.orientationMap[orientation!] || orientation}`]: orientation,
                        }
                    )}>
                    {props.children}
                </div>
            </div>
            {line && <div className="k-orgchart-line k-orgchart-line-v"></div> }
            {plus && <Button className="k-orgchart-button" icon="plus"></Button> }
        </div>
    );
};

OrgchartGroup.states = states;
