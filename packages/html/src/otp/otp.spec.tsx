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

/**
 * @aria {role="group"} Sets the proper role for the OTP.
 * @aria {type="hidden"} The hidden input holding the OTP inputs value.
 * @aria {aria-hidden="true"} Hides the hidden input from assistive technologies.
 */
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
 * @keyboard {Typing in the input} Sets the value in the input and moves the focus to the next focusable input in the OTP. (if any)
 * @keyboard {Tab} Focuses the next input in the OTP. If the focus is on the last input, focuses the next focusable element on the page.
 * @keyboard {Shift + Tab} Focuses the previous input in the OTP. If the focus is on the first input, focuses the previous focusable element before the OTP.
 * @keyboard {ArrowRight} Moves the focus to the next focusable input in the OTP. (if any)
 * @keyboard {ArrowLeft} Moves the focus to the previous focusable input in the OTP. (if any)
 * @keyboard {Backspace} Deletes the value of the focused input and moves the focus on the previous input. (if any).
 * @keyboard {Delete} Deletes the value of the focused input.
 *
 * @see https://www.w3.org/TR/wai-aria-1.2/#textbox WAI-ARIA Specification for the TextBox
 */

export default OneTimePassword;
