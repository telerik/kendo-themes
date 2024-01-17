import { ColumnMenu } from "../../column-menu";
import { Icon } from '../../icon';

export const ColumnMenuTabbed = (props) => (
    <ColumnMenu
        view="tabbed"
        children={[
            <div className="k-tabstrip k-pos-relative k-tabstrip-top">
                <div className="k-tabstrip-items-wrapper k-hstack">
                    <ul className="k-reset k-tabstrip-items">
                        <li className="k-tabstrip-item k-item k-active">
                            <span className="k-link">
                                <Icon icon="filter" />
                            </span>
                        </li>
                        <li className="k-tabstrip-item k-item">
                            <span className="k-link">
                                <Icon icon="sliders" />
                            </span>
                        </li>
                        <li className="k-tabstrip-item k-item">
                            <span className="k-link">
                                <Icon icon="columns" />
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="k-tabstrip-content k-active">
                    Tabbed column menu content
                </div>
            </div>
        ]}
        {...props}
    >
    </ColumnMenu>
);
