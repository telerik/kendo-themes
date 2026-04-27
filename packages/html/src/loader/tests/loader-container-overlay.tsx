import { LoaderContainerNormal } from '../../loader';


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
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Panel</span>
            <span>No Panel</span>

            <span className="example">
                <LoaderContainerNormal size={'large'} panel={true} />
            </span>

            <span className="example">
                <LoaderContainerNormal size={'large'} />
            </span>

        </div>
    </>
);
