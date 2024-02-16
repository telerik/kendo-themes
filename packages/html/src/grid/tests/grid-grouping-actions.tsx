import { Icon } from '../../icon';
import { Popup } from '../../popup';
import { ColumnMenuItem, ColumnMenuItemWrapper, ColumnMenuNormal } from '../../column-menu';
import { GridWithGrouping } from '../../grid';


const styles = `
    .k-animation-container,
    .k-popup {
        position: relative;
        overflow: visible;
        top: -97px;
        left: 70px;
    }

    .k-grouping-header .k-grouping-dropclue {
        left: 0;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area">
            <section>
                <GridWithGrouping className="k-grid-no-scrollbar"></GridWithGrouping>
            </section>

            <Popup className="k-grid-columnmenu-popup">
                <ColumnMenuNormal>
                    <ColumnMenuItemWrapper>
                        <ColumnMenuItem>
                            <div className="k-column-list-item">
                                <Icon icon="caret-alt-left"/>Move previous
                            </div>
                            <div className="k-column-list-item k-disabled">
                                <Icon icon="caret-alt-right"/>Move next
                            </div>
                        </ColumnMenuItem>
                    </ColumnMenuItemWrapper>
                </ColumnMenuNormal>
            </Popup>
        </div>
    </>
);


