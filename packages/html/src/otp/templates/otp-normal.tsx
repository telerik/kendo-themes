import { OneTimePassword, OneTimePasswordInput } from "..";

export const OneTimePasswordNormal = ({ hover, focus, invalid, fillMode, size, ...props}: any) => (
    <OneTimePassword invalid={invalid} size={size} children={
        <>
            <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} focus={focus} hover={hover} {...props}></OneTimePasswordInput>
            <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} {...props}></OneTimePasswordInput>
            <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} {...props}></OneTimePasswordInput>
            <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} {...props}></OneTimePasswordInput>
            <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} {...props}></OneTimePasswordInput>
            <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} {...props}></OneTimePasswordInput>
        </>
    } />
);
