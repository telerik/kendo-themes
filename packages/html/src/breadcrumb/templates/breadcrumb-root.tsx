import { Breadcrumb, BreadcrumbContainer, BreadcrumbItem, BreadcrumbItemText, BreadcrumbLink, BreadcrumbRootItemContainer } from "..";
import { Icon } from "../../icon";

export const BreadcrumbRoot = ({ collapsing, ...other }: any) => (
    <Breadcrumb
        collapsing={collapsing}
        children={
            <>
                <BreadcrumbRootItemContainer>
                    <BreadcrumbItem root>
                        <BreadcrumbLink root icontext>
                            <Icon icon="home" />
                            <BreadcrumbItemText text="Start item"></BreadcrumbItemText>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbRootItemContainer>
                <BreadcrumbContainer collapsing={collapsing}>
                    <BreadcrumbItem>
                        <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                        <BreadcrumbLink>
                            <BreadcrumbItemText text="Item 01"></BreadcrumbItemText>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                        <BreadcrumbLink>
                            <BreadcrumbItemText text="Item 02"></BreadcrumbItemText>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem last>
                        <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                        <BreadcrumbLink>
                            <BreadcrumbItemText text="Item 03"></BreadcrumbItemText>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbContainer>
            </>
        }
        {...other}>
    </Breadcrumb>
);
