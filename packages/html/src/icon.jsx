import { Component } from './component';

class Icon extends Component {
    render() {
        return <IconStatic {...this.props} />;
    }
}

function IconStatic(props) {
    const {
        name,
        className: ownClassName
    } = props;

    let iconClassName = [
        ownClassName,
        'k-icon',
        `k-i-${name}`
    ];

    return (
        <>
            { name && <span className={iconClassName}></span> }
        </>
    );
}

IconStatic.defaultProps = {
    name: '',
    className: ''
};
IconStatic.propTypes = {
    name: typeof '',
    className: typeof ''
};

export { Icon, IconStatic };
