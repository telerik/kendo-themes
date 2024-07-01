import { Badge } from "..";
import { Icon } from "../../icon";

export const IconBadge = (props) =>
    <Badge
        children={
            <Icon className="k-badge-icon" icon="x-circle" />
        }
        {...props}
    />
;

export default IconBadge;
