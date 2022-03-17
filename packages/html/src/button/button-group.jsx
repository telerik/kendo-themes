
import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component/index';

class ButtonGroup extends Component {
    render() {
        return <ButtonGroupStatic {...this.props} />;
    }
}

function ButtonGroupStatic(props) {
    const {
        className: ownClassName,

        children,

        fillMode,

        aria,

        ...htmlAttributes
    } = props;

    let buttonGroupClasses = [
        ownClassName,
        'k-button-group',
        styles.fillModeClass( fillMode, 'k-button-group' )
    ];

    let ariaAttr = aria
        ? {}
        : {};

    return (
        <div className={buttonGroupClasses} {...ariaAttr} {...htmlAttributes}>
            {children}
        </div>
    );
}

ButtonGroupStatic.defaultProps = {
    ...globalDefaultProps,

    fillMode: null
};

ButtonGroupStatic.propTypes = {
    className: typeof '',
    children: typeof [],

    fillMode: typeof [ null, 'solid', 'flat', 'outline', 'link' ],

    aria: typeof false,

    htmlAttributes: typeof []
};

export { ButtonGroup, ButtonGroupStatic };
