import { LoaderContainer } from '../loader-container.spec';
import { LoaderContainerNormal } from '../templates/loader-container-normal';


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

            {LoaderContainer.options.themeColor.map((themeColor) => (
                <>
                    <span className="example">
                        <span>{`${themeColor}`}</span>
                        <LoaderContainerNormal size={'large'} themeColor={themeColor} panel={true} />
                    </span>
                </>
            ))}
        </div>
    </>
);
