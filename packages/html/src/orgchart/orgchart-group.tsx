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
    button?: boolean;
    buttonIcon?: "plus" | "minus";
    focus?: boolean,
    orientation?: 'horizontal' | 'vertical';
};

export type KendoOrgchartGroupState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    orientation: 'horizontal',
    buttonIcon: 'plus',
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
        button,
        buttonIcon = defaultProps.buttonIcon,
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
            {button && (
                <Button className="k-orgchart-button" icon={buttonIcon}></Button>
            )}
        </div>
    );
};

OrgchartGroup.states = states;
