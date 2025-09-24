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

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <section>
                <div>
                    <ButtonGroup>
                        <Button className="k-group-start">normal</Button>
                        {Button.states.filter(state => state !== 'generating').map((state) => (
                            <Button {...{ [state]: true }}>{state}</Button>
                        ))}
                        <Button className="k-group-end" selected focus>selected + focus</Button>
                    </ButtonGroup>
                </div>
                <div>
                    <ButtonGroup fillMode="outline">
                        <Button fillMode="outline" className="k-group-start">normal</Button>
                        {Button.states.filter(state => state !== 'generating').map((state) => (
                            <Button fillMode="outline" {...{ [state]: true }}>{state}</Button>
                        ))}
                        <Button fillMode="outline" className="k-group-end" selected focus>selected + focus</Button>
                    </ButtonGroup>
                </div>
                <div>
                    <ButtonGroup fillMode="flat">
                        <Button fillMode="flat" className="k-group-start">normal</Button>
                        {Button.states.filter(state => state !== 'generating').map((state) => (
                            <Button fillMode="flat" {...{ [state]: true }}>{state}</Button>
                        ))}
                        <Button fillMode="flat" className="k-group-end" selected focus>selected + focus</Button>
                    </ButtonGroup>
                </div>
            </section>

            <section style={{ backgroundColor: "#787878", color: "#fff" }}>
                <div>
                    <ButtonGroup>
                        <Button className="k-group-start">normal</Button>
                        {Button.states.filter(state => state !== 'generating').map((state) => (
                            <Button {...{ [state]: true }}>{state}</Button>
                        ))}
                        <Button className="k-group-end" selected focus>selected + focus</Button>
                    </ButtonGroup>
                </div>
                <div>
                    <ButtonGroup fillMode="outline">
                        <Button fillMode="outline" className="k-group-start">normal</Button>
                        {Button.states.filter(state => state !== 'generating').map((state) => (
                            <Button fillMode="outline" {...{ [state]: true }}>{state}</Button>
                        ))}
                        <Button fillMode="outline" className="k-group-end" selected focus>selected + focus</Button>
                    </ButtonGroup>
                </div>
                <div>
                    <ButtonGroup fillMode="flat">
                        <Button fillMode="flat" className="k-group-start">normal</Button>
                        {Button.states.filter(state => state !== 'generating').map((state) => (
                            <Button fillMode="flat" {...{ [state]: true }}>{state}</Button>
                        ))}
                        <Button fillMode="flat" className="k-group-end" selected focus>selected + focus</Button>
                    </ButtonGroup>
                </div>
            </section>

            <section style={{ color: "#ff00ff" }}>
                <div>
                    <ButtonGroup>
                        <Button className="k-group-start">normal</Button>
                        {Button.states.filter(state => state !== 'generating').map((state) => (
                            <Button {...{ [state]: true }}>{state}</Button>
                        ))}
                        <Button className="k-group-end" selected focus>selected + focus</Button>
                    </ButtonGroup>
                </div>
                <div>
                    <ButtonGroup fillMode="outline">
                        <Button fillMode="outline" className="k-group-start">normal</Button>
                        {Button.states.filter(state => state !== 'generating').map((state) => (
                            <Button fillMode="outline" {...{ [state]: true }}>{state}</Button>
                        ))}
                        <Button fillMode="outline" className="k-group-end" selected focus>selected + focus</Button>
                    </ButtonGroup>
                </div>
                <div>
                    <ButtonGroup fillMode="flat">
                        <Button fillMode="flat" className="k-group-start">normal</Button>
                        {Button.states.filter(state => state !== 'generating').map((state) => (
                            <Button fillMode="flat" {...{ [state]: true }}>{state}</Button>
                        ))}
                        <Button fillMode="flat" className="k-group-end" selected focus>selected + focus</Button>
                    </ButtonGroup>
                </div>
            </section>
        </div>

    </>
);
