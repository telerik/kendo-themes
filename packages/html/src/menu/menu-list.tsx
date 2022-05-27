import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component/index';

class MenuList extends Component {
    render() {
        return <MenuListStatic {...this.props} />;
    }
}

function MenuListStatic(props) {
    const {
        className: ownClassName,
        children,

        size,

        aria,

        ...htmlAttributes
    } = props;

    let menuListClasses = [
        ownClassName,
        'k-menu-group',
        styles.sizeClass( size, 'k-menu-group' ),
    ];

    let ariaAttr = aria
        ? {}
        : {};

    return (
        <ul className={menuListClasses} {...ariaAttr} {...htmlAttributes}>
            {children}
        </ul>
    );
}

MenuListStatic.defaultProps = {
    ...globalDefaultProps,

    className: '',

    size: 'medium'
};

MenuListStatic.propTypes = {
    size: typeof [ null, 'small', 'medium', 'large' ],

    children: typeof [],

    aria: typeof false,
    legacy: typeof false,

    className: typeof '',
    htmlAttributes: typeof []
};

export { MenuList, MenuListStatic };
