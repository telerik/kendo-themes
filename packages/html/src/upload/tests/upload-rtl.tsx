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


root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <section>
                <div className="k-widget k-upload" dir="rtl">
                    <div className="k-dropzone">
                        <Button className="k-upload-button">Select files...</Button>
                        <strong className="k-upload-status k-upload-status-total"><Icon name="upload"></Icon> Uploading... </strong>
                        <div className="k-dropzone-hint">Drop files here to upload</div>
                    </div>
                    <ul className="k-upload-files k-reset">
                        <li className="k-file k-file-invalid">
                            <div className="k-file-single">
                                <div className="k-progressbar" style={{ opacity: "0" }}>
                                    <span className="k-progress" style={{ width: "0%" }}></span>
                                </div>
                                <span className="k-file-group-wrapper">
                                    <Icon className="k-file-group" name="file-video"></Icon>
                                </span>
                                <span className="k-file-name-size-wrapper">
                                    <span className="k-file-name">Video_File_with_Very_Very_Very_Very_Long_Name.mkv</span>
                                    <span className="k-file-validation-message !k-text-error">File type not allowed.</span>
                                </span>
                                <div>
                                    <strong className="k-upload-status">
                                        <Button icon="close" fillMode="flat" className="k-upload-action"></Button>
                                    </strong>
                                </div>
                            </div>
                        </li>
                        <li className="k-file k-file-progress">
                            <div className="k-file-single">
                                <div className="k-progressbar" style={{ opacity: "1" }}>
                                    <span className="k-progress" style={{ width: "60%" }}></span>
                                </div>
                                <span className="k-file-group-wrapper">
                                    <Icon className="k-file-group" name="file-image"></Icon>
                                </span>
                                <span className="k-file-name-size-wrapper">
                                    <span className="k-file-name">Document.txt</span>
                                    <span className="k-file-size">106.43 KB</span>
                                </span>
                                <div>
                                    <strong className="k-upload-status">
                                        <span className="k-upload-pct">60%</span>
                                        <Button icon="deny" fillMode="flat" className="k-upload-action"></Button>
                                    </strong>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div className="k-widget k-upload" dir="rtl">
                    <div className="k-dropzone">
                        <Button className="k-upload-button">Select files...</Button>
                        <strong className="k-upload-status k-upload-status-total"><Icon name="check"></Icon> Done </strong>
                        <div className="k-dropzone-hint">Drop files here to upload</div>
                    </div>
                    <ul className="k-upload-files k-reset">
                        <li className="k-file k-file-success">
                            <div className="k-file-single">
                                <div className="k-progressbar" style={{ opacity: "1" }}>
                                    <span className="k-progress" style={{ width: '100%' }}></span>
                                </div>
                                <span className="k-file-group-wrapper">
                                    <Icon className="k-file-group" name="file-image"></Icon>
                                </span>
                                <span className="k-file-name-size-wrapper">
                                    <span className="k-file-name">Image1_With_Very_Very_Very_Very_Long_Name.jpg</span>
                                    <span className="!k-text-success k-file-information">File successfully uploaded.</span>
                                </span>
                                <div>
                                    <strong className="k-upload-status">
                                        <Button icon="close" fillMode="flat" className="k-upload-action"></Button>
                                    </strong>
                                </div>
                            </div>
                        </li>
                        <li className="k-file k-file-success">
                            <div className="k-file-single">
                                <div className="k-progressbar" style={{ opacity: "1" }}>
                                    <span className="k-progress" style={{ width: '100%' }}></span>
                                </div>
                                <span className="k-file-group-wrapper">
                                    <Icon className="k-file-group" name="file-image"></Icon>
                                </span>
                                <span className="k-file-name-size-wrapper">
                                    <span className="k-file-name">Image2.jpg</span>
                                    <span className="!k-text-success k-file-information">File successfully uploaded.</span>
                                </span>
                                <div>
                                    <strong className="k-upload-status">
                                        <Button icon="close" fillMode="flat" className="k-upload-action"></Button>
                                    </strong>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div className="k-widget k-upload" dir="rtl">
                    <div className="k-dropzone">
                        <Button className="k-upload-button">Select files...</Button>
                        <div className="k-dropzone-hint">Drop files here to upload</div>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-upload" dir="rtl">
                    <div className="k-dropzone">
                        <Button className="k-upload-button">Select files...</Button>
                        <em className="k-dropzone-hint">Drop files here to upload</em>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-upload" dir="rtl">
                    <div className="k-dropzone k-dropzone-active k-dropzone-hover">
                        <Button className="k-upload-button">Select files...</Button>
                        <div className="k-dropzone-hint">Hovered! Drop files here to upload</div>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-upload k-disabled" dir="rtl">
                    <div className="k-dropzone">
                        <Button className="k-upload-button">Select files...</Button>
                        <div className="k-dropzone-hint">Disabled! Drop files here to upload</div>
                    </div>
                </div>
            </section>

            <section>
                <div className="k-widget k-upload" dir="rtl">
                    <div className="k-dropzone">
                        <Button className="k-upload-button">Select files...</Button>
                        <strong className="k-upload-status k-upload-status-total">
                            <Icon name="check"></Icon> Done
                        </strong>
                        <div className="k-dropzone-hint">Drop files here to upload</div>
                    </div>
                    <ul className="k-upload-files k-reset">
                        <li className="k-file k-file-success">
                            <div className="k-file-multiple">
                                <div className="k-progressbar" style={{ opacity: "0" }}>
                                    <span className="k-progress" style={{ width: '100%' }}></span>
                                </div>
                                <span className="k-multiple-files-group-wrapper">
                                    <Icon className="k-file-group" name="files"></Icon>
                                </span>
                                <span className="k-multiple-files-wrapper">
                                    <span className="k-file-name-size-wrapper">
                                        <span className="k-file-name"> Video_File_with_Very_Very_Very_Very_Long_Name.png </span>
                                        <span className="k-file-size">19.61 KB</span>
                                    </span>
                                    <span className="k-file-name-size-wrapper">
                                        <span className="k-file-name"> Video_File_with_Very_Very_Very_VeryLong_Name2.png </span>
                                        <span className="k-file-size">51.23 KB</span>
                                    </span>
                                    <span className="k-file-name-size-wrapper">
                                        <span className="k-file-name"> Video3.jpg </span>
                                        <span className="k-file-size">106.43 KB</span>
                                    </span>
                                    <span className="k-file-name-size-wrapper">
                                        <span className="k-file-name"> Video4.png </span>
                                        <span className="k-file-size">24.34 KB</span>
                                    </span>
                                    <span className="k-file-information !k-text-success">4 files successfully uploaded.</span>
                                </span>
                                <div>
                                    <strong className="k-upload-status">
                                        <Button icon="close" fillMode="flat" className="k-upload-action"></Button>
                                    </strong>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div className="k-widget k-upload" dir="rtl">
                    <div className="k-dropzone">
                        <Button className="k-upload-button">Select files...</Button>
                        <strong className="k-upload-status k-upload-status-total">
                            <Icon name="upload"></Icon> Uploading... </strong>
                        <div className="k-dropzone-hint">Drop files here to upload</div>
                    </div>
                    <ul className="k-upload-files k-reset">
                        <li className="k-file k-file-progress">
                            <div className="k-file-multiple">
                                <div className="k-progressbar" style={{ opacity: "1" }}>
                                    <span className="k-progress" style={{ width: "70%" }}></span>
                                </div>
                                <span className="k-multiple-files-group-wrapper">
                                    <Icon className="k-file-group" name="files"></Icon>
                                </span>
                                <span className="k-multiple-files-wrapper">
                                    <span className="k-file-name-size-wrapper">
                                        <span className="k-file-name"> Image_With_Very_Very_Very_Very_Very_Long_Name1.png </span>
                                        <span className="k-file-size">19.61 KB</span>
                                    </span>
                                    <span className="k-file-name-size-wrapper">
                                        <span className="k-file-name"> Image_With_Very_Very_Very_Very_Very_Long_Name2.png.png </span>
                                        <span className="k-file-size">51.23 KB</span>
                                    </span>
                                    <span className="k-file-name-size-wrapper">
                                        <span className="k-file-name"> Image3.jpg </span>
                                        <span className="k-file-size">106.43 KB</span>
                                    </span>
                                    <span className="k-file-name-size-wrapper">
                                        <span className="k-file-name"> Image4.png </span>
                                        <span className="k-file-size">24.34 KB</span>
                                    </span>
                                    <span className="k-file-information">4 files</span>
                                </span>
                                <div>
                                    <strong className="k-upload-status">
                                        <span className="k-upload-pct">70%</span>
                                        <Button icon="deny" fillMode="flat" className="k-upload-action"></Button>
                                    </strong>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div className="k-widget k-upload" dir="rtl">
                    <div className="k-dropzone">
                        <Button className="k-upload-button">Select files...</Button>
                        <div className="k-dropzone-hint">Drop files here to upload</div>
                    </div>
                    <ul className="k-upload-files k-reset">
                        <li className="k-file k-file-invalid">
                            <div className="k-file-multiple">
                                <div className="k-progressbar" style={{ opacity: "0" }}>
                                    <span className="k-progress" style={{ width: "0%" }}></span>
                                </div>
                                <span className="k-multiple-files-group-wrapper">
                                    <Icon className="k-file-group" name="files"></Icon>
                                </span>
                                <span className="k-multiple-files-wrapper">
                                    <span className="k-file-name-size-wrapper">
                                        <span className="k-file-name">Movie_With_Very_Very_Very_Very_Very_Long_Name1.mkv </span>
                                        <span className="!k-text-error k-file-validation-message">File type not allowed.</span>
                                    </span>
                                    <span className="k-file-name-size-wrapper">
                                        <span className="k-file-name">Movie2.mkv </span>
                                        <span className="!k-text-error k-file-validation-message">File type not allowed.</span>
                                    </span>
                                    <span className="k-file-name-size-wrapper">
                                        <span className="k-file-name">Image1.jpg </span>
                                        <span className="k-file-size">48.24 KB</span>
                                    </span>
                                    <span className="k-file-name-size-wrapper">
                                        <span className="k-file-name">Image2.jpg </span>
                                        <span className="k-file-size">114.65 KB</span>
                                    </span>
                                    <span className="k-file-information">4 files</span>
                                </span>
                                <div>
                                    <strong className="k-upload-status">
                                        <Button icon="close" fillMode="flat" className="k-upload-action"></Button>
                                    </strong>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
                <div className="k-widget k-upload" dir="rtl">
                    <div className="k-dropzone">
                        <Button className="k-upload-button">Select files...</Button>
                        <div className="k-dropzone-hint">Drop files here to upload</div>
                    </div>
                    <ul className="k-upload-files">
                        <li className="k-file">
                            <div className="k-file-single">
                                <div className="k-progressbar" style={{ opacity: "0" }}>
                                    <span className="k-progress" style={{ width: "0%" }}></span>
                                </div>
                                <span className="k-file-group-wrapper">
                                    <Icon className="k-file-group" name="file-image"></Icon>
                                </span>
                                <span className="k-file-name-size-wrapper">
                                    <span className="k-file-name">Image_With_Very_Very_Very_Very_Very_Long_Name1.png</span>
                                    <span className="k-file-size">51.23 KB</span>
                                </span>
                                <div>
                                    <strong className="k-upload-status">
                                        <Button icon="close" fillMode="flat" className="k-upload-action"></Button>
                                    </strong>
                                </div>
                            </div>
                        </li>
                        <li className="k-file">
                            <div className="k-file-single">
                                <div className="k-progressbar" style={{ opacity: "0" }}>
                                    <span className="k-progress" style={{ width: "0%" }}></span>
                                </div>
                                <span className="k-file-group-wrapper">
                                    <Icon className="k-file-group" name="file-image"></Icon>
                                </span>
                                <span className="k-file-name-size-wrapper">
                                    <span className="k-file-name">Image2.jpg</span>
                                    <span className="k-file-size">106.43 KB</span>
                                </span>
                                <div>
                                    <strong className="k-upload-status">
                                        <Button icon="close" fillMode="flat" className="k-upload-action"></Button>
                                    </strong>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ActionButtons alignment="end">
                        <Button className="k-clear-selected">Clear</Button>
                        <Button themeColor="primary" className="k-upload-selected">Upload</Button>
                    </ActionButtons>
                </div>
            </section>

            <section>
                <div className="k-widget k-upload" dir="rtl">
                    <div className="k-dropzone">
                        <Button className="k-upload-button">Select files...</Button>
                        <strong className="k-upload-status k-upload-status-total">
                            <Icon name="upload"></Icon> Uploading...
                        </strong>
                        <div className="k-dropzone-hint">Drop files here to upload</div>
                    </div>
                    <ul className="k-upload-files k-reset">
                        <li className="k-file k-file-progress">
                            <div className="k-file-single">
                                <div className="k-progressbar" style={{ opacity: "1" }}>
                                    <span className="k-progress" style={{ width: "30%" }}></span>
                                </div>
                                <span className="k-file-group-wrapper">
                                    <Icon className="k-file-group" name="file-video"></Icon>
                                </span>
                                <span className="k-file-name-size-wrapper">
                                    <span className="k-file-name">Video1.mkv</span>
                                    <span className="k-file-size">158.97 MB</span>
                                </span>
                                <div>
                                    <strong className="k-upload-status">
                                        <span className="k-upload-pct">30%</span>
                                        <Button fillMode="flat" className="k-upload-action" icon="pause-sm"></Button>
                                        <Button fillMode="flat" className="k-upload-action" icon="cancel"></Button>
                                    </strong>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </>
);
