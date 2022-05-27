import { Component, globalDefaultProps } from '../component/index';

class ActionButtons extends Component {
    render() {
        return <ActionButtonsStatic {...this.props} />;
    }
}

function ActionButtonsStatic(props) {

    const {
        className: ownClassName,

        alignment,
        orientation,
        children,

        aria,

        ...htmlAttributes
    } = props;

    let ActionButtonsClasses = [
        ownClassName,
        'k-actions',
        `k-actions-${alignment}`,
        `k-actions-${orientation}`
    ];

    let ariaAttr = aria
        ? {}
        : {};


    return (
        <div className={ActionButtonsClasses} {...ariaAttr} {...htmlAttributes}>
            <>{children}</>
        </div>
    );
}

ActionButtonsStatic.defaultProps = {
    ...globalDefaultProps,

    children: [],
    alignment: 'start',
    orientation: 'horizontal'

};

ActionButtonsStatic.propTypes = {
    children: typeof [],
    className: typeof '',

    alignment: typeof [ 'start', 'center', 'end', 'stretched' ],
    orientation: typeof [ 'horizontal', 'vertical' ],
    aria: typeof false,

    htmlAttributes: typeof []
};

export { ActionButtons, ActionButtonsStatic };
