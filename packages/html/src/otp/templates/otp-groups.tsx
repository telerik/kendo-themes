import { OneTimePassword, OneTimePasswordInput, OneTimePasswordSeparator } from "..";

export const OneTimePasswordGroups = ({ hover, focus, invalid, fillMode, size, value = '', ...props}: any) => {
    const fullValue = value.repeat(6).substring(0, 6);
    const totalInputs = 6;

    return (
        <OneTimePassword invalid={invalid} size={size} children={
            <>
                <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} focus={focus} hover={hover} {...props} aria-label={`Input 1 of ${totalInputs}, current value ${fullValue}`}></OneTimePasswordInput>
                <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} {...props} aria-label={`Input 2 of ${totalInputs}, current value ${fullValue}`}></OneTimePasswordInput>
                <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} {...props} aria-label={`Input 3 of ${totalInputs}, current value ${fullValue}`}></OneTimePasswordInput>
                <OneTimePasswordSeparator>-</OneTimePasswordSeparator>
                <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} {...props} aria-label={`Input 4 of ${totalInputs}, current value ${fullValue}`}></OneTimePasswordInput>
                <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} {...props} aria-label={`Input 5 of ${totalInputs}, current value ${fullValue}`}></OneTimePasswordInput>
                <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} {...props} aria-label={`Input 6 of ${totalInputs}, current value ${fullValue}`}></OneTimePasswordInput>
            </>
        } />
    );
};
