import { BreadcrumbCollapsingAuto, BreadcrumbCollapsingNone, BreadcrumbCollapsingWrap, BreadcrumbContainer, BreadcrumbItem, BreadcrumbItemText, BreadcrumbLink } from '..';
import { Icon } from '../../icon';

const styles = `
    #test-area {
        grid-template-columns: 80px 500px;
    }
`;


export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span></span>
            <span>Collapsing</span>

            <span>none</span>
            <div>
                <BreadcrumbCollapsingNone size="large" />
            </div>


            <span>auto</span>
            <div>
                <BreadcrumbCollapsingAuto size="large" />
            </div>

            <span>auto - overflow</span>
            <div>
                <BreadcrumbCollapsingAuto size="large">
                    <BreadcrumbContainer collapsing="auto">
                        <BreadcrumbItem root>
                            <BreadcrumbLink root icontext>
                                <Icon icon="home" />
                                <BreadcrumbItemText text="Home"></BreadcrumbItemText>
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon k-breadcrumb-overflow-icon" icon="chevron-right" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem></BreadcrumbItem>
                        <BreadcrumbItem></BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Fourth item "></BreadcrumbItemText>
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem last>
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Fifth item "></BreadcrumbItemText>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbContainer>
                </BreadcrumbCollapsingAuto>
            </div>

            <span>wrap - overflow</span>
            <div>
                <BreadcrumbCollapsingWrap size="large" />
            </div>
        </div>
    </>
);
