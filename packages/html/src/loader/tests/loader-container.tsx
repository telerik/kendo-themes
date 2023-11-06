import { LoaderContainer, LoaderContainerNormal } from '../../loader';


const styles = `
    .example {
        width: 100%;
        min-height: 200px;
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span></span>
            <span className="col">Small</span>
            <span className="col">Medium</span>
            <span className="col">Large</span>

            <span>Top</span>
            {LoaderContainer.options.size.map((size) => (
                <span className="example">
                    <LoaderContainerNormal size={size} panel={true} />
                </span>
            ))}

            <span>End</span>
            {LoaderContainer.options.size.map((size) => (
                <span className="example">
                    <LoaderContainerNormal size={size} position={'end'} panel={true} />
                </span>
            ))}

            <span>Start</span>
            {LoaderContainer.options.size.map((size) => (
                <span className="example">
                    <LoaderContainerNormal size={size} position={'start'} panel={true} />
                </span>
            ))}
        </div>
    </>
);
