import { Icon } from '../../icon';
import { Breadcrumb, BreadcrumbCollapsingWrap, BreadcrumbContainer, BreadcrumbItem, BreadcrumbItemText, BreadcrumbLink, BreadcrumbRootItemContainer } from '..';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <div>undefined</div>
            <div>small</div>
            <div>medium</div>
            <div>large</div>

            {[undefined, ...Breadcrumb.options.size].map( (size) => (
                <BreadcrumbCollapsingWrap size={size}>
                    <BreadcrumbRootItemContainer>
                        <BreadcrumbItem root>
                            <BreadcrumbLink root icontext focus>
                                <Icon icon="home" />
                                <BreadcrumbItemText text="Home"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbRootItemContainer>
                    <BreadcrumbContainer collapsing="wrap">
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                            <BreadcrumbLink focus>
                                <BreadcrumbItemText text="Text item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                            <BreadcrumbLink icon focus>
                                <Icon icon="clock" />
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbContainer>
                </BreadcrumbCollapsingWrap>
            ))}
        </div>
    </>
);
