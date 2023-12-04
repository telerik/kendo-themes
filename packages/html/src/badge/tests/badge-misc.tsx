import { Icon } from '../../icon';
import { Badge, IconBadge } from '../../badge';


const styles = `
    #test-area {
        grid-template-columns: 80px repeat(5, 1fr);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>Baseline</span>
            <span>Rectangle</span>
            <span>Rounded</span>
            <span>Pill</span>
            <span>Circle</span>


            <div className="k-col-span-full k-text-center">solid</div>

            <span>Small</span>
            <span>
                <Badge size="small" themeColor="success">99</Badge>
            </span>
            <span>
                <Badge size="small" themeColor="success">
                    <Icon className="k-badge-icon" icon="check"></Icon>
                </Badge>
            </span>
            <span>
                <IconBadge size="small" rounded="small" themeColor="success">
                    <Icon className="k-badge-icon" icon="check"></Icon>
                </IconBadge>
            </span>
            <span>
                <IconBadge size="small" rounded="full" themeColor="success">
                    <Icon className="k-badge-icon" icon="check"></Icon>
                </IconBadge>
            </span>
            <span>
                <IconBadge size="small" rounded="full" themeColor="success">
                    <Icon className="k-badge-icon" icon="check"></Icon>
                </IconBadge>
            </span>

            <span>Normal</span>
            <span>
                <Badge themeColor="info">99</Badge>
            </span>
            <span>
                <IconBadge themeColor="info">
                    <Icon className="k-badge-icon" icon="calendar"></Icon>
                </IconBadge>
            </span>
            <span>
                <IconBadge themeColor="info" rounded="medium">
                    <Icon className="k-badge-icon" icon="calendar"></Icon>
                </IconBadge>
            </span>
            <span>
                <IconBadge themeColor="info" rounded="full">
                    <Icon className="k-badge-icon" icon="calendar"></Icon>
                </IconBadge>
            </span>
            <span>
                <IconBadge themeColor="info" rounded="full">
                    <Icon className="k-badge-icon" icon="calendar"></Icon>
                </IconBadge>
            </span>

            <span>Large</span>
            <span>
                <Badge size="large" themeColor="warning">99</Badge>
            </span>
            <span>
                <IconBadge size="large" themeColor="warning">
                    <Icon className="k-badge-icon" icon="bell"></Icon>
                </IconBadge>
            </span>
            <span>
                <IconBadge size="large" themeColor="warning" rounded="large">
                    <Icon className="k-badge-icon" icon="bell"></Icon>
                </IconBadge>
            </span>
            <span>
                <IconBadge size="large" themeColor="warning" rounded="full">
                    <Icon className="k-badge-icon" icon="bell"></Icon>
                </IconBadge>
            </span>
            <span>
                <IconBadge size="large" themeColor="warning" rounded="full">
                    <Icon className="k-badge-icon" icon="bell"></Icon>
                </IconBadge>
            </span>

            <div className="k-col-span-full k-text-center">outline</div>

            <span>Small</span>
            <span>
                <Badge fillMode="outline" size="small">99</Badge>
            </span>
            <span>
                <IconBadge fillMode="outline" size="small"/>
            </span>
            <span>
                <IconBadge fillMode="outline" size="small" rounded="small"/>
            </span>
            <span>
                <IconBadge fillMode="outline" size="small" rounded="full"/>
            </span>
            <span>
                <IconBadge fillMode="outline" size="small" rounded="full"/>
            </span>

            <span>Normal</span>
            <span>
                <Badge fillMode="outline" themeColor="tertiary">99</Badge>
            </span>
            <span>
                <IconBadge fillMode="outline" themeColor="tertiary">
                    <Icon className="k-badge-icon" icon="plus-circle"></Icon>
                </IconBadge>
            </span>
            <span>
                <IconBadge fillMode="outline" themeColor="tertiary" rounded="medium">
                    <Icon className="k-badge-icon" icon="plus-circle"></Icon>
                </IconBadge>
            </span>
            <span>
                <IconBadge fillMode="outline" themeColor="tertiary" rounded="full">
                    <Icon className="k-badge-icon" icon="plus-circle"></Icon>
                </IconBadge>
            </span>
            <span>
                <IconBadge fillMode="outline" themeColor="tertiary" rounded="full">
                    <Icon className="k-badge-icon" icon="plus-circle"></Icon>
                </IconBadge>
            </span>


            <span>Large</span>
            <span>
                <Badge size="large" fillMode="outline" themeColor="error">99</Badge>
            </span>
            <span>
                <IconBadge size="large" fillMode="outline" themeColor="error"/>
            </span>
            <span>
                <IconBadge size="large" fillMode="outline" themeColor="error" rounded="large"/>
            </span>
            <span>
                <IconBadge size="large" fillMode="outline" themeColor="error" rounded="full"/>
            </span>
            <span>
                <IconBadge size="large" fillMode="outline" themeColor="error" rounded="full"/>
            </span>

        </div>
    </>
);
