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
};

export const OrgchartNode = (
    props: KendoOrgchartNodeProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        buttonIcon = 'plus',
        details = true,
        title,
        subtitle,
        color,
        lineBottom,
        lineTop,
        button,
        avatar,
        avatarType,
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
            )}>

            {lineTop && <div className="k-orgchart-line k-orgchart-line-v"></div> }
            <Card className="k-orgchart-card">
                <CardBody className="k-hstack" details={details} style={{ borderTopColor: color }}>

                    <Avatar type={avatarType} themeColor="secondary">
                        { avatarType === 'image'
                            ? <img src={avatar} />
                            : avatar
                        }
                    </Avatar>

                    <div className="k-card-title-wrap k-vstack">
                        <CardTitle className="k-text-ellipsis">{title}</CardTitle>
                        <span className="k-spacer"></span>
                        <CardSubtitle className="k-text-ellipsis">{subtitle}</CardSubtitle>
                    </div>
                    <span className="k-spacer"></span>

                </CardBody>

            </Card>
            {lineBottom && <div className="k-orgchart-line k-orgchart-line-v"></div> }
            {button && (
                <Button className="k-orgchart-button" icon={buttonIcon}></Button>
            )}
        </div>
    );
};
