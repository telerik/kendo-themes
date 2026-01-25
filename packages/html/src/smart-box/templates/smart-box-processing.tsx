import { SmartBox, SmartBoxSendButton }  from "../";
import { Icon } from '../../icon';
import { IconButton } from '../../button';

export const SmartBoxProcessing = (props) =>
    <SmartBox {...props}
        processing
        separators={false}
        prefix={
            <>
                <Icon icon="sparkles" className="k-accent-icon"/>
            </>
        }
        suffix={
            <>
                <IconButton icon="microphone-outline" fillMode="clear" rounded="full" size="small" />
                <SmartBoxSendButton processing />
            </>
        }
    />;
