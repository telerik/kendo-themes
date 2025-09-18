import { FileManagerToolbar } from '.';
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
                <Button className="k-group-start" icon="sort-asc-small"></Button>
                <Button className="k-group-end" icon="sort-desc-small"></Button>
            </ButtonGroup>
            <SplitButton text="Sort By" />
            <ButtonGroup>
                <Button className="k-group-start" icon="grid-layout"></Button>
                <Button className="k-group-end" icon="grid"></Button>
            </ButtonGroup>
            <div className="k-spacer"></div>
            <div className="k-filemanager-details-toggle">
                <label>View Details</label>
                <Switch />
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

export default FileManager;
