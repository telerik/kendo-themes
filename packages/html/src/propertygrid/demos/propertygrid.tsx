import { PropertyGrid } from '../propertygrid.spec';
import { PropertyGridNormal } from '../templates/propertygrid-normal';
import { KendoGridProps } from '../../grid';
import { Button } from '../../button';
import { Splitter, SplitterPane } from '../../splitter';

const options = PropertyGrid.options;
const states = PropertyGrid.states;
const defaults = {
  ...PropertyGrid.defaultOptions,
  variant: 'normal',
};

const variants = [
    {
        name: 'normal',
        title: 'Normal',
    },
    {
        name: 'preview',
        title: 'With Preview',
    }
];
const modifiers = [];

export const PropertygridDemo = (
    props: KendoGridProps & { variant?: (typeof variants)[number]['name'] }
) => {

    const { variant, ...other } = { ...defaults, ...props };


    switch (variant) {
        case 'preview':
            return (
                <Splitter panes={[
                    <SplitterPane className='k-text-center k-mt-24' scrollable flexBasis="215px" key="pane-1">
                        <Button icon="star">Button</Button>
                    </SplitterPane>,
                    <SplitterPane scrollable key="pane-2">
                        <PropertyGridNormal style={{ height: "auto" }} {...other} />
                    </SplitterPane>
                ]} />
            );
        case 'normal':
        default:
            return (
                <PropertyGridNormal style={{ height: "auto" }} {...other} />
            );
    }
}


PropertygridDemo.options = options;
PropertygridDemo.states = states;
PropertygridDemo.variants = variants;
PropertygridDemo.defaultOptions = defaults;
PropertygridDemo.modifiers = modifiers;

export default PropertygridDemo;

