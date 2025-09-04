import { Button } from '../button';
import { classNames, Size, FillMode } from '../misc';

import { KendoComponent } from '../_types/component';
export const SPINBUTTON_CLASSNAME = `k-spin-button`;

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline, FillMode.clear, FillMode.link ],
};

export type KendoSpinButtonOptions = {
  size?: (typeof options.size)[number] | null;
  fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoSpinButtonProps = KendoSpinButtonOptions & {
  icon?: string;
  text?: string;
};

const defaultOptions = {
    size: Size.medium,
    fillMode: FillMode.solid
};

export const SpinButton: KendoComponent<KendoSpinButtonProps & React.HTMLAttributes<HTMLButtonElement>> = (
    props: KendoSpinButtonProps &
        React.HTMLAttributes<HTMLButtonElement>
) => {
    const {
        size = defaultOptions.size,
        fillMode = defaultOptions.fillMode,
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
                rounded={null}
                size={size}
                fillMode={fillMode}>
            </Button>
            <Button
                className="k-spinner-decrease"
                icon="caret-alt-down"
                rounded={null}
                size={size}
                fillMode={fillMode}>
            </Button>
        </span>
    );
};

SpinButton.states = states;
SpinButton.options = options;
SpinButton.className = SPINBUTTON_CLASSNAME;
SpinButton.defaultOptions = defaultOptions;
SpinButton.moduleName = null;
SpinButton.folderName = null;

export default SpinButton;
