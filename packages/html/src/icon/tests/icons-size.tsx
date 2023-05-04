import { Icon } from '..';


const styles = `
    #test-area {
        text-align: center;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-7">
            <span className="k-colspan-7">Sizes Font Icon</span>
            <span>xs</span>
            <span>sm</span>
            <span>md</span>
            <span>lg</span>
            <span>xl</span>
            <span>xxl </span>
            <span>xxxl</span>

            <span>
                <Icon icon="star" size="xsmall" type="font" />
            </span>
            <span>
                <Icon icon="star" size="small" type="font" />
            </span>
            <span>
                <Icon icon="star" size="medium" type="font" />
            </span>
            <span>
                <Icon icon="star" size="large" type="font" />
            </span>
            <span>
                <Icon icon="star" size="xlarge" type="font" />
            </span>
            <span>
                <Icon icon="star" size="xxlarge" type="font" />
            </span>
            <span>
                <Icon icon="star" size="xxxlarge" type="font" />
            </span>

            <span className="k-colspan-7">Sizes SVG Icon</span>
            <span>xs</span>
            <span>sm</span>
            <span>md</span>
            <span>lg</span>
            <span>xl</span>
            <span>xxl </span>
            <span>xxxl</span>

            <span>
                <Icon icon="star" size="xsmall" />
            </span>
            <span>
                <Icon icon="star" size="small" />
            </span>
            <span>
                <Icon icon="star" size="medium" />
            </span>
            <span>
                <Icon icon="star" size="large" />
            </span>
            <span>
                <Icon icon="star" size="xlarge" />
            </span>
            <span>
                <Icon icon="star" size="xxlarge" />
            </span>
            <span>
                <Icon icon="star" size="xxxlarge" />
            </span>
        </div>
    </>
);
