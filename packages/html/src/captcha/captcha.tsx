import * as React from 'react';
import { classNames } from '../utils';
import { Textbox } from '../textbox';
import { Button } from '../button';

export interface CaptchaProps {
    className?: string;
    value?: string;
    loading?: boolean;
    valid?: boolean;
    invalid?: boolean;
    disabled?: boolean;
}

export class Captcha extends React.Component<CaptchaProps> {

    render() {
        const {
            className,
            value,
            valid,
            invalid,
            loading,
            disabled,
        } = this.props;

        return (
            <div className={classNames(className, 'k-captcha',
                {
                    'k-captcha-loading': loading,
                    'k-disabled': disabled
                })}
            >
                <div className="k-captcha-image-wrap k-hstack">
                    <div className="k-captcha-image">
                        <img
                            className={classNames({ 'k-hidden': loading })}
                            src="/packages/html/assets/captcha.jpg"
                        />
                        {loading && (
                            <span
                                style={{ width: '100%', height: '100%' }}
                                className="k-skeleton k-skeleton-rect">
                            </span>
                        )}
                    </div>
                    <div className="k-captcha-image-controls k-vstack">
                        <Button icon="volume-up" disabled={loading === true}></Button>
                        <Button icon="reload" disabled={loading === true}></Button>
                    </div>
                    <div className="k-captcha-volume-control k-vstack k-pos-absolute k-hidden">
                        <div className="k-widget k-slider k-slider-vertical"></div>
                    </div>
                </div>
                <div className="k-captcha-input k-vstack">
                    <Textbox
                        value={value}
                        invalid={invalid}
                        disabled={loading === true}
                    />
                    {valid && !loading && (
                        <span className="k-captcha-validation-message !k-text-success">
                            Verification Success
                        </span>
                    )}
                </div>
            </div>
        );

    }
}
