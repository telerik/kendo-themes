import { Breadcrumb, BreadcrumbContainer, BreadcrumbItem, BreadcrumbItemText, BreadcrumbLink } from "..";
import { Icon } from "../../icon";

export const BreadcrumbAdaptive = ({ collapsing, ...other }: any) => (
    <Breadcrumb
        collapsing={collapsing}
        children={
            <BreadcrumbContainer collapsing={collapsing}>
                <BreadcrumbItem>
                    <BreadcrumbLink>
                        <BreadcrumbItemText text="Item 01"></BreadcrumbItemText>
                    </BreadcrumbLink>
                    <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                    <BreadcrumbLink>
                        <BreadcrumbItemText text="Item 04"></BreadcrumbItemText>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                    <BreadcrumbLink>
                        <BreadcrumbItemText text="Item 05"></BreadcrumbItemText>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem last>
                    <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                    <BreadcrumbLink>
                        <BreadcrumbItemText text="Item 06"></BreadcrumbItemText>
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbContainer>
        }
        {...other}>
    </Breadcrumb>
);
