import { Captcha, KendoCaptchaProps } from '../captcha.spec';
import { CaptchaNormal } from '../templates/captcha-normal';

const options = Captcha.options;
const variants = [];
const states = Captcha.states;
const defaults = Captcha.defaultOptions;
const modifiers = [];

export const CaptchaDemo = (props: KendoCaptchaProps) => {
    return (
        <CaptchaNormal
            value="YGRX7"
            imgPath="https://demos.telerik.com/kendo-ui/content/captcha/81baf680-1778-48ad-938a-ff6fe97842f7.png"
            {...props}
        />
    );
}


CaptchaDemo.options = options;
CaptchaDemo.states = states;
CaptchaDemo.variants = variants;
CaptchaDemo.defaultOptions = defaults;
CaptchaDemo.modifiers = modifiers;
CaptchaDemo.className = Captcha.className;

export default CaptchaDemo;

