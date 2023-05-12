import { classNames } from '../misc';
import { Button } from '../button';

const className = `k-calendar-footer`;

export const CalendarFooter = (props: React.HTMLAttributes<HTMLDivElement>) => (
    <div {...props} className={classNames(props.className, className)}>
        <Button fillMode="flat" themeColor="primary" className="k-calendar-nav-today">Monday, October 29, 2021</Button>
    </div>
);
