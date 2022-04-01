import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component/index';

class Layout extends Component {
    render() {
        return <LayoutStatic {...this.props} />;
    }
}

function LayoutStatic(props) {

    const {
        className: ownClassName,

        type,
        orientation,
        alignItems,
        justifyContent,
        justifyItems,
        wrap,

        children,

        aria,

        ...htmlAttributes
    } = props;


    let LayoutClasses = [
        ownClassName,
        type && `k-${type}-layout`,
        styles.orientationStackClass( orientation ),
        styles.alignClass( alignItems, 'k-align-items' ),
        styles.alignClass( justifyContent, 'k-justify-content' ),
        styles.alignClass( justifyItems, 'k-justify-items' ),
        {
            'k-flex-wrap': wrap === true
        }
    ];


    let ariaAttr = aria
        ? {}
        : {};


    return (
        <div className={LayoutClasses} {...ariaAttr} {...htmlAttributes}>
           {children}
        </div>
    );
}

LayoutStatic.defaultProps = {
    ...globalDefaultProps,

    children: [],
    type: null,
    orientation: null,
    alignItems: null,
    justifyContent: null,
    justifyItems: null,
    wrap: false,
};

LayoutStatic.propTypes = {
    children: typeof [],
    className: typeof '',

    type: typeof [null, 'stack', 'flex', 'grid'],
    orientation: typeof [null, 'horizontal', 'vertical'],
    alignItems: typeof [null, 'start', 'center', 'end', 'stretch'],
    justifyContent: typeof [null, 'start', 'center', 'end', 'stretch'],
    justifyItems: typeof [null, 'start', 'center', 'end', 'stretch'],
    wrap: typeof false,

    aria: typeof false,

    htmlAttributes: typeof []
};

export { Layout, LayoutStatic };
