import { classNames, stateClassNames, States } from '../misc';
import { ActionButtons } from '../action-buttons';
import { Button } from '../button';
import { ButtonGroup } from '../button-group';
import { ColorGradient } from '../colorgradient';
import { ColorPalette } from '../colorpalette';
import { ColorPreview } from '../color-preview';
import { PALETTEPRESETS } from '../colorpalette/colorpalette-presets';

const COLOREDITOR_CLASSNAME = 'k-coloreditor';

const states = [
    States.focus
];

const options = {};

export type KendoColorEditorProps = {
    view?: 'gradient' | 'palette';
    color?: string;
    currentColor?: string;
    focusView?: boolean;
    dir?: 'ltr' | 'rtl';
    group?: boolean;
    palette?: Array<string> | any;
};

export type KendoColorEditorState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    view: 'gradient',
    palette: PALETTEPRESETS.office
} as const;

export const ColorEditor = (
    props: KendoColorEditorProps &
        KendoColorEditorState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        view = defaultProps.view,
        color,
        currentColor,
        focus,
        focusView,
        dir,
        group,
        palette = defaultProps.palette
    } = props;

    return (
        <div className={classNames(
            props.className,
            'k-flatcolorpicker',
            COLOREDITOR_CLASSNAME,
            stateClassNames(COLOREDITOR_CLASSNAME, { focus })
        )} dir={dir}>
            <div className="k-coloreditor-header k-hstack">
                <div className="k-coloreditor-header-actions k-hstack">
                    { group &&
                        <ButtonGroup fillMode="flat">
                            <Button className="k-group-start" fillMode="flat" icon="droplet-slider" selected={ view === 'gradient' }></Button>
                            <Button className="k-group-end" fillMode="flat" icon="palette" selected={ view === 'palette' }></Button>
                        </ButtonGroup>
                    }
                </div>
                <div className="k-spacer"></div>
                <div className="k-coloreditor-header-actions k-hstack">
                    <Button fillMode="flat" icon="droplet-slash"></Button>
                    <div className="k-coloreditor-preview k-vstack">
                        <ColorPreview className="k-coloreditor-preview-color" color={color} />
                        <ColorPreview className="k-coloreditor-current-color" color={currentColor} />
                    </div>
                </div>
            </div>
            <div className="k-coloreditor-views k-vstack">
                { view === 'gradient' ? <ColorGradient focus={focusView} /> : <ColorPalette palette={palette}/> }
            </div>
            <ActionButtons className="k-coloreditor-footer" alignment="end" >
                <Button className="k-coloreditor-cancel">Cancel</Button>
                <Button themeColor="primary" className="k-coloreditor-apply">Apply</Button>
            </ActionButtons>
        </div>
    );
};

ColorEditor.states = states;
ColorEditor.options = options;
ColorEditor.className = COLOREDITOR_CLASSNAME;
ColorEditor.defaultProps = defaultProps;

export default ColorEditor;
