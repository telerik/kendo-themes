import { classNames, optionClassNames, stateClassNames, States, Size } from '../misc';

import { KendoComponent } from '../_types/component';
import { OTP_FOLDER_NAME, OTP_MODULE_NAME } from './constants';
export const ONETIMEPASSWORD_CLASSNAME = `k-otp`;

const states = [
    States.invalid,
    States.disabled
];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ],
};

export type KendoOneTimePasswordOptions = {
    size?: (typeof options.size)[number] | null;
};

export type KendoOneTimePasswordState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {};

export const OneTimePassword: KendoComponent<KendoOneTimePasswordOptions & KendoOneTimePasswordState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoOneTimePasswordOptions &
        KendoOneTimePasswordState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size,
        invalid,
        disabled,
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
                    invalid,
                    disabled
                })
            )}
        >
            <input type="hidden" aria-hidden="true" />
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

/**
 * Accessibility specification for OneTimePassword (OTP).
 * @accessibility
 * - Container uses role="group" to associate inputs
 * - Hidden input holds the combined value
 * - Each digit input requires aria-label (e.g., "Digit 1 of 6")
 */
OneTimePassword.ariaSpec = {
    selector: '.k-otp',
    rules: [
        { selector: '.k-otp', attribute: 'role=group', usage: 'Sets the proper role for the OTP.' },
        { selector: '.k-otp > input', attribute: 'type=hidden', usage: 'The hidden input holding the OTP inputs value.' },
        { selector: '.k-otp > input', attribute: 'aria-hidden=true', usage: 'Hides the hidden input from assistive technologies.' },
        { selector: '.k-otp .k-otp-input > .k-input-inner', attribute: 'label for or aria-label or aria-labelledby', usage: 'The input needs an accessible name to be assigned to it.' },
        { selector: '.k-otp .k-otp-input > .k-input-inner', attribute: 'autocomplete=off', usage: 'Sets the default autocomplete for the input.' },
        { selector: '.k-otp .k-otp-input > .k-input-inner', attribute: 'aria-describedby (when has hint or error)', usage: 'Points to the hint or error message for the OTP inputs.' },
        { selector: '.k-otp.k-invalid .k-otp-input > .k-input-inner, .k-otp.ng-invalid .k-otp-input > .k-input-inner', attribute: 'aria-invalid=true', usage: 'Rendered only when the OTP is in a form and announces the invalid state.' },
        { selector: '.k-otp.k-disabled .k-otp-input > .k-input-inner', attribute: 'disabled=disabled or aria-disabled=true', usage: 'Rendered only when the OTP is disabled.' },
    ]
};

export default OneTimePassword;
