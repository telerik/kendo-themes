import { Component, globalDefaultProps } from '../component';

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
        legacy,

        ...htmlAttributes
    } = props;

    let noDataClasses = [
        ownClassName,
        'k-no-data'
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {

        let legacyClasses = [
            ownClassName,
            'k-nodata'
        ];

        return (
            <div className={legacyClasses} {...ariaAttr} {...htmlAttributes}>No data found.</div>
        );
    }

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
