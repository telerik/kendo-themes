import { classNames, optionClassNames, stateClassNames, States, Size } from '../misc';

import { KendoComponent } from '../_types/component';
import { OTP_FOLDER_NAME, OTP_MODULE_NAME } from './constants';
export const ONETIMEPASSWORD_CLASSNAME = `k-otp`;

const states = [
    States.invalid
];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
};

export type KendoOneTimePasswordOptions = {
    size?: (typeof options.size)[number] | null;
};

export type KendoOneTimePasswordState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    size: Size.medium,
};

export const OneTimePassword: KendoComponent<KendoOneTimePasswordOptions & KendoOneTimePasswordState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoOneTimePasswordOptions &
        KendoOneTimePasswordState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultOptions.size,
        invalid,
        ...other
    } = props;

    return (
        <div
            {...other}
            role="group"
            className={classNames(
                props.className,
                ONETIMEPASSWORD_CLASSNAME,
                optionClassNames(ONETIMEPASSWORD_CLASSNAME, {
                    size
                }),
                stateClassNames(ONETIMEPASSWORD_CLASSNAME, {
                    invalid
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
OneTimePassword.moduleName = OTP_MODULE_NAME;
OneTimePassword.folderName = OTP_FOLDER_NAME;

export default OneTimePassword;
