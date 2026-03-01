import { classNames, kendoThemeMaps } from '../misc';

export const ORGCHARTGROUP_CLASSNAME = `k-orgchart-group`;

const states = [];

const options = {};

export type KendoOrgchartGroupProps = {
    children?: React.ReactNode;
    nodes?: React.ReactNode;
    orientation?: 'horizontal' | 'vertical';
    justifyContent?: null | 'start' | 'center' | 'end' | 'stretch' | 'around';
    /** @aria When level=1, adds k-orgchart-level-1 class and role="tree" */
    level?: number;
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
        ...other
    } = props;

    const isRoot = level === 1;

    return (
        <div
            {...other}
            className={classNames(
                ORGCHARTGROUP_CLASSNAME,
                'k-pos-absolute',
                {
                    [`k-${kendoThemeMaps.orientationMap[orientation!] || orientation}`]: orientation,
                    [`k-justify-content-${justifyContent}`]: justifyContent,
                    'k-orgchart-level-1': isRoot,
                }
            )}
            role={isRoot ? 'tree' : 'group'}
            aria-orientation={isRoot ? 'horizontal' : undefined}
            style={{ width: '100%' }}>

            {nodes &&
                <div
                    className={classNames(
                        'k-orgchart-node-container',
                        'k-justify-content-around',
                        {
                            [`k-${kendoThemeMaps.orientationMap[orientation!] || orientation}`]: orientation,
                        }
                    )}
                    role="presentation">
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
