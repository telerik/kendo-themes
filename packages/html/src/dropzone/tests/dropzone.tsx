import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <p>External dropzone</p>
                <div className="k-external-dropzone">
                    <div className="k-dropzone-inner">
                        <Icon icon="upload" className="k-dropzone-icon" size="xxxlarge" />
                        <span className="k-dropzone-hint">Drag and drop files here to upload</span>
                        <span className="k-dropzone-note"> Only JPEG, PNG and SVG files are allowed.</span>
                    </div>
                </div>
            </section>

            <section>
                {/* Hover dragging files */}
                <p>External dropzone - hover dragging files</p>
                <div className="k-external-dropzone k-external-dropzone-hover">
                    <div className="k-dropzone-inner">
                        <Icon icon="upload" className="k-dropzone-icon" size="xxxlarge" />
                        <span className="k-dropzone-hint">Drag and drop files here to upload</span>
                        <span className="k-dropzone-note"> Only JPEG, PNG and SVG files are allowed.</span>
                    </div>
                </div>
            </section>

            <section>
                {/* Hight set */}
                <p>External dropzone</p>
                <div className="k-external-dropzone" style={{ height: "400px" }}>
                    <div className="k-dropzone-inner">
                        <Icon icon="upload" className="k-dropzone-icon" size="xxxlarge" />
                        <span className="k-dropzone-hint">Drag and drop files here to upload</span>
                        <span className="k-dropzone-note"> Only JPEG, PNG and SVG files are allowed.</span>
                    </div>
                </div>
            </section>

        </div>
    </>
);
