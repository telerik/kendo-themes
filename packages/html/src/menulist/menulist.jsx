import * as styles from '../../utils/styles';
import { Component, globalDefaultProps } from '../component';

class MenuList extends Component {
    render() {
        return <MenuListStatic {...this.props} />;
    }
}

function MenuListStatic(props) {
    const {
        className: ownClassName,

        size,

        aria,
        legacy,

        ...htmlAttributes
    } = props;

    let menuListClasses = [
        ownClassName,
        'k-group k-menu-group k-reset',
        styles.sizeClass( size, 'k-menu-group' ),
    ];


    let legacyMenuListClasses = [
        ownClassName,
        'k-group k-menu-group k-reset',
    ];

    let ariaAttr = aria
        ? {}
        : {};

    if (legacy) {
        return (
            <ul className={legacyMenuListClasses} {...ariaAttr} {...htmlAttributes} />
        );
    }

    return (
        <ul className={menuListClasses} {...ariaAttr} {...htmlAttributes} />
    );
}

MenuListStatic.defaultProps = {
    ...globalDefaultProps,

    className: '',

    size: 'medium'
};

MenuListStatic.propTypes = {
    size: typeof [ 'none', 'small', 'medium', 'large' ],

    aria: typeof false,
    legacy: typeof false,

    className: typeof '',
    htmlAttributes: typeof []
};

export { MenuList, MenuListStatic };
