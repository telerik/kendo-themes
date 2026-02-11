import { ListBox } from '../../listbox/listbox.spec';
import { ListBoxNormal } from '../../listbox/templates/listbox-normal';


const styles = `
    #test-area {
        max-width: 800px;
    }
    .k-listbox {
        width: 100%;
        height: auto;
        align-items: flex-start;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">
            {ListBox.options.size.map((size) => (
                <>
                    <div>
                        <span>{`${size}`}</span>
                        <ListBoxNormal size={size} actions={[ 'up', 'down', 'left', 'right' ]} />
                    </div>
                </>
            ))}
        </div>
    </>
);
