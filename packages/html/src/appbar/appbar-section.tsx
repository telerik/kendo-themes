import { classNames } from '../utils-new';

const className = `k-appbar-section`;

export const AppbarSection = (props: React.HTMLAttributes<HTMLSpanElement>) => (
    <div className={classNames(className, props.className)}>
        {props.children}
    </div>
);
