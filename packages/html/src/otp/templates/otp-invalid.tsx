import { OneTimePassword, OneTimePasswordInput } from "..";

export const OneTimePasswordInvalid = ({ hover, focus, fillMode, size, disabled, ...props }: any) => (
    <OneTimePassword invalid size={size} aria-label="One-time password" children={
        <>
            <OneTimePasswordInput size={size} fillMode={fillMode} invalid disabled={disabled} focus={focus} hover={hover} aria-label="Digit 1 of 6" {...props}></OneTimePasswordInput>
            <OneTimePasswordInput size={size} fillMode={fillMode} invalid disabled={disabled} aria-label="Digit 2 of 6" {...props}></OneTimePasswordInput>
            <OneTimePasswordInput size={size} fillMode={fillMode} invalid disabled={disabled} aria-label="Digit 3 of 6" {...props}></OneTimePasswordInput>
            <OneTimePasswordInput size={size} fillMode={fillMode} invalid disabled={disabled} aria-label="Digit 4 of 6" {...props}></OneTimePasswordInput>
            <OneTimePasswordInput size={size} fillMode={fillMode} invalid disabled={disabled} aria-label="Digit 5 of 6" {...props}></OneTimePasswordInput>
            <OneTimePasswordInput size={size} fillMode={fillMode} invalid disabled={disabled} aria-label="Digit 6 of 6" {...props}></OneTimePasswordInput>
        </>
    } />
);
