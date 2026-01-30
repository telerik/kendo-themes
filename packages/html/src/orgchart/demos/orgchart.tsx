import { Orgchart, KendoOrgchartProps } from '../orgchart.spec';
import { OrgchartNode } from '../orgchart-node';
import { OrgchartGroup } from '../orgchart-group';
import { OrgchartNodeGroup } from '../orgchart-node-group';
import { OrgchartVertical } from '../templates/orgchart-vertical';
import { OrgchartGroupVertical } from '../templates/orgchart-group-vertical';

const options = Orgchart.options;
const states = Orgchart.states;
const defaults = {
  ...Orgchart.defaultOptions,
  variant: 'node',
};
const variants = [
    {
        name: 'node',
        title: 'Nodes',
    },
    {
        name: 'group',
        title: 'Group Field',
    },
];
const modifiers = [];

export const OrgchartDemo = (props: KendoOrgchartProps & { variant?: (typeof variants)[number]['name'] }) => {
    const { variant, ...other } = props;

    const nodeProps = {
        title: "Name",
        subtitle: "Position",
        avatar: "https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg",
        avatarType: "image",
        details: true,
        color: "#126CA0"
    }

    switch (variant) {
        case 'group':
            return (
                <OrgchartGroupVertical width="100%" height="360px" {...other}>
                    <OrgchartGroup
                        orientation="vertical"
                        justifyContent="center"
                    >
                        <OrgchartNodeGroup title="Chief Officers" subtitle="department" orientation="vertical" lineBottom button>
                            <OrgchartNode {...nodeProps}></OrgchartNode>
                            <OrgchartNode {...nodeProps}></OrgchartNode>
                        </OrgchartNodeGroup>
                    </OrgchartGroup>
                </OrgchartGroupVertical >
            );
        case 'node':
        default:
            return (
                <OrgchartVertical width="100%" height="330px" {...other}>
                    <OrgchartGroup
                        orientation="vertical"
                        justifyContent="center"
                        nodes={
                            <>
                                <OrgchartNode {...nodeProps} lineBottom ></OrgchartNode>
                                <OrgchartNode {...nodeProps} lineBottom></OrgchartNode>
                                <OrgchartNode {...nodeProps} lineBottom button></OrgchartNode>
                            </>
                        }
                    />
                </OrgchartVertical>
            );
    }
}


OrgchartDemo.options = options;
OrgchartDemo.states = states;
OrgchartDemo.variants = variants;
OrgchartDemo.defaultOptions = defaults;
OrgchartDemo.modifiers = modifiers;

export default OrgchartDemo;

