import { Button } from '../../button/button.spec';
import { ButtonGroup } from '../../button-group/button-group.spec';
import { Badge } from '../../badge/badge.spec';
import { Textbox } from '../../textbox/textbox.spec';

import { Toolbar } from '../../toolbar/toolbar.spec';
import { ToolbarSeparator } from '../../toolbar/toolbar-separator';
import { ToolbarScrollable } from '../../toolbar/templates/toolbar-scrollable';

const style = `
    #test-area {
        max-width: 1240px;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid">
            <span>Focused Buttons and Buttons with Badge in Scrollable Toolbar</span>

            { Toolbar.options.size.map((size) => (
                <>
                    <span className="k-colspan-all k-col-span-full">{`${size}`}</span>
                    <section className="k-colspan-all k-col-span-full">
                        <ToolbarScrollable size={size}>
                            <Button size={size} icon="bold" focus></Button>
                            <Button size={size} focus>Button</Button>
                            <ToolbarSeparator></ToolbarSeparator>
                            <ButtonGroup>
                                <Button className="k-group-start" size={size} icon="align-left">Left</Button>
                                <Button focus size={size} icon="align-center">Center</Button>
                                <Button className="k-group-end" size={size} icon="align-right">Right</Button>
                            </ButtonGroup>
                            <ToolbarSeparator></ToolbarSeparator>
                            <Button size={size} themeColor="primary">Primary</Button>
                             <Button size={size} themeColor="primary" focus>Focus</Button>
                            <ToolbarSeparator></ToolbarSeparator>
                            <div className="k-badge-container">
                                <Button icon="filter" size={size}>Filter</Button>
                                <Badge position="edge" rounded="full" align="top-end" size={size} cutoutBorder></Badge>
                                </div>
                            <ToolbarSeparator></ToolbarSeparator>
                            <Textbox placeholder="placeholder..." size={size} focus />
                        </ToolbarScrollable>
                    </section>
                </>
            ))}

        </div>
    </>
);
