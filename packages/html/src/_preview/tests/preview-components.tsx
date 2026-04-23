import { BottomNavItem } from "../../bottom-nav/bottom-nav-item";
import { BottomNavNormal } from "../../bottom-nav/templates/bottom-nav-normal";
import { BreadcrumbCollapsingNone } from "../../breadcrumb/templates/breadcrumb-collapsing-none";
import { Button } from "../../button/button.spec";
import { TextButton } from "../../button/templates/text-button";
import { ButtonGroup } from "../../button-group/button-group.spec";
import { Calendar } from "../../calendar/calendar.spec";
import { CalendarTable } from "../../calendar/calendar-table";
import { CalendarCell } from "../../calendar/calendar-cell";
import { CalendarTableRow } from "../../calendar/calendar-table-row.spec";
import { CalendarInfiniteNormal } from "../../calendar/templates/calendar-infinite-normal";
import { CardNormal } from "../../card/templates/card-normal";
import { Chip } from "../../chip/chip.spec";
import { ChipAction } from "../../chip/chip-action";
import { ColorPicker } from "../../colorpicker/colorpicker.spec";
import { DatePickerNormal } from "../../datepicker/templates/datepicker-normal";
import { Drawer } from "../../drawer/drawer.spec";
import { DrawerContent } from "../../drawer/drawer-content.spec";
import { DrawerItem } from "../../drawer/drawer-item.spec";
import { DrawerItemSeparator } from "../../drawer/drawer-item-separator";
import { GridWithFilterRow } from "../../grid/templates/grid-with-filter-row";
import { DropdownListPopup } from "../../dropdownlist/templates/dropdownlist-popup";
import { MultiSelectNormal } from "../../multiselect/templates/multiselect-normal";
import { PanelBarContent } from "../../panelbar/panelbar-content";
import { PanelBarItem } from "../../panelbar/panelbar-item";
import { PanelBarNormal } from "../../panelbar/templates/panelbar-normal";
import { ColorEditorNormal } from "../../coloreditor/templates/coloreditor-normal";
import { ColorEditorPaletteGroup } from "../../coloreditor/templates/coloreditor-palette-group";
import { ChunkProgressBarNormal } from "../../progressbar/templates/chunk-progressbar-normal";
import { ProgressBarNormal } from "../../progressbar/templates/progressbar-normal";
import { SliderNormal } from "../../slider/templates/slider-normal";
import { Step } from "../../stepper/step";
import { StepList } from "../../stepper/step-list";
import { StepperNormal } from "../../stepper/templates/stepper-normal";
import { SwitchChecked } from "../../switch/templates/switch-checked";
import { SwitchNormal } from "../../switch/templates/switch-normal";
import { TabStripContent } from "../../tabstrip/tabstrip-content";
import { TabStripItem } from "../../tabstrip/tabstrip-item";
import { TabStripLeft } from "../../tabstrip/templates/tabstrip-left";
import { TabStripClosable } from "../../tabstrip/templates/tabstrip-closable";
import { TextboxNormal } from "../../textbox/templates/textbox-normal";
import { ToolbarItem } from "../../toolbar/toolbar-item.spec";
import { ToolbarResizable } from "../../toolbar/templates/toolbar-resizable";
import { ToolbarSeparator } from "../../toolbar/toolbar-separator";
import { WindowNormal } from "../../window/templates/window-normal";
import { Menu } from "../../menu/menu.spec";
import { MenuList } from "../../menu/menu-list.spec";
import { MenuListItem } from "../../menu/menu-list-item.spec";
import { MenuItem } from "../../menu/menu-item.spec";
import { MenuSeparator } from "../../menu/menu-separator.spec";
import { Popup } from "../../popup/popup.spec";
import { TreeviewNormal } from "../../treeview/templates/treeview-normal";
import { TreeviewItem } from "../../treeview/treeview-item.spec";
import { ExpansionPanelExpanded } from "../../expansion-panel/templates/expansion-panel-expanded";
import { ExpansionPanelNormal } from "../../expansion-panel/templates/expansion-panel-normal";
import { CheckboxWithLabelAfter } from "../../checkbox/templates/checkbox-with-label-after";
import { RadioButtonWithLabelAfter } from "../../radio/templates/radio-with-label-after";
import { InputPrefixText } from "../../input/input-prefix-text";
import { InputSuffixText } from "../../input/input-suffix-text";
import { TimeSelectorAll } from "../../time-selector/templates/time-selector-all";
import { TimePickerNormal } from "../../timepicker/templates/timepicker-normal";
import { FilterMenuNormal } from "../../column-menu/templates/filter-menu-normal";
import { ColumnMenu, ColumnMenuItemWrapper, ColumnMenuItem, ColumnMenuExpander, ColumnList, ColumnListItem } from "../../column-menu";
import { ChartWizardNormal } from "../../chart-wizard/templates/chart-wizard-normal";
import { ListViewItem } from "../../listview/listview-item.spec";
import { ListViewNormal } from "../../listview/templates/listview-normal";
import { ListBoxNormal } from "../../listbox/templates/listbox-normal";
import { FileManagerNormal } from "../../filemanager/templates/filemanager-normal";
import { PromptSuggestions } from "../../prompt/templates/prompt-suggestions";
import { EditorNormal } from "../../editor/templates/editor-normal";
import { SpreadsheetActionBar } from "../../spreadsheet/spreadsheet-action-bar";
import { SpreadsheetHeader } from "../../spreadsheet/spreadsheet-header";
import { SpreadsheetNormal } from "../../spreadsheet/templates/spreadsheet-normal";
import { SpreadsheetSheetsBar } from "../../spreadsheet/spreadsheet-sheets-bar";
import { SpreadsheetView } from "../../spreadsheet/spreadsheet-view";
import { SchedulerWeek } from "../../scheduler/templates/scheduler-week";
import { TimelineNormalAlternating } from "../../timeline/templates/timeline-normal-alternating";
import { IconFloatingActionButton } from "../../fab/templates/icon-fab";
import { IconTextFloatingActionButton } from "../../fab/templates/icon-text-fab";
import { TextFloatingActionButton } from "../../fab/templates/text-fab";
import { AnimationContainer } from "../../animation-container/animation-container.spec";
import { IconNotificationClosable } from "../../notification/templates/icon-notification-closable";
import { FilterNormal } from "../../filter/templates/filter-normal";
import { PivotGrid } from "../../pivotgrid/pivotgrid.spec";
import { PivotGridCell } from "../../pivotgrid/pivotgrid-cell";
import { PivotGridRow } from "../../pivotgrid/pivotgrid-row";
import { PivotGridTable } from "../../pivotgrid/pivotgrid-table";
import { PivotGridTbody } from "../../pivotgrid/pivotgrid-tbody";
import { TooltipClosable } from "../../tooltip/templates/tooltip-closable";
import { RatingNormal } from "../../rating/templates/rating-normal";
import { AvatarIcon } from "../../avatar/templates/avatar-icon";
import { AvatarImage } from "../../avatar/templates/avatar-image";
import { AvatarText } from "../../avatar/templates/avatar-text";
import { Icon } from "../../icon/icon.spec";
import { BadgeNormal } from "../../badge/templates/badge-normal";
import { PromptBoxLineModeMulti } from "../../prompt-box/templates/prompt-box-multi";
import { ChatNormal } from "../../chat/templates/chat-normal";
import { Suggestion, SuggestionGroup } from "../../suggestion";
import { ComboboxNormal } from "../../combobox/templates/combobox-normal";
import { DropzoneNormal } from "../../dropzone/templates/dropzone-normal";
import { LoaderNormal } from "../../loader/templates/loader-normal";
import { SmartBoxNormal } from "../../smart-box/templates/smart-box-normal";
import { MaskedTextboxNormal } from "../../maskedtextbox/templates/maskedtextbox-normal";
import { TextMenuButton } from "../../menu-button/templates/text-menu-button";
import { NumericTextboxNormal } from "../../numerictextbox/templates/numerictextbox-normal";
import { OneTimePasswordNormal } from "../../otp/templates/otp-normal";
import { SearchboxNormal } from "../../searchbox/templates/searchbox-normal";
import { SegmentedControlNormal } from "../../segmented-control/templates/segmented-control-normal";
import { TextSplitButton } from "../../split-button/templates/text-split-button";
import { TextareaNormal } from "../../textarea/templates/textarea-normal";
import { UploadNormal } from "../../upload/templates/upload-normal";
import { ChartDemo } from "../../chart";

const style = `

    #test-area {
        max-width: unset;
        padding: 0;
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

    .k-chart {
        height: 400px;
    }

    .k-gauge {
        display: inline-block;
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

    .preview-label {
        font-size: 10px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #888;
        margin-bottom: 4px;
    }

    .k-chat {
        height: 500px;
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
                    <div className="k-d-grid k-grid-rows k-gap-10 k-p-10">
                        {/* --- Inputs --- */}
                        <div className="k-d-grid k-grid-cols-4 k-gap-10">
                            <div>
                                <div className="preview-label">Textbox</div>
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
                            <div>
                                <div className="preview-label">NumericTextbox</div>
                                <NumericTextboxNormal />
                            </div>
                            <div>
                                <div className="preview-label">Combobox</div>
                                <ComboboxNormal placeholder="Combobox..." />
                            </div>
                            <div>
                                <div className="preview-label">Searchbox</div>
                                <SearchboxNormal />
                            </div>
                        </div>

                        <div className="k-d-grid k-grid-cols-4 k-gap-10">
                            <div className="k-d-grid k-grid-rows k-gap-5">
                                <div>
                                    <div className="preview-label">DatePicker</div>
                                    <DatePickerNormal placeholder="placeholder..." />
                                </div>
                                <div>
                                    <div className="preview-label">OTP</div>
                                    <OneTimePasswordNormal />
                                </div>
                                <div>
                                    <div className="preview-label">ColorPicker</div>
                                    <ColorPicker />
                                </div>
                            </div>
                            <div className="k-d-grid k-grid-rows k-gap-5">
                                <div>
                                    <div className="preview-label">MultiSelect</div>
                                    <MultiSelectNormal
                                        tags={(
                                            <>
                                                <Chip text="Chip 1" actions={ <ChipAction type="remove"/> } />
                                                <Chip text="Chip 2" actions={ <ChipAction type="remove"/> } />
                                            </>
                                        )}
                                    />
                                </div>
                                <div>
                                    <div className="preview-label">MaskedTextbox</div>
                                    <MaskedTextboxNormal placeholder="MaskedTextbox..." />
                                </div>
                                <div>
                                    <div className="preview-label">Textarea</div>
                                    <TextareaNormal placeholder="Textarea..." />
                                </div>
                            </div>
                            <div className="k-d-grid k-grid-rows k-gap-5">
                                <div>
                                    <div className="preview-label">SmartBox</div>
                                    <SmartBoxNormal />
                                </div>
                                <div>
                                    <div className="preview-label">PromptBox</div>
                                    <PromptBoxLineModeMulti />
                                </div>
                            </div>
                            <div className="k-d-grid k-grid-rows k-gap-10">
                                <div className="k-d-grid k-grid-cols-2 k-gap-10">
                                    <div className="k-d-grid k-grid-rows k-px-2">
                                        <div className="preview-label">Checkbox</div>
                                        <div><CheckboxWithLabelAfter>Checkbox</CheckboxWithLabelAfter></div>
                                        <div><CheckboxWithLabelAfter checked id="cb-label-after-checked">Checked</CheckboxWithLabelAfter></div>
                                    </div>
                                    <div className="k-d-grid k-grid-rows k-px-2">
                                        <div className="preview-label">RadioButton</div>
                                        <div><RadioButtonWithLabelAfter>Radio</RadioButtonWithLabelAfter></div>
                                        <div><RadioButtonWithLabelAfter checked id="radio-checked">Checked</RadioButtonWithLabelAfter></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="preview-label">Rating</div>
                                    <RatingNormal value={3.5} />
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="k-d-grid k-grid-cols-4 k-gap-10">
                            <div className="k-d-grid k-grid-rows">
                                <div className="preview-label">Button Base</div>
                                <div className="k-d-grid k-grid-cols-3 k-gap-10">
                                    <div><TextButton>Solid</TextButton></div>
                                    <div><TextButton fillMode="outline">Outline</TextButton></div>
                                    <div><TextButton fillMode="flat">Flat</TextButton></div>
                                </div>
                            </div>
                            <div className="k-d-grid k-grid-rows">
                                <div className="preview-label">Button Primary</div>
                                <div className="k-d-grid k-grid-cols-3 k-gap-10">
                                    <div><TextButton themeColor="primary">Primary</TextButton></div>
                                    <div><TextButton themeColor="primary" fillMode="outline">Primary</TextButton></div>
                                    <div><TextButton themeColor="primary" fillMode="flat">Primary</TextButton></div>
                                </div>
                            </div>
                            <div className="k-d-grid k-grid-rows">
                                <div className="preview-label">Button Secondary</div>
                                <div className="k-d-grid k-grid-cols-3 k-gap-10">
                                    <div><TextButton themeColor="secondary">Secondary</TextButton></div>
                                    <div><TextButton themeColor="secondary" fillMode="outline">Secondary</TextButton></div>
                                    <div><TextButton themeColor="secondary" fillMode="flat">Secondary</TextButton></div>
                                </div>
                            </div>
                            <div className="k-d-grid k-grid-rows">
                                <div className="preview-label">Button Tertiary</div>
                                <div className="k-d-grid k-grid-cols-3 k-gap-10">
                                    <div><TextButton themeColor="tertiary">Tertiary</TextButton></div>
                                    <div><TextButton themeColor="tertiary" fillMode="outline">Tertiary</TextButton></div>
                                    <div><TextButton themeColor="tertiary" fillMode="flat">Tertiary</TextButton></div>
                                </div>
                            </div>
                            <div className="k-d-grid k-grid-cols-2 k-gap-10">
                                <div>
                                    <div className="preview-label">SplitButton</div>
                                    <TextSplitButton>Split Button</TextSplitButton>
                                </div>
                                <div>
                                    <div className="preview-label">MenuButton</div>
                                    <TextMenuButton>Menu Button</TextMenuButton>
                                </div>
                            </div>
                            <div>
                                <div className="preview-label">SegmentedControl</div>
                                <SegmentedControlNormal thumbStyles={{ width: "50%" }} />
                            </div>
                            <div>
                                <div className="preview-label">ButtonGroup</div>
                                <ButtonGroup>
                                    <Button className="k-group-start">Button 1</Button>
                                    <Button>Button 2</Button>
                                    <Button className="k-group-end">Button 3</Button>
                                </ButtonGroup>
                            </div>
                            <div className="k-d-grid k-grid-rows">
                                <div className="preview-label">FloatingActionButton</div>
                                <div className="k-d-grid k-grid-cols-3 k-gap-10">
                                    <div><TextFloatingActionButton themeColor="primary" /></div>
                                    <div><IconFloatingActionButton themeColor="primary" /></div>
                                    <div><IconTextFloatingActionButton themeColor="primary" /></div>
                                </div>
                            </div>
                            <div className="k-d-grid k-grid-cols-3 k-gap-2">
                                <div className="preview-label" style={{ gridColumn: "1 / -1" }}>Switch</div>
                                <div><SwitchNormal /></div>
                                <div><SwitchChecked /></div>
                                <div><SwitchNormal disabled /></div>
                            </div>
                            <div className="k-d-grid k-grid-cols-4 k-gap-2">
                                <div className="preview-label" style={{ gridColumn: "1 / -1" }}>Avatar</div>
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
                                <div className="preview-label" style={{ gridColumn: "1 / -1" }}>Badge</div>
                                <div><BadgeNormal themeColor="primary">Rectangle</BadgeNormal></div>
                                <div><BadgeNormal themeColor="primary" rounded="medium">Rounded</BadgeNormal></div>
                                <div><BadgeNormal themeColor="primary" rounded="full">Pill</BadgeNormal></div>
                            </div>
                            <div>
                                <div className="preview-label">Loader</div>
                                <LoaderNormal />
                            </div>
                        </div>
                        <div>
                            <div className="preview-label">Toolbar</div>
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
                                <Button icon="more-vertical" className="k-toolbar-overflow-button" fillMode="flat"></Button>
                            </ToolbarResizable>
                        </div>
                        <div className="k-d-grid k-grid-cols-2 k-gap-10">
                            <div className="k-d-grid k-grid-rows k-gap-10">
                                <div>
                                    <div className="preview-label">TabStrip</div>
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
                            </div>

                            <div className="k-d-grid k-grid-rows k-gap-10">
                                <div>
                                    <div className="preview-label">Breadcrumb</div>
                                    <BreadcrumbCollapsingNone />
                                </div>
                                <div>
                                    <div className="preview-label">BottomNav</div>
                                    <BottomNavNormal themeColor="primary" border>
                                        <BottomNavItem icon="envelope" text="Normal" />
                                        <BottomNavItem icon="envelope" text="Focused" focus />
                                        <BottomNavItem icon="envelope" text="Selected" selected />
                                        <BottomNavItem icon="envelope" text="Disabled" disabled />
                                    </BottomNavNormal>
                                </div>
                            </div>
                        </div>
                        <div className="k-d-grid k-grid-cols-3 k-gap-10">
                            <div className="k-d-grid k-grid-rows k-gap-10">
                                <div><div className="preview-label">ProgressBar</div><ProgressBarNormal value="50" labelPosition="center" /></div>
                                <div><div className="preview-label">Chunk ProgressBar</div><ChunkProgressBarNormal progress={2} /></div>
                            </div>
                            <div className="k-d-grid k-grid-rows k-gap-10">
                                <div>
                                    <div className="preview-label">Slider</div>
                                    <SliderNormal />
                                </div>
                                <div>
                                    <div className="preview-label">Stepper</div>
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

                            <div className="k-d-grid k-grid-rows k-gap-10">
                                <div>
                                    <div className="preview-label">Notification</div>
                                    <AnimationContainer>
                                        <IconNotificationClosable themeColor="primary" text="Closable notification with icon" />
                                    </AnimationContainer>
                                </div>
                                <div>
                                    <div className="preview-label">Tooltip</div>
                                    <AnimationContainer>
                                        <TooltipClosable callout="top" />
                                    </AnimationContainer>
                                </div>
                            </div>

                        </div>

                        <div className="k-d-grid k-grid-cols-3 k-gap-10">
                            <div>
                                <div className="preview-label">Chat</div>
                                <ChatNormal suggestedActions={
                                    <SuggestionGroup layout="scrollable">
                                        <Suggestion text="Suggestion 1" />
                                        <Suggestion text="Suggestion 2" />
                                        <Suggestion text="Suggestion 3" />
                                        <Suggestion text="Suggestion 4" />
                                        <Suggestion text="Suggestion 5" />
                                    </SuggestionGroup>
                                } />
                            </div>

                            <div>
                                <div className="preview-label">Prompt</div>
                                <Popup className="k-prompt-popup">
                                    <PromptSuggestions />
                                </Popup>
                            </div>
                            <div className="k-d-grid k-grid-rows k-gap-5">
                                <div>
                                    <div className="preview-label">Window</div>
                                    <WindowNormal title="Window"
                                        actionButtons={
                                            <>
                                                <Button>Cancel</Button>
                                                <Button themeColor="primary">OK</Button>
                                            </>
                                        }
                                        actionButtonsAlign="end"
                                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</WindowNormal>
                                </div>
                                <div>
                                    <div className="preview-label">Card</div>
                                    <CardNormal />
                                </div>
                            </div>
                        </div>

                        <div className="k-d-grid k-grid-cols-3 k-gap-10 grid-with-calendar">
                            <div>
                                <div className="preview-label">Calendar</div>
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
                                <div className="preview-label">Calendar Infinite</div>
                                <CalendarInfiniteNormal />
                            </div>

                            <div>
                                <div className="preview-label">TimePicker / TimeSelector</div>
                                <TimePickerNormal />
                                <TimeSelectorAll className="k-pos-static" />
                            </div>
                        </div>

                        <div className="k-d-grid k-grid-cols-4 k-gap-10">
                            <div className="k-col-span-3">
                                <div className="preview-label">Grid</div>
                                <GridWithFilterRow></GridWithFilterRow>
                            </div>
                            <div>
                                <div className="preview-label">ColumnMenu</div>
                                <Popup>
                                    <ColumnMenu>
                                        <ColumnMenuItemWrapper>
                                            <ColumnMenuItem text="Sort ascending" startIcon="sort-asc-small" />
                                            <ColumnMenuItem text="Sort descending" startIcon="sort-desc-small" />
                                        </ColumnMenuItemWrapper>
                                        <ColumnMenuItemWrapper>
                                            <ColumnMenuExpander itemText="Columns" itemStartIcon="columns" expanded
                                                itemContent={
                                                    <ColumnList aria-label="Columns">
                                                        <ColumnListItem label="Column 1" checked focus />
                                                        <ColumnListItem label="Column 2" checked />
                                                        <ColumnListItem label="Column 3" />
                                                    </ColumnList>
                                                }
                                            />
                                        </ColumnMenuItemWrapper>
                                        <ColumnMenuItemWrapper>
                                            <ColumnMenuExpander itemText="Filter" itemStartIcon="filter" expanded
                                                itemContent={
                                                    <FilterMenuNormal />
                                                }
                                            />
                                        </ColumnMenuItemWrapper>
                                        <ColumnMenuItemWrapper>
                                            <ColumnMenuExpander itemText="Set column position" itemStartIcon="set-column-position"/>
                                        </ColumnMenuItemWrapper>
                                    </ColumnMenu>
                                </Popup>
                            </div>
                        </div>

                        <div className="k-d-grid k-grid-cols-4 k-gap-10">
                            <div>
                                <div className="preview-label">ColorEditor</div>
                                <ColorEditorNormal />
                            </div>
                            <div>
                                <div className="preview-label">ColorEditor Palette</div>
                                <ColorEditorPaletteGroup />
                            </div>
                            <div>
                                <div className="preview-label">DropdownList</div>
                                <DropdownListPopup />
                            </div>
                            <div>
                                <div className="preview-label">Menu</div>
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
                            <div>
                                <div className="preview-label">ListView</div>
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
                                <div className="preview-label">PanelBar</div>
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
                                <div className="preview-label">ExpansionPanel</div>
                                <ExpansionPanelNormal title="Collapsed panel" subtitle="Normal" />
                                <ExpansionPanelNormal title="Collapsed panel" hover subtitle="Hover" />
                                <ExpansionPanelNormal title="Collapsed panel" focus subtitle="Focus" />
                                <ExpansionPanelNormal title="Collapsed panel" hover focus subtitle="Hover & Focus" />
                                <ExpansionPanelExpanded title="Expanded panel" subtitle="Subtitle" />
                            </div>

                            <div>
                                <div className="preview-label">Treeview</div>
                                <TreeviewNormal>
                                    <TreeviewItem text="Normal" />
                                    <TreeviewItem text="Hover" hover />
                                    <TreeviewItem text="Focus" focus/>
                                    <TreeviewItem text="Hover + Focus" hover focus/>
                                    <TreeviewItem text="Selected" selected/>
                                    <TreeviewItem text="Selected + Hover" selected hover/>
                                    <TreeviewItem text="Selected + Hover + Focus" selected hover focus/>
                                    <TreeviewItem text="Selected focus" selected focus/>
                                    <TreeviewItem text="Disabled" disabled/>
                                    <TreeviewItem text="Disabled focus" disabled focus/>
                                    <TreeviewItem leafClassName="k-treeview-load-more-button" text="Load more..."/>
                                </TreeviewNormal>
                            </div>

                            <div>
                                <div className="preview-label">ListBox</div>
                                <ListBoxNormal />
                            </div>


                        </div>

                        <div className="k-d-grid k-grid-cols-2 k-gap-10">
                            <div className="k-d-grid k-grid-rows k-gap-10">
                                <div>
                                    <div className="preview-label">Upload</div>
                                    <UploadNormal />
                                </div>
                                <div>
                                    <div className="preview-label">Dropzone</div>
                                    <DropzoneNormal />
                                </div>
                                <div>
                                    <div className="preview-label">Editor</div>
                                    <EditorNormal>
                                        <p className="ProseMirror">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus mollitia obcaecati dignissimos beatae ipsam voluptatem pariatur consectetur culpa asperiores veniam?</p>
                                    </EditorNormal>
                                </div>
                            </div>
                            <div>
                                <div className="preview-label">ChartWizard</div>
                                <ChartWizardNormal />
                            </div>

                        </div>

                        <div>
                             <div className="preview-label">FileManager</div>
                             <FileManagerNormal />
                        </div>

                        <div className="k-d-grid k-grid-cols-2 k-gap-10">
                            <div>
                                <div className="preview-label">Spreadsheet</div>
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
                                    <div className="preview-label">Scheduler</div>
                                    <SchedulerWeek />
                                </div>
                            </div>
                        </div>

                        <div className="k-d-grid k-grid-cols-2 k-gap-10">
                            <div>
                                <div className="preview-label">Timeline</div>
                                <TimelineNormalAlternating />
                            </div>
                            <div className="k-d-grid k-grid-rows k-gap-10">
                                <div>
                                    <div className="preview-label">Filter</div>
                                    <FilterNormal />
                                </div>
                                <div>
                                    <div className="preview-label">PivotGrid</div>
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

                        <div className="k-d-grid k-grid-cols-2 k-gap-10">
                            <div>
                                <div className="preview-label">Chart</div>
                                <ChartDemo />
                            </div>
                            <div className="k-d-grid k-grid-cols-2 k-gap-10">
                                <div>
                                    <div className="preview-label">Arc Gauge</div>
                                    <div className="k-gauge k-arcgauge">
                                        <div className="k-arcgauge-label" style={{top: "125.125px", left: "85px"}}>20</div>
                                        <div style={{width: "200px", height: "200px"}}>
                                            <svg style={{width: "100%", height: "100%", overflow: "hidden", left: "-0.5px", top: "0px"}}>
                                                <g>
                                                    <path d="M0 0 L 200 0 200 200 0 200Z" stroke="none" fill="none"></path>
                                                    <path d="M26.986 92.077 C 38.096 76.785 54.134 65.133 72.111 59.292 90.088 53.451 109.912 53.451 127.889 59.292 145.866 65.133 161.904 76.785 173.014 92.077 184.124 107.369 190.25 126.223 190.25 145.125" stroke="var(--kendo-chart-gauge-track)" strokeWidth="9.5" strokeLinecap="round" fill="none"></path>
                                                    <path d="M9.75 145.125 C 9.75 126.223 15.876 107.369 26.986 92.077" stroke="var(--kendo-chart-gauge-pointer)" strokeWidth="9.5" strokeLinecap="round" fill="none"></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="preview-label">Circular Gauge</div>
                                    <div className="k-gauge k-circulargauge">
                                        <div className="k-circulargauge-label" style={{top: "90px", left: "85px"}}>20</div>
                                        <div style={{width: "200px", height: "200px"}}>
                                            <svg style={{width: "100%", height: "100%", overflow: "hidden"}}>
                                                <g>
                                                    <path d="M0 0 L 200 0 200 200 0 200Z" stroke="none" fill="none"></path>
                                                    <g>
                                                        <path d="M185.833 72.111 C 192.508 92.656 191.478 115.607 182.987 135.471 174.497 155.334 158.621 171.94 139.158 181.312 119.695 190.685 96.814 192.745 75.99 186.998 55.166 181.251 36.58 167.747 24.68 149.718 12.779 131.69 7.667 109.292 10.567 87.885 13.467 66.479 24.353 46.248 40.621 32.035 56.889 17.822 78.398 9.75 100 9.75" stroke="var(--kendo-chart-gauge-track)" strokeWidth="9.5" strokeLinecap="round" fill="none"></path>
                                                        <path d="M100 9.75 C 118.902 9.75 137.756 15.876 153.048 26.986 168.34 38.096 179.992 54.134 185.833 72.111" stroke="var(--kendo-chart-gauge-pointer)" strokeWidth="9.5" strokeLinecap="round" fill="none"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </DrawerContent>
            </Drawer>
        </div>


    </>
);
