import { Badge } from "..";
import { Icon } from "../../icon";
import { classNames } from "../../misc";

export const IconBadge = (props) =>
    <Badge
        {...props}
        className={classNames("k-badge-icon-only", props.className)}
        children={
            <Icon className="k-badge-icon" icon="x-circle" />
        }
    />
;
