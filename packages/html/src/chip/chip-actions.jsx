import { Component, globalDefaultProps } from '../component/index';
import { IconStatic } from '../icon/index';

function transformActions(actions) {
    let newActions = [];

    actions.forEach(action => {
        if (action === 'more') {
            newActions.push(
                <span className="k-chip-action k-chip-more-action">
                    <IconStatic name="more-vertical" />
                </span>
            );

            return;
        }

        if (action === 'remove') {
            newActions.push(
                <span className="k-chip-action k-chip-remove-action">
                    <IconStatic name="x-circle" />
                </span>
            );

            return;
        }

        newActions.push(
            <span className={`k-chip-action k-chip-${action}-action`}>
                <IconStatic name={action} />
            </span>
        );
    });

    return newActions;
}

class ChipActions extends Component {
    render() {
        return <ChipActionsStatic {...this.props} />;
    }
}

function ChipActionsStatic(props) {

    const {
        actions
    } = props;

    if (actions.length === 0) {
        return <></>;
    }

    return (
        <span className="k-chip-actions">
            {transformActions( actions )}
        </span>
    );

}

ChipActionsStatic.defaultProps = {
    ...globalDefaultProps,

    actions: []
};

ChipActionsStatic.propTypes = {
    className: typeof '',
    children: typeof [],

    actions: typeof [],

    aria: typeof false,
    legacy: typeof false,

    htmlAttributes: typeof []
};

export { ChipActions, ChipActionsStatic };
