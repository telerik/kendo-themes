import { BreadcrumbContainer, BreadcrumbItem, BreadcrumbItemText, BreadcrumbLink } from '..';
import { Icon } from '../../icon';

const styles = `
    #test-area {
        grid-template-columns: 80px 1fr;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span></span>
            <span>Breadcrumb Focus States</span>

            <span>Normal</span>
            <div>
                <BreadcrumbContainer>
                    <BreadcrumbItem root>
                        <BreadcrumbLink root icontext>
                            <Icon icon="home" />
                            <BreadcrumbItemText text="Dashboard"></BreadcrumbItemText>
                        </BreadcrumbLink>
                        <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <BreadcrumbItemText text="Patients"></BreadcrumbItemText>
                        </BreadcrumbLink>
                        <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <BreadcrumbItemText text="John Doe"></BreadcrumbItemText>
                        </BreadcrumbLink>
                        <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                    </BreadcrumbItem>
                    <BreadcrumbItem last>
                        <BreadcrumbLink>
                            <BreadcrumbItemText text="Medical History"></BreadcrumbItemText>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbContainer>
            </div>

            <span>Root Focused</span>
            <div>
                <BreadcrumbContainer>
                    <BreadcrumbItem root>
                        <BreadcrumbLink root icontext focus>
                            <Icon icon="home" />
                            <BreadcrumbItemText text="Dashboard"></BreadcrumbItemText>
                        </BreadcrumbLink>
                        <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <BreadcrumbItemText text="Patients"></BreadcrumbItemText>
                        </BreadcrumbLink>
                        <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <BreadcrumbItemText text="John Doe"></BreadcrumbItemText>
                        </BreadcrumbLink>
                        <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                    </BreadcrumbItem>
                    <BreadcrumbItem last>
                        <BreadcrumbLink>
                            <BreadcrumbItemText text="Medical History"></BreadcrumbItemText>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbContainer>
            </div>

            <span>Link Focused</span>
            <div>
                <BreadcrumbContainer>
                    <BreadcrumbItem root>
                        <BreadcrumbLink root icontext>
                            <Icon icon="home" />
                            <BreadcrumbItemText text="Dashboard"></BreadcrumbItemText>
                        </BreadcrumbLink>
                        <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink focus>
                            <BreadcrumbItemText text="Patients"></BreadcrumbItemText>
                        </BreadcrumbLink>
                        <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <BreadcrumbItemText text="John Doe"></BreadcrumbItemText>
                        </BreadcrumbLink>
                        <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                    </BreadcrumbItem>
                    <BreadcrumbItem last>
                        <BreadcrumbLink>
                            <BreadcrumbItemText text="Medical History"></BreadcrumbItemText>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbContainer>
            </div>

            <span>Multiple Focused</span>
            <div>
                <BreadcrumbContainer>
                    <BreadcrumbItem root>
                        <BreadcrumbLink root icontext focus>
                            <Icon icon="home" />
                            <BreadcrumbItemText text="Dashboard"></BreadcrumbItemText>
                        </BreadcrumbLink>
                        <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <BreadcrumbItemText text="Patients"></BreadcrumbItemText>
                        </BreadcrumbLink>
                        <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink focus>
                            <BreadcrumbItemText text="John Doe"></BreadcrumbItemText>
                        </BreadcrumbLink>
                        <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                    </BreadcrumbItem>
                    <BreadcrumbItem last>
                        <BreadcrumbLink>
                            <BreadcrumbItemText text="Medical History"></BreadcrumbItemText>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbContainer>
            </div>
        </div>
    </>
);