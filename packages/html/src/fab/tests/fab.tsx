import { FloatingActionButton } from '../../fab/fab.spec';
import { IconFloatingActionButton } from '../../fab/templates/icon-fab';
import { TextFloatingActionButton } from '../../fab/templates/text-fab';
import { IconTextFloatingActionButton } from '../../fab/templates/icon-text-fab';

const styles = `
    #test-area {
        grid-template-columns: 200px repeat(3, 1fr);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>Text</span>
            <span>Text + Icon</span>
            <span>Icon</span>

            {FloatingActionButton.options.themeColor.map((themeColor) => (
                <>
                    <span>{`${themeColor}`}</span>
                    <span>
                        <TextFloatingActionButton themeColor={themeColor} />
                    </span>
                    <span>
                        <IconTextFloatingActionButton themeColor={themeColor} />
                    </span>
                    <span>
                        <IconFloatingActionButton themeColor={themeColor} />
                    </span></>
            ))}
        </div>
    </>
);
