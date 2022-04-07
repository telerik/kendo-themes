import * as styles from '../../utils/styles';
import { ButtonStatic } from '../button/index';
import { globalDefaultProps, Component } from '../component/index';


class OrgChartGroup extends Component {
    render() {
        return <OrgChartGroupStatic {...this.props} />;
    }
}

function OrgChartGroupStatic(props) {

    const {
        className: ownClassName,
        children,

        title,
        subtitle,

        line,
        plus,

        focus,

        orientation,

        aria,

        ...htmlAttributes
    } = props;



    let OrgChartNodeGroupClasses = [
        ownClassName,
        "k-orgchart-node-group",
        styles.orientationStackClass( 'vertical' ),
        styles.alignClass( 'center', 'k-align-items' ),
    ];

    let OrgChartNodeGroupContainerClasses = [
        "k-orgchart-node-group-container",
        styles.orientationStackClass( 'vertical' ),
        {
            'k-focus': focus === true,
        }
    ];

    let OrgChartNodeContainerClasses = [
        "k-orgchart-node-container",
        styles.orientationStackClass( orientation ),
    ];


    let ariaAttr = aria
        ? {}
        : {};


    return (
        <div className={OrgChartNodeGroupClasses} {...ariaAttr} {...htmlAttributes}>
            <div className={OrgChartNodeGroupContainerClasses}>
                {title && <div className="k-orgchart-node-group-title">{title}</div>}
                {subtitle && <div className="k-orgchart-node-group-subtitle">{subtitle}</div>}

                <div className={OrgChartNodeContainerClasses}>
                    {children}
                </div>
            </div>
            {line && <div className="k-orgchart-line k-orgchart-line-v"></div> }
            {plus && <ButtonStatic className="k-orgchart-button" icon="plus"></ButtonStatic> }
        </div>
    );
}

OrgChartGroupStatic.defaultProps = {
    ...globalDefaultProps,

    title: '',
    subtitle: '',
    orientation: 'horizontal'
};

OrgChartGroupStatic.propTypes = {
    children: typeof [],
    className: typeof '',

    title: typeof '',
    subtitle: typeof '',

    line: typeof false,
    plus: typeof false,

    focus: typeof false,

    orientation: typeof ['horizontal', 'vertical'],

    aria: typeof false,

    htmlAttributes: typeof []
};

export { OrgChartGroup, OrgChartGroupStatic };
