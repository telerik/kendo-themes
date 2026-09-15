import { ActionButtons } from '../action-buttons';
import { Button } from '../button';
import { classNames } from '../misc';

export const IMAGEEDITORPANE_CLASSNAME = `k-imageeditor-pane`;

const states = [];

const options = {};

export type KendoImageEditorPaneProps = {
    title?: string;
    actions?: React.JSX.Element | React.JSX.Element[];
};

const defaultOptions = {};

export type KendoImageEditorPaneState = { [K in (typeof states)[number]]?: boolean };

export const ImageEditorPane = (
    props: KendoImageEditorPaneProps & KendoImageEditorPaneState & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        title,
        actions,
        children,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                IMAGEEDITORPANE_CLASSNAME
            )}
        >
            <div className="k-imageeditor-pane-header">
                <div className="k-imageeditor-pane-title">{title}</div>
                <Button fillMode="flat" icon="x" aria-label="Close" title="Close"></Button>
            </div>

            <div className="k-imageeditor-pane-content">
                {children}
            </div>

            {actions &&
            <ActionButtons alignment="end" className="k-imageeditor-pane-footer">
                {actions}
            </ActionButtons>
            }
        </div>
    );
};

ImageEditorPane.states = states;
ImageEditorPane.options = options;
ImageEditorPane.className = IMAGEEDITORPANE_CLASSNAME;
ImageEditorPane.moduleName = null;
ImageEditorPane.folderName = null;
ImageEditorPane.defaultOptions = defaultOptions;

export default ImageEditorPane;
