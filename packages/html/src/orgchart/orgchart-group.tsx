import { classNames, kendoThemeMaps } from '../misc';
import { OrgchartNode } from '../orgchart';

export const ORGCHARTGROUP_CLASSNAME = `k-orgchart-group`;

const states = [];

const options = {};

export type KendoOrgchartGroupProps = {
    children?: React.JSX.Element | React.JSX.Element[];
    orientation?: 'horizontal' | 'vertical';
    justifyContent?: null | 'start' | 'center' | 'end' | 'stretch' | 'around';
};

export const OrgchartGroup = (
    props: KendoOrgchartGroupProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        children,
        orientation = "horizontal",
        justifyContent,
        ...other
    } = props;

    const chartNodes : React.JSX.Element[] = [];
    const chartGroups : React.JSX.Element[] = [];

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
                }
            )}
            style={{ width: '100%' }}>

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

export default OrgchartGroup;
