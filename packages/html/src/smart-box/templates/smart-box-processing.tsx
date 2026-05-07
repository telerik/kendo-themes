import { SmartBox, SmartBoxSendButton }  from "../";
import { Icon } from '../../icon';
import { IconButton } from '../../button';

export const SmartBoxProcessing = (props) =>
    <SmartBox {...props}
        processing
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
                <SmartBoxSendButton processing />
            </>
        }
    />;
