import * as styles from '../../utils/styles';
import { globalDefaultProps, Component } from '../component/index';

class OrgChart extends Component {

    init() {
        let chartNodes = [];
        let children = this._props.children;
        let newChildren = [];

        children.forEach( child => {
            let component = child._component;

            if (component === 'OrgChartNode') {
                chartNodes.push( child );
                return;
            }

            newChildren.push( child );
        });

        this._props.chartNodes = chartNodes;
        this._props.children = newChildren;
    }

    render() {
        return <OrgChartStatic {...this.props} />;
    }
}


function OrgChartStatic(props) {

    const {
        className: ownClassName,
        children,

        width,
        height,
        orientation,
        justifyContent,

        chartNodes,

        aria,

        ...htmlAttributes
    } = props;



    let OrgChartClasses = [
        ownClassName,
        'k-orgchart'
    ];

    let OrgChartGroupClasses = [
        "k-orgchart-group",
        styles.orientationStackClass( orientation ),
        styles.positionClass( 'absolute' ),
        styles.alignClass( justifyContent, 'k-justify-content' ),
    ];

    let OrgChartNodeClasses = [
        "k-orgchart-node-container",
        styles.orientationStackClass( orientation ),
        styles.alignClass( 'around', 'k-justify-content' ),
    ];

    let ariaAttr = aria
        ? {}
        : {};


    return (
        <div className={OrgChartClasses} {...ariaAttr} {...htmlAttributes}>
            <div className="k-orgchart-container" style={`width: ${width}; height: ${height}`}>
                <div className={OrgChartGroupClasses} style="width: 100%;">
                       {chartNodes.length > 0 && <div className={OrgChartNodeClasses}><>{chartNodes}</></div>}
                       <>{children}</>
                </div>
            </div>
        </div>
    );
}

OrgChartStatic.defaultProps = {
    ...globalDefaultProps,

    width: '100%',
    height: '300px',
    orientation: 'horizontal',
    justifyContent: null,

    chartNodes: typeof [],

};

OrgChartStatic.propTypes = {
    children: typeof [],
    chartNodes: typeof [],
    className: typeof '',

    width: typeof '',
    height: typeof '',
    orientation: typeof ['horizontal', 'vertical'],
    justifyContent: typeof [null, 'start', 'center', 'end', 'stretch', 'around'],

    aria: typeof false,

    htmlAttributes: typeof []
};

export { OrgChart, OrgChartStatic };
