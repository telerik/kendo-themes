import { classNames, States } from '../misc';

const INPUTLOADINGICON_CLASSNAME = `k-input-loading-icon`;

const states = [
    States.disabled,
    States.loading
];

export type InputLoadingIconState = { [K in (typeof states)[number]]?: boolean };

export const InputLoadingIcon = (
    props: InputLoadingIconState &
      React.HTMLAttributes<HTMLInputElement>
) => {
    const {
        disabled,
        loading } = props;

    if (disabled || !loading) {
        return <></>;
    }

    return (
        <span className={classNames(props.className, INPUTLOADINGICON_CLASSNAME, "k-icon k-i-loading")}></span>
    );
};

InputLoadingIcon.states = states;
InputLoadingIcon.className = INPUTLOADINGICON_CLASSNAME;

export default InputLoadingIcon;
