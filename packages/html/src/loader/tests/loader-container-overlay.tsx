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
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span></span>
            <span className="col">Dark</span>
            <span className="col">Light</span>


            <span>Panel</span>
            <span className="example">
                <LoaderContainerNormal size={'large'} panel={true} />
            </span>

            <span className="example">
                <LoaderContainerNormal size={'large'} overlay={'light'} panel={true} />
            </span>

            <span>No Panel</span>
            <span className="example">
                <LoaderContainerNormal size={'large'}/>
            </span>

            <span className="example">
                <LoaderContainerNormal size={'large'} overlay={'light'} />
            </span>

        </div>
    </>
);
