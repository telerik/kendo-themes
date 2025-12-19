import { classNames, kendoThemeMaps } from '../misc';
import { OrgchartNode } from '../orgchart';

export const ORGCHARTGROUP_CLASSNAME = `k-orgchart-group`;

const states = [];

const options = {};

export type KendoOrgchartGroupProps = {
    children?: React.JSX.Element | React.JSX.Element[];
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
        orientation = defaultOptions.orientation,
        justifyContent,
        level,
        role,
        'aria-orientation': ariaOrientation,
        ...other
    } = props;

    const chartNodes : React.JSX.Element[] = [];
    const chartGroups : React.JSX.Element[] = [];

    // Determine if this is the root level (defaults to true if level not specified)
    const isLevel1 = level === undefined || level === 1;
    const groupRole = role || (isLevel1 ? 'tree' : 'group');
    const groupOrientation = ariaOrientation || (isLevel1 && orientation === 'horizontal' ? 'horizontal' : undefined);

    if (children) {
        if (Array.isArray(children)) {
            children.map((child) => {
                if (child.type === OrgchartNode) {
                    chartNodes.push( child );
                } else {
                    chartGroups.push( child );
                }
            });
        } else {
            if (children.type === OrgchartNode) {
                chartNodes.push( children );
            } else {
                chartGroups.push( children );
            }
        }
    }

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

            {chartNodes.length > 0 &&
                <div
                    className={classNames(
                        'k-orgchart-node-container',
                        'k-justify-content-around',
                        {
                            [`k-${kendoThemeMaps.orientationMap[orientation!] || orientation}`]: orientation,
                        }
                    )}>
                    <>{chartNodes}</>
                </div>
            }
            <>{chartGroups}</>
        </div>
    );
};

OrgchartGroup.states = states;
OrgchartGroup.options = options;
OrgchartGroup.className = ORGCHARTGROUP_CLASSNAME;
OrgchartGroup.defaultOptions = defaultOptions;

export default OrgchartGroup;
