import { classNames } from '../misc';
import { Icon } from '../icon';

export const IMAGEEDITORROTATEHANDLE_CLASSNAME = `k-rotate-handle`;

export const ImageEditorRotateHandle = (props: React.HTMLAttributes<HTMLSpanElement>) => (
    <span {...props} className={classNames(props.className, IMAGEEDITORROTATEHANDLE_CLASSNAME)}>
        <Icon icon="rotate" />
    </span>
);

ImageEditorRotateHandle.moduleName = null;
ImageEditorRotateHandle.folderName = null;

export default ImageEditorRotateHandle;
