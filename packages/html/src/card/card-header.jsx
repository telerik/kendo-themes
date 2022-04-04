import { Component, globalDefaultProps } from '../component/index';
import { CardTitleStatic, CardSubtitleStatic, CardActionsStatic } from '../card/index';

class CardHeader extends Component {
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
        return <CardHeaderStatic {...this.props} />;
    }
}

function CardHeaderStatic(props) {
    const {
        className: ownClassName,

        title,
        subtitle,
        actions,

        children,

        aria,

        ...htmlAttributes
    } = props;

    let cardHeaderClasses = [
        ownClassName,
        'k-card-header',
    ];

    let ariaAttr = aria
        ? {}
        : {};


    return (
        <div className={cardHeaderClasses} {...ariaAttr} {...htmlAttributes}>
            {title && <CardTitleStatic>{title}</CardTitleStatic>}
            {subtitle && <CardSubtitleStatic>{subtitle}</CardSubtitleStatic>}
            <>{children}</>
            { actions.length > 0 && <CardActionsStatic actions={actions} parent="header" />}
        </div>
    );
}

CardHeaderStatic.defaultProps = {
    ...globalDefaultProps,

    className: '',
    children: [],

    title: '',
    subtitle: '',
    actions: [],
};

CardHeaderStatic.propTypes = {
    className: typeof '',
    children: typeof [],

    title: typeof '',
    subtitle: typeof '',
    actions: typeof [],

    aria: typeof false,

    htmlAttributes: typeof []
};

export { CardHeader, CardHeaderStatic };
