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
            <span>loading image</span>
            <section className="loading-container"><span className="k-loading-image"></span></section>
        </div>
    </>
);
