import { ListBox, ListBoxNormal } from '../../listbox';


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
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            {ListBox.options.size.map((size) => (
                <>
                    <div>
                        <span>{size}</span>
                        <ListBoxNormal size={size} actions={[ 'up', 'down', 'left', 'right' ]} />
                    </div>
                </>
            ))}
        </div>
    </>
);
