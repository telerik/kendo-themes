import { Component, globalDefaultProps } from '../component';
import { InputStatic } from '../input/index';

class Searchbar extends Component {
    render() {
        return <SearchbarStatic {...this.props} />;
    }
}

function SearchbarStatic(props) {

    const {
        className: ownClassName,
        aria,

        placeholder,

        ...htmlAttributes
    } = props;

    let searchbarClasses = [
        ownClassName,
        'k-searchbar'
    ];

    let ariaAttr = aria
        ? {}
        : {};

    return (
        <span className={searchbarClasses}
            {...ariaAttr}
            {...htmlAttributes}>
            <InputStatic placeholder={placeholder} />
        </span>
    );
}

SearchbarStatic.defaultProps = {
    ...globalDefaultProps,

    className: '',
    placeholder: ''
};

SearchbarStatic.propTypes = {
    className: typeof '',
    placeholder: typeof '',

    aria: typeof false,

    htmlAttributes: typeof []
};

export { Searchbar, SearchbarStatic };
