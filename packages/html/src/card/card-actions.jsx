import { Component, globalDefaultProps } from '../component/index';
import { ButtonStatic } from '../button/index';

function transformActions(actions) {
    let newActions = [];

    actions.forEach(action => {
        if (action === 'more') {
            newActions.push(
                <ButtonStatic className="k-card-details" icon="more-vertical" rounded="medium" size="medium" fillMode="flat" themeColor="base"></ButtonStatic>
            );

            return;
        }

        newActions.push(
            <ButtonStatic icon={action} rounded="medium" size="medium" fillMode="flat" themeColor="base"></ButtonStatic>
        );
    });

    return newActions;
}

class CardActions extends Component {
    render() {
        return <CardActionsStatic {...this.props} />;
    }
}

function CardActionsStatic(props) {

    const {
        className: ownClassName,

        actions,
        parent,

        aria,

        ...htmlAttributes
    } = props;

    let CardActionsClasses = [
        ownClassName,
        `k-card-${parent}-actions`
    ];

    let ariaAttr = aria
    ? {}
    : {};

    if (actions.length === 0) {
        return <></>;
    }

    return (
        <span className={CardActionsClasses} {...ariaAttr} {...htmlAttributes}>
            {transformActions( actions )}
        </span>
    );

}

CardActionsStatic.defaultProps = {
    ...globalDefaultProps,

    actions: [],
    parent: 'header',
};

CardActionsStatic.propTypes = {
    className: typeof '',

    actions: typeof [],
    parent: typeof ['header', 'body'],

    aria: typeof false,

    htmlAttributes: typeof []
};

export { CardActions, CardActionsStatic };
