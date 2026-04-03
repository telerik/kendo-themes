import { FileManagerToolbar } from './filemanager-toolbar.spec';
import { classNames, stateClassNames, States } from '../misc';
import { Button } from '../button';
import { ButtonGroup } from '../button-group';
import { SplitButton } from '../split-button';
import { Switch } from '../switch';
import { Searchbox } from '../searchbox';

import { KendoComponent } from '../_types/component';
import { FILEMANAGER_FOLDER_NAME, FILEMANAGER_MODULE_NAME } from './constants';
const FILEMANAGER_CLASSNAME = 'k-filemanager';

const states = [
    States.disabled
];

const options = {};

export type KendoFileManagerProps = {
    toolbar?: React.JSX.Element;
};

export type KendoFileManagerState = { [K in (typeof states)[number]]?: boolean };

const defaultToolbar =
    <>
        <FileManagerToolbar>
            <Button>New Folder</Button>
            <Button>Upload</Button>
            <ButtonGroup>
                <Button className="k-group-start" icon="sort-asc-small" aria-label="Sort ascending"></Button>
                <Button className="k-group-end" icon="sort-desc-small" aria-label="Sort descending"></Button>
            </ButtonGroup>
            <SplitButton text="Sort By" />
            <ButtonGroup>
                <Button className="k-group-start" icon="grid-layout" aria-label="List view"></Button>
                <Button className="k-group-end" icon="grid" aria-label="Grid view"></Button>
            </ButtonGroup>
            <div className="k-spacer"></div>
            <div className="k-filemanager-details-toggle">
                <label>View Details</label>
                <Switch aria-label="View Details" />
            </div>
            <Searchbox className="k-filemanager-search-tool" placeholder="Search..." />
        </FileManagerToolbar>
    </>;

const defaultOptions = {
    toolbar: defaultToolbar,
};

export const FileManager: KendoComponent<KendoFileManagerProps & KendoFileManagerState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoFileManagerProps &
        KendoFileManagerState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        disabled,
        toolbar = defaultOptions.toolbar,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                FILEMANAGER_CLASSNAME,
                stateClassNames(FILEMANAGER_CLASSNAME, {
                    disabled
                }),
            )}>
            <div className="k-filemanager-header">
                {toolbar}
            </div>

            <div className="k-filemanager-content-container" >
                {props.children}
            </div>
        </div>
    );
};

FileManager.states = states;
FileManager.options = options;
FileManager.className = FILEMANAGER_CLASSNAME;
FileManager.defaultOptions = defaultOptions;
FileManager.moduleName = FILEMANAGER_MODULE_NAME;
FileManager.folderName = FILEMANAGER_FOLDER_NAME;

/**
 * Accessibility specification for FileManager.
 *
 * The FileManager is a composite component containing:
 * - Toolbar (top)
 * - Splitter (separates panes)
 * - TreeView (left pane navigation)
 * - Breadcrumb (center pane navigation)
 * - ListView or Grid (center pane content)
 * - Preview pane (right pane, optional)
 *
 * Each sub-component implements its own ARIA spec.
 * The only custom rule is that the preview pane must be focusable.
 */
FileManager.ariaSpec = {
    selector: '.k-filemanager',
    rules: [
        { selector: '.k-filemanager-preview', attribute: 'tabindex=0', usage: 'The element must be focusable, so that its content would be communicated to the users.' },
    ]
};

export default FileManager;
