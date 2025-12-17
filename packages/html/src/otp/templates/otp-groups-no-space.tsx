import { OneTimePassword, OneTimePasswordInput, OneTimePasswordSeparator } from "..";
import { InputGroup } from "../../input-group";

export const OneTimePasswordGroupsNoSpace = ({ hover, focus, invalid, fillMode, size, ...props }: any) => (
    <OneTimePassword invalid={invalid} size={size} children={
        <>
            <InputGroup fillMode={fillMode}>
                <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} focus={focus} hover={hover} {...props}></OneTimePasswordInput>
                <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} {...props}></OneTimePasswordInput>
                <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} {...props}></OneTimePasswordInput>
            </InputGroup>
            <OneTimePasswordSeparator>-</OneTimePasswordSeparator>
            <InputGroup fillMode={fillMode}>
                <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} {...props}></OneTimePasswordInput>
                <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} {...props}></OneTimePasswordInput>
                <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} {...props}></OneTimePasswordInput>
            </InputGroup>
        </>
    } />
);
