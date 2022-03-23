import { Component, globalDefaultProps } from '../component/index';

class CalendarFooter extends Component {
    render() {
        return <CalendarFooterStatic {...this.props} />;
    }
}

function CalendarFooterStatic(props) {

    const {
        className: ownClassName,

        aria,

        ...htmlAttributes

    } = props;

    let ariaAttr = aria
        ? {}
        : {};


    let CalendarFooterClasses = [
        ownClassName,
        'k-calendar-footer',
    ];

    return (
        <div className={CalendarFooterClasses} {...ariaAttr} {...htmlAttributes}>
            <a href="#" className="k-link k-nav-today">Monday, October 29, 2021</a>
        </div>
    );
}

CalendarFooterStatic.defaultProps = {
    ...globalDefaultProps,
};

CalendarFooterStatic.propTypes = {
    className: typeof '',

    aria: typeof false,

    htmlAttributes: typeof []
};


export { CalendarFooter, CalendarFooterStatic };
