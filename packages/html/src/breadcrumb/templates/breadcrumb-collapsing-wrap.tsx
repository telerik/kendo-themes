import { Breadcrumb, BreadcrumbContainer, BreadcrumbItem, BreadcrumbItemText, BreadcrumbLink, BreadcrumbRootItemContainer } from "..";
import { Icon } from "../../icon";

export const BreadcrumbCollapsingWrap = ({ dir, ...other }: any) => (
    <Breadcrumb
        collapsing="wrap"
        children={
            <>
                <BreadcrumbRootItemContainer>
                    <BreadcrumbItem root>
                        <BreadcrumbLink root icontext>
                            <Icon icon="home" />
                            <BreadcrumbItemText text="Home"></BreadcrumbItemText>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbRootItemContainer>
                <BreadcrumbContainer collapsing="wrap">
                    <BreadcrumbItem>
                        <Icon className="k-breadcrumb-delimiter-icon" icon={`chevron-${dir === "rtl" ? "left" : "right"}`} size="xsmall" />
                        <BreadcrumbLink>
                            <BreadcrumbItemText text="First Item"></BreadcrumbItemText>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Icon className="k-breadcrumb-delimiter-icon" icon={`chevron-${dir === "rtl" ? "left" : "right"}`} size="xsmall" />
                        <BreadcrumbLink>
                            <BreadcrumbItemText text="Second Item"></BreadcrumbItemText>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Icon className="k-breadcrumb-delimiter-icon" icon={`chevron-${dir === "rtl" ? "left" : "right"}`} size="xsmall" />
                        <BreadcrumbLink>
                            <BreadcrumbItemText text="Third Item"></BreadcrumbItemText>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Icon className="k-breadcrumb-delimiter-icon" icon={`chevron-${dir === "rtl" ? "left" : "right"}`} size="xsmall" />
                        <BreadcrumbLink>
                            <BreadcrumbItemText text="Fourth Item"></BreadcrumbItemText>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem last>
                        <Icon className="k-breadcrumb-delimiter-icon" icon={`chevron-${dir === "rtl" ? "left" : "right"}`} size="xsmall" />
                        <BreadcrumbLink>
                            <BreadcrumbItemText text="Fifth Item"></BreadcrumbItemText>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbContainer>
            </>
        }
        {...other}>
    </Breadcrumb>
);
