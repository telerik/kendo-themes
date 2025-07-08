import { classNames } from '../misc';
import { ImageEditorToolbar } from './imageeditor-toolbar';

import { KendoComponent } from '../_types/component';
export const IMAGEEDITOR_CLASSNAME = `k-imageeditor`;

const states = [];

const options = {};

export type KendoImageEditorProps = {
    toolbarItems?: React.JSX.Element | React.JSX.Element[];
    actionPane?: React.JSX.Element | React.JSX.Element[];
    contentHeight?: string;
};

const defaultOptions = {};

export const ImageEditor: KendoComponent<KendoImageEditorProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoImageEditorProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        toolbarItems,
        actionPane,
        contentHeight,
        children,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                IMAGEEDITOR_CLASSNAME
            )}>
            <div className="k-imageeditor-header">
                <ImageEditorToolbar toolbarItems={toolbarItems} />
            </div>

            <div className="k-imageeditor-content" style={{ height: contentHeight }}>
                <div className="k-imageeditor-canvas-container">
                    <div className="k-imageeditor-canvas">
                        {children}
                    </div>
                </div>

                {actionPane &&
                <div className="k-imageeditor-action-pane">{actionPane}</div>
                }
            </div>
        </div>
    );
};

ImageEditor.states = states;
ImageEditor.options = options;
ImageEditor.className = IMAGEEDITOR_CLASSNAME;
ImageEditor.defaultOptions = defaultOptions;

export default ImageEditor;
