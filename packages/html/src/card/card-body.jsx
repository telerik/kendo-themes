import { Component, globalDefaultProps } from '../component/index';
import { CardTitleStatic, CardSubtitleStatic, CardActionsStatic } from '../card/index';

class CardBody extends Component {
    init() {
        let actions = this._props.actions;
        let newActions = [];

        if (actions === undefined) {
            this._props.actions = [];
            return;
        }

        if (Array.isArray(actions)) {
            return;
        }

        actions.split(',').forEach(action => {
            newActions.push(action.trim());
        });

        this._props.actions = newActions;
    }

    render() {
        return <CardBodyStatic {...this.props} />;
    }
}

function CardBodyStatic(props) {
    const {
        className: ownClassName,

        children,

        title,
        subtitle,
        actions,

        aria,

        ...htmlAttributes
    } = props;

    let cardBodyClasses = [
        ownClassName,
        'k-card-body',
    ];

    let ariaAttr = aria
        ? {}
        : {};


    return (
        <div className={cardBodyClasses} {...ariaAttr} {...htmlAttributes}>
            {title && <CardTitleStatic>{title}</CardTitleStatic>}
            {subtitle && <CardSubtitleStatic>{subtitle}</CardSubtitleStatic>}
            <>{children}</>
            { actions.length > 0 && <CardActionsStatic actions={actions} parent="body" />}
        </div>
    );
}

CardBodyStatic.defaultProps = {
    ...globalDefaultProps,

    className: '',
    children: [],

    title: '',
    subtitle: '',
    actions: [],
};

CardBodyStatic.propTypes = {
    className: typeof '',
    children: typeof [],

    title: typeof '',
    subtitle: typeof '',
    actions: typeof [],

    aria: typeof false,

    htmlAttributes: typeof []
};

export { CardBody, CardBodyStatic };
