import { Icon } from "../../icon/icon.spec";
import { Breadcrumb } from '../breadcrumb.spec';
import { BreadcrumbContainer } from '../breadcrumb-container';
import { BreadcrumbRootItemContainer } from '../breadcrumb-root-item-container';
import { BreadcrumbItem } from '../breadcrumb-item';
import { BreadcrumbItemText } from '../breadcrumb-item-text';
import { BreadcrumbLink } from '../breadcrumb-link';
import { BreadcrumbCollapsingWrap } from '../templates/breadcrumb-collapsing-wrap';

export default () => (
  <>
    <div id="test-area" className="k-d-grid k-grid-cols-1">
      {Breadcrumb.options.size.map((size) => (
        <>
          <div>{`${size}`}</div>
          <BreadcrumbCollapsingWrap size={size}>
            <BreadcrumbRootItemContainer>
              <BreadcrumbItem root>
                <BreadcrumbLink root icontext focus>
                  <Icon icon="home" />
                  <BreadcrumbItemText text="Home"></BreadcrumbItemText>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbRootItemContainer>
            <BreadcrumbContainer collapsing="wrap">
              <BreadcrumbItem>
                <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                <BreadcrumbLink focus>
                  <BreadcrumbItemText text="Text item"></BreadcrumbItemText>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem last>
                <Icon className="k-breadcrumb-delimiter-icon" icon="chevron-right" size="xsmall" />
                <BreadcrumbLink icon focus>
                  <Icon icon="clock" />
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbContainer>
          </BreadcrumbCollapsingWrap>
        </>
      ))}
    </div>
  </>
);
