import ReactDOM from 'react-dom/client';
import { ColorPicker } from '../../colorpicker';
import { Button } from '../../button';
import { NumericTextbox } from '../../numerictextbox';
import { ColorPreview } from '../../color-preview';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        justify-items: start;
    }
    .k-animation-container {
        width: min-content;
        position: relative;
        overflow: visible;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>ColorPicker With ColorGradient View</span>
            <span>ColorPicker With ColorPalette View</span>

            <section>
                <div style={{ position: "relative" }}>
                    <ColorPicker />

                    <div className="k-animation-container k-animation-container-shown" style={{ position: "relative", width: "min-content" }}>
                        <div className="k-popup k-colorpicker-popup">
                            <div className="k-flatcolorpicker k-coloreditor">
                                <div className="k-coloreditor-header k-hstack">
                                    <div className="k-coloreditor-header-actions k-hstack">
                                        <div className="k-button-group">
                                            <Button fillMode="flat" icon="color-canvas" selected />
                                            <Button fillMode="flat" icon="palette"/>
                                        </div>
                                    </div>
                                    <div className="k-spacer"></div>
                                    <div className="k-coloreditor-header-actions k-hstack">
                                        <Button fillMode="flat" icon="reset-color" />
                                        <div className="k-coloreditor-preview k-vstack">
                                            <ColorPreview className="k-coloreditor-preview-color" color="rgba(0,0,0, 0.5)" />
                                            <ColorPreview className="k-coloreditor-current-color" color="fuchsia" />
                                        </div>
                                    </div>
                                </div>

                                <div className="k-coloreditor-views k-vstack">
                                    <div className="k-colorgradient">
                                        <div className="k-colorgradient-canvas k-hstack">
                                            <div className="k-hsv-rectangle" style={{ background: "rgb(255, 0, 0)" }}>
                                                <div className="k-hsv-gradient">
                                                    <div className="k-hsv-draghandle k-draghandle" style={{ top: '50px', left: "73px" }}></div>
                                                </div>
                                            </div>
                                            <div className="k-hsv-controls k-hstack">
                                                <div className="k-slider k-slider-vertical k-hue-slider k-colorgradient-slider">
                                                    <div className="k-slider-track-wrap">
                                                        <div className="k-slider-track">
                                                            <div className="k-slider-selection"></div>
                                                            <a className="k-draghandle k-draghandle-end"></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="k-slider k-slider-vertical k-alpha-slider k-colorgradient-slider">
                                                    <div className="k-slider-track-wrap">
                                                        <div className="k-slider-track" style={{ background: "linear-gradient(to top, transparent, rgb(255, 0, 0))" }}>
                                                            <div className="k-slider-selection"></div>
                                                            <a className="k-draghandle k-draghandle-end"></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="k-colorgradient-inputs k-hstack">
                                            <div className="k-vstack">
                                                <Button fillMode="flat" icon="arrows-kpi" className="k-colorgradient-toggle-mode"></Button>
                                            </div>
                                            <div className="k-vstack">
                                                <NumericTextbox showSpinButton={false} showClearButton={false} value="132" />
                                                <div className="k-colorgradient-input-label">R</div>
                                            </div>
                                            <div className="k-vstack">
                                                <NumericTextbox showSpinButton={false} showClearButton={false} value="132" />
                                                <div className="k-colorgradient-input-label">G</div>
                                            </div>
                                            <div className="k-vstack">
                                                <NumericTextbox showSpinButton={false} showClearButton={false} value="132" />
                                                <div className="k-colorgradient-input-label">B</div>
                                            </div>
                                            <div className="k-vstack">
                                                <NumericTextbox showSpinButton={false} showClearButton={false} value="1.00" />
                                                <div className="k-colorgradient-input-label">A</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="k-coloreditor-footer k-actions k-actions-end">
                                    <Button className="k-coloreditor-cancel">Cancel</Button>
                                    <Button themeColor="primary" className="k-coloreditor-apply">Apply</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section>
                <div style={{ position: "relative" }}>
                    <ColorPicker value="fuchsia" />

                    <div className="k-animation-container k-animation-container-shown">
                        <div className="k-popup k-colorpicker-popup">
                            <div className="k-flatcolorpicker k-coloreditor">

                                <div className="k-coloreditor-header k-hstack">
                                    <div className="k-coloreditor-header-actions k-hstack">
                                        <div className="k-button-group">
                                            <Button fillMode="flat" icon="color-canvas"></Button>
                                            <Button fillMode="flat" icon="palette" selected></Button>
                                        </div>
                                    </div>
                                    <div className="k-spacer"></div>
                                    <div className="k-coloreditor-header-actions k-hstack">
                                        <Button fillMode="flat" icon="reset-color"></Button>
                                        <div className="k-coloreditor-preview k-vstack">
                                            <ColorPreview className="k-coloreditor-preview-color" color="rgba(0,0,0, 0.5)" />
                                            <ColorPreview className="k-coloreditor-current-color" color="fuchsia" />
                                        </div>
                                    </div>
                                </div>

                                <div className="k-coloreditor-views k-vstack">
                                    <div className="k-colorpalette">
                                        <div className="k-colorpalette-table-wrap">
                                            <table className="k-colorpalette-table k-palette">
                                                <tbody>
                                                    <tr>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(255, 255, 255)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(0, 0, 0)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(230, 230, 230)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(67, 85, 105)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(67, 113, 196)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(237, 126, 50)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(165, 164, 165)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(254, 191, 4)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(90, 155, 213)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(113, 174, 72)" }}></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(242, 242, 243)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(127, 127, 127)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(209, 206, 206)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(213, 221, 227)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(218, 225, 244)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(252, 229, 212)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(222, 237, 237)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(255, 242, 204)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(222, 234, 246)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(225, 239, 217)" }}></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(215, 216, 216)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(88, 89, 89)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(174, 171, 171)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(173, 186, 202)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(180, 197, 231)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(246, 202, 172)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(219, 219, 219)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(255, 228, 152)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(188, 214, 238)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(197, 224, 178)" }}></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(191, 191, 192)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(63, 63, 63)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(118, 112, 112)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(133, 149, 177)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(143, 171, 219)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(245, 177, 131)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(201, 200, 201)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(254, 217, 101)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(155, 196, 229)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(168, 208, 141)" }}></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(165, 165, 166)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(38, 38, 37)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(57, 57, 57)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(51, 64, 80)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(46, 84, 150)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(196, 90, 17)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(123, 123, 122)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(191, 144, 0)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(47, 117, 181)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(84, 130, 53)" }}></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(127, 127, 127)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(11, 12, 12)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(22, 22, 22)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(34, 42, 52)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(32, 55, 100)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(132, 61, 11)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(82, 82, 82)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(127, 96, 0)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(29, 77, 121)" }}></td>
                                                        <td className="k-colorpalette-tile" style={{ backgroundColor: "rgb(55, 86, 35)" }}></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div className="k-coloreditor-footer k-actions k-actions-end">
                                    <Button className="k-coloreditor-cancel">Cancel</Button>
                                    <Button themeColor="primary" className="k-coloreditor-apply">Apply</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    </>
);
