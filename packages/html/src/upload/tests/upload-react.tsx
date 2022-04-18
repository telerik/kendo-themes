import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { ActionButtons } from '../../action-buttons';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    #test-area section {
        max-width: 400px;
    }
`;

const progressStyle = {
    width: '100%',
    transition: "opacity 0.5s ease-in-out 0s",
};

const progress70Style = {
    width: "70%",
    transition: "opacity 0.5s ease-in-out 0s",
};

const progress17Style = {
    width: "17%",
    transition: "opacity 0.5s ease-in-out 0s",
};

const progress0Style = {
    width: "0%",
    transition: "opacity 0.5s ease-in-out 0s",
};


root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <section>
                <div className="k-widget k-upload k-header">
                    <div className="k-dropzone">
                        <Button className="k-upload-button">Select files...</Button>
                        <div className="k-upload-status k-upload-status-total"><Icon name="loading"></Icon>Uploading...</div>
                    </div>
                    <ul className="k-upload-files k-reset">
                        <li className="k-file k-file-invalid">
                            <div className="k-file-single">
                                <span className="k-progress" style={progress0Style}></span>
                                <span className="k-file-invalid-extension-wrapper">
                                    <span className="k-file-invalid-icon">!</span>
                                    <span className="k-file-state"></span>
                                </span>
                                <span className="k-file-name-size-wrapper">
                                    <span className="k-file-name k-file-name-invalid">Video_File_with_Very_Very_Very_Very_Long_Name.psd</span>
                                    <span className="k-file-validation-message">File type not allowed.</span>
                                </span>
                                <strong className="k-upload-status">
                                    <Button fillMode="flat" className="k-upload-action" icon="close"></Button>
                                </strong>
                            </div>
                        </li>
                        <li className="k-file k-file-progress">
                            <div className="k-file-single">
                                <span className="k-progress" style={progress70Style}></span>
                                <span className="k-file-extension-wrapper">
                                    <span className="k-file-extension">mkv</span>
                                    <span className="k-file-state"></span>
                                </span>
                                <span className="k-file-name-size-wrapper">
                                    <span className="k-file-name">Document.mkv</span>
                                    <span className="k-file-size">156.33 MB</span>
                                </span>
                                <strong className="k-upload-status">
                                    <span className="k-upload-pct">70%</span>
                                    <Button fillMode="flat" className="k-upload-action" icon="cancel"></Button>
                                </strong>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div className="k-widget k-upload k-header">
                    <div className="k-dropzone">
                        <Button className="k-upload-button">Select files...</Button>
                        <div className="k-upload-status k-upload-status-total"><Icon name="check"></Icon>Done</div>
                    </div>
                    <ul className="k-upload-files k-reset">
                        <li className="k-file k-file-success">
                            <div className="k-file-single">
                                <span className="k-progress" style={progressStyle}></span>
                                <span className="k-file-extension-wrapper">
                                    <span className="k-file-extension">png</span>
                                    <span className="k-file-state"></span>
                                </span>
                                <span className="k-file-name-size-wrapper">
                                    <span className="k-file-name">Image1_With_Very_Very_Very_Very_Long_Name.png</span>
                                    <span className="k-file-size">24.34 KB</span>
                                </span>
                                <strong className="k-upload-status">
                                    <Button fillMode="flat" className="k-upload-action" icon="close"></Button>
                                </strong>
                            </div>
                        </li>
                        <li className="k-file k-file-success">
                            <div className="k-file-single">
                                <span className="k-progress" style={progressStyle}></span>
                                <span className="k-file-extension-wrapper">
                                    <span className="k-file-extension">png</span>
                                    <span className="k-file-state"></span>
                                </span>
                                <span className="k-file-name-size-wrapper">
                                    <span className="k-file-name">Image2.png</span>
                                    <span className="k-file-size">19.85 KB</span>
                                </span>
                                <strong className="k-upload-status">
                                    <Button fillMode="flat" className="k-upload-action" icon="close"></Button>
                                </strong>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div className="k-widget k-upload k-header">
                    <div className="k-dropzone">
                        <Button className="k-upload-button">Select files...</Button>
                        <div className="k-dropzone-hint">Drop files here to upload</div>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-upload k-header">
                    <div className="k-dropzone k-dropzone-active k-dropzone-hovered">
                        <Button className="k-upload-button">Select files...</Button>
                        <div className="k-dropzone-hint">Drop files here to upload</div>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-upload k-header k-state-disabled">
                    <div className="k-dropzone">
                        <Button className="k-upload-button">Select files...</Button>
                        <div className="k-dropzone-hint">Drop files here to upload</div>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-upload k-header">
                    <div className="k-dropzone">
                        <Button className="k-upload-button">Select files...</Button>
                        <div className="k-upload-status k-upload-status-total"><Icon name="check"></Icon>Done</div>
                    </div>
                    <ul className="k-upload-files k-reset">
                        <li className="k-file k-file-success">
                            <div className="k-file-multiple">
                                <span className="k-progress" style={progressStyle}></span>
                                <span className="k-multiple-files-extension-wrapper">
                                    <span className="k-file-state"></span>
                                </span>
                                <span className="k-file-name-size-wrapper">
                                    <span className="k-file-name">Video_File_with_Very_Very_Very_Very_Long_Name.jpg</span>
                                    <span className="k-file-name">Video_File_with_Very_Very_Very_Very_Long_Name2.png</span>
                                    <span className="k-file-name">Video3.png</span>
                                    <span className="k-file-name">Video4.jpg</span>
                                    <span className="k-file-information">Total: 4 files, 152.21 KB</span>
                                </span>
                                <strong className="k-upload-status">
                                    <Button fillMode="flat" className="k-upload-action" icon="close"></Button>
                                </strong>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div className="k-widget k-upload k-header">
                    <div className="k-dropzone">
                        <Button className="k-upload-button">Select files...</Button>
                        <div className="k-upload-status k-upload-status-total"><Icon name="loading"></Icon>Uploading...</div>
                    </div>
                    <ul className="k-upload-files k-reset">
                        <li className="k-file k-file-progress">
                            <div className="k-file-multiple">
                                <span className="k-progress" style={progress17Style}></span>
                                <span className="k-multiple-files-extension-wrapper">
                                    <span className="k-file-state"></span>
                                </span>
                                <span className="k-file-name-size-wrapper">
                                    <span className="k-file-name">Image_With_Very_Very_Very_Very_Very_Long_Name1.pdf</span>
                                    <span className="k-file-name">Image_With_Very_Very_Very_Very_Very_Long_Name2.pdf</span>
                                    <span className="k-file-name">Image3.pdf</span>
                                    <span className="k-file-name">Image4.jpg</span>
                                    <span className="k-file-information">Total: 4 files, 1.35 MB</span>
                                </span>
                                <strong className="k-upload-status">
                                    <span className="k-upload-pct">17%</span>
                                    <Button fillMode="flat" className="k-upload-action" icon="cancel"></Button>
                                </strong>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div className="k-widget k-upload k-header">
                    <div className="k-dropzone">
                        <Button className="k-upload-button">Select files...</Button>
                    </div>
                    <ul className="k-upload-files k-reset">
                        <li className="k-file k-file-invalid">
                            <div className="k-file-multiple">
                                <span className="k-progress" style={progress0Style}></span>
                                <span className="k-multiple-files-invalid-extension-wrapper">
                                    <span className="k-file-invalid-icon">!</span>
                                    <span className="k-file-state"></span>
                                </span>
                                <span className="k-file-name-size-wrapper">
                                    <span className="k-file-name">Movie_With_Very_Very_Very_Very_Very_Long_Name1.png</span>
                                    <span className="k-file-name">Movie2.jpg</span>
                                    <span className="k-file-name k-file-name-invalid">Image1.mkv</span>
                                    <span className="k-file-name k-file-name-invalid">Image2.mkv</span>
                                    <span className="k-file-validation-message">Invalid file(s). Please check file upload requirements.</span>
                                </span>
                                <strong className="k-upload-status">
                                    <Button fillMode="flat" className="k-upload-action" icon="close"></Button>
                                </strong>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div className="k-widget k-upload k-header">
                    <div className="k-dropzone">
                        <Button className="k-upload-button">Select files...</Button>
                        <div className="k-dropzone-hint">Drop files here to upload</div>
                    </div>
                    <ul className="k-upload-files k-reset">
                        <li className="k-file">
                            <div className="k-file-single">
                                <span className="k-progress" style={progress0Style}></span>
                                <span className="k-file-extension-wrapper">
                                    <span className="k-file-extension">png</span>
                                    <span className="k-file-state"></span>
                                </span>
                                <span className="k-file-name-size-wrapper">
                                    <span className="k-file-name">Image_With_Very_Very_Very_Very_Very_Long_Name1.png</span>
                                    <span className="k-file-size">51.23 KB</span>
                                </span>
                                <strong className="k-upload-status">
                                    <Button fillMode="flat" className="k-upload-action" icon="close"></Button>
                                </strong>
                            </div>
                        </li>
                        <li className="k-file">
                            <div className="k-file-single">
                                <span className="k-progress" style={progress0Style}></span>
                                <span className="k-file-extension-wrapper">
                                    <span className="k-file-extension">jpg</span>
                                    <span className="k-file-state"></span>
                                </span>
                                <span className="k-file-name-size-wrapper">
                                    <span className="k-file-name">Image_With_Very_Very_Very_Very_Very_Long_Name2.jpg</span>
                                    <span className="k-file-size">106.43 KB</span>
                                </span>
                                <strong className="k-upload-status">
                                    <Button fillMode="flat" className="k-upload-action" icon="close"></Button>
                                </strong>
                            </div>
                        </li>
                    </ul>
                    <ActionButtons alignment="end">
                        <Button className="k-clear-selected">Clear</Button>
                        <Button themeColor="primary" className="k-upload-selected">Upload</Button>
                    </ActionButtons>
                </div>
            </section>
        </div>
    </>
);
