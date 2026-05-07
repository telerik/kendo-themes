import { SmartBox, SmartBoxSendButton }  from "../";
import { Icon } from '../../icon';
import { IconButton } from '../../button';

export const SmartBoxNormal = (props) =>
    <SmartBox {...props}
        value="Smart box"
        separators={false}
        inputAriaLabel="AI-powered search"
        prefix={
            <>
                <Icon icon="sparkles" className="k-accent-icon" aria-hidden="true" />
            </>
        }
        suffix={
            <>
                <IconButton icon="microphone" fillMode="clear" rounded="full" size="small" aria-label="Start voice input" />
                <SmartBoxSendButton />
            </>
        }
    />;
