import { FileManager, KendoFileManagerProps } from '../filemanager.spec';
import { FileManagerNormal } from '../templates/filemanager-normal';
import { FileManagerGrid } from '../templates/filemanager-grid';
import { FileManagerGridPreview } from '../templates/filemanager-grid-preview';
import { FileManagerPreview } from '../templates/filemanager-preview';

const options = FileManager.options;
const states = FileManager.states;
const defaults = {
  ...FileManager.defaultOptions,
  variant: 'listview',
};


const variants = [
    {
        name: 'listview',
        title: 'ListView',
    },
    {
        name: 'grid',
        title: 'Grid',
    },
];

const modifiers = [
    {
        name: 'preview',
        title: 'Preview',
    },
];

export const FilemanagerDemo = (
    props: KendoFileManagerProps & { variant?: (typeof variants)[number]['name'] } & {
        modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
    }
) => {
    const { variant, modifiers: mods, ...other } = { ...props };

    let isPreviewOn: boolean = false;

    Object.keys(mods || {}).forEach((modifier) => {
        switch (modifier) {
            case 'preview': {
                isPreviewOn = mods?.[modifier] ? true : false;
            }
        }
    });
    switch (variant) {
        case 'grid':
            return (
                isPreviewOn ? (
                    <FileManagerGridPreview {...other} />
                ) : (
                    <FileManagerGrid {...other} />
                )
            );
        case 'listview':
        default:
            return (
                isPreviewOn ? (
                    <FileManagerPreview {...other} />
                ) : (
                    <FileManagerNormal {...other} />
                )
            );
    }
}


FilemanagerDemo.options = options;
FilemanagerDemo.states = states;
FilemanagerDemo.variants = variants;
FilemanagerDemo.defaultOptions = defaults;
FilemanagerDemo.modifiers = modifiers;

export default FilemanagerDemo;

