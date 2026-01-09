import { Splitter, KendoSplitterProps } from '../splitter.spec';
import { SplitterPane } from '../splitter-pane';

const options = Splitter.options;
const states = Splitter.states;
const defaults = {
  ...Splitter.defaultOptions,
  variant: 'horizontal',
  firstPaneProps: true,
  secondPaneProps: true,
};

const variants = [
    {
        name: 'horizontal',
        title: 'Horizontal',
    },
    {
        name: 'vertical',
        title: 'Vertical',
    },
];

const modifiers = [
    {
        name: 'firstPaneProps',
        title: 'Collapsible Left',
    },
    {
        name: 'secondPaneProps',
        title: 'Collapsible Right',
    },
];

export const SplitterDemo = (
    props: KendoSplitterProps & { variant?: (typeof variants)[number]['name'] } & {
        modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
    }
) => {
    const { variant, modifiers: mods, ...other } = { ...defaults, ...props };

    const getDefaultProps = (isCollapsible: boolean) => ({
        collapsible: isCollapsible,
        content: isCollapsible ? "Resizable and collapsible" : "Resizable only"
    });
    
    let firstPaneProps = getDefaultProps(true);
    let secondPaneProps = getDefaultProps(true);

    const paneStyles = { display: "flex", justifyContent: "center", alignItems: "center" };
    
    Object.keys(mods || {}).forEach((modifier) => {
        const isCollapsible = mods?.[modifier];
    
        switch (modifier) {
            case 'secondPaneProps':
                secondPaneProps = getDefaultProps(!!isCollapsible);
                break;
            case 'firstPaneProps':
                firstPaneProps = getDefaultProps(!!isCollapsible);
                break;
            default:
                break;
        }
    });

    switch (variant) {
        case 'vertical':
            return (
                <Splitter style={{ height: "238px" }} {...other} orientation="vertical">
                    <SplitterPane {...firstPaneProps} flexBasis="50%" style={paneStyles}>
                        <p>{firstPaneProps.content}</p>
                    </SplitterPane>
                    <SplitterPane {...secondPaneProps} flexBasis="50%" style={paneStyles}>
                        <p>{secondPaneProps.content}</p>
                    </SplitterPane>
                </Splitter>
            );
        case 'horizontal':
        default:
            return (
                <Splitter style={{ height: "238px" }} {...other} orientation="horizontal">
                    <SplitterPane {...firstPaneProps} flexBasis="50%" style={paneStyles}>
                        <p>{firstPaneProps.content}</p>
                    </SplitterPane>
                    <SplitterPane {...secondPaneProps} flexBasis="50%" style={paneStyles}>
                        <p>{secondPaneProps.content}</p>
                    </SplitterPane>
                </Splitter>
            );
    }
}


SplitterDemo.options = options;
SplitterDemo.states = states;
SplitterDemo.variants = variants;
SplitterDemo.defaultOptions = defaults;
SplitterDemo.modifiers = modifiers;

export default SplitterDemo;

