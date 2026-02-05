import { Button } from '../button';
import { classNames, Size, FillMode } from '../misc';

import { KendoComponent } from '../_types/component';
import { SPINBUTTON_FOLDER_NAME, SPINBUTTON_MODULE_NAME } from './constants';
export const SPINBUTTON_CLASSNAME = `k-spin-button`;

const states = [];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ],
    fillMode: [ FillMode.undefined, FillMode.solid, FillMode.flat, FillMode.outline, FillMode.clear, FillMode.link ],
};

export type KendoSpinButtonOptions = {
  size?: (typeof options.size)[number] | null;
  fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoSpinButtonProps = KendoSpinButtonOptions & {
  icon?: string;
  text?: string;
};

const defaultOptions = {};

export const SpinButton: KendoComponent<KendoSpinButtonProps & React.HTMLAttributes<HTMLButtonElement>> = (
    props: KendoSpinButtonProps &
        React.HTMLAttributes<HTMLButtonElement>
) => {
    const {
        size,
        fillMode,
        disabled,
        ...other
    } = props;

    return (
        <span
            {...other}
            className={classNames(
                SPINBUTTON_CLASSNAME,
                props.className
            )}>
            <Button
                className="k-spinner-increase"
                icon="caret-alt-up"
                size={size}
                fillMode={fillMode}
                disabled={disabled}
                aria-label="Increase value">
            </Button>
            <Button
                className="k-spinner-decrease"
                icon="caret-alt-down"
                size={size}
                fillMode={fillMode}
                disabled={disabled}
                aria-label="Decrease value">
            </Button>
        </span>
    );
};

SpinButton.states = states;
SpinButton.options = options;
SpinButton.className = SPINBUTTON_CLASSNAME;
SpinButton.defaultOptions = defaultOptions;
SpinButton.moduleName = SPINBUTTON_MODULE_NAME;
SpinButton.folderName = SPINBUTTON_FOLDER_NAME;

export default SpinButton;
