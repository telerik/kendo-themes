import { LoaderContainer, LoaderContainerNormal } from '..';


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

            {LoaderContainer.options.themeColor.map((color) => (
                <>
                    <span className="example">
                        <span>{color}</span>
                        <LoaderContainerNormal size={'large'} themeColor={color} panel={true} />
                    </span>
                </>
            ))}
        </div>
    </>
);
