import { Dropzone } from '../dropzone.spec';
import { DropzoneWithNote } from '../templates/dropzone-with-note';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            { [ "normal", ...Dropzone.states ].map((state) => (
                <section>
                    <p>External dropzone {state}</p>
                    <DropzoneWithNote { ...{ [state]: true }}/>
                </section>
            ))}

            <section>
                <p>External dropzone custom size</p>
                <DropzoneWithNote style={{ height: "350px", width: "400px" }} />
            </section>

        </div>
    </>
);
