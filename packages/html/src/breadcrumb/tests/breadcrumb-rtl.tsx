import { Icon } from '../../icon';
import { Textbox } from '../../textbox';
import { Breadcrumb, BreadcrumbContainer, BreadcrumbInputContainer, BreadcrumbItem, BreadcrumbItemText, BreadcrumbLink, BreadcrumbRootItemContainer } from '../../breadcrumb';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2 k-rtl">
            <span className="k-colspan-all k-col-span-full">Wrapping</span>
            <div>
                <Breadcrumb collapsing="wrap" style={{ width: "400px" }} dir="rtl">
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
                            <BreadcrumbLink disabled icontext>
                                <Icon icon="clock" />
                                <BreadcrumbItemText text="First item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <img className="k-image" src="/packages/html/assets/avatar.jpg" width="20" height="20" />
                                <BreadcrumbItemText text="Second item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Third item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink icon>
                                <Icon icon="clock" />
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink disabled>
                                <BreadcrumbItemText text="Fifth item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbContainer>
                </Breadcrumb>
            </div>

            <div>
                <Breadcrumb collapsing="wrap" style={{ width: "400px" }} dir="rtl">
                    <BreadcrumbRootItemContainer>
                        <BreadcrumbItem root>
                            <BreadcrumbLink root>
                                <BreadcrumbItemText text="Start item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbRootItemContainer>

                    <BreadcrumbContainer collapsing="wrap">
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink disabled icontext>
                                <Icon icon="clock" />
                                <BreadcrumbItemText text="First item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <img className="k-image" src="/packages/html/assets/avatar.jpg" width="20" height="20" />
                                <BreadcrumbItemText text="Second item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Third item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink icon>
                                <Icon icon="clock" />
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink disabled>
                                <BreadcrumbItemText text="Fifth item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbContainer>
                </Breadcrumb>
            </div>

            <div>
                <Breadcrumb collapsing="wrap" style={{ width: "400px" }} dir="rtl">
                    <BreadcrumbRootItemContainer>
                        <BreadcrumbItem root>
                            <BreadcrumbLink root icon>
                                <Icon icon="home" />
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbRootItemContainer>

                    <BreadcrumbContainer collapsing="wrap">
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink disabled icontext>
                                <Icon icon="clock" />
                                <BreadcrumbItemText text="First item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <img className="k-image" src="/packages/html/assets/avatar.jpg" width="20" height="20" />
                                <BreadcrumbItemText text="Second item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Third item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink icon>
                                <Icon icon="clock" />
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                            <BreadcrumbLink disabled>
                                <BreadcrumbItemText text="Fifth item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbContainer>
                </Breadcrumb>
            </div>

            <span className="k-colspan-all k-col-span-full">Navigation Mode</span>
            <div>
                <Breadcrumb>
                    <BreadcrumbContainer>
                        <BreadcrumbItem root>
                            <BreadcrumbLink root icon>
                                <Icon icon="home" />
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="First item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Second item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <BreadcrumbLink disabled>
                                <BreadcrumbItemText text="Third item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbContainer>
                </Breadcrumb>
            </div>

            <div>
                <Breadcrumb>
                    <BreadcrumbContainer>
                        <BreadcrumbItem root>
                            <BreadcrumbLink root icon focus>
                                <Icon icon="home" />
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink focus>
                                <BreadcrumbItemText text="First item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Second item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <BreadcrumbLink disabled>
                                <BreadcrumbItemText text="Third item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbContainer>
                </Breadcrumb>
            </div>

            <div>
                <Breadcrumb>
                    <BreadcrumbContainer>
                        <BreadcrumbItem root>
                            <BreadcrumbLink root icon hover>
                                <Icon icon="home" />
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink hover>
                                <BreadcrumbItemText text="First item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Second item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <BreadcrumbLink disabled>
                                <BreadcrumbItemText text="Third item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbContainer>
                </Breadcrumb>
            </div>

            <div>
                <Breadcrumb>
                    <BreadcrumbContainer>
                        <BreadcrumbItem root>
                            <BreadcrumbLink root icon hover>
                                <Icon icon="home" />
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink icontext>
                                <Icon icon="cloud" />
                                <BreadcrumbItemText text="First item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink icon>
                                <Icon icon="camera" />
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <BreadcrumbLink disabled>
                                <BreadcrumbItemText text="Third item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbContainer>
                </Breadcrumb>
            </div>

            <span className="k-colspan-all k-col-span-full">Edit Mode</span>
            <div>
                <Breadcrumb focus>
                    <BreadcrumbContainer>
                        <BreadcrumbItem root>
                            <BreadcrumbLink root icon>
                                <Icon icon="home" />
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="First item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Second item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <BreadcrumbLink disabled>
                                <BreadcrumbItemText text="Third item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbContainer>
                </Breadcrumb>
            </div>

            <div>
                <Breadcrumb>
                    <BreadcrumbInputContainer>
                        <Textbox showClearButton={false} value="First item/Second item/Breadcrumb Pattern/Third item" />
                    </BreadcrumbInputContainer>
                </Breadcrumb>
            </div>

            <span className="k-colspan-all k-col-span-full">Overflow</span>
            <div>
                <Breadcrumb>
                    <BreadcrumbContainer>
                        <BreadcrumbItem root>
                            <BreadcrumbLink root icon>
                                <Icon icon="home" />
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon k-breadcrumb-overflow-icon" icon="chevron-left" />
                            <Icon className="k-breadcrumb-delimiter-icon k-breadcrumb-overflow-icon" icon="chevron-left" />
                        </BreadcrumbItem>
                        <BreadcrumbItem hidden>
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="First item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem hidden>
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Second item"></BreadcrumbItemText>
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <BreadcrumbLink disabled>
                                <BreadcrumbItemText text="Breadcrumb item "></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbContainer>
                </Breadcrumb>
            </div>
        </div>

    </>
);
