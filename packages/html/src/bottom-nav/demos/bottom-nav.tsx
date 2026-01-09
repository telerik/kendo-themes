import { BottomNav, KendoBottomNavProps } from '../bottom-nav.spec';
import { BottomNavItem } from '../bottom-nav-item';
import { BottomNavNormal } from '../templates/bottom-nav-normal';

const options = BottomNav.options;
const states = BottomNav.states;
const defaults = {
  ...BottomNav.defaultOptions,
  variant: 'vertical',
};

const variants = [
    {
        name: 'vertical',
        title: 'Vertical',
    },
    {
        name: 'horizontal',
        title: 'Horizontal',
    },
];
const modifiers = [];

export const BottomNavDemo = (
    props: KendoBottomNavProps & { variant?: (typeof variants)[number]['name'] }
) => {

    const { variant, ...other } = props;

    switch (variant) {
        case 'horizontal':
            return (
                <BottomNavNormal border flow="horizontal" {...other}>
                    <BottomNavItem icon="envelope" text="Label" />
                    <BottomNavItem icon="chart-pie" text="Label" selected />
                    <BottomNavItem icon="gear" text="Label" />
                    <BottomNavItem icon="more-horizontal" text="Label" />
                </BottomNavNormal>
            );
        case 'vertical':
        default:
            return (
                <BottomNavNormal border flow="vertical" {...other}>
                    <BottomNavItem icon="envelope" text="Label" />
                    <BottomNavItem icon="chart-pie" text="Label" selected />
                    <BottomNavItem icon="gear" text="Label" />
                    <BottomNavItem icon="more-vertical" text="Label" />
                </BottomNavNormal>
            );
    }
}


BottomNavDemo.options = options;
BottomNavDemo.states = states;
BottomNavDemo.variants = variants;
BottomNavDemo.defaultOptions = defaults;
BottomNavDemo.modifiers = modifiers;

export default BottomNavDemo;

