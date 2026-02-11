import { MessageBox } from '../message-box.spec';

export const MessageBoxNormal = (props) => (
    <MessageBox children={
        <>
            Content
        </>
    }
    {...props}
    />
);
