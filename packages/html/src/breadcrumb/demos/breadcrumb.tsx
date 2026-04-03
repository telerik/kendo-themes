import { Breadcrumb, KendoBreadcrumbProps } from '../breadcrumb.spec';
import { BreadcrumbContainer } from '../breadcrumb-container';
import { BreadcrumbItem } from '../breadcrumb-item';
import { BreadcrumbItemText } from '../breadcrumb-item-text';
import { BreadcrumbLink } from '../breadcrumb-link';
import { Icon } from '../../icon';

const options = Breadcrumb.options;
const states = Breadcrumb.states;
const defaults = {
  ...Breadcrumb.defaultOptions,
  variant: 'text',
};
const variants = [
  {
    name: 'text',
    title: 'Text',
  },
  {
    name: 'icon',
    title: 'Icon',
  },
  {
    name: 'icon-and-text',
    title: 'Icon & Text',
  },
];
const modifiers = [];

export const BreadcrumbDemo = (
  props: KendoBreadcrumbProps & { variant?: (typeof variants)[number]['name'] }
) => {
  const { variant, ...other } = props;

  switch (variant) {
    case 'icon':
      return (
        <Breadcrumb {...other}>
          <BreadcrumbContainer>
            <BreadcrumbItem root>
              <BreadcrumbLink root icon onClick={(e) => e.preventDefault()}>
                <Icon icon="cart" />
              </BreadcrumbLink>
              <Icon className="k-breadcrumb-delimiter-icon" icon={`chevron-right`} size="xsmall" />
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink icon onClick={(e) => e.preventDefault()}>
                <Icon icon="js" />
              </BreadcrumbLink>
              <Icon className="k-breadcrumb-delimiter-icon" icon={`chevron-right`} size="xsmall" />
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink icon onClick={(e) => e.preventDefault()}>
                <Icon icon="truck" />
              </BreadcrumbLink>
              <Icon className="k-breadcrumb-delimiter-icon" icon={`chevron-right`} size="xsmall" />
            </BreadcrumbItem>
            <BreadcrumbItem last>
              <BreadcrumbLink icon onClick={(e) => e.preventDefault()}>
                <Icon icon="wallet-outline" />
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbContainer>
        </Breadcrumb>
      )
    case 'icon-and-text':
      return (
        <Breadcrumb {...other}>
          <BreadcrumbContainer>
            <BreadcrumbItem root>
              <BreadcrumbLink root icontext onClick={(e) => e.preventDefault()}>
                <Icon icon="cart" />
                <BreadcrumbItemText text="Cart"></BreadcrumbItemText>
              </BreadcrumbLink>
              <Icon className="k-breadcrumb-delimiter-icon" icon={`chevron-right`} size="xsmall" />
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink icontext onClick={(e) => e.preventDefault()}>
                <Icon icon="js" />
                <BreadcrumbItemText text="Billing"></BreadcrumbItemText>
              </BreadcrumbLink>
              <Icon className="k-breadcrumb-delimiter-icon" icon={`chevron-right`} size="xsmall" />
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink icontext onClick={(e) => e.preventDefault()}>
                <Icon icon="truck" />
                <BreadcrumbItemText text="Shipping"></BreadcrumbItemText>
              </BreadcrumbLink>
              <Icon className="k-breadcrumb-delimiter-icon" icon={`chevron-right`} size="xsmall" />
            </BreadcrumbItem>
            <BreadcrumbItem last>
              <BreadcrumbLink icontext onClick={(e) => e.preventDefault()}>
                <Icon icon="wallet-outline" />
                <BreadcrumbItemText text="Payment"></BreadcrumbItemText>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbContainer>
        </Breadcrumb>
      );
    case 'text':
    default:
      return (
        <Breadcrumb {...other}>
          <BreadcrumbContainer>
            <BreadcrumbItem root>
              <BreadcrumbLink root onClick={(e) => e.preventDefault()}>
                <BreadcrumbItemText text="Cart"></BreadcrumbItemText>
              </BreadcrumbLink>
              <Icon className="k-breadcrumb-delimiter-icon" icon={`chevron-right`} size="xsmall" />
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink onClick={(e) => e.preventDefault()}>
                <BreadcrumbItemText text="Billing"></BreadcrumbItemText>
              </BreadcrumbLink>
              <Icon className="k-breadcrumb-delimiter-icon" icon={`chevron-right`} size="xsmall" />
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink onClick={(e) => e.preventDefault()}>
                <BreadcrumbItemText text="Shipping"></BreadcrumbItemText>
              </BreadcrumbLink>
              <Icon className="k-breadcrumb-delimiter-icon" icon={`chevron-right`} size="xsmall" />
            </BreadcrumbItem>
            <BreadcrumbItem last>
              <BreadcrumbLink onClick={(e) => e.preventDefault()}>
                <BreadcrumbItemText text="Payment"></BreadcrumbItemText>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbContainer>
        </Breadcrumb>
      )
  }
}


BreadcrumbDemo.options = options;
BreadcrumbDemo.states = states;
BreadcrumbDemo.variants = variants;
BreadcrumbDemo.defaultOptions = defaults;
BreadcrumbDemo.modifiers = modifiers;
BreadcrumbDemo.className = Breadcrumb.className;

export default BreadcrumbDemo;

