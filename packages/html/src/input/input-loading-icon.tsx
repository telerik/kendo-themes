import { Icon } from '../icon';
import { classNames, States } from '../utils';

const className = `k-input-loading-icon`;

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
        <Icon className={classNames(props.className, className)} icon="loading" type="font" />
    );
};
