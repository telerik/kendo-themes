import { BreadcrumbContainer } from '../breadcrumb-container';
import { BreadcrumbItem } from '../breadcrumb-item';
import { BreadcrumbItemText } from '../breadcrumb-item-text';
import { BreadcrumbLink } from '../breadcrumb-link';
import { BreadcrumbCollapsingAuto } from '../templates/breadcrumb-collapsing-auto';
import { BreadcrumbCollapsingWrap } from '../templates/breadcrumb-collapsing-wrap';
import { BreadcrumbCollapsingNone } from '../templates/breadcrumb-collapsing-none';
import { Icon } from '../../icon/icon.spec';

const styles = `
    #test-area {
        grid-template-columns: 80px 500px;
    }
`;


export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2 k-rtl">

            <span></span>
            <span>Collapsing</span>

            <span>none</span>
            <div>
                <BreadcrumbCollapsingNone dir="rtl" size="large" />
            </div>


            <span>auto</span>
            <div>
                <BreadcrumbCollapsingAuto dir="rtl" size="large" />
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
                            <Icon className="k-breadcrumb-delimiter-icon k-breadcrumb-overflow-icon" icon="chevron-left" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem></BreadcrumbItem>
                        <BreadcrumbItem></BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <BreadcrumbItemText text="Fourth item "></BreadcrumbItemText>
                            </BreadcrumbLink>
                            <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-left" size="xsmall" />
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
                <BreadcrumbCollapsingWrap dir="rtl" size="large" />
            </div>
        </div>
    </>
);
