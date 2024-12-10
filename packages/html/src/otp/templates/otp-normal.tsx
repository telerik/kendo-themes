import { OneTimePassword, OneTimePasswordInput, OneTimePasswordSeparator } from "..";

export const OneTimePasswordNormal = (props) => (
    <OneTimePassword children={
        <>
            <OneTimePasswordInput {...props}></OneTimePasswordInput>
            <OneTimePasswordInput {...props}></OneTimePasswordInput>
            <OneTimePasswordInput {...props}></OneTimePasswordInput>
            <OneTimePasswordSeparator>-</OneTimePasswordSeparator>
            <OneTimePasswordInput {...props}></OneTimePasswordInput>
            <OneTimePasswordInput {...props}></OneTimePasswordInput>
            <OneTimePasswordInput {...props}></OneTimePasswordInput>
        </>
    } />
);
