import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component/index';

class Popover extends Component {
    render() {
        return <PopoverStatic {...this.props} />;
    }
}

function PopoverStatic(props) {

    const {
        className: ownClassName,

        callout,
        title,
        body,

        children,

        aria,

        ...htmlAttributes
    } = props;

    let PopoverClasses = [
        ownClassName,
        'k-popover',
    ];

    let PopoverCalloutClasses = [
        'k-popover-callout',
        styles.calloutClass( callout )
    ];

    let ariaAttr = aria
        ? {}
        : {};


    return (
        <div className={PopoverClasses} {...ariaAttr} {...htmlAttributes}>
            {callout && <div className={PopoverCalloutClasses}></div>}
            {title && <div className="k-popover-header">{title}</div>}
            {body && <div className="k-popover-body">{body}</div>}
            <>{children}</>
        </div>
    );
}

PopoverStatic.defaultProps = {
    ...globalDefaultProps,

    children: [],
    callout: null,
    title: '',
    body: '',
};

PopoverStatic.propTypes = {
    children: typeof [],
    className: typeof '',

    callout: typeof [ null, 'top', 'bottom', 'left', 'right' ],
    title: typeof '',
    body: typeof '',

    aria: typeof false,

    htmlAttributes: typeof []
};

export { Popover, PopoverStatic };
