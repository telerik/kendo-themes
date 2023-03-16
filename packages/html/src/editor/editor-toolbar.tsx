import { Toolbar } from '../toolbar';
import { classNames } from '../utils-new';

export const EDITORTOOLBAR_CLASSNAME = `k-editor-toolbar`;

export type KendoEditorToolbarProps = {
    resizable?: boolean;
}

export const EditorToolbar = (
    props: KendoEditorToolbarProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        resizable,
        ...other
    } = props;

    return (
        <Toolbar
            {...other}
            className={classNames(
                props.className,
                EDITORTOOLBAR_CLASSNAME,
            )} resizable={resizable}>
            {props.children}
        </Toolbar>
    );
};
