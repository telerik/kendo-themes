import { Button } from "../../button";
import { ButtonGroup } from "../../button-group";
import { ColorPicker } from "../../colorpicker";
import { Combobox } from "../../combobox";
import { DropdownList } from "../../dropdownlist";
import { Icon } from "../../icon";
import MenuButton from "../../menu-button/menu-button.spec";
import { Toolbar, ToolbarItem, ToolbarSeparator } from "../../toolbar";

const style = `
    #test-area {
        max-width: 1150px;
    }

    .k-spreadsheet-cell,
    .k-spreadsheet-formula-input {
        white-space: normal !important;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area">
            <div style={{ width: '100%' }} className="k-spreadsheet">
                <div className="k-spreadsheet-header">
                    <ul id="menu" className="k-spreadsheet-menu k-widget k-reset k-header k-menu k-menu-horizontal">
                        <li className="k-item k-menu-item k-first">
                            <span className="k-link k-menu-link">File</span>
                        </li>
                        <li className="k-item k-menu-item k-active">
                            <span className="k-link k-menu-link">Home</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Insert</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Format</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Formulas</span>
                        </li>
                        <li className="k-item k-menu-item">
                            <span className="k-link k-menu-link">Data</span>
                        </li>
                        <li className="k-item k-menu-item k-last">
                            <span className="k-link k-menu-link">View</span>
                        </li>
                    </ul>
                    <Toolbar className="k-spreadsheet-toolbar k-toolbar-flat" resizable>
                        <Button icon="arrow-rotate-ccw" fillMode="flat"></Button>
                        <Button icon="arrow-rotate-cw" fillMode="flat"></Button>
                        <ToolbarSeparator></ToolbarSeparator>
                        <Button icon="cut" fillMode="flat"></Button>
                        <Button icon="copy" fillMode="flat"></Button>
                        <Button icon="clipboard" fillMode="flat"></Button>
                        <ToolbarSeparator></ToolbarSeparator>
                        <DropdownList value="Font Name" fillMode="flat" />
                        <DropdownList value="Font Size" fillMode="flat" />
                        <ToolbarSeparator></ToolbarSeparator>
                        <ButtonGroup fillMode="flat">
                            <Button icon="font-grow" fillMode="flat"></Button>
                            <Button icon="font-shrink" fillMode="flat"></Button>
                        </ButtonGroup>
                        <ToolbarSeparator></ToolbarSeparator>
                        <ButtonGroup fillMode="flat">
                            <Button icon="bold" fillMode="flat"></Button>
                            <Button icon="italic" fillMode="flat"></Button>
                            <Button icon="underline" fillMode="flat"></Button>
                            <Button icon="strikethrough" fillMode="flat"></Button>
                        </ButtonGroup>
                        <ToolbarItem>
                            <ColorPicker value="red" valueIconName="foreground-color" fillMode="flat" />
                        </ToolbarItem>
                        <ToolbarSeparator></ToolbarSeparator>
                        <ToolbarItem>
                            <ColorPicker value="fuchsia" valueIconName="droplet" fillMode="flat" />
                        </ToolbarItem>
                        <ToolbarSeparator></ToolbarSeparator>
                        <MenuButton fillMode="flat" icon="borders-all" showArrow></MenuButton>
                        <ToolbarSeparator></ToolbarSeparator>
                        <MenuButton fillMode="flat" icon="align-left" showArrow></MenuButton>
                        <MenuButton fillMode="flat" icon="align-middle" showArrow></MenuButton>
                        <ToolbarSeparator></ToolbarSeparator>
                        <Button fillMode="flat" icon="text-wrap"></Button>
                    </Toolbar>
                </div>
                <div className="k-spreadsheet-action-bar">
                    <div className="k-spreadsheet-name-editor">
                        <Combobox placeholder="B6" fillMode="flat" />
                    </div>
                    <div className="k-spreadsheet-formula-bar">
                        <span className="k-separator k-separator-vertical"></span>
                        <Button icon="formula-fx" fillMode="flat" />
                        <span className="k-separator k-separator-vertical"></span>
                        <div className="k-spreadsheet-formula-input k-textbox k-input k-input-md k-input-flat k-rounded-md">
                            <span className="k-syntax-startexp">=</span>
                            <span className="k-syntax-ref k-series-a">B6</span>
                            <span className="k-syntax-op">+</span>
                            <span className="k-syntax-ref k-series-b">C6</span>
                            <span className="k-syntax-op">+</span>
                            <span className="k-syntax-ref k-series-c">C3</span>
                        </div>
                    </div>
                </div>
                <div className="k-spreadsheet-view">
                    <div className="k-spreadsheet-fixed-container">
                        <div style={{ top: 0, left: 0, height: "100%", width: "100%" }} className="k-spreadsheet-pane k-top k-left">
                            <div className="k-spreadsheet-data" style={{ position: "relative", left: "30px", top: "30px" }}>
                                <div className="k-spreadsheet-vaxis" style={{ left: 0, height: "405px" }}></div>
                                <div className="k-spreadsheet-vaxis" style={{ left: "100px", height: "405px" }}></div>
                                <div className="k-spreadsheet-vaxis" style={{ left: "315px", height: "405px" }}></div>
                                <div className="k-spreadsheet-vaxis" style={{ left: "430px", height: "405px" }}></div>
                                <div className="k-spreadsheet-vaxis" style={{ left: "545px", height: "405px" }}></div>
                                <div className="k-spreadsheet-vaxis" style={{ left: "660px", height: "405px" }}></div>
                                <div className="k-spreadsheet-vaxis" style={{ left: "815px", height: "405px" }}></div>
                                <div className="k-spreadsheet-vaxis" style={{ left: "879px", height: "405px" }}></div>
                                <div className="k-spreadsheet-vaxis" style={{ left: "943px", height: "405px" }}></div>
                                <div className="k-spreadsheet-vaxis" style={{ left: "1007px", height: "405px" }}></div>
                                <div className="k-spreadsheet-vaxis" style={{ left: "1071px", height: "405px" }}></div>
                                <div className="k-spreadsheet-vaxis" style={{ left: "1135px", height: "405px" }}></div>
                                <div className="k-spreadsheet-vaxis" style={{ left: "1199px", height: "405px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "0px", width: "1199px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "70px", width: "1199px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "95px", width: "1199px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "125px", width: "1199px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "155px", width: "1199px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "185px", width: "1199px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "215px", width: "1199px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "245px", width: "1199px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "275px", width: "1199px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "305px", width: "1199px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "335px", width: "1199px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "365px", width: "1199px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "395px", width: "1199px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "426px", width: "1199px" }}></div>
                                <div className="k-spreadsheet-disabled-mask" style={{ top: "1px", width: "878px", left: "1px", height: "69px" }}></div>
                                <div className="k-spreadsheet-cell k-spreadsheet-merged-cell" style={{ left: "1px", top: "1px", width: "878px", height: "69px", background: "rgb(96, 181, 255)", outline: "rgb(86, 163, 230) solid 1px", color: "white", fontFamily: "Arial", textAlign: "center", fontSize: "30px", whiteSpace: "pre", overflowWrap: "normal" }}>
                                    <div className="k-vertical-align-center">Invoice #52 - 06/23/2015</div>
                                </div>
                                <div style={{ background: "rgb(167, 214, 255)", outline: "rgb(150, 193, 230) solid 1px" , color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "1px", top: "71px", width: "99px", height: "24px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">ID</div>
                                </div>
                                <div style={{ background: "rgb(167, 214, 255)", outline: "rgb(150, 193, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "101px", top: "71px", width: "214px", height: "24px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">Product</div>
                                </div>
                                <div style={{ background: "rgb(167, 214, 255)", outline: "rgb(150, 193, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "316px", top: "71px", width: "114px", height: "24px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">Quantity</div>
                                </div>
                                <div style={{ background: "rgb(167, 214, 255)", outline: "rgb(150, 193, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "431px", top: "71px", width: "114px", height: "24px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">Price</div>
                                </div>
                                <div style={{ background: "rgb(167, 214, 255)", outline: "rgb(150, 193, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "546px", top: "71px", width: "114px", height: "24px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">Tax</div>
                                </div>
                                <div style={{ background: "rgb(167, 214, 255)", outline: "rgb(150, 193, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "661px", top: "71px", width: "154px", height: "24px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">Amount</div>
                                </div>
                                <div style={{ background: "rgb(167, 214, 255)", outline: "rgb(150, 193, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "816px", top: "71px", width: "63px", height: "24px" }} className="k-spreadsheet-cell"></div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "1px", top: "96px", width: "99px", height: "30px" }} className="k-spreadsheet-cell k-left k-single">
                                    <div className="k-vertical-align-center">216321</div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "left", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "101px", top: "96px", width: "214px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">Calzone</div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "316px", top: "96px", width: "114px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">1</div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "431px", top: "96px", width: "114px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">
                                        <span>$12.39</span>
                                    </div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "right", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "546px", top: "96px", width: "114px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">
                                        <span>$2.48</span>
                                    </div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "right", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "661px", top: "96px", width: "154px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">
                                        <span>$14.87</span>
                                    </div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "816px", top: "96px", width: "63px", height: "30px" }} className="k-spreadsheet-cell"></div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "1px", top: "126px", width: "99px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">546897</div>
                                </div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "left", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "101px", top: "126px", width: "214px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">Margarita</div>
                                </div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "316px", top: "126px", width: "114px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">2</div>
                                </div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "431px", top: "126px", width: "114px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">
                                        <span>$8.79</span>
                                    </div>
                                </div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "right", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "546px", top: "126px", width: "114px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">
                                        <span>$3.52</span>
                                    </div>
                                </div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "right", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "661px", top: "126px", width: "154px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">
                                        <span>$21.10</span>
                                    </div>
                                </div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "816px", top: "126px", width: "63px", height: "30px" }} className="k-spreadsheet-cell"></div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "1px", top: "156px", width: "99px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">456231</div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "left", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "101px", top: "156px", width: "214px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">Pollo Formaggio</div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "316px", top: "156px", width: "114px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">3</div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "431px", top: "156px", width: "114px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">
                                        <span>$13.99</span>
                                    </div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "right", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "546px", top: "156px", width: "114px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">
                                        <span>$2.80</span>
                                    </div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "right", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "661px", top: "156px", width: "154px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">
                                        <span>$16.79</span>
                                    </div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "816px", top: "156px", width: "63px", height: "30px" }} className="k-spreadsheet-cell"></div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "1px", top: "186px", width: "99px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">455873</div>
                                </div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "left", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "101px", top: "186px", width: "214px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">Greek Salad</div>
                                </div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "316px", top: "186px", width: "114px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">4</div>
                                </div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "431px", top: "186px", width: "114px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">
                                        <span>$9.49</span>
                                    </div>
                                </div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "right", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "546px", top: "186px", width: "114px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">
                                        <span>$1.90</span>
                                    </div>
                                </div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "right", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "661px", top: "186px", width: "154px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">
                                        <span>$11.39</span>
                                    </div>
                                </div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "816px", top: "186px", width: "63px", height: "30px" }} className="k-spreadsheet-cell"></div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "1px", top: "216px", width: "99px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">456892</div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "left", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "101px", top: "216px", width: "214px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">Spinach and Blue Cheese</div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "316px", top: "216px", width: "114px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">5</div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "431px", top: "216px", width: "114px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center"><span>$11.49</span></div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "right", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "546px", top: "216px", width: "114px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center"><span>$6.89</span></div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "right", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "661px", top: "216px", width: "154px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center"><span>$41.36</span></div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "816px", top: "216px", width: "63px", height: "30px" }} className="k-spreadsheet-cell"></div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "1px", top: "246px", width: "99px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">546564</div>
                                </div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "left", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "101px", top: "246px", width: "214px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">Rigoletto</div>
                                </div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "316px", top: "246px", width: "114px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">6</div>
                                </div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "431px", top: "246px", width: "114px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center"><span>$10.99</span></div>
                                </div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "right", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "546px", top: "246px", width: "114px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center"><span>$2.20</span></div>
                                </div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "right", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "661px", top: "246px", width: "154px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center"><span>$13.19</span></div>
                                </div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "816px", top: "246px", width: "63px", height: "30px" }} className="k-spreadsheet-cell"></div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "1px", top: "276px", width: "99px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">789455</div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "left", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "101px", top: "276px", width: "214px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">Creme Brulee</div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "316px", top: "276px", width: "114px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">7</div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "431px", top: "276px", width: "114px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center"><span>$6.99</span></div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "right", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "546px", top: "276px", width: "114px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center"><span>$6.99</span></div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "right", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "661px", top: "276px", width: "154px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center"><span>$41.94</span></div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "816px", top: "276px", width: "63px", height: "30px" }} className="k-spreadsheet-cell"></div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "1px", top: "306px", width: "99px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">123002</div>
                                </div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "left", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "101px", top: "306px", width: "214px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">Radeberger Beer</div>
                                </div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "316px", top: "306px", width: "114px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">8</div>
                                </div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "431px", top: "306px", width: "114px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center"><span>$4.99</span></div>
                                </div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "right", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "546px", top: "306px", width: "114px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center"><span>$3.99</span></div>
                                </div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "right", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "661px", top: "306px", width: "154px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center"><span>$23.95</span></div>
                                </div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "816px", top: "306px", width: "63px", height: "30px" }} className="k-spreadsheet-cell"></div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "1px", top: "336px", width: "99px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">564896</div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "left", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "101px", top: "336px", width: "214px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">Budweiser Beer</div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "316px", top: "336px", width: "114px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center">9</div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "431px", top: "336px", width: "114px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center"><span>$4.49</span></div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "right", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "546px", top: "336px", width: "114px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center"><span>$2.69</span></div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "right", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "661px", top: "336px", width: "154px", height: "30px" }} className="k-spreadsheet-cell">
                                    <div className="k-vertical-align-center"><span>$16.16</span></div>
                                </div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "816px", top: "336px", width: "63px", height: "30px" }} className="k-spreadsheet-cell"></div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "1px", top: "366px", width: "99px", height: "30px" }} className="k-spreadsheet-cell"></div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "101px", top: "366px", width: "214px", height: "30px" }} className="k-spreadsheet-cell"></div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "316px", top: "366px", width: "114px", height: "30px" }} className="k-spreadsheet-cell"></div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "431px", top: "366px", width: "114px", height: "30px" }} className="k-spreadsheet-cell"></div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "546px", top: "366px", width: "114px", height: "30px" }} className="k-spreadsheet-cell"></div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "661px", top: "366px", width: "154px", height: "30px" }} className="k-spreadsheet-cell"></div>
                                <div style={{ background: "rgb(229, 243, 255)", outline: "rgb(206, 219, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "816px", top: "366px", width: "63px", height: "30px" }} className="k-spreadsheet-cell"></div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "1px", top: "396px", width: "99px", height: "30px" }} className="k-spreadsheet-cell"></div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "101px", top: "396px", width: "214px", height: "30px" }} className="k-spreadsheet-cell"></div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "316px", top: "396px", width: "114px", height: "30px" }} className="k-spreadsheet-cell"></div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "431px", top: "396px", width: "114px", height: "30px" }} className="k-spreadsheet-cell"></div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "546px", top: "396px", width: "114px", height: "30px" }} className="k-spreadsheet-cell"></div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "661px", top: "396px", width: "154px", height: "30px" }} className="k-spreadsheet-cell"></div>
                                <div style={{ background: "rgb(255, 255, 255)", outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", whiteSpace: "pre", overflowWrap: "normal", left: "816px", top: "396px", width: "63px", height: "30px" }} className="k-spreadsheet-cell"></div>
                            </div>
                            <div className="k-auto-fill-wrapper"></div>
                            <div className="k-selection-wrapper"></div>
                            <div className="k-filter-wrapper">
                                <div className="k-filter-range" style={{ width: "331px", height: "271px", top: "125px", left: "130px" }}></div>
                                <span className="k-spreadsheet-filter" style={{ left: "318px", top: "129px" }}>
                                    <Icon icon="filter" />
                                </span>
                                <span className="k-spreadsheet-filter" style={{ left: "433px", top: "129px" }}>
                                    <Icon icon="filter-sort-asc-small" />
                                </span>
                            </div>
                            <div className="k-spreadsheet-row-header" style={{ width: "30px", top: "30px" }}>
                                <div className="k-selection-none" style={{ width: "30px", height: "70px" }}>
                                    <div className="k-vertical-align-center">1</div>
                                </div>
                                <div className="k-selection-none" style={{ width: "30px", height: "25px" }}>
                                    <div className="k-vertical-align-center">2</div>
                                </div>
                                <div className="k-selection-partial" style={{ width: "30px", height: "30px" }}>
                                    <div className="k-vertical-align-center">3</div>
                                </div>
                                <div className="k-selection-none" style={{ width: "30px", height: "30px" }}>
                                    <div className="k-vertical-align-center">4</div>
                                </div>
                                <div className="k-selection-none" style={{ width: "30px", height: "30px" }}>
                                    <div className="k-vertical-align-center">5</div>
                                </div>
                                <div className="k-selection-none" style={{ width: "30px", height: "30px" }}>
                                    <div className="k-vertical-align-center">6</div>
                                </div>
                                <div className="k-selection-none" style={{ width: "30px", height: "30px" }}>
                                    <div className="k-vertical-align-center">7</div>
                                </div>
                                <div className="k-selection-none" style={{ width: "30px", height: "30px" }}>
                                    <div className="k-vertical-align-center">8</div>
                                </div>
                                <div className="k-selection-none" style={{ width: "30px", height: "30px" }}>
                                    <div className="k-vertical-align-center">9</div>
                                </div>
                                <div className="k-selection-none" style={{ width: "30px", height: "30px" }}>
                                    <div className="k-vertical-align-center">10</div>
                                </div>
                                <div className="k-selection-none" style={{ width: "30px", height: "30px" }}>
                                    <div className="k-vertical-align-center">11</div>
                                </div>
                                <div className="k-selection-none" style={{ width: "30px", height: "30px" }}>
                                    <div className="k-vertical-align-center">12</div>
                                </div>
                                <div className="k-selection-none" style={{ width: "30px", height: "30px" }}>
                                    <div className="k-vertical-align-center">13</div>
                                </div>
                            </div>
                            <div className="k-spreadsheet-column-header" style={{ top: "0px", left: "30px", width: "1199px", height: "30px" }}>
                                <div className="k-selection-none" style={{ position: "absolute", left: "0px", width: "100px", height: "30px" }}>
                                    <div className="k-vertical-align-center">A</div>
                                </div>
                                <div className="k-selection-none" style={{ position: "absolute", left: "100px", width: "215px", height: "30px" }}>
                                    <div className="k-vertical-align-center">B</div>
                                </div>
                                <div className="k-selection-partial" style={{ position: "absolute", left: "315px", width: "115px", height: "30px" }}>
                                    <div className="k-vertical-align-center">C</div>
                                </div>
                                <div className="k-selection-none" style={{ position: "absolute", left: "430px", width: "115px", height: "30px" }}>
                                    <div className="k-vertical-align-center">D</div>
                                </div>
                                <div className="k-selection-none" style={{ position: "absolute", left: "545px", width: "115px", height: "30px" }}>
                                    <div className="k-vertical-align-center">E</div>
                                </div>
                                <div className="k-selection-none" style={{ position: "absolute", left: "660px", width: "155px", height: "30px" }}>
                                    <div className="k-vertical-align-center">F</div>
                                </div>
                                <div className="k-selection-none" style={{ position: "absolute", left: "815px", width: "64px", height: "30px" }}>
                                    <div className="k-vertical-align-center">G</div>
                                </div>
                                <div className="k-selection-none" style={{ position: "absolute", left: "879px", width: "64px", height: "30px" }}>
                                    <div className="k-vertical-align-center">H</div>
                                </div>
                                <div className="k-selection-none" style={{ position: "absolute", left: "943px", width: "64px", height: "30px" }}>
                                    <div className="k-vertical-align-center">I</div>
                                </div>
                                <div className="k-selection-none" style={{ position: "absolute", left: "1007px", width: "64px", height: "30px" }}>
                                    <div className="k-vertical-align-center">J</div>
                                </div>
                                <div className="k-selection-none" style={{ position: "absolute", left: "1071px", width: "64px", height: "30px" }}>
                                    <div className="k-vertical-align-center">K</div>
                                </div>
                                <div className="k-selection-none" style={{ position: "absolute", left: "1135px", width: "64px", height: "30px" }}>
                                    <div className="k-vertical-align-center">L</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: "30px", height: "30px" }} className="k-spreadsheet-top-corner"></div>
                    </div>
                    <div className="k-spreadsheet-scroller">
                        <div className="k-spreadsheet-view-size" style={{ height: "6080px", width: "3663px" }}></div>
                    </div>
                    <div className="k-spreadsheet-clipboard">
                        <table style={{ left: "0px", top: "0px", height: "30px", width: "100px" }} className="kendo-clipboard-eb8ea401-ab97-4190-8fb2-b3b83b299a9f" role="presentation">
                            <colgroup>
                                <col style={{ width: "100px" }}></col>
                            </colgroup>
                            <tbody>
                                <tr style={{ height: "30px" }}>
                                    <td style={{ backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "14px", borderColor: "rgb(255, 255, 255)" }}>216321</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="k-spreadsheet-cell-editor k-spreadsheet-formula-input" data-role="formulainput" style={{ whiteSpace: "pre" }}>216321</div>
                    <div className="k-widget k-tooltip" style={{ position: "absolute", display: "none" }}>A1</div>
                    <div className="k-list-group-sticky-header" style={{ display: "none" }}></div>
                    <div className="k-list-content k-list-scroller" unselectable="on"></div>
                </div>
                <div className="k-spreadsheet-sheets-bar">
                    <Button className="k-spreadsheet-sheet-add" fillMode="flat" icon="plus" />
                    <Button className="k-spreadsheet-sheets-menu" fillMode="flat" icon="menu" />
                    <div className="k-spreadsheet-sheets k-tabstrip k-tabstrip-bottom k-tabstrip-scrollable">
                        <div className="k-tabstrip-items-wrapper k-vstack">
                            <ul className="k-reset k-tabstrip-items">
                                <li className="k-item k-first">
                                    <span className="k-link">Sheet 1</span>
                                    <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
                                </li>
                                <li className="k-item">
                                    <span className="k-link">Sheet 2</span>
                                    <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
                                </li>
                                <li className="k-item k-active">
                                    <span className="k-link">Sheet 3</span>
                                    <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
                                </li>
                                <li className="k-item k-focus">
                                    <span className="k-link">Sheet 4</span>
                                    <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
                                </li>
                                <li className="k-item">
                                    <span className="k-link">Sheet 5</span>
                                    <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
                                </li>
                                <li className="k-item k-last k-disabled">
                                    <span className="k-link">Sheet 6</span>
                                    <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
                                </li>
                            </ul>
                            <Button className="k-tabstrip-prev" fillMode="flat" icon="caret-alt-left" rounded={null} size={null} />
                            <Button className="k-tabstrip-next" fillMode="flat" icon="caret-alt-right" rounded={null} size={null} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
