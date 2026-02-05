import { ExpansionPanel, KendoExpansionPanelProps } from '../expansion-panel.spec';
import { ExpansionPanelNormal } from '../templates/expansion-panel-normal';
import { ExpansionPanelExpanded } from '../templates/expansion-panel-expanded';

const options = ExpansionPanel.options;
const states = ExpansionPanel.states;
const defaults = { 
    ...ExpansionPanel.defaultOptions,
    variant: 'normal',
};

const variants = [
    {
        name: 'normal',
        title: 'Normal',
    },
    {
        name: 'expanded',
        title: 'Expanded',
    },
];
const modifiers = [];

export const ExpansionPanelDemo = (props: KendoExpansionPanelProps & { variant?: (typeof variants)[number]['name'] }) => {

    const { variant, ...other } = { ...defaults, ...props };
    return (
        <div style={other.style ? other.style : { width: "467px", height: "265" }} >
            {variant === 'expanded' ?
                (
                    <ExpansionPanelExpanded title="Title" children={[
                        <span>
                            This is just a quick example text to build on the Expansion Panel to make up the bulk of the panel content.
                        </span>
                    ]}
                        {...other}
                        subtitle="Subtitle" />
                ) : (
                    <ExpansionPanelNormal title="Title" subtitle="Subtitle" {...other} />
                )
            }
            <ExpansionPanelNormal title="Title" subtitle="Subtitle" {...other} />
            <ExpansionPanelNormal title="Title" subtitle="Subtitle" {...other} />
            <ExpansionPanelNormal title="Title" subtitle="Subtitle" {...other} />
        </div>
    );
}


ExpansionPanelDemo.options = options;
ExpansionPanelDemo.states = states;
ExpansionPanelDemo.variants = variants;
ExpansionPanelDemo.defaultOptions = defaults;
ExpansionPanelDemo.modifiers = modifiers;

export default ExpansionPanelDemo;

