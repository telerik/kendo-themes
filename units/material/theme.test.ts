import "./theme.env.js";
import { presets, testSpecificity } from "../specificity-analyzer";
import { Button } from "../../packages/html/src/button/button.spec";
import { Card } from "../../packages/html/src/card/card.spec";
import { CardList } from "../../packages/html/src/card/card-list.spec";
import { CardGroup } from "../../packages/html/src/card/card-group.spec";
import { CardDeck } from "../../packages/html/src/card/card-deck.spec";
import { CardDeckScrollwrap } from "../../packages/html/src/card/card-deck-scrollwrap.spec";
import { Badge } from "../../packages/html/src/badge/badge.spec";
import { Avatar } from "../../packages/html/src/avatar/avatar.spec";
import { Chip } from "../../packages/html/src/chip/chip.spec";
import { Typography } from "../../packages/html/src/typography/typography.spec";
import { Icon } from "../../packages/html/src/icon/icon.spec";
import { Form } from "../../packages/html/src/form/form.spec";
import { Textbox } from "../../packages/html/src/textbox/textbox.spec";
import { Textarea } from "../../packages/html/src/textarea/textarea.spec";
import { Checkbox } from "../../packages/html/src/checkbox/checkbox.spec";
import { RadioButton } from "../../packages/html/src/radio/radio.spec";
import { Switch } from "../../packages/html/src/switch/switch.spec";
import { Slider } from "../../packages/html/src/slider/slider.spec";
import { ProgressBar } from "../../packages/html/src/progressbar/progressbar.spec";
import { Calendar } from "../../packages/html/src/calendar/calendar.spec";
import { CalendarContainer } from "../../packages/html/src/calendar/calendar-container.spec";
import { DateInput } from "../../packages/html/src/dateinput/dateinput.spec";
import { TimePicker } from "../../packages/html/src/timepicker/timepicker.spec";
import { DateTimePicker } from "../../packages/html/src/datetimepicker/datetimepicker.spec";
import { DateTimeContainer } from "../../packages/html/src/datetimepicker/datetime-container.spec";
import { ColorPicker } from "../../packages/html/src/colorpicker/colorpicker.spec";
import { ColorGradient } from "../../packages/html/src/colorgradient/color-gradient.spec";
import { Autocomplete } from "../../packages/html/src/autocomplete/autocomplete.spec";
import { DropdownList } from "../../packages/html/src/dropdownlist/dropdownlist.spec";
import { MultiSelect } from "../../packages/html/src/multiselect/multiselect.spec";
import { Combobox } from "../../packages/html/src/combobox/combobox.spec";
import { Treeview } from "../../packages/html/src/treeview/treeview.spec";
import { Grid } from "../../packages/html/src/grid/grid.spec";
import { List } from "../../packages/html/src/list/list.spec";
import { ListContainer } from "../../packages/html/src/list/list-container.spec";
import { ListView } from "../../packages/html/src/listview/listview.spec";
import { TreeList } from "../../packages/html/src/treelist/treelist.spec";
import { Menu } from "../../packages/html/src/menu/menu.spec";
import { Toolbar } from "../../packages/html/src/toolbar/toolbar.spec";
import { FloatingToolbar } from "../../packages/html/src/toolbar/floating-toolbar.spec";
import { TabStrip } from "../../packages/html/src/tabstrip/tabstrip.spec";
import { TabstripContainer } from "../../packages/html/src/tabstrip/tabstrip-container.spec";
import { PanelBar } from "../../packages/html/src/panelbar/panelbar.spec";
import { Window } from "../../packages/html/src/window/window.spec";
import { WindowContent } from "../../packages/html/src/window/window-content.spec";
import { Dialog } from "../../packages/html/src/dialog/dialog.spec";
import { DialogContainer } from "../../packages/html/src/dialog/dialog-container.spec";
import { Drawer } from "../../packages/html/src/drawer/drawer.spec";
import { DrawerContainer } from "../../packages/html/src/drawer/drawer-container.spec";
import { DrawerOverlay } from "../../packages/html/src/drawer/drawer-overlay.spec";
import { Notification } from "../../packages/html/src/notification/notification.spec";
import { Tooltip } from "../../packages/html/src/tooltip/tooltip.spec";
import { Popup } from "../../packages/html/src/popup/popup.spec";
import { Popover } from "../../packages/html/src/popover/popover.spec";
import { Upload } from "../../packages/html/src/upload/upload.spec";
import { FileManager } from "../../packages/html/src/filemanager/filemanager.spec";
import { Editor } from "../../packages/html/src/editor/editor.spec";
import { Scheduler } from "../../packages/html/src/scheduler/scheduler.spec";
import { Gantt } from "../../packages/html/src/gantt/gantt.spec";
import { Spreadsheet } from "../../packages/html/src/spreadsheet/spreadsheet.spec";
import { SpreadsheetLegacy } from "../../packages/html/src/spreadsheet/spreadsheet-legacy.spec";
import { PivotGrid } from "../../packages/html/src/pivotgrid/pivotgrid.spec";
import { ChartWizard } from "../../packages/html/src/chart-wizard/chart-wizard.spec";
import { Signature } from "../../packages/html/src/signature/signature.spec";
import { MediaPlayer } from "../../packages/html/src/mediaplayer/mediaplayer.spec";
import { Chat } from "../../packages/html/src/chat/chat.spec";
import { Timeline } from "../../packages/html/src/timeline/timeline.spec";
import { Breadcrumb } from "../../packages/html/src/breadcrumb/breadcrumb.spec";
import { Pager } from "../../packages/html/src/pager/pager.spec";
import { Stepper } from "../../packages/html/src/stepper/stepper.spec";
import { Wizard } from "../../packages/html/src/wizard/wizard.spec";
import { ExpansionPanel } from "../../packages/html/src/expansion-panel/expansion-panel.spec";
import { TileLayout } from "../../packages/html/src/tilelayout/tilelayout.spec";
import { Splitter } from "../../packages/html/src/splitter/splitter.spec";
import { DockManager } from "../../packages/html/src/dock-manager/dock-manager.spec";
import { Filter } from "../../packages/html/src/filter/filter.spec";
import { Searchbox } from "../../packages/html/src/searchbox/searchbox.spec";
import { Rating } from "../../packages/html/src/rating/rating.spec";
import { MaskedTextbox } from "../../packages/html/src/maskedtextbox/maskedtextbox.spec";
import { NumericTextbox } from "../../packages/html/src/numerictextbox/numerictextbox.spec";
import { DropdownGrid } from "../../packages/html/src/dropdowngrid/dropdowngrid.spec";
import { DropdownTree } from "../../packages/html/src/dropdowntree/dropdowntree.spec";
import { TimeDurationPicker } from "../../packages/html/src/timedurationpicker/timedurationpicker.spec";
import { DateRangePicker } from "../../packages/html/src/daterangepicker/daterangepicker.spec";
import { Captcha } from "../../packages/html/src/captcha/captcha.spec";
import { ColorPalette } from "../../packages/html/src/colorpalette/colorpalette.spec";
import { Appbar } from "../../packages/html/src/appbar/appbar.spec";
import { FloatingActionButton } from "../../packages/html/src/fab/fab.spec";
import { ActionSheet } from "../../packages/html/src/action-sheet/action-sheet.spec";
import { ActionsheetContainer } from "../../packages/html/src/action-sheet/actionsheet-container.spec";
import { BottomNav } from "../../packages/html/src/bottom-nav/bottom-nav.spec";
import { SplitButton } from "../../packages/html/src/split-button/split-button.spec";
import { ButtonGroup } from "../../packages/html/src/button-group/button-group.spec";
import { MenuButton } from "../../packages/html/src/menu-button/menu-button.spec";
import { SpeechToTextButton } from "../../packages/html/src/speech-to-text-button/speech-to-text-button.spec";
import { Skeleton } from "../../packages/html/src/skeleton/skeleton.spec";
import { Loader } from "../../packages/html/src/loader/loader.spec";
import { ImageEditor } from "../../packages/html/src/imageeditor/imageeditor.spec";
import { PDFViewer } from "../../packages/html/src/pdf-viewer/pdf-viewer.spec";
import { Orgchart } from "../../packages/html/src/orgchart/orgchart.spec";
import { Map } from "../../packages/html/src/map/map.spec";
import { TaskBoard } from "../../packages/html/src/taskboard/taskboard.spec";
import { Prompt } from "../../packages/html/src/prompt/prompt.spec";
import { OneTimePassword } from "../../packages/html/src/otp/otp.spec";
import { ColumnMenu } from "../../packages/html/src/column-menu/column-menu.spec";
import { DateTimeSelector } from "../../packages/html/src/datetime-selector/datetime-selector.spec";
import { TimeSelector } from "../../packages/html/src/time-selector/time-selector.spec";
import { MultiSelectTree } from "../../packages/html/src/multiselecttree/multiselecttree.spec";
import { MultiViewCalendar } from "../../packages/html/src/multiviewcalendar/multiviewcalendar.spec";
import { FloatingLabel } from "../../packages/html/src/floating-label/floating-label.spec";
import { ListBox } from "../../packages/html/src/listbox/listbox.spec";
import { ListGroup } from "../../packages/html/src/listgroup/listgroup.spec";
import { Table } from "../../packages/html/src/table/table.spec";
import { TableHeader } from "../../packages/html/src/table/table-header.spec";
import { TableHeaderWrap } from "../../packages/html/src/table/table-header-wrap.spec";
import { TableScroller } from "../../packages/html/src/table/table-scroller.spec";
import { TableFooter } from "../../packages/html/src/table/table-footer.spec";
import { ActionButtons } from "../../packages/html/src/action-buttons/action-buttons.spec";
import { RippleContainer } from "../../packages/html/src/ripple/ripple-container.spec";
import { Input } from "../../packages/html/src/input/input.spec";

describe("Material theme", () => {
  // Using 2025Q4 preset which compiles components individually (scope: "component")
  testSpecificity("material", presets["2025Q4"], [
    [Button, "button"],
    [Card, "card"],
    [CardList, "card"],
    [CardGroup, "card"],
    [CardDeck, "card"],
    [CardDeckScrollwrap, "card"],
    [Badge, "badge"],
    [Avatar, "avatar"],
    [Chip, "chip"],
    [Typography, "typography"],
    [Icon, "icons", "icon"],
    [Form, "forms", "form"],
    [Textbox, "textbox"],
    [Textarea, "textarea"],
    [Checkbox, "checkbox"],
    [RadioButton, "radio"],
    [Switch, "switch"],
    [Slider, "slider"],
    [ProgressBar, "progressbar"],
    [Calendar, "calendar"],
    [CalendarContainer, "calendar"],
    [DateInput, "dateinput", "date-input"],
    [TimePicker, "timepicker", "time-picker"],
    [DateTimePicker, "datetimepicker", "date-time-picker"],
    [DateTimeContainer, "datetimepicker", "date-time-picker"],
    [ColorPicker, "colorpicker", "color-picker"],
    [ColorGradient, "colorgradient", "color-gradient"],
    [Autocomplete, "autocomplete"],
    [DropdownList, "dropdownlist", "dropdown-list"],
    [MultiSelect, "multiselect", "multiselect"],
    [Combobox, "combobox", "combobox"],
    [Treeview, "treeview", "treeview"],
    [Grid, "grid", "grid"],
    [List, "list", "list"],
    [ListContainer, "list", "list"],
    [ListView, "listview", "listview"],
    [TreeList, "treelist", "treelist"],
    [Menu, "menu", "menu"],
    [Toolbar, "toolbar", "toolbar"],
    [FloatingToolbar, "toolbar", "toolbar"],
    [TabStrip, "tabstrip", "tabstrip"],
    [TabstripContainer, "tabstrip", "tabstrip"],
    [PanelBar, "panelbar", "panelbar"],
    [Window, "window"],
    [WindowContent, "window"],
    [Dialog, "dialog"],
    [DialogContainer, "dialog"],
    [Drawer, "drawer"],
    [DrawerContainer, "drawer"],
    [DrawerOverlay, "drawer"],
    [Notification, "notification"],
    [Tooltip, "tooltip"],
    [Popup, "popup"],
    [Popover, "popover"],
    [Upload, "upload"],
    [FileManager, "filemanager", "file-manager"],
    [Editor, "editor"],
    [Scheduler, "scheduler"],
    [Gantt, "gantt"],
    [Spreadsheet, "spreadsheet"],
    [SpreadsheetLegacy, "spreadsheet"],
    [PivotGrid, "pivotgrid"],
    [ChartWizard, "chart-wizard"],
    [Signature, "signature"],
    [MediaPlayer, "mediaplayer", "media-player"],
    [Chat, "chat"],
    [Timeline, "timeline"],
    [Breadcrumb, "breadcrumb"],
    [Pager, "pager"],
    [Stepper, "stepper"],
    [Wizard, "wizard"],
    [ExpansionPanel, "expansion-panel", "expander"], // huh!?
    [TileLayout, "tilelayout", "tile-layout"],
    [Splitter, "splitter"],
    [DockManager, "dock-manager"],
    [Filter, "filter"],
    [Searchbox, "searchbox"],
    [Rating, "rating"],
    [MaskedTextbox, "maskedtextbox", "masked-textbox"],
    [NumericTextbox, "numerictextbox", "numeric-textbox"],
    [DropdownGrid, "dropdowngrid", "dropdown-grid"],
    [DropdownTree, "dropdowntree", "dropdown-tree"],
    [TimeDurationPicker, "timedurationpicker", "time-duration-picker"],
    [DateRangePicker, "daterangepicker", "date-range-picker"],
    [Captcha, "captcha"],
    [ColorPalette, "colorpalette", "color-palette"],
    [Appbar, "appbar"],
    [FloatingActionButton, "fab"],
    [ActionSheet, "action-sheet"],
    [ActionsheetContainer, "action-sheet"],
    [BottomNav, "bottom-navigation"],
    [SplitButton, "split-button"],
    [ButtonGroup, "button", "button"], // Part of button.scss
    [MenuButton, "menu-button"],
    [SpeechToTextButton, "speech-to-text-button"],
    [Skeleton, "skeleton"],
    [Loader, "loader"],
    [ImageEditor, "imageeditor", "image-editor"],
    [PDFViewer, "pdf-viewer"],
    [Orgchart, "orgchart"],
    [Map, "map"],
    [TaskBoard, "taskboard", "task-board"],
    [Prompt, "prompt"],
    [OneTimePassword, "otp"],
    [ColumnMenu, "column-menu"],
    // [ContextMenu], // No context-menu.scss??
    [DateTimeSelector, "datetimepicker", "date-time-picker"],
    [TimeSelector, "timeselector", "time-selector"],
    [MultiSelectTree, "dropdowntree", "dropdown-tree"],
    [MultiViewCalendar, "calendar", "calendar"],
    // [PropertyGrid, "propertygrid"], // No propertygrid.scss??
    // [SpinButton, "spinbutton"], // No spinbutton.scss??
    [FloatingLabel, "floating-label"],
    [ListBox, "listbox"],
    [ListGroup, "listgroup"],
    [Table, "table"],
    [TableHeader, "table"],
    [TableHeaderWrap, "table"],
    [TableScroller, "table"],
    [TableFooter, "table"],
    [ActionButtons, "action-buttons"],
    [RippleContainer, "ripple"],
    [Input, "input"],
  ]);
});
