import { Button } from '..';
import { classNames } from '../misc';

export const PANESCROLLABLE_CLASSNAME = `k-pane-scrollable`;

const states = [];

const options = {};

export type KendoPaneScrollableProps = {
    actions?: React.JSX.Element | React.JSX.Element[];
    title?: string;
};

const defaultPaneActions = (
    <>
        <Button fillMode="flat" icon="pin"></Button>
        <Button fillMode="flat" icon="more-vertical"></Button>
    </>
);

const defaultOptions = {
    actions: defaultPaneActions,
    title: "Title"
};

export const PaneScrollable = (
    props: KendoPaneScrollableProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        actions = defaultOptions.actions,
        title = defaultOptions.title,
        children,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                PANESCROLLABLE_CLASSNAME
            )}>
            <div className="k-pane-header">
                <span className="k-pane-title">{title}</span>
                <div className="k-pane-actions">
                    {actions}
                </div>
            </div>
            <div className="k-pane-content">{children}</div>
        </div>
    );
};

PaneScrollable.states = states;
PaneScrollable.options = options;
PaneScrollable.className = PANESCROLLABLE_CLASSNAME;
PaneScrollable.defaultOptions = defaultOptions;

export default PaneScrollable;
