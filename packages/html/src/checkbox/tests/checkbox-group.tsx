import { CheckboxGroup, CheckboxItem, CheckboxLabel, CheckboxNormal } from '../../checkbox';

const styles = `
    #test-area {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span>Normal - vertical</span>
            <span>With Label - vertical</span>
            <CheckboxGroup>
                <CheckboxItem>
                    <CheckboxNormal/>
                </CheckboxItem>
                <CheckboxItem>
                    <CheckboxNormal/>
                </CheckboxItem>
                <CheckboxItem>
                    <CheckboxNormal/>
                </CheckboxItem>
            </CheckboxGroup>
            <CheckboxGroup>
                <CheckboxItem>
                    <CheckboxLabel id="ch1-vert">Option one</CheckboxLabel>
                </CheckboxItem>
                <CheckboxItem>
                    <CheckboxLabel id="ch2-vert">Option two</CheckboxLabel>
                </CheckboxItem>
                <CheckboxItem>
                    <CheckboxLabel id="ch3-vert">Option three</CheckboxLabel>
                </CheckboxItem>
            </CheckboxGroup>
            <span>Normal - horizontal</span>
            <span>With Label - horizontal</span>
            <CheckboxGroup layout="horizontal">
                <CheckboxItem>
                    <CheckboxNormal/>
                </CheckboxItem>
                <CheckboxItem>
                    <CheckboxNormal/>
                </CheckboxItem>
                <CheckboxItem>
                    <CheckboxNormal/>
                </CheckboxItem>
            </CheckboxGroup>
            <CheckboxGroup layout="horizontal">
                <CheckboxItem>
                    <CheckboxLabel id="ch1-hor">Option one</CheckboxLabel>
                </CheckboxItem>
                <CheckboxItem>
                    <CheckboxLabel id="ch2-hor">Option two</CheckboxLabel>
                </CheckboxItem>
                <CheckboxItem>
                    <CheckboxLabel id="ch3-hor">Option three</CheckboxLabel>
                </CheckboxItem>
            </CheckboxGroup>
        </div>
    </>
);
