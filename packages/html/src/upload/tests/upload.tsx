import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { ActionButtons } from '../../action-buttons';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <section>
                <div className="k-widget k-upload k-upload-async">
                    <div className="k-dropzone">
                        <Button className="k-upload-button">Select files...</Button>
                        <em className="k-dropzone-hint k-hidden">Drop files here to upload</em><strong className="k-upload-status k-upload-status-total"><Icon name="upload"></Icon>Uploading...</strong>
                    </div>

                    <ul className="k-upload-files k-reset">
                        <li className="k-file k-file-invalid">
                            <div className="k-progressbar k-hidden"><span className="k-progress" style={{ width: "60%" }}></span></div>
                            <span className="k-file-invalid-group-wrapper"><Icon className="k-file-group" name="file-image"></Icon><span className="k-file-state"></span></span>
                            <span className="k-file-name-size-wrapper">
                                <span className="k-file-name k-file-name-invalid">Video_File_with_Very_Very_Very_Very_Long_Name.jpg</span>
                                <span className="k-file-validation-message !k-text-error">File type not allowed.</span>
                            </span>
                            <strong className="k-upload-status">
                                <Button icon="close" fillMode="flat" className="k-upload-action"></Button>
                            </strong>
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
                <div className="k-widget k-upload k-upload-async">
                    <div className="k-dropzone">
                        <Button className="k-upload-button">Select files...</Button>
                        <em className="k-dropzone-hint k-hidden">Drop files here to upload</em><strong className="k-upload-status k-upload-status-total"><Icon name="check"></Icon>Done</strong>
                    </div>
                    <ul className="k-upload-files k-reset">
                        <li className="k-file k-file-success">
                            <div className="k-progressbar" hidden><span className="k-progress" style={{ width: "0%" }}></span></div>
                            <span className="k-file-group-wrapper"><Icon className="k-file-group" name="file-image"></Icon><span className="k-file-state">uploaded</span></span>
                            <span className="k-file-name-size-wrapper">
                                <span className="k-file-name">Image1_With_Very_Very_Very_Very_Long_Name.png</span><span className="k-file-size k-hidden">24.34 KB</span>
                                <span className="k-file-validation-message !k-text-success">File(s) uploaded successfully.</span>
                            </span>
                            <strong className="k-upload-status">
                                <Button icon="close" fillMode="flat" className="k-upload-action"></Button>
                            </strong>
                        </li>
                        <li className="k-file k-file-success">
                            <div className="k-progressbar" hidden><span className="k-progress" style={{ width: "0%" }}></span></div>
                            <span className="k-file-group-wrapper"><Icon className="k-file-group" name="file-image"></Icon><span className="k-file-state">uploaded</span></span>
                            <span className="k-file-name-size-wrapper">
                                <span className="k-file-name">Image2.png</span><span className="k-file-size k-hidden">19.85 KB</span>
                                <span className="k-file-validation-message !k-text-success">File(s) uploaded successfully.</span>
                            </span>
                            <strong className="k-upload-status">
                                <Button icon="close" fillMode="flat" className="k-upload-action"></Button>
                            </strong>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div className="k-widget k-upload k-upload-async">
                    <div className="k-dropzone">
                        <Button className="k-upload-button">Select files...</Button>
                        <em className="k-dropzone-hint k-hidden">Drop files here to upload</em><strong className="k-upload-status k-upload-status-total"><Icon name="check"></Icon>Done</strong>
                    </div>
                    <ul className="k-upload-files k-reset">
                        <li className="k-file k-file-success">
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
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div className="k-widget k-upload k-upload-async">
                    <div className="k-dropzone">
                        <Button className="k-upload-button">Select files...</Button>
                        <em className="k-dropzone-hint k-hidden">Drop files here to upload</em><strong className="k-upload-status k-upload-status-total"><Icon name="check"></Icon>Done</strong>
                    </div>
                    <ul className="k-upload-files k-reset">
                        <li className="k-file k-file-progress">
                            <div className="k-progressbar"><span className="k-progress" style={{ width: "70%" }}></span></div>
                            <span className="k-multiple-files-group-wrapper"><Icon className="k-file-group" name="files"></Icon><span className="k-file-state">uploaded</span></span>
                            <span className="k-multiple-files-wrapper">
                                <span className="k-file-name-size-wrapper"><span className="k-file-name">Video_File_with_Very_Very_Very_Very_Long_Name.png</span><span className="k-file-size">19.61 KB</span></span>
                                <span className="k-file-name-size-wrapper"> <span className="k-file-name">Video_File_with_Very_Very_Very_VeryLong_Name2.jpg</span><span className="k-file-size">106.43 KB</span> </span>
                                <span className="k-file-name-size-wrapper"> <span className="k-file-name">Video3.png</span><span className="k-file-size">24.34 KB</span> </span>
                                <span className="k-file-name-size-wrapper"> <span className="k-file-name">Video4.png</span><span className="k-file-size">19.85 KB</span> </span>
                                <span className="k-file-information">Total: 4 files, 170.22 KB</span>
                            </span>
                            <strong className="k-upload-status">
                                <Button icon="close" fillMode="flat" className="k-upload-action"></Button>
                            </strong>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div className="k-widget k-upload k-upload-async">
                    <div className="k-dropzone">
                        <Button className="k-upload-button">Select files...</Button>
                        <em className="k-dropzone-hint k-hidden">Drop files here to upload</em><strong className="k-upload-status k-upload-status-total"><Icon className="k-validation-icon" name="warning"></Icon>Done</strong>
                    </div>
                    <ul className="k-upload-files k-reset">
                        <li className="k-file k-file-invalid">
                            <div className="k-progressbar k-hidden"><span className="k-progress" style={{ width: "0%" }}></span></div>
                            <span className="k-multiple-files-invalid-group-wrapper"><Icon className="k-file-group" name="files"></Icon><span className="k-file-state"></span></span>
                            <span className="k-multiple-files-wrapper">
                                <span className="k-file-name-size-wrapper"><span className="k-file-name k-file-name-invalid">Movie_With_Very_Very_Very_Very_Very_Long_Name1.mkv</span><span className="k-file-size">12.61 KB</span></span>
                                <span className="k-file-name-size-wrapper"><span className="k-file-name k-file-name-invalid">Movie2.mkv</span><span className="k-file-size">12.36 KB</span></span>
                                <span className="k-file-name-size-wrapper"><span className="k-file-name">Image1.jpg</span><span className="k-file-size">1.09 MB</span></span>
                                <span className="k-file-name-size-wrapper"><span className="k-file-name">Image2.jpg</span><span className="k-file-size">1.09 MB</span></span>
                                <span className="k-file-validation-message !k-text-error">Invalid file(s). Please check file upload requirements.</span>
                            </span>
                            <strong className="k-upload-status">
                                <Button icon="close" fillMode="flat" className="k-upload-action"></Button>
                            </strong>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div className="k-widget k-upload k-upload-async">
                    <div className="k-dropzone">
                        <Button className="k-upload-button">Select files...</Button>
                        <em className="k-dropzone-hint">Drop files here to upload</em>
                    </div>
                    <ul className="k-upload-files k-reset">
                        <li className="k-file k-toupload">
                            <div className="k-progressbar k-hidden"><span className="k-progress"></span></div>
                            <span className="k-file-group-wrapper"><Icon className="k-file-group" name="file-image"></Icon><span className="k-file-state"></span></span>
                            <span className="k-file-name-size-wrapper"> <span className="k-file-name">Image_With_Very_Very_Very_Very_Very_Long_Name1.png</span><span className="k-file-size">51.23 KB</span> </span>
                            <strong className="k-upload-status">
                                <Button icon="close" fillMode="flat" className="k-upload-action"></Button>
                            </strong>
                        </li>
                        <li className="k-file k-toupload">
                            <div className="k-progressbar k-hidden"><span className="k-progress"></span></div>
                            <span className="k-file-group-wrapper"><Icon className="k-file-group" name="file-image"></Icon><span className="k-file-state"></span></span>
                            <span className="k-file-name-size-wrapper"> <span className="k-file-name">Image2.jpg</span><span className="k-file-size">106.43 KB</span> </span>
                            <strong className="k-upload-status">
                                <Button icon="close" fillMode="flat" className="k-upload-action"></Button>
                            </strong>
                        </li>
                    </ul>
                    <ActionButtons alignment="end">
                        <Button className="k-clear-selected">Clear</Button>
                        <Button themeColor="primary" className="k-upload-selected">Upload</Button>
                    </ActionButtons>
                </div>
            </section>

            <section>
                <div className="k-widget k-upload k-upload-async">
                    <div className="k-dropzone">
                        <Button className="k-upload-button">Select files...</Button>
                        <em className="k-dropzone-hint k-hidden">Drop files here to upload</em><strong className="k-upload-status k-upload-status-total"><Icon name="upload"></Icon>Uploading...</strong>
                    </div>
                    <ul className="k-upload-files k-reset">
                        <li className="k-file k-file-progress">
                            <div className="k-progressbar"><span className="k-progress" style={{ width: "30%" }}></span></div>
                            <span className="k-file-group-wrapper"><Icon className="k-file-group" name="file-video"></Icon><span className="k-file-state">uploading</span></span>
                            <span className="k-file-name-size-wrapper"><span className="k-file-name">Video1.mkv</span><span className="k-file-size">158.97 MB</span></span>
                            <strong className="k-upload-status">
                                <span className="k-upload-pct">30%</span>
                                <Button fillMode="flat" className="k-upload-action" icon="pause-sm"></Button>
                                <Button fillMode="flat" className="k-upload-action" icon="cancel"></Button>
                            </strong>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div className="k-widget k-upload k-upload-async k-upload-empty">
                    <div className="k-dropzone">
                        <Button className="k-upload-button">Select files...</Button>
                        <em className="k-dropzone-hint">Drop files here to upload</em>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-upload k-upload-async k-upload-empty">
                    <div className="k-dropzone k-dropzone-active k-dropzone-hovered">
                        <Button className="k-upload-button">Select files...</Button>
                        <em className="k-dropzone-hint">Drop files here to upload</em>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-upload k-upload-sync k-upload-empty k-disabled">
                    <div className="k-dropzone">
                        <Button className="k-upload-button" disabled>Select files...</Button>
                    </div>
                </div>

            </section>
        </div>
    </>
);
