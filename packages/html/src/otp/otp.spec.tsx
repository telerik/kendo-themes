import { classNames, optionClassNames, stateClassNames, States, FillMode } from '../misc';

export const ONETIMEPASSWORD_CLASSNAME = `k-otp`;

const states = [
    States.disabled
];

const options = {
    fillMode: [FillMode.solid, FillMode.flat, FillMode.outline, FillMode.clear, FillMode.link],
};

export type KendoOneTimePasswordOptions = {
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoOneTimePasswordProps = KendoOneTimePasswordOptions & {
    // stretched?: boolean;
};

export type KendoOneTimePasswordState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    fillMode: FillMode.solid
};

export const OneTimePassword = (
    props: KendoOneTimePasswordProps &
        KendoOneTimePasswordState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        fillMode = defaultOptions.fillMode,
        disabled,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                ONETIMEPASSWORD_CLASSNAME,
                optionClassNames(ONETIMEPASSWORD_CLASSNAME, {
                    fillMode
                }),
                stateClassNames(ONETIMEPASSWORD_CLASSNAME, {
                    disabled
                })
            )}
        >
            {props.children}
        </div>
    );
};

OneTimePassword.states = states;
OneTimePassword.options = options;
OneTimePassword.className = ONETIMEPASSWORD_CLASSNAME;
OneTimePassword.defaultOptions = defaultOptions;

export default OneTimePassword;
