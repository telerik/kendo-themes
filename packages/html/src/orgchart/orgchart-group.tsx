import { classNames, kendoThemeMaps } from '../misc';

export const ORGCHARTGROUP_CLASSNAME = `k-orgchart-group`;

const states = [];

const options = {};

export type KendoOrgchartGroupProps = {
    children?: React.ReactNode;
    nodes?: React.ReactNode;
    orientation?: 'horizontal' | 'vertical';
    justifyContent?: null | 'start' | 'center' | 'end' | 'stretch' | 'around';
    level?: number;
    role?: 'tree' | 'group';
    'aria-orientation'?: 'horizontal' | 'vertical';
};

const defaultOptions = {
    orientation: 'horizontal'
};

export const OrgchartGroup = (
    props: KendoOrgchartGroupProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        children,
        nodes,
        orientation = defaultOptions.orientation,
        justifyContent,
        level,
        role,
        'aria-orientation': ariaOrientation,
        ...other
    } = props;

    // Determine if this is the root level (defaults to true if level not specified)
    const isLevel1 = level === undefined || level === 1;
    const groupRole = role || (isLevel1 ? 'tree' : 'group');
    const groupOrientation = ariaOrientation || (isLevel1 && orientation === 'horizontal' ? 'horizontal' : undefined);

    return (
        <div
            {...other}
            className={classNames(
                ORGCHARTGROUP_CLASSNAME,
                'k-pos-absolute',
                {
                    [`k-${kendoThemeMaps.orientationMap[orientation!] || orientation}`]: orientation,
                    [`k-justify-content-${justifyContent}`]: justifyContent,
                    ['k-orgchart-level-1']: isLevel1,
                }
            )}
            style={{ width: '100%' }}
            role={groupRole}
            {...(groupOrientation && { 'aria-orientation': groupOrientation })}
        >

            {nodes &&
                <div
                    className={classNames(
                        'k-orgchart-node-container',
                        'k-justify-content-around',
                        {
                            [`k-${kendoThemeMaps.orientationMap[orientation!] || orientation}`]: orientation,
                        }
                    )}>
                    {nodes}
                </div>
            }
            {children}
        </div>
    );
};

OrgchartGroup.states = states;
OrgchartGroup.options = options;
OrgchartGroup.className = ORGCHARTGROUP_CLASSNAME;
OrgchartGroup.defaultOptions = defaultOptions;

export default OrgchartGroup;
