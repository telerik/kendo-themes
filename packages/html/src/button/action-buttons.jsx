import * as styles from '../../utils/styles';
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
        styles.alignClass( alignment, 'k-actions' ),
        styles.orientationClass( orientation, 'k-actions' ),
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
    alignment: null,
    orientation: null

};

ActionButtonsStatic.propTypes = {
    children: typeof [],
    className: typeof '',

    alignment: typeof [null, 'start', 'center', 'end', 'stretched'],
    orientation: typeof [null, 'horizontal', 'vertical'],
    aria: typeof false,

    htmlAttributes: typeof []
};

export { ActionButtons, ActionButtonsStatic };
