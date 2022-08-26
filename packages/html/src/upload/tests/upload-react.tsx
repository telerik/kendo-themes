import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    #test-area section {
        max-width: 400px;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <div className="k-widget k-upload">
                    <div className="k-dropzone">
                        <Button className="k-upload-button">Select files...</Button>
                        <em className="k-dropzone-hint k-hidden">Drop files here to upload</em><strong className="k-upload-status k-upload-status-total"><Icon name="upload"></Icon>Uploading...</strong>
                    </div>

                    <ul className="k-upload-files k-reset">
                        <li className="k-file k-file-invalid">
                            <div className="k-file-single">
                                <div className="k-progressbar k-hidden"><span className="k-progress" style={{ width: "60%" }}></span></div>
                                <span className="k-file-invalid-group-wrapper"><Icon className="k-file-group" name="file-image"></Icon><span className="k-file-state"></span></span>
                                <span className="k-file-name-size-wrapper">
                                    <span className="k-file-name k-file-name-invalid">Video_File_with_Very_Very_Very_Very_Long_Name.jpg</span>
                                    <span className="k-file-validation-message !k-text-error">File type not allowed.</span>
                                </span>
                                <strong className="k-upload-status">
                                    <Button icon="close" fillMode="flat" className="k-upload-action"></Button>
                                </strong>
                            </div>
                        </li>
                        <li className="k-file k-file-progress">
                            <div className="k-progressbar"><span className="k-progress" style={{ width: "60%" }}></span></div>
                            <span className="k-file-group-wrapper"><Icon className="k-file-group" name="file-pdf"></Icon><span className="k-file-state">uploaded</span></span>
                            <span className="k-file-name-size-wrapper">
                                <span className="k-file-name">Document.txt</span>
                                <span className="k-file-size">225.68 KB</span>
                            </span>
                            <strong className="k-upload-status">
                                <Button icon="close" fillMode="flat" className="k-upload-action"></Button>
                            </strong>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div className="k-widget k-upload">
                    <div className="k-dropzone">
                        <Button className="k-upload-button">Select files...</Button>
                        <em className="k-dropzone-hint k-hidden">Drop files here to upload</em><strong className="k-upload-status k-upload-status-total"><Icon name="check"></Icon>Done</strong>
                    </div>
                    <ul className="k-upload-files k-reset">
                        <li className="k-file k-file-success">
                            <div className="k-file-multiple">
                                <div className="k-progressbar" hidden><span className="k-progress" style={{ width: "0%" }}></span></div>
                                <span className="k-multiple-files-group-wrapper"><Icon className="k-file-group" name="files"></Icon><span className="k-file-state">uploaded</span></span>
                                <span className="k-multiple-files-wrapper">
                                    <span className="k-file-name-size-wrapper"><span className="k-file-name">Video_File_with_Very_Very_Very_Very_Long_Name.png</span><span className="k-file-size">19.61 KB</span></span>
                                    <span className="k-file-name-size-wrapper"> <span className="k-file-name">Video_File_with_Very_Very_Very_VeryLong_Name2.jpg</span><span className="k-file-size">106.43 KB</span> </span>
                                    <span className="k-file-name-size-wrapper"> <span className="k-file-name">Video3.png</span><span className="k-file-size">24.34 KB</span> </span>
                                    <span className="k-file-name-size-wrapper"> <span className="k-file-name">Video4.png</span><span className="k-file-size">19.85 KB</span> </span>
                                    <span className="k-file-information k-hidden">Total: 4 files, 170.22 KB</span><span className="k-file-validation-message !k-text-success">4 File(s) uploaded successfully.</span>
                                </span>
                                <strong className="k-upload-status">
                                    <Button icon="close" fillMode="flat" className="k-upload-action"></Button>
                                </strong>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </>
);
