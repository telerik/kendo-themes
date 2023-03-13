import { classNames } from '../utils-new';

const className = `k-time-header`;

export type KendoTimeSelectorHeaderProps = {
    title?: string;
};

export const TimeSelectorHeader = (
    props: KendoTimeSelectorHeaderProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        title,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                className,
            )}
        >
            {title != null && (
                <span className="k-title">{title}</span>
            )}
            {props.children}
        </div>
    );
};
