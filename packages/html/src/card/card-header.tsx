import { Button } from '../button';
import { classNames } from '../misc';
import { CardSubtitle } from './card-subtitle';
import { CardTitle } from './card-title';

export const CARDHEADER_CLASSNAME = `k-card-header`;

export type KendoCardHeaderProps = {
    title?: string | React.JSX.Element;
    subtitle?: string | React.JSX.Element;
    details?: boolean;
};

export const CardHeader = (
    props: KendoCardHeaderProps &
        Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>
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
                CARDHEADER_CLASSNAME,
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
