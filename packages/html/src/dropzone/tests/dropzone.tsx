import { Dropzone } from '../../dropzone';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <p>External dropzone</p>
                <Dropzone />
            </section>

            <section>
                {/* Hover dragging files */}
                <p>External dropzone - hover dragging files</p>
                <Dropzone hover />
            </section>

            <section>
                {/* Hight set */}
                <p>External dropzone</p>
                <Dropzone style={{ height: "400px" }} />
            </section>

        </div>
    </>
);
