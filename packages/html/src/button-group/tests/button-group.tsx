import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';


const styles = `
    #test-area>section {
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <section>
                <div>
                    <ButtonGroup>
                        <Button className="k-group-start">Button</Button>
                        <Button hover>Hover</Button>
                        <Button focus>Focus</Button>
                        <Button active>Active</Button>
                        <Button selected>Selected</Button>
                        <Button selected focus>Selected + Focus</Button>
                        <Button className="k-group-end" disabled>Disabled</Button>
                    </ButtonGroup>
                </div>
                <div>
                    <ButtonGroup fillMode="outline">
                        <Button className="k-group-start" fillMode="outline">Button</Button>
                        <Button fillMode="outline" hover>Hover</Button>
                        <Button fillMode="outline" focus>Focus</Button>
                        <Button fillMode="outline" active>Active</Button>
                        <Button fillMode="outline" selected>Selected</Button>
                        <Button fillMode="outline" selected focus>Selected + Focus</Button>
                        <Button className="k-group-end" fillMode="outline" disabled>Disabled</Button>
                    </ButtonGroup>
                </div>
                <div>
                    <ButtonGroup fillMode="flat">
                        <Button className="k-group-start" fillMode="flat">Button</Button>
                        <Button fillMode="flat" hover>Hover</Button>
                        <Button fillMode="flat" focus>Focus</Button>
                        <Button fillMode="flat" active>Active</Button>
                        <Button fillMode="flat" selected>Selected</Button>
                        <Button fillMode="flat" selected focus>Selected + Focus</Button>
                        <Button className="k-group-end" fillMode="flat" disabled>Disabled</Button>
                    </ButtonGroup>
                </div>
            </section>

            <section style={{ backgroundColor: "#787878", color: "#fff" }}>
                <div>
                    <ButtonGroup>
                        <Button className="k-group-start">Button</Button>
                        <Button hover>Hover</Button>
                        <Button focus>Focus</Button>
                        <Button active>Active</Button>
                        <Button selected>Selected</Button>
                        <Button selected focus>Selected + Focus</Button>
                        <Button className="k-group-end" disabled>Disabled</Button>
                    </ButtonGroup>
                </div>
                <div>
                    <ButtonGroup fillMode="outline">
                        <Button className="k-group-start" fillMode="outline">Button</Button>
                        <Button fillMode="outline" hover>Hover</Button>
                        <Button fillMode="outline" focus>Focus</Button>
                        <Button fillMode="outline" active>Active</Button>
                        <Button fillMode="outline" selected>Selected</Button>
                        <Button fillMode="outline" selected focus>Selected + Focus</Button>
                        <Button className="k-group-end" fillMode="outline" disabled>Disabled</Button>
                    </ButtonGroup>
                </div>
                <div>
                    <ButtonGroup fillMode="flat">
                        <Button className="k-group-start" fillMode="flat">Button</Button>
                        <Button fillMode="flat" hover>Hover</Button>
                        <Button fillMode="flat" focus>Focus</Button>
                        <Button fillMode="flat" active>Active</Button>
                        <Button fillMode="flat" selected>Selected</Button>
                        <Button fillMode="flat" selected focus>Selected + Focus</Button>
                        <Button className="k-group-end" fillMode="flat" disabled>Disabled</Button>
                    </ButtonGroup>
                </div>
            </section>

            <section style={{ color: "#ff00ff" }}>
                <div>
                    <ButtonGroup>
                        <Button className="k-group-start">Button</Button>
                        <Button hover>Hover</Button>
                        <Button focus>Focus</Button>
                        <Button active>Active</Button>
                        <Button selected>Selected</Button>
                        <Button selected focus>Selected + Focus</Button>
                        <Button className="k-group-end" disabled>Disabled</Button>
                    </ButtonGroup>
                </div>
                <div>
                    <ButtonGroup fillMode="outline">
                        <Button className="k-group-start" fillMode="outline">Button</Button>
                        <Button fillMode="outline" hover>Hover</Button>
                        <Button fillMode="outline" focus>Focus</Button>
                        <Button fillMode="outline" active>Active</Button>
                        <Button fillMode="outline" selected>Selected</Button>
                        <Button fillMode="outline" selected focus>Selected + Focus</Button>
                        <Button className="k-group-end" fillMode="outline" disabled>Disabled</Button>
                    </ButtonGroup>
                </div>
                <div>
                    <ButtonGroup fillMode="flat">
                        <Button className="k-group-start" fillMode="flat">Button</Button>
                        <Button fillMode="flat" hover>Hover</Button>
                        <Button fillMode="flat" focus>Focus</Button>
                        <Button fillMode="flat" active>Active</Button>
                        <Button fillMode="flat" selected>Selected</Button>
                        <Button fillMode="flat" selected focus>Selected + Focus</Button>
                        <Button className="k-group-end" fillMode="flat" disabled>Disabled</Button>
                    </ButtonGroup>
                </div>
            </section>
        </div>

    </>
);
