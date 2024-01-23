import { FileManagerToolbar } from '.';
import { classNames, stateClassNames, States } from '../misc';
import { Button } from '../button';
import { ButtonGroup } from '../button-group';
import { SplitButton } from '../split-button';
import { Switch } from '../switch';
import { Searchbox } from '../searchbox';

const FILEMANAGER_CLASSNAME = 'k-filemanager';

const states = [
    States.disabled
];

const options = {};

export type KendoFileManagerProps = {
    toolbar?: JSX.Element;
};

export type KendoFileManagerState = { [K in (typeof states)[number]]?: boolean };

const defaultToolbar =
    <>
        <FileManagerToolbar>
            <Button>New Folder</Button>
            <Button>Upload</Button>
            <ButtonGroup>
                <Button icon="sort-asc-small"></Button>
                <Button icon="sort-desc-small"></Button>
            </ButtonGroup>
            <SplitButton text="Sort By" />
            <ButtonGroup>
                <Button icon="grid-layout"></Button>
                <Button icon="grid"></Button>
            </ButtonGroup>
            <div className="k-spacer"></div>
            <div className="k-filemanager-details-toggle">
                <label>View Details</label>
                <Switch />
            </div>
            <Searchbox className="k-filemanager-search-tool" placeholder="Search..." />
        </FileManagerToolbar>
    </>;

const defaultProps = {
    toolbar: defaultToolbar,
};

export const FileManager = (
    props: KendoFileManagerProps &
        KendoFileManagerState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        disabled,
        toolbar = defaultProps.toolbar,
    } = props;

    return (
        <div className={classNames(
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
FileManager.defaultProps = defaultProps;

export default FileManager;
