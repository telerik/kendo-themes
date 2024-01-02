import { classNames, kendoThemeMaps, stateClassNames, States } from '../misc';
import { Button } from '../button';

export const ORGCHARTNODEGROUP_CLASSNAME = `k-orgchart-node-group`;

const states = [
    States.focus
];

export type KendoOrgchartNodeGroupProps = {
    title?: string;
    subtitle?: string;
    lineBottom?: boolean;
    lineTop?: boolean;
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

export const OrgchartNodeGroup = (
    props: KendoOrgchartNodeGroupProps &
        KendoOrgchartGroupState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        title,
        subtitle,
        lineBottom,
        lineTop,
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
                ORGCHARTNODEGROUP_CLASSNAME,
                'k-vstack',
                'k-align-items-center',
            )}>

            {lineTop && <div className="k-orgchart-line k-orgchart-line-v"></div> }
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
            {lineBottom && <div className="k-orgchart-line k-orgchart-line-v"></div> }
            {button && (
                <Button className="k-orgchart-button" icon={buttonIcon}></Button>
            )}
        </div>
    );
};

OrgchartNodeGroup.states = states;
