import { Button } from '../button';
import { classNames, Size, FillMode } from '../utils';

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

const defaultProps = {
    size: Size.medium,
    fillMode: FillMode.solid,
};

export const SpinButton = (
    props: KendoSpinButtonProps &
        React.HTMLAttributes<HTMLButtonElement>
) => {
    const {
        size = defaultProps.size,
        fillMode = defaultProps.fillMode,
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
                icon="arrow-n"
                rounded={null}
                size={size}
                fillMode={fillMode}>
            </Button>
            <Button
                className="k-spinner-decrease"
                icon="arrow-s"
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
SpinButton.defaultProps = defaultProps;

export default SpinButton;
