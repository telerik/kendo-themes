import { BottomNavItem, BottomNavNormal } from "../../bottom-nav";
import { BreadcrumbCollapsingNone } from "../../breadcrumb";
import { Button, TextButton } from "../../button";
import { ButtonGroup } from "../../button-group";
import {  Calendar, CalendarTable, CalendarCell, CalendarTableRow } from "../../calendar";
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
import { TabStripContent, TabStripItem, TabStripLeft, TabStripClosable } from "../../tabstrip";
import { TextboxNormal } from "../../textbox";
import { ToolbarItem, ToolbarResizable, ToolbarSeparator } from "../../toolbar";
import { WindowNormal } from "../../window";
import { Menu, MenuList, MenuListItem, MenuItem, MenuSeparator } from "../../menu";
import { Popup } from "../../popup";
import { TreeviewNormal, TreeviewItem } from "../../treeview";
import { ExpansionPanelExpanded, ExpansionPanelNormal } from "../../expansion-panel";

const style = `

    #test-area {
        max-width: 1240px;
        border: 2px solid red;
        padding: 0;
    }
    .grid-with-calendar {
        grid-template-columns: 400px 1fr 1fr;
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
    .k-animation-container {
        position: absolute;
        top: 100%;
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
                            <DrawerItem text="Selected" selected icon="star-outline" />
                            <DrawerItem text="Hover"hover icon="star-outline" />
                        </>
                    }
                >
                <DrawerContent>
                    <div className="k-d-grid k-grid-rows k-gap-4">
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
                                <TabStripClosable>
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
                                </TabStripClosable>
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

                        <div className="k-d-grid k-grid-cols-3 k-gap-4 grid-with-calendar">
                            <div className="k-d-grid k-grid-rows k-gap-4">
                                <div className="k-d-grid k-grid-cols-3 k-gap-4">
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
                            <div className="k-d-grid k-grid-rows k-gap-8 k-align-items-baseline">
                                <BreadcrumbCollapsingNone />

                                <SliderNormal />
                            </div>

                            <div className="k-d-grid k-grid-rows k-gap-8">
                                <Calendar className="k-calendar-range" calendarView="month" showWeek>
                                                    <CalendarTable showWeek showTableHead>
                                                        <CalendarTableRow>
                                                            <CalendarCell text="39" weekCell />
                                                            <CalendarCell empty />
                                                            <CalendarCell empty />
                                                            <CalendarCell empty />
                                                            <CalendarCell empty />
                                                            <CalendarCell empty />
                                                            <CalendarCell text="1" />
                                                            <CalendarCell text="2" weekend />
                                                        </CalendarTableRow>
                                                        <CalendarTableRow>
                                                            <CalendarCell text="40" weekCell />
                                                            <CalendarCell text="3" weekend />
                                                            <CalendarCell text="4" />
                                                            <CalendarCell text="5" />
                                                            <CalendarCell text="6" />
                                                            <CalendarCell text="7" />
                                                            <CalendarCell text="8" />
                                                            <CalendarCell text="9" weekend />
                                                        </CalendarTableRow>
                                                        <CalendarTableRow>
                                                            <CalendarCell text="41" weekCell />
                                                            <CalendarCell text="10" weekend />
                                                            <CalendarCell text="11" />
                                                            <CalendarCell text="12" today />
                                                            <CalendarCell text="13" />
                                                            <CalendarCell text="14" />
                                                            <CalendarCell text="15" />
                                                            <CalendarCell text="16" weekend />
                                                        </CalendarTableRow>
                                                        <CalendarTableRow>
                                                            <CalendarCell text="42" weekCell />
                                                            <CalendarCell text="17" weekend />
                                                            <CalendarCell text="18" />
                                                            <CalendarCell text="19" />
                                                            <CalendarCell text="20" />
                                                            <CalendarCell text="21" rangeStart selected />
                                                            <CalendarCell text="22" rangeMid />
                                                            <CalendarCell text="23" weekend rangeMid />
                                                        </CalendarTableRow>
                                                        <CalendarTableRow>
                                                            <CalendarCell text="43" weekCell />
                                                            <CalendarCell text="24" weekend rangeMid />
                                                            <CalendarCell text="25" rangeEnd focus selected />
                                                            <CalendarCell text="26" />
                                                            <CalendarCell text="27" />
                                                            <CalendarCell text="28" />
                                                            <CalendarCell text="29" />
                                                            <CalendarCell text="30" weekend />
                                                        </CalendarTableRow>
                                                        <CalendarTableRow>
                                                            <CalendarCell text="44" weekCell />
                                                            <CalendarCell text="31" weekend />
                                                            <CalendarCell empty />
                                                            <CalendarCell empty />
                                                            <CalendarCell empty />
                                                            <CalendarCell empty />
                                                            <CalendarCell empty />
                                                            <CalendarCell empty />
                                                        </CalendarTableRow>
                                                    </CalendarTable>
                                                </Calendar>
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
                        <div className="k-d-grid k-grid-cols-3 k-gap-4">
                            <div>
                                <Menu
                                    children={
                                        <>
                                            <MenuItem first text="Item 1"></MenuItem>
                                            <MenuItem showArrow arrowIconName="caret-alt-down" text="Item 2" active></MenuItem>
                                            <MenuItem showArrow arrowIconName="caret-alt-down" text="Item 3"></MenuItem>
                                        </>
                                    }
                                popup={
                                    <>
                                        <Popup className="k-menu-popup" offset={{ left: "175px", top: "auto" }}>
                                            <MenuList>
                                                <MenuListItem first text="Disabled" disabled></MenuListItem>
                                                <MenuListItem text="Normal"></MenuListItem>
                                                <MenuListItem text="Hover" hover showArrow></MenuListItem>
                                                <MenuSeparator></MenuSeparator>
                                                <MenuListItem text="Active" active showArrow></MenuListItem>
                                                <MenuListItem text="Focus" focus></MenuListItem>
                                                <MenuListItem last text="Focus & Active" active focus></MenuListItem>
                                            </MenuList>
                                        </Popup>
                                    </>
                                } />
                            </div>
                            <div>
                                <TreeviewNormal>
                                    <TreeviewItem top text="Normal" />
                                    <TreeviewItem text="Hover" hover />
                                    <TreeviewItem text="Focus" focus/>
                                    <TreeviewItem text="Hover + Focus" hover focus/>
                                    <TreeviewItem text="Selected" selected/>
                                    <TreeviewItem text="Selected + Hover" selected hover/>
                                    <TreeviewItem text="Selected + Hover + Focus" selected hover focus/>
                                    <TreeviewItem text="Selected focus" selected focus/>
                                    <TreeviewItem text="Disabled" disabled/>
                                    <TreeviewItem text="Disabled focus" disabled focus/>
                                    <TreeviewItem bottom leafClassName="k-treeview-load-more-button" text="Load more..."/>
                                </TreeviewNormal>
                            </div>
                            <div>
                                <ExpansionPanelNormal title="Collapsed panel" subtitle="Subtitle" />
                                <ExpansionPanelExpanded title="Expanded panel" subtitle="Subtitle" />
                            </div>
                        </div>

                    </div>
                </DrawerContent>
            </Drawer>
        </div>


    </>
);
