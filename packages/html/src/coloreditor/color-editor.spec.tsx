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
    size: [ Size.undefined, Size.small, Size.medium, Size.large ],
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
            role="textbox"
            aria-label="Color editor"
            tabIndex={0}
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
                            <Button className="k-group-start" size={size} fillMode="flat" icon="droplet-slider" selected={ view === 'gradient' } aria-label="Color gradient view"></Button>
                            <Button className="k-group-end" size={size} fillMode="flat" icon="palette" selected={ view === 'palette' } aria-label="Color palette view"></Button>
                        </ButtonGroup>
                    }
                </div>
                <div className="k-spacer"></div>
                <div className="k-coloreditor-header-actions k-hstack">
                    <Button fillMode="flat" icon="droplet-slash" size={size} aria-label="Reset color"></Button>
                    <div className="k-coloreditor-preview k-vstack">
                        <ColorPreview className="k-coloreditor-preview-color" color={color} />
                        <ColorPreview className="k-coloreditor-current-color" color={currentColor} />
                    </div>
                </div>
            </div>
            <div className="k-coloreditor-views k-vstack">
                { view === 'gradient' ? <ColorGradient focus={focusView} size={size} canvasOrientation={canvasOrientation} role="none" tabIndex={-1} /> : <ColorPalette palette={palette} size={size} /> }
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

/**
 * Accessibility specification for ColorEditor (FlatColorPicker).
 *
 * @accessibility
 * - Wrapper has role=textbox with aria-label and tabindex=0
 * - Inner ColorGradient has role=none and tabindex=-1
 * - Disabled state uses aria-disabled=true
 * - Inner components (ColorPalette, ButtonGroup, etc.) follow their own specs
 *
 * @wcag 4.1.2 Name, Role, Value - textbox pattern for color value
 */
ColorEditor.ariaSpec = {
    selector: '.k-flatcolorpicker',
    rules: [
        { selector: '.k-flatcolorpicker', attribute: 'role=textbox', usage: 'The focusable wrapper should be considered a textbox with a submittable value.' },
        { selector: '.k-flatcolorpicker', attribute: 'aria-label or aria-labelledby', usage: 'The component needs an accessible name including the currently selected value.' },
        { selector: '.k-flatcolorpicker', attribute: 'tabindex=0', usage: 'The element must be focusable.' },
        { selector: '.k-flatcolorpicker.k-disabled', attribute: 'aria-disabled=true', usage: 'Rendered only when the FlatColorPicker is disabled.' },
        { selector: '.k-colorgradient', attribute: 'role=none', usage: 'The inner ColorGradient must have its role removed.' },
        { selector: '.k-colorgradient', attribute: 'tabindex=-1', usage: 'The inner ColorGradient must be removed from the page tab sequence.' },
    ]
};

export default ColorEditor;
