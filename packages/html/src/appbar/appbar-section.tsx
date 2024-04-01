import { classNames } from '../misc';

const className = `k-appbar-section`;

export const AppbarSection = (props: React.HTMLAttributes<HTMLDivElement>) => {
    const {
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(className, props.className)}
        >
            {props.children}
        </div>
    );
};
