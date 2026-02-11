import { Badge } from "../badge.spec";
import { Icon } from "../../icon/icon.spec";

export const IconBadge = (props) =>
    <Badge
        children={
            <Icon className="k-badge-icon" icon="x-circle" />
        }
        {...props}
    />
;
