import { Popup } from '../../popup';
import { Icon } from '../../icon';

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

            <Popup className="k-column-menu k-card-columnmenu-popup">
                <div className="k-columnmenu-item-wrapper">
                    <div className="k-columnmenu-item">
                        <Icon icon="caret-alt-left" />Move to prev column
                    </div>
                    <div className="k-columnmenu-item">
                        <Icon icon="caret-alt-right" />Move to next column
                    </div>
                    <div className="k-columnmenu-item">
                        <Icon icon="caret-alt-up" />Move up
                    </div>
                    <div className="k-columnmenu-item">
                        <Icon icon="caret-alt-down" />Move down
                    </div>
                    <div className="k-columnmenu-item">
                        <Icon icon="caret-alt-to-top" />Move top
                    </div>
                    <div className="k-columnmenu-item">
                        <Icon icon="caret-alt-to-bottom" />Move bottom
                    </div>
                </div>
            </Popup>
        </div>
    </>
);
