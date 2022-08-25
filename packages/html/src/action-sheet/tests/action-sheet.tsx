import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        height: 600px;
        transform: scale(1);
        overflow: hidden;
    }
    .k-actionsheet:not(.k-rtl) {
        left: 200px;
    }
    .k-actionsheet.k-rtl {
        left: 600px;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area">
            <div className="k-actionsheet-container">
                <div className="k-overlay"></div>

                <div className="k-actionsheet k-actionsheet-bottom">

                    <div className="k-actionsheet-header">
                        Header
                    </div>

                    <ul className="k-actionsheet-items">
                        <li className="k-actionsheet-item">
                            <a href="#" className="k-actionsheet-action">
                                <Icon className="k-actionsheet-item-icon" name="cog" />
                                <span className="k-actionsheet-item-text">
                                    <span className="k-actionsheet-item-title">Action</span>
                                    <span className="k-actionsheet-item-description">Action description</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-actionsheet-item">
                            <a href="#" className="k-actionsheet-action k-hover">
                                <Icon className="k-actionsheet-item-icon" name="cog" />
                                <span className="k-actionsheet-item-text">
                                    <span className="k-actionsheet-item-title">Hover action</span>
                                    <span className="k-actionsheet-item-description">Action Description</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-actionsheet-item">
                            <a href="#" className="k-actionsheet-action k-focus">
                                <Icon className="k-actionsheet-item-icon" name="cog" />
                                <span className="k-actionsheet-item-text">
                                    <span className="k-actionsheet-item-title">Focus action</span>
                                    <span className="k-actionsheet-item-description">Action Description</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-actionsheet-item">
                            <a href="#" className="k-actionsheet-action k-disabled">
                                <Icon className="k-actionsheet-item-icon" name="cog" />
                                <span className="k-actionsheet-item-text">
                                    <span className="k-actionsheet-item-title">Disabled action</span>
                                    <span className="k-actionsheet-item-description">Action description</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-actionsheet-item">
                            <a href="#" className="k-actionsheet-action">
                                <Icon className="k-actionsheet-item-icon" name="cog" />
                                <span className="k-actionsheet-item-text">
                                    <span className="k-actionsheet-item-title">Action</span>
                                    <span className="k-actionsheet-item-description">Some longer subtitle to break on multiple rows, for testing purposes</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                    <hr className="k-hr" />
                    <ul className="k-actionsheet-items">
                        <li className="k-actionsheet-item">
                            <a href="#" className="k-actionsheet-action">
                                <Icon className="k-actionsheet-item-icon" name="cog" />
                                <span className="k-actionsheet-item-text">
                                    <span className="k-actionsheet-item-title">Cancel</span>
                                    <span className="k-actionsheet-item-description">Action in second group</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="k-actionsheet k-actionsheet-bottom k-rtl">
                    <div className="k-actionsheet-header">
                        Header
                    </div>

                    <ul className="k-actionsheet-items">
                        <li className="k-actionsheet-item">
                            <a href="#" className="k-actionsheet-action">
                                <Icon className="k-actionsheet-item-icon" name="cog" />
                                <span className="k-actionsheet-item-text">
                                    <span className="k-actionsheet-item-title">Action</span>
                                    <span className="k-actionsheet-item-description">Action description</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-actionsheet-item">
                            <a href="#" className="k-actionsheet-action k-hover">
                                <Icon className="k-actionsheet-item-icon" name="cog" />
                                <span className="k-actionsheet-item-text">
                                    <span className="k-actionsheet-item-title">Hover action</span>
                                    <span className="k-actionsheet-item-description">Action Description</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-actionsheet-item">
                            <a href="#" className="k-actionsheet-action k-focus">
                                <Icon className="k-actionsheet-item-icon" name="cog" />
                                <span className="k-actionsheet-item-text">
                                    <span className="k-actionsheet-item-title">Focus action</span>
                                    <span className="k-actionsheet-item-description">Action Description</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-actionsheet-item">
                            <a href="#" className="k-actionsheet-action k-disabled">
                                <Icon className="k-actionsheet-item-icon" name="cog" />
                                <span className="k-actionsheet-item-text">
                                    <span className="k-actionsheet-item-title">Disabled action</span>
                                    <span className="k-actionsheet-item-description">Action description</span>
                                </span>
                            </a>
                        </li>
                        <li className="k-actionsheet-item">
                            <a href="#" className="k-actionsheet-action">
                                <Icon className="k-actionsheet-item-icon" name="cog" />
                                <span className="k-actionsheet-item-text">
                                    <span className="k-actionsheet-item-title">Action</span>
                                    <span className="k-actionsheet-item-description">Some longer subtitle to break on multiple rows, for testing purposes</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                    <hr className="k-hr" />
                    <ul className="k-actionsheet-items">
                        <li className="k-actionsheet-item">
                            <a href="#" className="k-actionsheet-action">
                                <Icon className="k-actionsheet-item-icon" name="cog" />
                                <span className="k-actionsheet-item-text">
                                    <span className="k-actionsheet-item-title">Cancel</span>
                                    <span className="k-actionsheet-item-description">Action in second group</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
);
