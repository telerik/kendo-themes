import SmartBox from "../smart-box.spec";
import { Icon } from '../../icon';
import { IconButton } from '../../button';

export const SmartBoxNormal = (props) =>
    <SmartBox {...props}
        separators={false}
        prefix={
            <>
                <Icon icon="sparkles" className="k-accent-icon"/>
            </>
        }
        suffix={
            <>
                <IconButton icon="microphone-outline" fillMode="clear" rounded="full" size="small" />
                <IconButton icon="arrow-up-outline" rounded="full" size="small" />
            </>
        }
    />;
