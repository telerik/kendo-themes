import { FileManagerNormal } from '../../filemanager/templates/filemanager-normal';
import { FileManagerDragHint } from '../../filemanager/filemanager-drag-hint';


const styles = `
    #filemanager-draghint {
        position: absolute;
        left: 350px;
        top: 200px;
        z-index: 2;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>File Manager Drag Hint</span>
            <FileManagerNormal />

            <FileManagerDragHint hint="file.png" id="filemanager-draghint"/>
        </div>
    </>
);
