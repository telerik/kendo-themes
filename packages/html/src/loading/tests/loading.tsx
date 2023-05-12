import { Icon } from '../../icon';


const styles = `
    #test-area {
        grid-template-columns: 100px 1fr;
    }
    .loading-container {
        height: 300px;
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span>icon</span>
            <section><Icon icon="loading" type="font" /></section>

            <span>loading image</span>
            <section className="loading-container"><span className="k-loading-image"></span></section>
        </div>
    </>
);
