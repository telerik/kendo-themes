import { Icon } from '../../icon';
import { Textbox } from '../../textbox';
import { BreadcrumbCollapsingAuto, BreadcrumbCollapsingWrap, BreadcrumbContainer, BreadcrumbInputContainer, BreadcrumbItem, BreadcrumbItemText, BreadcrumbLink, BreadcrumbRootItemContainer } from '..';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2 k-rtl">
            <span className="k-colspan-all k-col-span-full">Item states</span>

            <span>Icon & Image items with Text</span>
            <span>Text items</span>

            <div>
                <BreadcrumbCollapsingWrap style={{ width: "400px" }}>
                    <BreadcrumbRootItemContainer>
                        <BreadcrumbItem root>
                            <BreadcrumbLink root icon>
                                <Icon icon="home" />
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbRootItemContainer>

                    <BreadcrumbContainer collapsing="wrap">

                        {[ "normal", ...BreadcrumbLink.states ].map((state) => (
                            <BreadcrumbItem>
                                <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                                <BreadcrumbLink {...{ [state]: true }} icontext>
                                    <Icon icon="clock" />
                                    <BreadcrumbItemText text={state}></BreadcrumbItemText>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        ))
                        }
                        {[ "normal", ...BreadcrumbLink.states ].map((state) => (
                            <BreadcrumbItem>
                                <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                                <BreadcrumbLink {...{ [state]: true }}>
                                    <img className="k-image" src="/packages/html/assets/avatar.jpg" width="20" height="20" />
                                    <BreadcrumbItemText text={state}></BreadcrumbItemText>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        ))
                        }
                    </BreadcrumbContainer>
                </BreadcrumbCollapsingWrap>
            </div>

            <div>
                <BreadcrumbCollapsingWrap style={{ width: "400px" }}>
                    <BreadcrumbRootItemContainer>
                        <BreadcrumbItem root>
                            <BreadcrumbLink root icon>
                                <Icon icon="home" />
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbRootItemContainer>

                    <BreadcrumbContainer collapsing="wrap">
                        {[ "normal", ...BreadcrumbLink.states ].map((state) => (
                            <BreadcrumbItem>
                                <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                                <BreadcrumbLink {...{ [state]: true }}>
                                    <BreadcrumbItemText text={state}></BreadcrumbItemText>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        ))
                        }
                        {[ "normal", ...BreadcrumbLink.states ].map((state) => (
                            <BreadcrumbItem>
                                <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                                <BreadcrumbLink {...{ [state]: true }}>
                                    <BreadcrumbItemText text={`long_text ${state}`}></BreadcrumbItemText>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        ))
                        }
                    </BreadcrumbContainer>
                </BreadcrumbCollapsingWrap>
            </div>

            <span className="k-colspan-all k-col-span-full">Icon & Image items</span>

            <div>
                <BreadcrumbCollapsingWrap style={{ width: "400px" }}>
                    <BreadcrumbRootItemContainer>
                        <BreadcrumbItem root>
                            <BreadcrumbLink root icon>
                                <Icon icon="home" />
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbRootItemContainer>

                    <BreadcrumbContainer collapsing="wrap">
                        {[ "normal", ...BreadcrumbLink.states ].map((state) => (
                            <BreadcrumbItem>
                                <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                                <BreadcrumbLink {...{ [state]: true }} icon>
                                    <Icon icon="clock" />
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        ))
                        }
                        {[ "normal", ...BreadcrumbLink.states ].map((state) => (
                            <BreadcrumbItem>
                                <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                                <BreadcrumbLink {...{ [state]: true }}>
                                    <img className="k-image" src="/packages/html/assets/avatar.jpg" width="20" height="20" />
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        ))
                        }
                    </BreadcrumbContainer>
                </BreadcrumbCollapsingWrap>
            </div>

            <span className="k-colspan-all k-col-span-full">Navigation Mode</span>

            {[ "normal", ...BreadcrumbLink.states ].map((state) => (
                <div>
                    <BreadcrumbCollapsingAuto>
                        <BreadcrumbContainer>
                            <BreadcrumbItem root>
                                <BreadcrumbLink root icon {...{ [state]: true }}>
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
                                <BreadcrumbLink {...{ [state]: true }}>
                                    <BreadcrumbItemText text={`Last ${state}`}></BreadcrumbItemText>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbContainer>
                    </BreadcrumbCollapsingAuto>
                </div>
            ))
            }

            <span className="k-colspan-all k-col-span-full">Edit Mode</span>

            <div>
                <BreadcrumbCollapsingAuto focus>
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
                </BreadcrumbCollapsingAuto>
            </div>

            <div>
                <BreadcrumbCollapsingAuto>
                    <BreadcrumbInputContainer>
                        <Textbox showClearButton={false} value="First item/Second item/Third item" />
                    </BreadcrumbInputContainer>
                </BreadcrumbCollapsingAuto>
            </div>
        </div>
    </>
);
