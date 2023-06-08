import { Icon } from '../../icon';
import { Breadcrumb, BreadcrumbContainer, BreadcrumbItem, BreadcrumbItemText, BreadcrumbLink, BreadcrumbRootItemContainer } from '..';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>with root item</span>
            <span>without root item</span>

            <div>
                <Breadcrumb collapsing="wrap" size="large">
                    <BreadcrumbRootItemContainer>
                        <BreadcrumbItem root>
                            <BreadcrumbLink root icontext>
                                <Icon icon="home" />
                                <BreadcrumbItemText text="Start item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbRootItemContainer>

                    <BreadcrumbContainer collapsing="wrap">
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 03"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 04"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 05"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbContainer>
                </Breadcrumb>
            </div>

            <div>
                <Breadcrumb collapsing="wrap" size="large">
                    <BreadcrumbContainer collapsing="wrap">
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 01"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
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
                </Breadcrumb>
            </div>
        </div>
    </>
);
