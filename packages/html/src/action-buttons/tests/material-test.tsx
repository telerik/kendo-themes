import { BottomNavItem, BottomNavNormal } from "../../bottom-nav";
import { BreadcrumbCollapsingNone } from "../../breadcrumb";
import { Button, TextButton } from "../../button";
import { ButtonGroup } from "../../button-group";
import { CalendarNormal } from "../../calendar";
import { CardNormal } from "../../card";
import { Chip, ChipAction } from "../../chip";
import { ColorPicker } from "../../colorpicker";
import { DatePickerNormal } from "../../datepicker";
import { Drawer, DrawerContent, DrawerItem, DrawerItemSeparator } from "../../drawer";
import { GridWithFilterRow } from "../../grid";
import { MultiSelectNormal } from "../../multiselect";
import { PanelBarContent, PanelBarItem, PanelBarNormal } from "../../panelbar";
import { ProgressBarNormal } from "../../progressbar";
import { SliderNormal } from "../../slider";
import { Step, StepList, StepperNormal } from "../../stepper";
import { SwitchChecked, SwitchNormal } from "../../switch";
import { TabStripContent, TabStripItem, TabStripLeft, TabStripNormal } from "../../tabstrip";
import { TextboxNormal } from "../../textbox";
import { ToolbarItem, ToolbarResizable, ToolbarSeparator } from "../../toolbar";
import { WindowNormal } from "../../window";

const style = `

    #test-area {
        max-width: 1440px;
    }
    .k-progressbar {
        grid-column-start: 2;
        grid-column-end: 6;
    }

    .k-slider-horizontal {
        width: 100%;
    }

    .k-window {
        position: relative;
    }
`;

export default () => (
    <>
        <style>{style}</style>
        <div id="test-area">
            <Drawer expanded
                    items={
                        <>
                            <DrawerItem text="Inbox" />
                            <DrawerItemSeparator />
                            <DrawerItem icon="bell" text="Notification" />
                            <DrawerItem icon="star" text="Favourites" />
                            <DrawerItem icon="calendar" text="Calendar" />
                        </>
                    }
                >
                <DrawerContent>
                    <div className="k-d-grid k-grid-rows k-gap-8">
                        <div>
                            <ToolbarResizable>
                                <Button icon="bold"></Button>
                                <Button>Button</Button>
                                <Button>Toggle</Button>
                                <ToolbarSeparator></ToolbarSeparator>
                                <ButtonGroup>
                                    <Button className="k-group-start" icon="align-left">Left</Button>
                                    <Button icon="align-center">Center</Button>
                                    <Button className="k-group-end" icon="align-right">Right</Button>
                                </ButtonGroup>
                                <ToolbarSeparator></ToolbarSeparator>
                                <Button themeColor="primary">Primary</Button>
                                <ToolbarSeparator></ToolbarSeparator>
                                <ToolbarItem>
                                    <label>Label:</label>
                                    <ColorPicker />
                                </ToolbarItem>
                                <ToolbarSeparator className="k-toolbar-button-separator" />
                                <Button icon="more-vertical" className="k-toolbar-overflow-button" fillMode="flat" rounded={null}></Button>
                            </ToolbarResizable>
                        </div>
                        <div className="k-d-grid k-grid-cols-2 k-gap-8">
                            <div>
                                <TabStripNormal>
                                    <TabStripContent active>
                                        <div className="k-tabstrip-wrapper">
                                            <TabStripLeft
                                                tabStripItems={
                                                    <>
                                                        <TabStripItem first active value="Inner First" />
                                                        <TabStripItem last value="Inner Second" />
                                                    </>
                                                }>
                                                <TabStripContent style={{ display: "block", marginLeft: "128px", minHeight: "68px" }}>
                                                    Left orientation inside Top orientation
                                                </TabStripContent>
                                            </TabStripLeft>
                                        </div>
                                    </TabStripContent>
                                </TabStripNormal>
                            </div>

                            <div className="k-d-grid k-grid-rows k-gap-8">

                                <BottomNavNormal themeColor="primary" border>
                                    <BottomNavItem icon="envelope" text="Normal" />
                                    <BottomNavItem icon="envelope" text="Focused" focus />
                                    <BottomNavItem icon="envelope" text="Selected" selected />
                                    <BottomNavItem icon="envelope" text="Disabled" disabled />
                                </BottomNavNormal>

                                <StepperNormal>
                                    <StepList style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                                        <Step first done valid text="1" label="Account Info with too long label" style={{ maxWidth: "33.333%" }}/>
                                        <Step current focus invalid text="2" label="Personal Info" style={{ maxWidth: "33.333%" }}/>
                                        <Step last optional text="3" label="Payment Details" style={{ maxWidth: "33.333%" }}/>
                                    </StepList>
                                    <ProgressBarNormal label={false} value="50" />
                                </StepperNormal>
                            </div>

                        </div>

                        <div className="k-d-grid k-grid-cols-3 k-gap-8">
                            <div className="k-d-grid k-grid-rows k-gap-8">
                                <div className="k-d-grid k-grid-cols-3 k-gap-2">
                                    <div><TextButton>Solid</TextButton></div>
                                    <div><TextButton fillMode="outline">Outline</TextButton></div>
                                    <div><TextButton fillMode="flat">Flat</TextButton></div>
                                    <div><TextButton themeColor="primary">Primary</TextButton></div>
                                    <div><TextButton themeColor="primary" fillMode="outline">Primary</TextButton></div>
                                    <div><TextButton themeColor="primary" fillMode="flat">Primary</TextButton></div>
                                </div>
                                <div className="k-d-grid k-grid-cols-3 k-gap-2">
                                    <div><SwitchNormal /></div>
                                    <div><SwitchChecked /></div>
                                    <div><SwitchNormal disabled /></div>
                                </div>
                            </div>
                            <div className="k-d-grid k-grid-rows k-gap-2">
                                <div><TextboxNormal placeholder="placeholder..." /></div>
                                <div><DatePickerNormal placeholder="placeholder..." /></div>
                                <div><MultiSelectNormal
                                        tags={(
                                            <>
                                                <Chip text="Chip 1" actions={ <ChipAction type="remove"/> } />
                                                <Chip text="Chip 2" actions={ <ChipAction type="remove"/> } />
                                            </>
                                        )}
                                    />
                                </div>
                            </div>
                            <div className="k-d-grid k-grid-rows k-gap-8">
                                <BreadcrumbCollapsingNone />

                                <SliderNormal />
                            </div>

                            <div className="k-d-grid k-grid-rows k-gap-8">
                                <CalendarNormal />
                            </div>
                            <div className="k-d-grid k-grid-rows k-gap-5">
                                <CardNormal />
                                <WindowNormal>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</WindowNormal>
                            </div>
                            <div>
                                <PanelBarNormal>
                                    <PanelBarItem header icon="gear" text="Root">
                                        <PanelBarContent>content</PanelBarContent>
                                    </PanelBarItem>
                                    <PanelBarItem hover header iconClass="k-image" text="Root hover">
                                        <PanelBarContent>content</PanelBarContent>
                                    </PanelBarItem>
                                    <PanelBarItem focus header iconClass="k-sprite" text="Root focus">
                                        <PanelBarContent>content</PanelBarContent>
                                    </PanelBarItem>
                                    <PanelBarItem hover focus header iconClass="k-sprite" text="Root hover&focus">
                                        <PanelBarContent>content</PanelBarContent>
                                    </PanelBarItem>
                                    <PanelBarItem disabled header text="Root disabled">
                                        <PanelBarContent>content</PanelBarContent>
                                    </PanelBarItem>
                                    <PanelBarItem selected header text="Root selected">
                                        <PanelBarContent>content</PanelBarContent>
                                    </PanelBarItem>
                                    <PanelBarItem selected hover header text="Root selected hover">
                                        <PanelBarContent>content</PanelBarContent>
                                    </PanelBarItem>
                                    <PanelBarItem selected focus header text="Root selected focus">
                                        <PanelBarContent>content</PanelBarContent>
                                    </PanelBarItem>
                                    <PanelBarItem selected hover focus header text="Root selected hover&focus">
                                        <PanelBarContent>content</PanelBarContent>
                                    </PanelBarItem>
                                </PanelBarNormal>
                            </div>
                        </div>

                        <div>
                            <GridWithFilterRow></GridWithFilterRow>
                        </div>
                    </div>
                </DrawerContent>
            </Drawer>
        </div>


    </>
);
