import { Icon } from '../../icon';
import { Textbox } from '../../textbox';
import { BreadcrumbContainer, BreadcrumbInputContainer, BreadcrumbItem, BreadcrumbItemText, BreadcrumbLink, BreadcrumbNormal, BreadcrumbRoot, BreadcrumbRootItemContainer } from '../../breadcrumb';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2 k-rtl">
            <span className="k-colspan-all k-col-span-full">Wrapping</span>
            <div>
                <BreadcrumbRoot collapsing="wrap" style={{ width: "400px" }}>
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
                            <BreadcrumbLink disabled icontext>
                                <Icon icon="clock" />
                                <BreadcrumbItemText text="First item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                            <BreadcrumbLink>
                                <img className="k-image" src="/packages/html/assets/avatar.jpg" width="20" height="20" />
                                <BreadcrumbItemText text="Second item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Third item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                            <BreadcrumbLink icon>
                                <Icon icon="clock" />
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                            <BreadcrumbLink disabled>
                                <BreadcrumbItemText text="Fifth item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbContainer>
                </BreadcrumbRoot>
            </div>

            <div>
                <BreadcrumbRoot collapsing="wrap" style={{ width: "400px" }}>
                    <BreadcrumbRootItemContainer>
                        <BreadcrumbItem root>
                            <BreadcrumbLink root>
                                <BreadcrumbItemText text="Start item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbRootItemContainer>

                    <BreadcrumbContainer collapsing="wrap">
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                            <BreadcrumbLink disabled icontext>
                                <Icon icon="clock" />
                                <BreadcrumbItemText text="First item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                            <BreadcrumbLink>
                                <img className="k-image" src="/packages/html/assets/avatar.jpg" width="20" height="20" />
                                <BreadcrumbItemText text="Second item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Third item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                            <BreadcrumbLink icon>
                                <Icon icon="clock" />
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                            <BreadcrumbLink disabled>
                                <BreadcrumbItemText text="Fifth item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbContainer>
                </BreadcrumbRoot>
            </div>

            <div>
                <BreadcrumbRoot collapsing="wrap" style={{ width: "400px" }}>
                    <BreadcrumbRootItemContainer>
                        <BreadcrumbItem root>
                            <BreadcrumbLink root icon>
                                <Icon icon="home" />
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbRootItemContainer>

                    <BreadcrumbContainer collapsing="wrap">
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                            <BreadcrumbLink disabled icontext>
                                <Icon icon="clock" />
                                <BreadcrumbItemText text="First item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                            <BreadcrumbLink>
                                <img className="k-image" src="/packages/html/assets/avatar.jpg" width="20" height="20" />
                                <BreadcrumbItemText text="Second item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Third item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                            <BreadcrumbLink icon>
                                <Icon icon="clock" />
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                            <BreadcrumbLink disabled>
                                <BreadcrumbItemText text="Fifth item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbContainer>
                </BreadcrumbRoot>
            </div>

            <span className="k-colspan-all k-col-span-full">Navigation Mode</span>
            <div>
                <BreadcrumbNormal>
                    <BreadcrumbContainer>
                        <BreadcrumbItem root>
                            <BreadcrumbLink root icon>
                                <Icon icon="home" />
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="First item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Second item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <BreadcrumbLink disabled>
                                <BreadcrumbItemText text="Third item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbContainer>
                </BreadcrumbNormal>
            </div>

            <div>
                <BreadcrumbNormal>
                    <BreadcrumbContainer>
                        <BreadcrumbItem root>
                            <BreadcrumbLink root icon focus>
                                <Icon icon="home" />
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink focus>
                                <BreadcrumbItemText text="First item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Second item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <BreadcrumbLink disabled>
                                <BreadcrumbItemText text="Third item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbContainer>
                </BreadcrumbNormal>
            </div>

            <div>
                <BreadcrumbNormal>
                    <BreadcrumbContainer>
                        <BreadcrumbItem root>
                            <BreadcrumbLink root icon hover>
                                <Icon icon="home" />
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink hover>
                                <BreadcrumbItemText text="First item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Second item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <BreadcrumbLink disabled>
                                <BreadcrumbItemText text="Third item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbContainer>
                </BreadcrumbNormal>
            </div>

            <div>
                <BreadcrumbNormal>
                    <BreadcrumbContainer>
                        <BreadcrumbItem root>
                            <BreadcrumbLink root icon hover>
                                <Icon icon="home" />
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink icontext>
                                <Icon icon="cloud" />
                                <BreadcrumbItemText text="First item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink icon>
                                <Icon icon="camera" />
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <BreadcrumbLink disabled>
                                <BreadcrumbItemText text="Third item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbContainer>
                </BreadcrumbNormal>
            </div>

            <span className="k-colspan-all k-col-span-full">Edit Mode</span>
            <div>
                <BreadcrumbNormal focus>
                    <BreadcrumbContainer>
                        <BreadcrumbItem root>
                            <BreadcrumbLink root icon>
                                <Icon icon="home" />
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="First item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Second item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <BreadcrumbLink disabled>
                                <BreadcrumbItemText text="Third item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbContainer>
                </BreadcrumbNormal>
            </div>

            <div>
                <BreadcrumbNormal>
                    <BreadcrumbInputContainer>
                        <Textbox showClearButton={false} value="First item/Second item/Breadcrumb Pattern/Third item" />
                    </BreadcrumbInputContainer>
                </BreadcrumbNormal>
            </div>
        </div>
    </>
);
