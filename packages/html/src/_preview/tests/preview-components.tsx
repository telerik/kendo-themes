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
import { ChunkProgressBarNormal, ProgressBarNormal } from "../../progressbar";
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
import { CheckboxWithLabelAfter } from "../../checkbox";
import { RadioButtonWithLabelAfter } from "../../radio";
import { InputPrefixText, InputSuffixText } from "../../input";
import { TimeSelectorAll } from "../../time-selector";
import { ChartWizardNormal } from "../../chart-wizard";
import { ListViewItem, ListViewNormal } from "../../listview";
import { ListBoxNormal } from "../../listbox";
import { FileManagerNormal } from "../../filemanager";
import { PromptSuggestions } from "../../prompt";
import { EditorNormal } from "../../editor";
import { SpreadsheetActionBar, SpreadsheetHeader, SpreadsheetNormal, SpreadsheetSheetsBar, SpreadsheetView } from "../../spreadsheet";
import { SchedulerWeek } from "../../scheduler";
import { TimelineNormalAlternating } from "../../timeline";
import { IconFloatingActionButton, IconTextFloatingActionButton, TextFloatingActionButton } from "../../fab";
import { AnimationContainer } from "../../animation-container";
import { IconNotificationClosable } from "../../notification";
import { FilterNormal } from "../../filter";
import { PivotGrid, PivotGridCell, PivotGridRow, PivotGridTable, PivotGridTbody } from "../../pivotgrid";
import { TooltipClosable } from "../../tooltip";
import { RatingNormal } from "../../rating";
import { AvatarIcon, AvatarImage, AvatarText } from "../../avatar";
import { Icon } from "../../icon";
import { BadgeNormal } from "../../badge";

const style = `

    #test-area {
        max-width: unset;
    }

    .k-drawer {
        width: 250px;
    }

    .grid-with-calendar {
        grid-template-columns: 400px 1fr 1fr 1fr;
    }

    .k-progressbar {
        grid-column-start: 2;
        grid-column-end: 6;
    }

    .k-slider-horizontal {
        width: 100%;
    }

    .k-window,
    .k-animation-container {
        position: relative;
    }

    .k-listview-header,
    .k-listview-footer,
    .k-listview-item {
        padding: 10px;
    }

     .k-listbox {
        width: 100%;
        height: auto;
        align-items: flex-start;
    }

    .k-chart-wizard {
        height: 550px;
    }

    .k-chart-wizard-property-pane .k-expander {
        max-width: 576px;
        width: 100%;
    }

    .k-spreadsheet {
        width: 100%;
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
                    <div className="k-d-grid k-grid-rows k-gap-10">
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
                        <div className="k-d-grid k-grid-cols-3 k-gap-10">
                            <div className="k-d-grid k-grid-rows k-gap-10">
                                <div><TabStripClosable>
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
                                </TabStripClosable></div>
                            </div>

                            <div className="k-d-grid k-grid-rows k-gap-10">

                                <div><BottomNavNormal themeColor="primary" border>
                                    <BottomNavItem icon="envelope" text="Normal" />
                                    <BottomNavItem icon="envelope" text="Focused" focus />
                                    <BottomNavItem icon="envelope" text="Selected" selected />
                                    <BottomNavItem icon="envelope" text="Disabled" disabled />
                                </BottomNavNormal></div>

                                <div><StepperNormal>
                                    <StepList style={{ gridColumnStart: "1", gridColumnEnd: "-1" }}>
                                        <Step first done valid text="1" label="Account Info with too long label" style={{ maxWidth: "33.333%" }}/>
                                        <Step current focus invalid text="2" label="Personal Info" style={{ maxWidth: "33.333%" }}/>
                                        <Step last optional text="3" label="Payment Details" style={{ maxWidth: "33.333%" }}/>
                                    </StepList>
                                    <ProgressBarNormal label={false} value="50" />
                                </StepperNormal></div>
                            </div>

                            <div className="k-d-grid k-grid-rows k-gap-10">
                                <div><BreadcrumbCollapsingNone /></div>
                                <div>
                                    <AnimationContainer>
                                        <IconNotificationClosable themeColor="primary" text="Closable notification with icon" />
                                    </AnimationContainer>
                                </div>
                            </div>

                        </div>

                        <div className="k-d-grid k-grid-cols-4 k-gap-10 grid-with-calendar">
                            <div className="k-d-grid k-grid-rows k-gap-10">
                                <div className="k-d-grid k-grid-cols-3 k-gap-10">
                                    <div><TextButton>Solid</TextButton></div>
                                    <div><TextButton fillMode="outline">Outline</TextButton></div>
                                    <div><TextButton fillMode="flat">Flat</TextButton></div>
                                    <div><TextButton themeColor="primary">Primary</TextButton></div>
                                    <div><TextButton themeColor="primary" fillMode="outline">Primary</TextButton></div>
                                    <div><TextButton themeColor="primary" fillMode="flat">Primary</TextButton></div>
                                </div>
                                <div>
                                    <ButtonGroup>
                                        <Button className="k-group-start">Button 1</Button>
                                        <Button>Button 2</Button>
                                        <Button className="k-group-end">Button 3</Button>
                                    </ButtonGroup>
                                </div>
                                <div className="k-d-grid k-grid-cols-3 k-gap-10">
                                    <div><TextFloatingActionButton themeColor="primary" /></div>
                                    <div><IconFloatingActionButton themeColor="primary" /></div>
                                    <div><IconTextFloatingActionButton themeColor="primary" /></div>
                                </div>

                            </div>
                            <div className="k-d-grid k-grid-rows k-gap-10">
                                <div>
                                    <TextboxNormal value="Prefix & Suffix"
                                        prefix={
                                            <>
                                                <InputPrefixText>https://</InputPrefixText>
                                            </>
                                        }
                                        suffix={
                                            <>
                                                <InputSuffixText>.com</InputSuffixText>
                                            </>
                                        }
                                    />
                                </div>
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
                                <div className="k-d-grid k-grid-cols-2 k-gap-10">
                                    <div className="k-px-2">
                                        <CheckboxWithLabelAfter>Checkbox</CheckboxWithLabelAfter>
                                    </div>
                                    <div>
                                       <RadioButtonWithLabelAfter>Radio</RadioButtonWithLabelAfter>
                                    </div>
                                </div>
                            </div>
                            <div className="k-d-grid k-grid-rows k-gap-10">
                                <div><ProgressBarNormal value="50" labelPosition="center" /></div>
                                <div><ChunkProgressBarNormal progress={2} /></div>
                                <div><SliderNormal /></div>
                                <div className="k-d-grid k-grid-cols-3 k-gap-2">
                                    <div><SwitchNormal /></div>
                                    <div><SwitchChecked /></div>
                                    <div><SwitchNormal disabled /></div>
                                </div>

                            </div>

                            <div className="k-d-grid k-grid-rows k-gap-10">
                                <div className="k-d-grid k-grid-cols-4 k-gap-2">
                                    <AvatarIcon fillMode="outline" themeColor="primary" border>
                                        <Icon icon="x" />
                                    </AvatarIcon>
                                    <AvatarIcon themeColor="primary">
                                        <Icon icon="x" />
                                    </AvatarIcon>
                                    <AvatarText themeColor="primary">JO</AvatarText>
                                    <AvatarImage>
                                        <img src="/packages/html/assets/avatar.jpg" />
                                    </AvatarImage>
                                </div>
                                <div className="k-d-grid k-grid-cols-3 k-gap-2">
                                    <div><BadgeNormal themeColor="primary">Rectangle</BadgeNormal></div>
                                    <div><BadgeNormal themeColor="primary" rounded="medium">Rounded</BadgeNormal></div>
                                    <div><BadgeNormal themeColor="primary" rounded="full">Pill</BadgeNormal></div>
                                </div>
                                <div><RatingNormal value={3.5} /></div>
                                <div>
                                    <AnimationContainer>
                                        <TooltipClosable callout="top" />
                                    </AnimationContainer>
                                </div>
                            </div>

                            <div>
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

                            <div>
                                <TimeSelectorAll />
                            </div>

                            <div className="k-d-grid k-grid-rows k-gap-10">
                                <CardNormal />
                                <WindowNormal>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</WindowNormal>
                            </div>

                            <div>
                                 <Popup className="k-prompt-popup">
                                    <PromptSuggestions />
                                </Popup>
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
                            <div>
                                <ExpansionPanelNormal title="Collapsed panel" subtitle="Normal" />
                                <ExpansionPanelNormal title="Collapsed panel" hover subtitle="Hover" />
                                <ExpansionPanelNormal title="Collapsed panel" focus subtitle="Focus" />
                                <ExpansionPanelNormal title="Collapsed panel" hover focus subtitle="Hover & Focus" />
                                <ExpansionPanelExpanded title="Expanded panel" subtitle="Subtitle" />
                            </div>

                            <div>
                                <ListViewNormal
                                    header
                                    footer>
                                    <ListViewItem><div>Listview Item</div></ListViewItem>
                                    <ListViewItem focus><div>Focus Item</div></ListViewItem>
                                    <ListViewItem selected><div>Selected Item</div></ListViewItem>
                                    <ListViewItem focus selected><div>Focus Selected Item</div></ListViewItem>
                                </ListViewNormal>
                            </div>

                            <div>
                                <ListBoxNormal />
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
                                        <Popup className="k-menu-popup">
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

                            <div className="k-col-span-2">
                                <ChartWizardNormal />
                            </div>

                        </div>

                        <div>
                            <GridWithFilterRow></GridWithFilterRow>
                        </div>

                        <div>
                             <FileManagerNormal />
                        </div>

                        <div className="k-d-grid k-grid-cols-2 k-gap-10">
                            <div>
                                <SpreadsheetNormal>
                                    <SpreadsheetHeader
                                        menuItems={[
                                            <MenuItem first text="File" active />,
                                            <MenuItem text="Home" />,
                                            <MenuItem text="Insert" />,
                                            <MenuItem text="Format" />,
                                            <MenuItem text="Formulas" />,
                                            <MenuItem text="Data" />,
                                            <MenuItem last text="View" />,
                                        ]}
                                        toolbarItems={[
                                            <Button icon="file-add" fillMode="flat"></Button>,
                                            <Button icon="folder-add" fillMode="flat"></Button>,
                                            <ToolbarSeparator></ToolbarSeparator>,
                                            <Button icon="download" fillMode="flat"></Button>,
                                            <ToolbarSeparator></ToolbarSeparator>,
                                            <Button icon="print" fillMode="flat"></Button>
                                        ]}
                                    />
                                    <SpreadsheetActionBar />
                                    <SpreadsheetView
                                        selection={
                                            <div className="k-spreadsheet-selection k-single-selection" style={{ width: "101px", height: "31px", top: "125px", left: "30px" }} />
                                        }
                                        rowHeaderSelection={{ 3: "partial" }}
                                        activeCellIndex={8}
                                    />
                                    <SpreadsheetSheetsBar />
                                </SpreadsheetNormal>
                            </div>

                            <div className="k-d-grid k-grid-rows k-gap-10">
                                <div>
                                    <EditorNormal>
                                        <p className="ProseMirror">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus mollitia obcaecati dignissimos beatae ipsam voluptatem pariatur consectetur culpa asperiores veniam?</p>
                                    </EditorNormal>
                                </div>
                                <div>
                                    <SchedulerWeek />
                                </div>
                            </div>
                        </div>

                        <div className="k-d-grid k-grid-cols-2 k-gap-10">
                            <div>
                                <TimelineNormalAlternating />
                            </div>
                            <div className="k-d-grid k-grid-rows k-gap-10">
                                <div>
                                    <FilterNormal />
                                </div>
                                <div>
                                    <PivotGrid
                                        style={{ height: "550px", gridTemplateColumns: "150px auto", gridTemplateRows: "242px auto" }}
                                        columnHeaders={
                                            <PivotGridTable>
                                                <colgroup>
                                                    <col width="120" />
                                                    <col width="120" />
                                                    <col width="120" />
                                                    <col width="120" />
                                                    <col width="120" />
                                                    <col width="120" />
                                                    <col width="120" />
                                                    <col width="120" />
                                                    <col width="120" />
                                                    <col width="120" />
                                                </colgroup>
                                                <PivotGridTbody>
                                                    <PivotGridRow columnTotal >
                                                        <PivotGridCell as="th" colSpan={9} toggle="up" headerTitle="All Periods" headerRootCell />
                                                        <PivotGridCell as="th" colSpan={1} rowSpan={4} headerTitle="All Periods" headerRootCell headerTotalCell />
                                                    </PivotGridRow>
                                                    <PivotGridRow>
                                                        <PivotGridCell as="th" colSpan={6} toggle="up" headerTitle="CY 2010" />
                                                        <PivotGridCell as="th" colSpan={1} rowSpan={3} toggle="down" headerTitle="CY 2011" />
                                                        <PivotGridCell as="th" colSpan={1} rowSpan={3} toggle="down" headerTitle="CY 2012" />
                                                        <PivotGridCell as="th" colSpan={1} rowSpan={3} toggle="down" headerTitle="CY 2013" />
                                                    </PivotGridRow>
                                                    <PivotGridRow>
                                                        <PivotGridCell as="th" colSpan={1} toggle="up" headerTitle="H2 CY 2010" />
                                                        <PivotGridCell as="th" colSpan={5} rowSpan={2} headerTitle="H2 CY 2010" />
                                                    </PivotGridRow>
                                                    <PivotGridRow>
                                                        <PivotGridCell as="th" colSpan={1} toggle="down" headerTitle="Q4 CY 2010" />
                                                    </PivotGridRow>
                                                    <PivotGridRow columnTotal >
                                                        <PivotGridCell as="th" colSpan={1} rowSpan={2} headerTitle="All Products" toggle="down" headerRootCell />
                                                        <PivotGridCell as="th" colSpan={4} headerTitle="All Products" toggle="up" headerRootCell />
                                                        <PivotGridCell as="th" colSpan={1} rowSpan={2} headerTitle="All Products" headerRootCell />
                                                        <PivotGridCell as="th" colSpan={1} rowSpan={2} headerTitle="All Products" toggle="down" headerRootCell />
                                                        <PivotGridCell as="th" colSpan={1} rowSpan={2} headerTitle="All Products" toggle="down" headerRootCell />
                                                        <PivotGridCell as="th" colSpan={1} rowSpan={2} headerTitle="All Products" toggle="down" headerRootCell />
                                                        <PivotGridCell as="th" colSpan={1} rowSpan={2} headerTitle="All Products" toggle="down" headerRootCell headerTotalCell />
                                                    </PivotGridRow>
                                                    <PivotGridRow>
                                                        <PivotGridCell as="th" colSpan={1} headerTitle="Accessories" className="k-first" />
                                                        <PivotGridCell as="th" colSpan={1} headerTitle="Bikes" />
                                                        <PivotGridCell as="th" colSpan={1} headerTitle="Clothing" />
                                                        <PivotGridCell as="th" colSpan={1} headerTitle="Components" />
                                                    </PivotGridRow>
                                                </PivotGridTbody>
                                            </PivotGridTable>
                                        }

                                        rowHeaders={
                                            <PivotGridTable>
                                                <colgroup>
                                                    <col />
                                                    <col />
                                                </colgroup>
                                                <PivotGridTbody>
                                                    <PivotGridRow>
                                                        <PivotGridCell as="th" colSpan={1} rowSpan={9} toggle="up" headerTitle="All Geographies" headerRootCell rowTotalCell />
                                                        <PivotGridCell as="th" colSpan={1} headerTitle="Austell" />
                                                    </PivotGridRow>
                                                    <PivotGridRow>
                                                        <PivotGridCell as="th" colSpan={1} headerTitle="Biloxi" />
                                                    </PivotGridRow>
                                                    <PivotGridRow>
                                                        <PivotGridCell as="th" colSpan={1} headerTitle="Braintree" />
                                                    </PivotGridRow>
                                                    <PivotGridRow>
                                                        <PivotGridCell as="th" colSpan={1} headerTitle="Casper" />
                                                    </PivotGridRow>
                                                    <PivotGridRow>
                                                        <PivotGridCell as="th" colSpan={1} headerTitle="Clearwater" />
                                                    </PivotGridRow>
                                                    <PivotGridRow>
                                                        <PivotGridCell as="th" colSpan={1} headerTitle="Destin" />
                                                    </PivotGridRow>
                                                    <PivotGridRow>
                                                        <PivotGridCell as="th" colSpan={1} headerTitle="Euclid" />
                                                    </PivotGridRow>
                                                    <PivotGridRow>
                                                        <PivotGridCell as="th" colSpan={1} headerTitle="Everett" />
                                                    </PivotGridRow>
                                                    <PivotGridRow>
                                                        <PivotGridCell as="th" colSpan={1} headerTitle="Fort Wayne" />
                                                    </PivotGridRow>
                                                    <PivotGridRow>
                                                        <PivotGridCell as="th" colSpan={2} headerTitle="All Geographies" headerTotalCell />
                                                    </PivotGridRow>
                                                </PivotGridTbody>
                                            </PivotGridTable>
                                        }
                                    >
                                        <PivotGridTable style={{ width: "1200px" }}>
                                            <colgroup>
                                                <col width="120" />
                                                <col width="120" />
                                                <col width="120" />
                                                <col width="120" />
                                                <col width="120" />
                                                <col width="120" />
                                                <col width="120" />
                                                <col width="120" />
                                                <col width="120" />
                                                <col width="120" />
                                            </colgroup>
                                            <PivotGridTbody>
                                                <PivotGridRow>
                                                    <PivotGridCell as="td" colSpan={1} content="$514.14" />
                                                    <PivotGridCell as="td" colSpan={1} content="$2.02" />
                                                    <PivotGridCell as="td" colSpan={1} content="$508.12" />
                                                    <PivotGridCell as="td" colSpan={1} content="$4.00" />
                                                    <PivotGridCell as="td" colSpan={1} content="" />
                                                    <PivotGridCell as="td" colSpan={1} content="$514.14" />
                                                    <PivotGridCell as="td" colSpan={1} content="$3682.86" />
                                                    <PivotGridCell as="td" colSpan={1} content="$2451.14" />
                                                    <PivotGridCell as="td" colSpan={1} content="$2919.53" />
                                                    <PivotGridCell as="td" colSpan={1} content="$10567.67" totalCell />
                                                </PivotGridRow>
                                                <PivotGridRow>
                                                    <PivotGridCell as="td" colSpan={1} content="$344.69" />
                                                    <PivotGridCell as="td" colSpan={1} content="$2.52" />
                                                    <PivotGridCell as="td" colSpan={1} content="$298.45" />
                                                    <PivotGridCell as="td" colSpan={1} content="$7.47" />
                                                    <PivotGridCell as="td" colSpan={1} content="$36.25" />
                                                    <PivotGridCell as="td" colSpan={1} content="$344.69" />
                                                    <PivotGridCell as="td" colSpan={1} content="$1461.20" />
                                                    <PivotGridCell as="td" colSpan={1} content="$105.70" />
                                                    <PivotGridCell as="td" colSpan={1} content="" />
                                                    <PivotGridCell as="td" colSpan={1} content="$1911.60" totalCell />
                                                </PivotGridRow>
                                                <PivotGridRow>
                                                    <PivotGridCell as="td" colSpan={1} content="$96.89" />
                                                    <PivotGridCell as="td" colSpan={1} content="" />
                                                    <PivotGridCell as="td" colSpan={1} content="$96.17" />
                                                    <PivotGridCell as="td" colSpan={1} content="$0.72" />
                                                    <PivotGridCell as="td" colSpan={1} content="" />
                                                    <PivotGridCell as="td" colSpan={1} content="$96.89" />
                                                    <PivotGridCell as="td" colSpan={1} content="$719.27" />
                                                    <PivotGridCell as="td" colSpan={1} content="" />
                                                    <PivotGridCell as="td" colSpan={1} content="" />
                                                    <PivotGridCell as="td" colSpan={1} content="$816.16" totalCell />
                                                </PivotGridRow>
                                                <PivotGridRow>
                                                    <PivotGridCell as="td" colSpan={1} content="$1070.34" />
                                                    <PivotGridCell as="td" colSpan={1} content="$3.03" />
                                                    <PivotGridCell as="td" colSpan={1} content="$1064.62" />
                                                    <PivotGridCell as="td" colSpan={1} content="$2.69" />
                                                    <PivotGridCell as="td" colSpan={1} content="" />
                                                    <PivotGridCell as="td" colSpan={1} content="$1070.34" />
                                                    <PivotGridCell as="td" colSpan={1} content="$4671.39" />
                                                    <PivotGridCell as="td" colSpan={1} content="$6621.86" />
                                                    <PivotGridCell as="td" colSpan={1} content="$5156.51" />
                                                    <PivotGridCell as="td" colSpan={1} content="$17520.10" totalCell />
                                                </PivotGridRow>
                                                <PivotGridRow>
                                                    <PivotGridCell as="td" colSpan={1} content="$514.14" />
                                                    <PivotGridCell as="td" colSpan={1} content="$2.02" />
                                                    <PivotGridCell as="td" colSpan={1} content="$508.12" />
                                                    <PivotGridCell as="td" colSpan={1} content="$4.00" />
                                                    <PivotGridCell as="td" colSpan={1} content="" />
                                                    <PivotGridCell as="td" colSpan={1} content="$514.14" />
                                                    <PivotGridCell as="td" colSpan={1} content="$3682.86" />
                                                    <PivotGridCell as="td" colSpan={1} content="$2451.14" />
                                                    <PivotGridCell as="td" colSpan={1} content="$2919.53" />
                                                    <PivotGridCell as="td" colSpan={1} content="$10567.67" totalCell />
                                                </PivotGridRow>
                                                <PivotGridRow>
                                                    <PivotGridCell as="td" colSpan={1} content="$344.69" />
                                                    <PivotGridCell as="td" colSpan={1} content="$2.52" />
                                                    <PivotGridCell as="td" colSpan={1} content="$298.45" />
                                                    <PivotGridCell as="td" colSpan={1} content="$7.47" />
                                                    <PivotGridCell as="td" colSpan={1} content="$36.25" />
                                                    <PivotGridCell as="td" colSpan={1} content="$344.69" />
                                                    <PivotGridCell as="td" colSpan={1} content="$1461.20" />
                                                    <PivotGridCell as="td" colSpan={1} content="$105.70" />
                                                    <PivotGridCell as="td" colSpan={1} content="" />
                                                    <PivotGridCell as="td" colSpan={1} content="$1911.60" totalCell />
                                                </PivotGridRow>
                                                <PivotGridRow>
                                                    <PivotGridCell as="td" colSpan={1} content="$96.89" />
                                                    <PivotGridCell as="td" colSpan={1} content="" />
                                                    <PivotGridCell as="td" colSpan={1} content="$96.17" />
                                                    <PivotGridCell as="td" colSpan={1} content="$0.72" />
                                                    <PivotGridCell as="td" colSpan={1} content="" />
                                                    <PivotGridCell as="td" colSpan={1} content="$96.89" />
                                                    <PivotGridCell as="td" colSpan={1} content="$719.27" />
                                                    <PivotGridCell as="td" colSpan={1} content="" />
                                                    <PivotGridCell as="td" colSpan={1} content="" />
                                                    <PivotGridCell as="td" colSpan={1} content="$816.16" totalCell />
                                                </PivotGridRow>
                                                <PivotGridRow>
                                                    <PivotGridCell as="td" colSpan={1} content="$1070.34" />
                                                    <PivotGridCell as="td" colSpan={1} content="$3.03" />
                                                    <PivotGridCell as="td" colSpan={1} content="$1064.62" />
                                                    <PivotGridCell as="td" colSpan={1} content="$2.69" />
                                                    <PivotGridCell as="td" colSpan={1} content="" />
                                                    <PivotGridCell as="td" colSpan={1} content="$1070.34" />
                                                    <PivotGridCell as="td" colSpan={1} content="$4671.39" />
                                                    <PivotGridCell as="td" colSpan={1} content="$6621.86" />
                                                    <PivotGridCell as="td" colSpan={1} content="$5156.51" />
                                                    <PivotGridCell as="td" colSpan={1} content="$17520.10" totalCell />
                                                </PivotGridRow>
                                                <PivotGridRow>
                                                    <PivotGridCell as="td" colSpan={1} content="$96.89" />
                                                    <PivotGridCell as="td" colSpan={1} content="" />
                                                    <PivotGridCell as="td" colSpan={1} content="$96.17" />
                                                    <PivotGridCell as="td" colSpan={1} content="$0.72" />
                                                    <PivotGridCell as="td" colSpan={1} content="" />
                                                    <PivotGridCell as="td" colSpan={1} content="$96.89" />
                                                    <PivotGridCell as="td" colSpan={1} content="$719.27" />
                                                    <PivotGridCell as="td" colSpan={1} content="" />
                                                    <PivotGridCell as="td" colSpan={1} content="" />
                                                    <PivotGridCell as="td" colSpan={1} content="$816.16" totalCell />
                                                </PivotGridRow>
                                                <PivotGridRow>
                                                    <PivotGridCell as="td" colSpan={1} content="$9336.89" totalCell />
                                                    <PivotGridCell as="td" colSpan={1} content="$4719.27" totalCell />
                                                    <PivotGridCell as="td" colSpan={1} content="$9687.17" totalCell />
                                                    <PivotGridCell as="td" colSpan={1} content="$7680.72" totalCell />
                                                    <PivotGridCell as="td" colSpan={1} content="$4719.27" totalCell />
                                                    <PivotGridCell as="td" colSpan={1} content="$9546.89" totalCell />
                                                    <PivotGridCell as="td" colSpan={1} content="$4719.27" totalCell />
                                                    <PivotGridCell as="td" colSpan={1} content="$4719.27" totalCell />
                                                    <PivotGridCell as="td" colSpan={1} content="$4719.27" totalCell />
                                                    <PivotGridCell as="td" colSpan={1} content="$88816.16" totalCell />
                                                </PivotGridRow>
                                            </PivotGridTbody>
                                        </PivotGridTable>
                                    </PivotGrid>
                                </div>
                            </div>
                        </div>

                    </div>
                </DrawerContent>
            </Drawer>
        </div>


    </>
);
