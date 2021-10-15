import { Component, globalDefaultProps } from '../component';

class Icon extends Component {
    render() {
        return <IconStatic {...this.props} />;
    }
}

function IconStatic(props) {
    const {
        className: ownClassName,

        name,

        aria,

        ...htmlAttributes

    } = props;

    let iconClasses = [
        ownClassName,
        'k-icon',
        `k-i-${name}`
    ];

    let ariaAttr = aria
        ? {}
        : {};

    return (
        <>
            { name &&
                <span className={iconClasses} {...ariaAttr} {...htmlAttributes}>
                    {props.children}
                </span>
            }
        </>
    );
}

IconStatic.defaultProps = {
    ...globalDefaultProps,

    name: ''
};
IconStatic.propTypes = {
    className: typeof '',

    name: typeof '',

    children: typeof [],

    aria: typeof false,

    htmlAttributes: typeof [],
};

export { Icon, IconStatic };
