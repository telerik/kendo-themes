import { classNames } from '../misc';
import { Card, CardBody, CardSubtitle, CardTitle } from '../card';
import { Avatar } from '../avatar';
import { Button } from '../button';

export const ORGCHARTNODE_CLASSNAME = `k-orgchart-node`;

export type KendoOrgchartNodeProps = {
    title?: string;
    subtitle?: string;
    details?: boolean;
    color?: string;
    lineBottom?: boolean;
    lineTop?: boolean;
    button?: boolean;
    buttonIcon?: "plus" | "minus";
    avatar?: string;
    avatarType?: string;
    /** @aria alt text for avatar image */
    avatarAlt?: string;
    /** @aria aria-level for treeitem */
    ariaLevel?: number;
    /** @aria aria-expanded for nodes with subitems */
    ariaExpanded?: boolean;
    /** @aria aria-owns target group id */
    ariaOwns?: string;
    /** @aria Whether node has focus (k-focus class + aria-selected=true) */
    focus?: boolean;
    /** @aria Whether to show the card menu button */
    menuButton?: boolean;
};

const defaultOptions = {
    buttonIcon: 'plus',
    details: true,
};

export const OrgchartNode = (
    props: KendoOrgchartNodeProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        title,
        subtitle,
        details = defaultOptions.details,
        color,
        lineBottom,
        lineTop,
        button,
        buttonIcon = defaultOptions.buttonIcon,
        avatar,
        avatarType,
        avatarAlt,
        ariaLevel,
        ariaExpanded,
        ariaOwns,
        focus,
        menuButton,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                ORGCHARTNODE_CLASSNAME,
                'k-vstack',
                'k-align-items-center',
                {
                    'k-focus': focus,
                }
            )}
            role="treeitem"
            aria-level={ariaLevel}
            aria-keyshortcuts="Enter"
            aria-expanded={ariaExpanded !== undefined ? (ariaExpanded ? 'true' : 'false') : undefined}
            aria-owns={ariaOwns}
            aria-selected={focus ? 'true' : 'false'}
        >

            {lineTop && <div className="k-orgchart-line k-orgchart-line-v"></div> }
            <Card className="k-orgchart-card">
                <CardBody className="k-hstack" details={details} style={{ borderTopColor: color }}>

                    <Avatar type={avatarType} themeColor="secondary">
                        { avatarType === 'image'
                            ? <img src={avatar} alt={avatarAlt || ''} />
                            : avatar
                        }
                    </Avatar>

                    <div className="k-card-title-wrap k-vstack">
                        <CardTitle className="k-text-ellipsis">{title}</CardTitle>
                        <span className="k-spacer"></span>
                        <CardSubtitle className="k-text-ellipsis">{subtitle}</CardSubtitle>
                    </div>
                    <span className="k-spacer"></span>

                    {menuButton && (
                        <span className="k-orgchart-card-menu" role="button" aria-label="Edit menu" tabIndex={-1}></span>
                    )}

                </CardBody>

            </Card>
            {lineBottom && <div className="k-orgchart-line k-orgchart-line-v"></div> }
            {button && (
                <Button className="k-orgchart-button" icon={buttonIcon} role="presentation" aria-hidden="true" tabIndex={-1}></Button>
            )}
        </div>
    );
};
