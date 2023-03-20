import { Button } from '../button';
import { classNames } from '../utils';
import { CardSubtitle } from './card-subtitle';
import { CardTitle } from './card-title';

export const CARDBODY_CLASSNAME = `k-card-body`;

export type KendoCardBodyProps = {
    title?: string;
    subtitle?: string;
    details?: boolean;
};

export const CardBody = (
    props: KendoCardBodyProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        title,
        subtitle,
        details,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                CARDBODY_CLASSNAME,
            )}>
            {title && <CardTitle>{title}</CardTitle>}
            {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}

            <>{props.children}</>

            {details &&
                <span className="k-card-header-actions">
                    <Button
                        className="k-card-details"
                        icon="more-vertical"
                        rounded="medium"
                        size="medium"
                        fillMode="flat"
                        themeColor="base"
                    />
                </span>
            }
        </div>
    );
};
