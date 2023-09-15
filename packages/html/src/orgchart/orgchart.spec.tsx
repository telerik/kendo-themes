import { classNames, kendoThemeMaps } from '../misc';
import { OrgchartNode, OrgchartToolbar } from '../orgchart';
import { SearchPanel } from '../searchpanel';

export const ORGCHART_CLASSNAME = `k-orgchart`;

const states = [];

const options = {};

export type KendoOrgchartProps = {
    children?: JSX.Element | JSX.Element[];
    width?: string;
    height?: string;
    orientation?: 'horizontal' | 'vertical';
    justifyContent?: null | 'start' | 'center' | 'end' | 'stretch' | 'around';
    showToolbar?: boolean;
    Toolbar?: any;
    orgChartSearchPanel?: boolean;
};

const defaultProps = {
    width: '100%',
    height: '300px',
    orientation: 'horizontal',
    showToolbar: false,
    Toolbar: null,
    orgChartSearchPanel: false
};

export const Orgchart = (
    props: KendoOrgchartProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        children,
        width = defaultProps.width,
        height = defaultProps.height,
        orientation = defaultProps.orientation,
        justifyContent,
        showToolbar = defaultProps.showToolbar,
        Toolbar = OrgchartToolbar,
        orgChartSearchPanel,
        ...other
    } = props;

    const chartNodes : JSX.Element[] = [];
    const chartGroups : JSX.Element[] = [];

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
                props.className,
                ORGCHART_CLASSNAME
            )}>
            { showToolbar && Toolbar ? <Toolbar /> : null}
            <div className="k-orgchart-container" style={{ width: width, height: height }}>
                { Toolbar && orgChartSearchPanel && <SearchPanel />}
                <div
                    className={classNames(
                        'k-orgchart-group',
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
            </div>
        </div>
    );
};

Orgchart.states = states;
Orgchart.options = options;
Orgchart.className = ORGCHART_CLASSNAME;
Orgchart.defaultProps = defaultProps;

export default Orgchart;
