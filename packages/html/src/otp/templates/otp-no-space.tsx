import { OneTimePassword, OneTimePasswordInput } from "..";
import { InputGroup } from "../../input-group";

export const OneTimePasswordNoSpace = ({ invalid, fillMode, size, ...props }: any) => (
    <OneTimePassword invalid={invalid} size={size} children={
        <>
            <InputGroup fillMode={fillMode}>
                <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} {...props}></OneTimePasswordInput>
                <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} {...props}></OneTimePasswordInput>
                <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} {...props}></OneTimePasswordInput>
                <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} {...props}></OneTimePasswordInput>
                <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} {...props}></OneTimePasswordInput>
                <OneTimePasswordInput size={size} fillMode={fillMode} invalid={invalid} {...props}></OneTimePasswordInput>
            </InputGroup>
        </>
    } />
);
