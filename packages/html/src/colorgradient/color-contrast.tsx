import { classNames } from '../misc';
import { Icon } from '../icon';

const COLOR_CONTRAST_CLASSNAME = 'k-colorgradient-color-contrast';

const states = [];

const options = {};

const defaultOptions = {};

export const ColorContrast = (
) => (
    <div className={classNames(COLOR_CONTRAST_CLASSNAME, 'k-vbox')}>
        <div className="k-contrast-ratio">
            <span className="k-contrast-ratio-text">Contrast ratio: 7.1</span>
            <span className="k-contrast-validation !k-text-success">
                <Icon icon="check" />
                <Icon icon="check" />
            </span>
        </div>
        <div>
            <span>AA: 4.5</span>
            <span className="k-contrast-validation !k-text-success">
                    Pass
                <Icon icon="check" />
            </span>
        </div>
        <div>
            <span>AAA: 7.0</span>
            <span className="k-contrast-validation !k-text-error">
                    Fail
                <Icon icon="x" />
            </span>
        </div>
    </div>
);

ColorContrast.states = states;
ColorContrast.options = options;
ColorContrast.className = COLOR_CONTRAST_CLASSNAME;
ColorContrast.defaultOptions = defaultOptions;

export default ColorContrast;
