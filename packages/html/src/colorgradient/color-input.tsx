import { classNames, Size } from '../misc';
import { Button } from '../button';
import { NumericTextbox } from '../numerictextbox';
import { Textbox } from '../textbox';

const COLOR_INPUT_CLASSNAME = 'k-colorgradient-inputs';

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ]
};

export type KendoColorInputOptions = {
    mode?: 'rgba' | 'rgb' | 'hsva' | 'hsv' | 'hex';
    size?: (typeof options.size)[number] | null;
};

const defaultOptions = {
    mode: 'rgba',
    size: Size.medium,
};

export const ColorInput = (
    props: KendoColorInputOptions &
        React.HTMLAttributes<HTMLDivElement>

) => {
    const {
        mode = defaultOptions.mode,
        size,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(COLOR_INPUT_CLASSNAME, 'k-hstack')}>
            <div className="k-vstack">
                <Button fillMode="flat" icon="caret-alt-expand" className="k-colorgradient-toggle-mode" size={size} />
            </div>
            { mode === 'rgba' &&
                <>
                    <div className="k-vstack">
                        <NumericTextbox showSpinButton={false} showClearButton={false} value="132" size={size} />
                        <label className="k-colorgradient-input-label">R</label>
                    </div>
                    <div className="k-vstack">
                        <NumericTextbox showSpinButton={false} showClearButton={false} value="132" size={size} />
                        <label className="k-colorgradient-input-label">G</label>
                    </div>
                    <div className="k-vstack">
                        <NumericTextbox showSpinButton={false} showClearButton={false} value="132" size={size} />
                        <label className="k-colorgradient-input-label">B</label>
                    </div>
                    <div className="k-vstack">
                        <NumericTextbox showSpinButton={false} showClearButton={false} value="1.00" size={size} />
                        <label className="k-colorgradient-input-label">A</label>
                    </div>
                </>
            }
            { mode === 'rgb' &&
                <>
                    <div className="k-vstack">
                        <NumericTextbox showSpinButton={false} showClearButton={false} value="132" />
                        <label className="k-colorgradient-input-label">R</label>
                    </div>
                    <div className="k-vstack">
                        <NumericTextbox showSpinButton={false} showClearButton={false} value="132" />
                        <label className="k-colorgradient-input-label">G</label>
                    </div>
                    <div className="k-vstack">
                        <NumericTextbox showSpinButton={false} showClearButton={false} value="132" />
                        <label className="k-colorgradient-input-label">B</label>
                    </div>
                </>
            }
            { mode === 'hsva' &&
                <>
                    <div className="k-vstack">
                        <NumericTextbox showSpinButton={false} showClearButton={false} value="132" />
                        <label className="k-colorgradient-input-label">H</label>
                    </div>
                    <div className="k-vstack">
                        <NumericTextbox showSpinButton={false} showClearButton={false} value="132" />
                        <label className="k-colorgradient-input-label">S</label>
                    </div>
                    <div className="k-vstack">
                        <NumericTextbox showSpinButton={false} showClearButton={false} value="132" />
                        <label className="k-colorgradient-input-label">V</label>
                    </div>
                    <div className="k-vstack">
                        <NumericTextbox showSpinButton={false} showClearButton={false} value="1.00" />
                        <label className="k-colorgradient-input-label">A</label>
                    </div>
                </>
            }
            { mode === 'hsv' &&
                <>
                    <div className="k-vstack">
                        <NumericTextbox showSpinButton={false} showClearButton={false} value="132" />
                        <label className="k-colorgradient-input-label">H</label>
                    </div>
                    <div className="k-vstack">
                        <NumericTextbox showSpinButton={false} showClearButton={false} value="132" />
                        <label className="k-colorgradient-input-label">S</label>
                    </div>
                    <div className="k-vstack">
                        <NumericTextbox showSpinButton={false} showClearButton={false} value="132" />
                        <label className="k-colorgradient-input-label">V</label>
                    </div>
                </>
            }
            { mode === 'hex' &&
                <>
                    <div className="k-vstack k-flex-1">
                        <Textbox showClearButton={false} value="#b88484AA" className="k-hex-value" />
                        <label className="k-colorgradient-input-label">HEX</label>
                    </div>
                </>
            }
        </div>
    );
};

ColorInput.states = states;
ColorInput.options = options;
ColorInput.className = COLOR_INPUT_CLASSNAME;
ColorInput.defaultOptions = defaultOptions;

export default ColorInput;
