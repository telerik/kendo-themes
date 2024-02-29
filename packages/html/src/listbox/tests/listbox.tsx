import { ListBoxNormal } from '../../listbox';

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

const actionPositions = [ 'left', 'right', 'top', 'bottom' ];

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Listbox</span>
            <span>Listbox RTL</span>

            {actionPositions.map(position => (
                <>
                    <ListBoxNormal actionsPosition={position} />

                    <ListBoxNormal actionsPosition={position} dir="rtl" />
                </>
            ))}
        </div>
    </>
);
