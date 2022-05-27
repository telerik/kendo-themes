import { Component, globalDefaultProps } from '../component/index';

class NoData extends Component {
    render() {
        return <NoDataStatic {...this.props} />;
    }
}

function NoDataStatic(props) {

    const {
        className: ownClassName,
        // eslint-disable-next-line no-unused-vars
        children,

        aria,

        ...htmlAttributes
    } = props;

    let noDataClasses = [
        ownClassName,
        'k-no-data'
    ];

    let ariaAttr = aria
        ? {}
        : {};

    return (
        <div className={noDataClasses} {...ariaAttr} {...htmlAttributes}>No data found.</div>
    );
}

NoDataStatic.defaultProps = {
    ...globalDefaultProps,

    children: []
};

NoDataStatic.propTypes = {
    children: typeof [],
    className: typeof '',

    aria: typeof false,
    legacy: typeof false,

    htmlAttributes: typeof []
};

export { NoData, NoDataStatic };
