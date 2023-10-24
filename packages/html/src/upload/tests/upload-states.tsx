import { Upload, UploadNormal } from '../../upload';


const styles = `
    #test-area {
        justify-items: start;
    }

    section {
        display: flex;
        flex-direction: column;
        width: 480px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            {[ 'normal', ...Upload.states ].map((state) => (
                <section>
                    <span>{state}</span>
                    <UploadNormal status="upload" {...{ [state]: true }}/>
                </section>
            ))}
        </div>
    </>
);
