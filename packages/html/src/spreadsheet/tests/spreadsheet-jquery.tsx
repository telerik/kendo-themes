import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { Combobox } from '../../combobox';
import { DropdownList } from '../../dropdownlist';
import { Icon } from '../../icon';
import { MenuButton } from '../../menu-button';
import { Toolbar, ToolbarSeparator } from '../../toolbar';
import { TooltipNormal } from "../../tooltip";


const style = `
    .k-spreadsheet-view {
        overflow: hidden;
    }
    .k-spreadsheet-fixed-container {
        width: calc( 100% - var(--kendo-scrollbar-width, 0) );
        height: calc( 100% - var(--kendo-scrollbar-width, 0) );
        overflow: hidden;
    }
    .k-spreadsheet-cell {
        white-space: normal;
    }
    .k-spreadsheet-formula-input {
        white-space: normal;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area">
            <div style={{ width: '100%' }} className="k-widget k-spreadsheet k-spreadsheet-legacy">
                <div className="k-tabstrip-wrapper">
                    <div className="k-spreadsheet-quick-access-toolbar">
                        <Button icon="undo"></Button>
                        <Button icon="redo"></Button>
                    </div>
                    <div className="k-widget k-header k-tabstrip k-tabstrip-top k-spreadsheet-tabstrip">
                        <div className="k-tabstrip-items-wrapper k-hstack">
                            <ul className="k-tabstrip-items k-reset" style={{ paddingLeft: "76px" }}>
                                <li className="k-item k-first k-tab-on-top k-active">
                                    <span className="k-loading k-complete"></span>
                                    <span className="k-link">Home</span>
                                </li>
                                <li className="k-item">
                                    <span className="k-loading k-complete"></span>
                                    <span className="k-link">Insert</span>
                                </li>
                                <li className="k-item k-last">
                                    <span className="k-loading k-complete"></span>
                                    <span className="k-link">Data</span>
                                </li>
                            </ul>
                        </div>
                        <div className="k-tabstrip-content k-active" style={{ display: "block" }}>
                            <Toolbar className="k-spreadsheet-toolbar" resizable>
                                <Button icon="folder-open" className="k-upload-button"></Button>
                                <Button icon="download"></Button>
                                <ToolbarSeparator></ToolbarSeparator>
                                <ButtonGroup>
                                    <Button className="k-group-start" icon="cut"></Button>
                                    <Button icon="copy"></Button>
                                    <Button className="k-group-end" icon="clipboard"></Button>
                                </ButtonGroup>
                                <ToolbarSeparator></ToolbarSeparator>
                                <DropdownList value="Arial" />
                                <Combobox placeholder="12" />
                                <ButtonGroup>
                                    <Button className="k-group-start" icon="bold"></Button>
                                    <Button icon="italic"></Button>
                                    <Button className="k-group-end" icon="underline"></Button>
                                </ButtonGroup>
                                <ToolbarSeparator></ToolbarSeparator>
                                <MenuButton icon="foreground-color" showArrow></MenuButton>
                                <ToolbarSeparator></ToolbarSeparator>
                                <MenuButton icon="droplet" showArrow></MenuButton>
                                <MenuButton icon="borders-all" showArrow></MenuButton>
                                <ToolbarSeparator></ToolbarSeparator>
                                <MenuButton icon="align-left" showArrow></MenuButton>
                                <Button icon="text-wrap"></Button>
                                <ToolbarSeparator></ToolbarSeparator>
                                <ButtonGroup>
                                    <Button className="k-group-start" icon="decimal-decrease"></Button>
                                    <Button className="k-group-end" icon="decimal-increase"></Button>
                                </ButtonGroup>
                                <ToolbarSeparator></ToolbarSeparator>
                                <Button icon="filter"></Button>
                                <DropdownList value="Custom format" showValue={false} valueIconName="custom-format" />
                                <Button icon="link"></Button>
                                <ToolbarSeparator></ToolbarSeparator>
                                <Button icon="image"></Button>
                                <Button icon="comment"></Button>
                                <ToolbarSeparator></ToolbarSeparator>
                                <MenuButton icon="pane-freeze" showArrow></MenuButton>
                                <MenuButton icon="cells-merge" showArrow></MenuButton>
                                <Button icon="borders-none"></Button>
                            </Toolbar>
                        </div>
                    </div>
                </div>
                <div className="k-spreadsheet-action-bar">
                    <div className="k-spreadsheet-name-editor">
                        <Combobox placeholder="Combobox..." />
                    </div>
                    <div className="k-spreadsheet-formula-bar">
                        <Icon icon="formula-fx"></Icon>
                        <div className="k-spreadsheet-formula-input k-spreadsheet-array-formula">
                            <span className="k-syntax-startexp k-syntax-at-point">=</span>
                            <span className="k-syntax-func">Product</span>
                            <span className="k-syntax-punc">(</span>
                            <span className="k-syntax-ref k-series-a">C3:C11</span>
                            <span className="k-syntax-punc">)</span>
                        </div>
                        <TooltipNormal content="A1" style={{ position: "absolute", display: "none" }} />
                        <div className="k-group-header" style={{ display: "none" }}></div>
                        <div className="k-list-scroller"></div>
                    </div>
                </div>
                <div className="k-spreadsheet-view">
                    <div className="k-spreadsheet-fixed-container">
                        <div className="k-spreadsheet-pane k-top k-left" style={{ top: '0px', left: '0px', height: "100%", width: '100%' }}>
                            <div className="k-spreadsheet-data" style={{ position: "relative", left: "32px", top: "20px" }}>
                                <div className="k-spreadsheet-vaxis" style={{ left: '0px', height: "410px" }}></div>
                                <div className="k-spreadsheet-vaxis" style={{ left: "100px", height: "410px" }}></div>
                                <div className="k-spreadsheet-vaxis" style={{ left: "315px", height: "410px" }}></div>
                                <div className="k-spreadsheet-vaxis" style={{ left: "430px", height: "410px" }}></div>
                                <div className="k-spreadsheet-vaxis" style={{ left: "545px", height: "410px" }}></div>
                                <div className="k-spreadsheet-vaxis" style={{ left: "660px", height: "410px" }}></div>
                                <div className="k-spreadsheet-vaxis" style={{ left: "815px", height: "410px" }}></div>
                                <div className="k-spreadsheet-vaxis" style={{ left: "879px", height: "410px" }}></div>
                                <div className="k-spreadsheet-vaxis" style={{ left: "943px", height: "410px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: '0px', width: "943px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "70px", width: "943px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "95px", width: "943px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "115px", width: "943px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "135px", width: "943px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "155px", width: "943px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "175px", width: "943px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "195px", width: "943px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "215px", width: "943px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "235px", width: "943px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "255px", width: "943px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "275px", width: "943px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "295px", width: "943px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "315px", width: "943px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "340px", width: "943px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "390px", width: "943px" }}></div>
                                <div className="k-spreadsheet-haxis" style={{ top: "410px", width: "943px" }}></div>
                                <div className="k-spreadsheet-cell k-spreadsheet-merged-cell" style={{ outline: "rgb(86, 163, 230) solid 1px", backgroundColor: "rgb(96, 181, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "32px", left: "1px", top: "1px", width: "878px", height: "69px" }}>
                                    <div className="k-vertical-align-bottom">Invoice #52 - 06/23/2015</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(150, 193, 230) solid 1px", backgroundColor: "rgb(167, 214, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "12px", left: "1px", top: "71px", width: "99px", height: "24px" }}>
                                    <div className="k-vertical-align-bottom">ID</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(150, 193, 230) solid 1px", backgroundColor: "rgb(167, 214, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "12px", left: "101px", top: "71px", width: "214px", height: "24px" }}>
                                    <div className="k-vertical-align-bottom">Product</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(150, 193, 230) solid 1px", backgroundColor: "rgb(167, 214, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "12px", left: "316px", top: "71px", width: "114px", height: "24px" }}>
                                    <div className="k-vertical-align-bottom">Quantity</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(150, 193, 230) solid 1px", backgroundColor: "rgb(167, 214, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "12px", left: "431px", top: "71px", width: "114px", height: "24px" }}>
                                    <div className="k-vertical-align-bottom">Price</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(150, 193, 230) solid 1px", backgroundColor: "rgb(167, 214, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "12px", left: "546px", top: "71px", width: "114px", height: "24px" }}>
                                    <div className="k-vertical-align-bottom">Tax</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(150, 193, 230) solid 1px", backgroundColor: "rgb(167, 214, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "12px", left: "661px", top: "71px", width: "154px", height: "24px" }}>
                                    <div className="k-vertical-align-bottom">Amount</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(150, 193, 230) solid 1px", backgroundColor: "rgb(167, 214, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "816px", top: "71px", width: "63px", height: "24px" }}>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "12px", left: "1px", top: "96px", width: "99px", height: "19px" }}>
                                    <div className="k-vertical-align-bottom">216321</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "101px", top: "96px", width: "214px", height: "19px" }}>
                                    <div className="k-vertical-align-bottom">Calzone</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "12px", left: "316px", top: "96px", width: "114px", height: "19px" }}>
                                    <div className="k-vertical-align-bottom">1</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "431px", top: "96px", width: "114px", height: "19px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$12.39</span></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "546px", top: "96px", width: "114px", height: "19px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$2.48</span></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "661px", top: "96px", width: "154px", height: "19px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$14.87</span></div>
                                </div>
                                <div className="k-spreadsheet-cell k-single k-spreadsheet-has-comment k-dirty-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "816px", top: "96px", width: "63px", height: "19px" }}>
                                    <span className="k-dirty"></span>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "12px", left: "1px", top: "116px", width: "99px", height: "19px" }}>
                                    <div className="k-vertical-align-bottom">546897</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "101px", top: "116px", width: "214px", height: "19px" }}>
                                    <div className="k-vertical-align-bottom">Margarita</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "12px", left: "316px", top: "116px", width: "114px", height: "19px" }}>
                                    <div className="k-vertical-align-bottom">2</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "431px", top: "116px", width: "114px", height: "19px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$8.79</span></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "546px", top: "116px", width: "114px", height: "19px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$3.52</span></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "661px", top: "116px", width: "154px", height: "19px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$21.10</span></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "816px", top: "116px", width: "63px", height: "19px" }}>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "12px", left: "1px", top: "136px", width: "99px", height: "19px" }}>
                                    <div className="k-vertical-align-bottom">456231</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "101px", top: "136px", width: "214px", height: "19px" }}>
                                    <div className="k-vertical-align-bottom">Pollo Formaggio</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "12px", left: "316px", top: "136px", width: "114px", height: "19px" }}>
                                    <div className="k-vertical-align-bottom">1</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "431px", top: "136px", width: "114px", height: "19px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$13.99</span></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "546px", top: "136px", width: "114px", height: "19px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$2.80</span></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "661px", top: "136px", width: "154px", height: "19px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$16.79</span></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "816px", top: "136px", width: "63px", height: "19px" }}>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "12px", left: "1px", top: "156px", width: "99px", height: "19px" }}>
                                    <div className="k-vertical-align-bottom">455873</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "101px", top: "156px", width: "214px", height: "19px" }}>
                                    <div className="k-vertical-align-bottom">Greek Salad</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "12px", left: "316px", top: "156px", width: "114px", height: "19px" }}>
                                    <div className="k-vertical-align-bottom">1</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "431px", top: "156px", width: "114px", height: "19px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$9.49</span></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "546px", top: "156px", width: "114px", height: "19px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$1.90</span></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "661px", top: "156px", width: "154px", height: "19px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$11.39</span></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "816px", top: "156px", width: "63px", height: "19px" }}>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "12px", left: "1px", top: "176px", width: "99px", height: "19px" }}>
                                    <div className="k-vertical-align-bottom">456892</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "101px", top: "176px", width: "214px", height: "19px" }}>
                                    <div className="k-vertical-align-bottom">Spinach and Blue Cheese</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "12px", left: "316px", top: "176px", width: "114px", height: "19px" }}>
                                    <div className="k-vertical-align-bottom">3</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "431px", top: "176px", width: "114px", height: "19px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$11.49</span></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "546px", top: "176px", width: "114px", height: "19px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$6.89</span></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "661px", top: "176px", width: "154px", height: "19px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$41.36</span></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "816px", top: "176px", width: "63px", height: "19px" }}>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "12px", left: "1px", top: "196px", width: "99px", height: "19px" }}>
                                    <div className="k-vertical-align-bottom">546564</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "101px", top: "196px", width: "214px", height: "19px" }}>
                                    <div className="k-vertical-align-bottom">Rigoletto</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "12px", left: "316px", top: "196px", width: "114px", height: "19px" }}>
                                    <div className="k-vertical-align-bottom">1</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "431px", top: "196px", width: "114px", height: "19px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$10.99</span></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "546px", top: "196px", width: "114px", height: "19px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$2.20</span></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "661px", top: "196px", width: "154px", height: "19px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$13.19</span></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "816px", top: "196px", width: "63px", height: "19px" }}>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "12px", left: "1px", top: "216px", width: "99px", height: "19px" }}>
                                    <div className="k-vertical-align-bottom">789455</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "101px", top: "216px", width: "214px", height: "19px" }}>
                                    <div className="k-vertical-align-bottom">Creme Brulee</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "12px", left: "316px", top: "216px", width: "114px", height: "19px" }}>
                                    <div className="k-vertical-align-bottom">5</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "431px", top: "216px", width: "114px", height: "19px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$6.99</span></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "546px", top: "216px", width: "114px", height: "19px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$6.99</span></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "661px", top: "216px", width: "154px", height: "19px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$41.94</span></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "816px", top: "216px", width: "63px", height: "19px" }}>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "12px", left: "1px", top: "236px", width: "99px", height: "19px" }}>
                                    <div className="k-vertical-align-bottom">123002</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "101px", top: "236px", width: "214px", height: "19px" }}>
                                    <div className="k-vertical-align-bottom">Radeberger Beer</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "12px", left: "316px", top: "236px", width: "114px", height: "19px" }}>
                                    <div className="k-vertical-align-bottom">4</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "431px", top: "236px", width: "114px", height: "19px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$4.99</span></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "546px", top: "236px", width: "114px", height: "19px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$3.99</span></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "661px", top: "236px", width: "154px", height: "19px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$23.95</span></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "816px", top: "236px", width: "63px", height: "19px" }}>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "12px", left: "1px", top: "256px", width: "99px", height: "19px" }}>
                                    <div className="k-vertical-align-bottom">564896</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "101px", top: "256px", width: "214px", height: "19px" }}>
                                    <div className="k-vertical-align-bottom">Budweiser Beer</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "12px", left: "316px", top: "256px", width: "114px", height: "19px" }}>
                                    <div className="k-vertical-align-bottom">3</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "431px", top: "256px", width: "114px", height: "19px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$4.49</span></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "546px", top: "256px", width: "114px", height: "19px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$2.69</span></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "661px", top: "256px", width: "154px", height: "19px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$16.16</span></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "816px", top: "256px", width: "63px", height: "19px" }}>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "1px", top: "276px", width: "99px", height: "19px" }}>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "101px", top: "276px", width: "214px", height: "19px" }}>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "316px", top: "276px", width: "114px", height: "19px" }}>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "431px", top: "276px", width: "114px", height: "19px" }}>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "546px", top: "276px", width: "114px", height: "19px" }}>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "661px", top: "276px", width: "154px", height: "19px" }}>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(206, 219, 230) solid 1px", backgroundColor: "rgb(229, 243, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "816px", top: "276px", width: "63px", height: "19px" }}>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "1px", top: "296px", width: "99px", height: "19px" }}>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "101px", top: "296px", width: "214px", height: "19px" }}>
                                </div>
                                <div className="k-spreadsheet-cell k-spreadsheet-drawing-anchor-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "316px", top: "296px", width: "114px", height: "19px" }}>
                                </div>
                                <div className="k-spreadsheet-drawing k-spreadsheet-active-drawing" style={{ width: "53px", height: "40px", top: "305px", left: "350px" }}>
                                    <div className="k-spreadsheet-drawing-image" style={{ backgroundImage: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==)", opacity: "1" }}>
                                    </div>
                                    <div className="k-spreadsheet-drawing-handle N"></div>
                                    <div className="k-spreadsheet-drawing-handle NE"></div>
                                    <div className="k-spreadsheet-drawing-handle E"></div>
                                    <div className="k-spreadsheet-drawing-handle SE"></div>
                                    <div className="k-spreadsheet-drawing-handle S"></div>
                                    <div className="k-spreadsheet-drawing-handle SW"></div>
                                    <div className="k-spreadsheet-drawing-handle W"></div>
                                    <div className="k-spreadsheet-drawing-handle NW"></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "431px", top: "296px", width: "114px", height: "19px" }}>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "546px", top: "296px", width: "114px", height: "19px" }}>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "661px", top: "296px", width: "154px", height: "19px" }}>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(230, 230, 230) solid 1px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "816px", top: "296px", width: "63px", height: "19px" }}>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(174, 203, 230) solid 1px", backgroundColor: "rgb(193, 226, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "1px", top: "316px", width: "99px", height: "24px" }}>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(174, 203, 230) solid 1px", backgroundColor: "rgb(193, 226, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "101px", top: "316px", width: "214px", height: "24px" }}>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(174, 203, 230) solid 1px", backgroundColor: "rgb(193, 226, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "316px", top: "316px", width: "114px", height: "24px" }}>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(174, 203, 230) solid 1px", backgroundColor: "rgb(193, 226, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "431px", top: "316px", width: "114px", height: "24px" }}>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(174, 203, 230) solid 1px", backgroundColor: "rgb(193, 226, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "right", fontSize: "12px", left: "546px", top: "316px", width: "114px", height: "24px" }}>
                                    <div className="k-vertical-align-bottom">Tip:</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(174, 203, 230) solid 1px", backgroundColor: "rgb(193, 226, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontWeight: "bold",fontSize: "12px", left: "661px", top: "316px", width: "154px", height: "24px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$20.07</span></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(174, 203, 230) solid 1px", backgroundColor: "rgb(193, 226, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "816px", top: "316px", width: "63px", height: "24px" }}>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(174, 203, 230) solid 1px", backgroundColor: "rgb(193, 226, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "1px", top: "341px", width: "99px", height: "49px" }}>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(174, 203, 230) solid 1px", backgroundColor: "rgb(193, 226, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "101px", top: "341px", width: "214px", height: "49px" }}>
                                </div>
                                <div className="k-spreadsheet-cell k-spreadsheet-merged-cell" style={{ outline: "rgb(174, 203, 230) solid 1px", backgroundColor: "rgb(193, 226, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "right", fontSize: "20px", left: "316px", top: "341px", width: "344px", height: "49px" }}>
                                    <div className="k-vertical-align-bottom">Total Amount:</div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(174, 203, 230) solid 1px", backgroundColor: "rgb(193, 226, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontWeight: "bold", fontSize: "20px", left: "661px", top: "341px", width: "154px", height: "49px", textAlign: "right" }}>
                                    <div className="k-vertical-align-bottom"><span>$220.82</span></div>
                                </div>
                                <div className="k-spreadsheet-cell" style={{ outline: "rgb(174, 203, 230) solid 1px", backgroundColor: "rgb(193, 226, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", fontSize: "12px", left: "816px", top: "341px", width: "63px", height: "49px" }}>
                                </div>
                            </div>
                            <div className="k-selection-wrapper">
                                <div className="k-spreadsheet-selection k-single-selection" style={{ width: "216px", height: "21px", top: "135px", left: "132px" }}></div>
                                <div className="k-button k-spreadsheet-editor-button" style={{ left: "347px", top: "135px", height: "20px" }}><Icon icon="calendar"></Icon></div>
                                <div className="k-spreadsheet-cell k-spreadsheet-active-cell k-top k-single" style={{ outline: "rgb(86, 163, 230) solid 1px", backgroundColor: "rgb(96, 181, 255)", color: "rgb(0, 62, 117)", fontFamily: "Arial", textAlign: "center", fontSize: "32px", left: "33px", top: "21px", width: "878px", height: "69px" }}>
                                    <div className="k-vertical-align-bottom">Invoice #52 - 06/23/2015</div>
                                </div>
                            </div>
                            <div className="k-auto-fill-wrapper"></div>
                            <div className="k-selection-wrapper"></div>
                            <div className="k-filter-wrapper">
                                <div className="k-filter-range" style={{ width: "816px", height: "206px", top: "90px", left: "32px" }}></div>
                                <span className="k-spreadsheet-filter" style={{ left: "113px", top: "93px" }}>
                                    <Icon icon="caret-alt-down"></Icon>
                                </span>
                                <span className="k-spreadsheet-filter" style={{ left: "328px", top: "93px" }}>
                                    <Icon icon="caret-alt-down"></Icon>
                                </span>
                                <span className="k-spreadsheet-filter" style={{ left: "443px", top: "93px" }}>
                                    <Icon icon="caret-alt-down"></Icon>
                                </span>
                                <span className="k-spreadsheet-filter" style={{ left: "558px", top: "93px" }}>
                                    <Icon icon="caret-alt-down"></Icon>
                                </span>
                                <span className="k-spreadsheet-filter" style={{ left: "673px", top: "93px" }}>
                                    <Icon icon="caret-alt-down"></Icon>
                                </span>
                                <span className="k-spreadsheet-filter" style={{ left: "828px", top: "93px" }}>
                                    <Icon icon="caret-alt-down"></Icon>
                                </span>
                            </div>
                            <div className="k-spreadsheet-row-header" style={{ width: "32px", top: "20px" }}>
                                <div className="k-selection-partial" style={{ width: "32px", height: "70px" }}>
                                    <div className="k-vertical-align-center">1</div>
                                </div>
                                <div className="k-selection-none" style={{ width: "32px", height: "25px" }}>
                                    <div className="k-vertical-align-center">2</div>
                                </div>
                                <div className="k-selection-none" style={{ width: "32px", height: "20px" }}>
                                    <div className="k-vertical-align-center">3</div>
                                </div>
                                <div className="k-selection-none" style={{ width: "32px", height: "20px" }}>
                                    <div className="k-vertical-align-center">4</div>
                                </div>
                                <div className="k-selection-none" style={{ width: "32px", height: "20px" }}>
                                    <div className="k-vertical-align-center">5</div>
                                </div>
                                <div className="k-selection-none" style={{ width: "32px", height: "20px" }}>
                                    <div className="k-vertical-align-center">6</div>
                                </div>
                                <div className="k-selection-none" style={{ width: "32px", height: "20px" }}>
                                    <div className="k-vertical-align-center">7</div>
                                </div>
                                <div className="k-selection-none" style={{ width: "32px", height: "20px" }}>
                                    <div className="k-vertical-align-center">8</div>
                                </div>
                                <div className="k-selection-none" style={{ width: "32px", height: "20px" }}>
                                    <div className="k-vertical-align-center">9</div>
                                </div>
                                <div className="k-selection-none" style={{ width: "32px", height: "20px" }}>
                                    <div className="k-vertical-align-center">10</div>
                                </div>
                                <div className="k-selection-none" style={{ width: "32px", height: "20px" }}>
                                    <div className="k-vertical-align-center">11</div>
                                </div>
                                <div className="k-selection-none" style={{ width: "32px", height: "20px" }}>
                                    <div className="k-vertical-align-center">12</div>
                                </div>
                                <div className="k-selection-none" style={{ width: "32px", height: "20px" }}>
                                    <div className="k-vertical-align-center">13</div>
                                </div>
                                <div className="k-selection-none" style={{ width: "32px", height: "25px" }}>
                                    <div className="k-vertical-align-center">14</div>
                                </div>
                                <div className="k-selection-none" style={{ width: "32px", height: '50px' }}>
                                    <div className="k-vertical-align-center">15</div>
                                </div>
                                <div className="k-selection-none" style={{ width: "32px", height: "20px" }}>
                                    <div className="k-vertical-align-center">16</div>
                                </div>
                            </div>
                            <div className="k-spreadsheet-column-header" style={{ top: '0px', left: "32px", width: "943px", height: "20px" }}>
                                <div className="k-selection-partial" style={{ position: "absolute", left: '0px', width: "100px", height: "20px" }}>
                                    <div className="k-vertical-align-center">A</div>
                                </div>
                                <div className="k-selection-partial" style={{ position: "absolute", left: "100px", width: "215px", height: "20px" }}>
                                    <div className="k-vertical-align-center">B</div>
                                </div>
                                <div className="k-selection-partial" style={{ position: "absolute", left: "315px", width: "115px", height: "20px" }}>
                                    <div className="k-vertical-align-center">C</div>
                                </div>
                                <div className="k-selection-partial" style={{ position: "absolute", left: "430px", width: "115px", height: "20px" }}>
                                    <div className="k-vertical-align-center">D</div>
                                </div>
                                <div className="k-selection-partial" style={{ position: "absolute", left: "545px", width: "115px", height: "20px" }}>
                                    <div className="k-vertical-align-center">E</div>
                                </div>
                                <div className="k-selection-partial" style={{ position: "absolute", left: "660px", width: "155px", height: "20px" }}>
                                    <div className="k-vertical-align-center">F</div>
                                </div>
                                <div className="k-selection-partial" style={{ position: "absolute", left: "815px", width: "64px", height: "20px" }}>
                                    <div className="k-vertical-align-center">G</div>
                                </div>
                                <div className="k-selection-none" style={{ position: "absolute", left: "879px", width: "64px", height: "20px" }}>
                                    <div className="k-vertical-align-center">H</div>
                                </div>
                            </div>
                        </div>
                        <div className="k-spreadsheet-top-corner" style={{ width: "32px", height: "20px" }}></div>
                    </div>
                    <div className="k-spreadsheet-scroller">
                        <div className="k-spreadsheet-view-size" style={{ height: "200%", width: "200%" }}></div>
                    </div>
                    <div className="k-spreadsheet-clipboard">
                        <table className="kendo-clipboard-9e2af5b1-fb37-4868-83b5-033657aa47e5" style={{ left: '0px', top: '0px', height: "70px", width: "879px" }}>
                            <colgroup>
                                <col style={{ width: "100px" }} />
                                <col style={{ width: "215px" }} />
                                <col style={{ width: "115px" }} />
                                <col style={{ width: "115px" }} />
                                <col style={{ width: "115px" }} />
                                <col style={{ width: "155px" }} />
                                <col style={{ width: "64px" }} />
                            </colgroup>
                            <tbody>
                                <tr style={{ height: "70px" }}>
                                    <td colSpan={7} rowSpan={1} style={{ backgroundColor: "rgb(96, 181, 255)", color: "white", fontFamily: "Arial", textAlign: "center", fontSize: "32px", borderColor: "rgb(96, 181, 255)" }}>
                                        Invoice #52 - 06/23/2015</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="k-spreadsheet-cell-editor k-spreadsheet-formula-input" style={{ whiteSpace: "pre" }}>Invoice #52 - 06/23/2015</div>
                    <TooltipNormal content="A1" style={{ position: "absolute", display: "none" }} />
                    <div className="k-group-header" style={{ display: "none" }}></div>
                    <div className="k-list-scroller"></div>
                </div>
                <div className="k-spreadsheet-sheets-bar k-widget k-header">
                    <Button icon="plus" className="k-spreadsheet-sheets-bar-add"></Button>
                    <div className="k-spreadsheet-sheets-items k-tabstrip-scrollable k-tabstrip k-tabstrip-bottom">
                        <div className="k-tabstrip-items-wrapper k-hstack">
                            <Button fillMode="flat" rounded={null} size={null} icon="caret-alt-left" className="k-tabstrip-prev"></Button>
                            <ul className="k-reset k-tabstrip-items">
                                <li className="k-item k-active k-tab-on-top k-spreadsheet-sheets-bar-active">
                                    <span className="k-link">Food Order</span>
                                    <Button fillMode="flat" icon="x" className="k-spreadsheet-sheets-remove k-remove-tab"></Button>
                                </li>
                                <li className="k-item k-spreadsheet-sheets-bar-inactive">
                                    <span className="k-link">Balance Sheet</span>
                                    <Button fillMode="flat" icon="x" className="k-spreadsheet-sheets-remove k-remove-tab"></Button>
                                </li>
                            </ul>
                            <Button fillMode="flat" rounded={null} size={null} icon="caret-alt-right" className="k-tabstrip-next"></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
