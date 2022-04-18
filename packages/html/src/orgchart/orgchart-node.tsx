import * as React from 'react';
import { classNames } from '../utils';
import { Avatar } from '../avatar';
import { Button } from '../button';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
} from '../card';

export interface OrgchartNodeProps {
    className?: string;
    title?: string;
    subtitle?: string;
    details?: boolean;
    color?: string;
    line?: boolean;
    plus?: boolean;
    avatar?: string;
    avatarType?: string;
}

export class OrgchartNode extends React.Component<OrgchartNodeProps> {

    render() {
        const {
            className,
            title,
            subtitle,
            details,
            color,
            line,
            plus,
            avatar,
            avatarType,
            ...htmlAttributes
        } = this.props;

        return (
            <div
                {...htmlAttributes}
                className={classNames(
                    'k-orgchart-node',
                    'k-vstack',
                    'k-align-items-center',
                    className
                )}>

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
                {line && <div className="k-orgchart-line k-orgchart-line-v"></div> }
                {plus && <Button className="k-orgchart-button" icon="plus"></Button> }
            </div>
        );
    }
}
