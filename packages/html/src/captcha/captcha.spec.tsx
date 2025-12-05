import { Button } from '../button';
import { Textbox } from '../textbox';
import { SkeletonRectangle } from '../skeleton';
import { classNames, stateClassNames, States } from '../misc';

import { KendoComponent } from '../_types/component';
import { CAPTCHA_FOLDER_NAME, CAPTCHA_MODULE_NAME } from './constants';
export const CAPTCHA_CLASSNAME = `k-captcha`;

const states = [
    States.loading,
    States.valid,
    States.invalid,
    States.disabled
];

const options = {};

const defaultOptions = {
    imgPath: "/packages/html/assets/captcha.jpg",
};

export type KendoCaptchaProps = {
    value?: string;
    imgPath?: string;
};

export type KendoCaptchaState = { [K in (typeof states)[number]]?: boolean };

export const Captcha: KendoComponent<KendoCaptchaProps & KendoCaptchaState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoCaptchaProps &
        KendoCaptchaState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        value,
        valid,
        invalid,
        loading,
        disabled,
        imgPath = defaultOptions.imgPath,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                CAPTCHA_CLASSNAME,
                stateClassNames(CAPTCHA_CLASSNAME, {
                    disabled,
                }),
                {
                    'k-captcha-loading': loading,
                }
            )}>
            <div className="k-captcha-image-wrap k-hstack">
                <div className="k-captcha-image">
                    <img
                        className={classNames({ 'k-hidden': loading })}
                        src={imgPath}
                        alt="Captcha verification image"
                    />
                    {loading && (
                        <SkeletonRectangle style={{ width: '100%', height: '100%' }} />
                    )}
                </div>
                <div className="k-captcha-image-controls k-vstack">
                    <Button icon="volume-up" aria-label="Audio captcha" disabled={disabled || loading === true}></Button>
                    <Button icon="arrow-rotate-cw" aria-label="Refresh captcha" disabled={disabled || loading === true}></Button>
                </div>
                <div className="k-captcha-volume-control k-vstack k-pos-absolute k-hidden">
                    <div className="k-widget k-slider k-slider-vertical"></div>
                </div>
            </div>
            <div className="k-captcha-input k-vstack">
                <Textbox
                    value={value}
                    valid={valid}
                    invalid={invalid}
                    disabled={disabled || loading === true}
                    aria-label="Enter captcha code"
                />
                {valid && !loading && (
                    <span className="k-captcha-validation-message !k-text-success">
                        Verification Success
                    </span>
                )}
            </div>
        </div>
    );
};

Captcha.states = states;
Captcha.options = options;
Captcha.className = CAPTCHA_CLASSNAME;
Captcha.defaultOptions = defaultOptions;
Captcha.moduleName = CAPTCHA_MODULE_NAME;
Captcha.folderName = CAPTCHA_FOLDER_NAME;

export default Captcha;
