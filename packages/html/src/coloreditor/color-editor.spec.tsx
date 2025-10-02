import { classNames, stateClassNames, States, Size, optionClassNames } from '../misc';
import { ActionButtons } from '../action-buttons';
import { Button } from '../button';
import { ButtonGroup } from '../button-group';
import { ColorGradient } from '../colorgradient';
import { ColorPalette } from '../colorpalette';
import { ColorPreview } from '../color-preview';
import { PALETTEPRESETS } from '../colorpalette/colorpalette-presets';

import { KendoComponent } from '../_types/component';
import { COLOREDITOR_FOLDER_NAME, COLOREDITOR_MODULE_NAME } from './constants';
const COLOREDITOR_CLASSNAME = 'k-coloreditor';

const states = [
    States.focus
];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
};

export type KendoColorEditorOptions = {
    size?: (typeof options.size)[number] | null;
};

export type KendoColorEditorProps = KendoColorEditorOptions & {
    view?: 'gradient' | 'palette';
    color?: string;
    currentColor?: string;
    focusView?: boolean;
    dir?: 'ltr' | 'rtl';
    group?: boolean;
    palette?: Array<string> | any;
    actionButtons?: boolean;
    canvasOrientation?: 'horizontal' | 'vertical';
};

export type KendoColorEditorState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    view: 'gradient',
    palette: PALETTEPRESETS.office,
    actionButtons: true,
    canvasOrientation: 'horizontal'
} as const;

export const ColorEditor: KendoComponent<KendoColorEditorProps & KendoColorEditorState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoColorEditorProps &
        KendoColorEditorState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size,
        view = defaultOptions.view,
        palette = defaultOptions.palette,
        color,
        currentColor,
        focus,
        focusView,
        dir,
        group,
        actionButtons = defaultOptions.actionButtons,
        canvasOrientation = defaultOptions.canvasOrientation,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                'k-flatcolorpicker',
                COLOREDITOR_CLASSNAME,
                optionClassNames(COLOREDITOR_CLASSNAME, { size }),
                stateClassNames(COLOREDITOR_CLASSNAME, { focus }),
            )} dir={dir}>
            <div className="k-coloreditor-header k-hstack">
                <div className="k-coloreditor-header-actions k-hstack">
                    { group &&
                        <ButtonGroup fillMode="flat">
                            <Button className="k-group-start" size={size} fillMode="flat" icon="droplet-slider" selected={ view === 'gradient' }></Button>
                            <Button className="k-group-end" size={size} fillMode="flat" icon="palette" selected={ view === 'palette' }></Button>
                        </ButtonGroup>
                    }
                </div>
                <div className="k-spacer"></div>
                <div className="k-coloreditor-header-actions k-hstack">
                    <Button fillMode="flat" icon="droplet-slash" size={size}></Button>
                    <div className="k-coloreditor-preview k-vstack">
                        <ColorPreview className="k-coloreditor-preview-color" color={color} />
                        <ColorPreview className="k-coloreditor-current-color" color={currentColor} />
                    </div>
                </div>
            </div>
            <div className="k-coloreditor-views k-vstack">
                { view === 'gradient' ? <ColorGradient focus={focusView} size={size} canvasOrientation={canvasOrientation} /> : <ColorPalette palette={palette} size={size} /> }
            </div>
            {actionButtons && <ActionButtons className="k-coloreditor-footer" alignment="start" >
                <Button themeColor="primary" size={size} className="k-coloreditor-apply">Apply</Button>
                <Button className="k-coloreditor-cancel" size={size}>Cancel</Button>
            </ActionButtons>}
        </div>
    );
};

ColorEditor.states = states;
ColorEditor.options = options;
ColorEditor.className = COLOREDITOR_CLASSNAME;
ColorEditor.defaultOptions = defaultOptions;
ColorEditor.moduleName = COLOREDITOR_MODULE_NAME;
ColorEditor.folderName = COLOREDITOR_FOLDER_NAME;

export default ColorEditor;
