import { classNames } from '../misc';

const className = `k-toolbar-separator`;

export const ToolbarSeparator = (props: React.HTMLAttributes<HTMLSpanElement>) => (
    <div className={classNames(className, props.className, 'k-separator')}></div>
);
