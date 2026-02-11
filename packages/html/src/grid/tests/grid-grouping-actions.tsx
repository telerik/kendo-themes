import { Icon } from '../../icon/icon.spec';
import { Popup } from '../../popup/popup.spec';
import { ColumnMenuItem } from '../../column-menu/column-menu-item.spec';
import { ColumnMenuItemWrapper } from '../../column-menu/column-menu-item-wrapper';
import { ColumnMenuNormal } from '../../column-menu/templates/column-menu-normal';
import { GridWithGrouping } from '../templates/grid-with-grouping';


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
                <GridWithGrouping dropClue className="k-grid-no-scrollbar"></GridWithGrouping>
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


