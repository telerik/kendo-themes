import { Button } from '../button';
import { classNames, optionClassNames, stateClassNames, States, Size, Roundness, FillMode } from '../misc';

import { KendoComponent } from '../_types/component';
export const SIGNATURE_CLASSNAME = `k-signature`;

const states = [
    States.hover,
    States.focus,
    States.valid,
    States.invalid,
    States.disabled
];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
    rounded: [ Roundness.small, Roundness.medium, Roundness.large, Roundness.full ],
    fillMode: [ FillMode.solid, FillMode.flat, FillMode.outline ]
};

export type KendoSignatureOptions = {
    size?: (typeof options.size)[number] | null;
    rounded?: (typeof options.rounded)[number] | null;
    fillMode?: (typeof options.fillMode)[number] | null;
};

export type KendoSignatureProps = KendoSignatureOptions & {
    maximized?: boolean;
};

export type KendoSignatureState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    size: Size.medium,
    rounded: Roundness.medium,
    fillMode: FillMode.solid
};

export const Signature: KendoComponent<KendoSignatureProps & KendoSignatureState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoSignatureProps &
        KendoSignatureState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultOptions.size,
        rounded = defaultOptions.rounded,
        fillMode = defaultOptions.fillMode,
        hover,
        focus,
        valid,
        invalid,
        disabled,
        maximized,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                SIGNATURE_CLASSNAME,
                'k-input',
                optionClassNames(SIGNATURE_CLASSNAME, {
                    size,
                    rounded,
                    fillMode,
                }),
                optionClassNames('k-input', {
                    fillMode,
                }),
                stateClassNames(SIGNATURE_CLASSNAME, {
                    hover,
                    focus,
                    valid,
                    invalid,
                    disabled,
                }),
                {
                    ['k-signature-maximized']: maximized,
                }
            )}>
            <canvas className="k-signature-canvas"></canvas>
            <div
                className={classNames(
                    'k-signature-actions',
                    'k-signature-actions-top'
                )}>
                <Button
                    className={classNames(
                        'k-signature-action',
                        'k-signature-maximize',
                        maximized ? 'k-hidden' : ''
                    )}
                    icon="hyperlink-open"
                    rounded={rounded}
                    size={size}
                    fillMode="flat"
                />
                <Button
                    className={classNames(
                        'k-signature-action',
                        'k-signature-minimize',
                        maximized ? '' : 'k-hidden'
                    )}
                    icon="hyperlink-open"
                    rounded={rounded}
                    size={size}
                    fillMode="flat"
                />
            </div>
            <div className="k-signature-line"></div>
            <div
                className={classNames(
                    'k-signature-actions',
                    'k-signature-actions-bottom'
                )}>
                <Button
                    className={classNames(
                        'k-signature-action',
                        'k-signature-clear',
                    )}
                    icon="x"
                    rounded={props.rounded}
                    size={props.size}
                    fillMode="flat"
                />
            </div>
        </div>
    );
};

Signature.states = states;
Signature.options = options;
Signature.className = SIGNATURE_CLASSNAME;
Signature.defaultOptions = defaultOptions;
Signature.moduleName = "signature";
Signature.folderName = "signature";

export default Signature;
