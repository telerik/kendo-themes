import { DropzoneNormal } from '../templates/dropzone-normal';
import { DropzoneWithNote } from '../templates/dropzone-with-note';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <p>External dropzone Empty</p>
                <DropzoneNormal hint={false} />
            </section>

            <section>
                <p>External dropzone with only Hint</p>
                <DropzoneNormal />
            </section>

            <section>
                <p>External dropzone with only Note</p>
                <DropzoneWithNote hint={false} />
            </section>

            <section>
                <p>External dropzone with Hind & Note</p>
                <DropzoneWithNote />
            </section>
        </div>
    </>
);
