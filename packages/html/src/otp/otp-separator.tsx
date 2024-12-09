import { classNames } from '../misc';

const ONETIMEPASSWORDSEPARATOR_CLASSNAME = `k-otp-separator`;

const states = [];

const options = {};

const defaultOptions = {};

export const OneTimePasswordSeparator = (props:
    React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        children,
        ...other
    } = props;


    return (
        <div
            {...other}
            className={classNames(
                props.className,
                ONETIMEPASSWORDSEPARATOR_CLASSNAME
            )}
        >
            {children}
        </div>
    );
};

OneTimePasswordSeparator.states = states;
OneTimePasswordSeparator.options = options;
OneTimePasswordSeparator.className = ONETIMEPASSWORDSEPARATOR_CLASSNAME;
OneTimePasswordSeparator.defaultOptions = defaultOptions;

export default OneTimePasswordSeparator;
