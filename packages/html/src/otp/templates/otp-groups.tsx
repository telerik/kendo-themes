import { OneTimePassword } from "../otp.spec";
import { OneTimePasswordInput } from "../otp-input";
import { OneTimePasswordSeparator } from "../otp-separator";

export const OneTimePasswordGroups = ({ hover, focus, invalid, fillMode, size, ...props}: any) => (
    <OneTimePassword invalid={invalid} size={size} children={
        <>
            <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} focus={focus} hover={hover} {...props}></OneTimePasswordInput>
            <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} {...props}></OneTimePasswordInput>
            <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} {...props}></OneTimePasswordInput>
            <OneTimePasswordSeparator>-</OneTimePasswordSeparator>
            <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} {...props}></OneTimePasswordInput>
            <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} {...props}></OneTimePasswordInput>
            <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} {...props}></OneTimePasswordInput>
        </>
    } />
);
