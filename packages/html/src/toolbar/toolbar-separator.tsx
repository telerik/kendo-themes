import { classNames } from '../utils';

const className = `k-separator`;

export const ToolbarSeparator = (props: React.HTMLAttributes<HTMLSpanElement>) => (
    <div className={classNames(className, props.className)}></div>
);
