import { BreadcrumbAdaptive, BreadcrumbContainer, BreadcrumbItem, BreadcrumbItemText, BreadcrumbLink, BreadcrumbNormal, BreadcrumbRoot, BreadcrumbRootAdaptive, BreadcrumbRootItemContainer } from '..';
import { Icon } from '../../icon';

const styles = `
    #test-area {
        grid-template-columns: 80px repeat(2, 1fr);
    }
`;


export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3 k-rtl">

            <span></span>
            <span>Collapsing with root item</span>
            <span>Collapsing without root item</span>

            <span>none</span>
            <div>
                <BreadcrumbRoot collapsing="none" size="large">
                    <BreadcrumbRootItemContainer>
                        <BreadcrumbItem root>
                            <BreadcrumbLink root icontext>
                                <Icon icon="home" />
                                <BreadcrumbItemText text="Start item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbRootItemContainer>
                    <BreadcrumbContainer collapsing="none">
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 01"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 02"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 03"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbContainer>
                </BreadcrumbRoot>
            </div>

            <div>
                <BreadcrumbNormal collapsing="none" size="large">
                    <BreadcrumbContainer collapsing="none">
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 01"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 02"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 03"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 04"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbContainer>
                </BreadcrumbNormal>
            </div>


            <span>auto</span>
            <div>
                <BreadcrumbRootAdaptive size="large">
                    <BreadcrumbRootItemContainer>
                        <BreadcrumbItem root>
                            <BreadcrumbLink root icontext>
                                <Icon icon="home" />
                                <BreadcrumbItemText text="Start item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbRootItemContainer>

                    <BreadcrumbContainer>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 03"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 04"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 05"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbContainer>
                </BreadcrumbRootAdaptive>
            </div>

            <div>
                <BreadcrumbAdaptive size="large">
                    <BreadcrumbContainer>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 01"></BreadcrumbItemText>
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 04"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 05"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 06"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbContainer>
                </BreadcrumbAdaptive>
            </div>

            <span>wrap</span>
            <div>
                <BreadcrumbRoot collapsing="wrap" size="large">
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
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 01"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 02"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 03"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 04"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 05"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 06"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 07"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbContainer>
                </BreadcrumbRoot>
            </div>
            <div>
                <BreadcrumbNormal collapsing="wrap" size="large">
                    <BreadcrumbContainer collapsing="wrap">
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 01"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 02"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 03"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 04"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 05"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 06"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 07"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Item 08"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbContainer>
                </BreadcrumbNormal>
            </div>

        </div>
    </>
);
