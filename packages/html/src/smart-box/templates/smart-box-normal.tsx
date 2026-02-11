import { SmartBox } from '../smart-box.spec';
import { SmartBoxSendButton } from '../smart-box-send-button';
import { Icon } from '../../icon/icon.spec';
import { IconButton } from '../../button/templates/icon-button';

export const SmartBoxNormal = (props) =>
    <SmartBox {...props}
        value="Smart box"
        separators={false}
        prefix={
            <>
                <Icon icon="sparkles" className="k-accent-icon"/>
            </>
        }
        suffix={
            <>
                <IconButton icon="microphone-outline" fillMode="clear" rounded="full" size="small" />
                <SmartBoxSendButton />
            </>
        }
    />;
