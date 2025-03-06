import { Popup } from '../../popup';
import { ColumnMenuItem, ColumnMenuItemWrapper, ColumnMenuNormal } from '../../column-menu';

const styles = `
    .k-animation-container,
    .k-popup {
        position: relative;
        overflow: visible;
    }

    .k-card-columnmenu-popup {
        width: 100%;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <Popup className="k-card-columnmenu-popup">
                <ColumnMenuNormal>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuItem text="Move to prev column" startIcon="caret-alt-left" />
                        <ColumnMenuItem text="Move to next column" startIcon="caret-alt-right" />
                        <ColumnMenuItem text="Move up" startIcon="caret-alt-up" />
                        <ColumnMenuItem text="Move down" startIcon="caret-alt-down" />
                        <ColumnMenuItem text="Move top" startIcon="caret-alt-to-top" />
                        <ColumnMenuItem text="Move bottom" startIcon="caret-alt-to-bottom" />
                    </ColumnMenuItemWrapper>
                </ColumnMenuNormal>
            </Popup>
        </div>
    </>
);
