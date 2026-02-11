import { Breadcrumb } from '../breadcrumb.spec';
import { BreadcrumbContainer } from '../breadcrumb-container';
import { BreadcrumbItem } from '../breadcrumb-item';
import { BreadcrumbItemText } from '../breadcrumb-item-text';
import { BreadcrumbLink } from '../breadcrumb-link';
import { Icon } from "../../icon/icon.spec";

export const BreadcrumbCollapsingAuto = ({ dir, ...other }: any) => (
    <Breadcrumb
        collapsing="auto"
        children={
            <>
                <BreadcrumbContainer collapsing="auto">
                    <BreadcrumbItem root>
                        <BreadcrumbLink root icontext>
                            <Icon icon="home" />
                            <BreadcrumbItemText text="Home"></BreadcrumbItemText>
                        </BreadcrumbLink>
                        <Icon className="k-breadcrumb-delimiter-icon" icon={`chevron-${dir === "rtl" ? "left" : "right"}`} size="xsmall" />
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <BreadcrumbItemText text="First item"></BreadcrumbItemText>
                        </BreadcrumbLink>
                        <Icon className="k-breadcrumb-delimiter-icon" icon={`chevron-${dir === "rtl" ? "left" : "right"}`} size="xsmall" />
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <BreadcrumbItemText text="Second item"></BreadcrumbItemText>
                        </BreadcrumbLink>
                        <Icon className="k-breadcrumb-delimiter-icon" icon={`chevron-${dir === "rtl" ? "left" : "right"}`} size="xsmall" />
                    </BreadcrumbItem>
                    <BreadcrumbItem last>
                        <BreadcrumbLink>
                            <BreadcrumbItemText text="Third item"></BreadcrumbItemText>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbContainer>
            </>
        }
        {...other}>
    </Breadcrumb>
);
