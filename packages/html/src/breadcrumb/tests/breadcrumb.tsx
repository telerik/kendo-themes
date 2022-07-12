import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';
import { Textbox } from '../../textbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span className="k-colspan-all k-col-span-full">Wrapping</span>
            <div>
                <div style={{ width: "400px" }} className="k-widget k-breadcrumb k-breadcrumb-wrap">
                    <ol className="k-breadcrumb-root-item-container">
                        <li className="k-flex-none k-breadcrumb-root-item k-breadcrumb-item">
                            <span className="k-cursor-pointer k-flex-none k-breadcrumb-root-link k-breadcrumb-icontext-link">
                                <Icon name="home" />
                                Start item
                            </span>
                        </li>
                    </ol>

                    <ol className="k-breadcrumb-container k-flex-wrap">
                        <li className="k-flex-none k-breadcrumb-item">
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                            <span className="k-cursor-pointer k-flex-none k-breadcrumb-link k-state-disabled k-breadcrumb-icontext-link">
                                <Icon name="clock" />
                                First item
                            </span>
                        </li>
                        <li className="k-flex-none k-breadcrumb-item">
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                            <span className="k-cursor-pointer k-flex-none k-breadcrumb-link">
                                <img className="k-image" src="/packages/html/assets/avatar.jpg" width="20" height="20" />
                                Second item
                            </span>
                        </li>
                        <li className="k-flex-none k-breadcrumb-item">
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                            <span className="k-cursor-pointer k-flex-none k-breadcrumb-link"> <span className="test"></span> Third item </span>
                        </li>
                        <li className="k-flex-none k-breadcrumb-item">
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                            <span className="k-cursor-pointer k-flex-none k-breadcrumb-link k-breadcrumb-icon-link">
                                <Icon name="clock" />
                            </span>
                        </li>
                        <li className="k-flex-none k-breadcrumb-last-item k-breadcrumb-item">
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                            <span className="k-cursor-pointer k-flex-none k-breadcrumb-link k-state-disabled">
                                Fifth item
                            </span>
                        </li>
                    </ol>
                </div>
            </div>

            <div>
                <div style={{ width: "400px" }} className="k-widget k-breadcrumb k-breadcrumb-wrap">
                    <ol className="k-breadcrumb-root-item-container">
                        <li className="k-flex-none k-breadcrumb-root-item k-breadcrumb-item">
                            <span className="k-cursor-pointer k-flex-none k-breadcrumb-root-link">
                                Start item
                            </span>
                        </li>
                    </ol>

                    <ol className="k-breadcrumb-container k-flex-wrap">
                        <li className="k-flex-none k-breadcrumb-item">
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                            <span className="k-cursor-pointer k-flex-none k-breadcrumb-link k-state-disabled k-breadcrumb-icontext-link">
                                <Icon name="clock" />
                                First item
                            </span>
                        </li>
                        <li className="k-flex-none k-breadcrumb-item">
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                            <span className="k-cursor-pointer k-flex-none k-breadcrumb-link">
                                <img className="k-image" src="/packages/html/assets/avatar.jpg" width="20" height="20" />
                                Second item
                            </span>
                        </li>
                        <li className="k-flex-none k-breadcrumb-item">
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                            <span className="k-cursor-pointer k-flex-none k-breadcrumb-link"> <span className="test"></span> Third item </span>
                        </li>
                        <li className="k-flex-none k-breadcrumb-item">
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                            <span className="k-cursor-pointer k-flex-none k-breadcrumb-link k-breadcrumb-icon-link">
                                <Icon name="clock" />
                            </span>
                        </li>
                        <li className="k-flex-none k-breadcrumb-last-item k-breadcrumb-item">
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                            <span className="k-cursor-pointer k-flex-none k-breadcrumb-link k-state-disabled">
                                Fifth item
                            </span>
                        </li>
                    </ol>
                </div>
            </div>

            <div>
                <div style={{ width: "400px" }} className="k-widget k-breadcrumb k-breadcrumb-wrap">
                    <ol className="k-breadcrumb-root-item-container">
                        <li className="k-flex-none k-breadcrumb-root-item k-breadcrumb-item">
                            <span className="k-cursor-pointer k-flex-none k-breadcrumb-root-link k-breadcrumb-icon-link">
                                <Icon name="home" />
                            </span>
                        </li>
                    </ol>
                    <ol className="k-breadcrumb-container k-flex-wrap">
                        <li className="k-flex-none k-breadcrumb-item">
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                            <span className="k-cursor-pointer k-flex-none k-breadcrumb-link k-state-disabled k-breadcrumb-icontext-link">
                                <Icon name="clock" />
                                First item
                            </span>
                        </li>
                        <li className="k-flex-none k-breadcrumb-item">
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                            <span className="k-cursor-pointer k-flex-none k-breadcrumb-link">
                                <img className="k-image" src="/packages/html/assets/avatar.jpg" width="20" height="20" />
                                Second item
                            </span>
                        </li>
                        <li className="k-flex-none k-breadcrumb-item">
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                            <span className="k-cursor-pointer k-flex-none k-breadcrumb-link"> <span className="test"></span> Third item </span>
                        </li>
                        <li className="k-flex-none k-breadcrumb-item">
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                            <span className="k-cursor-pointer k-flex-none k-breadcrumb-link k-breadcrumb-icon-link">
                                <Icon name="clock" />
                            </span>
                        </li>
                        <li className="k-flex-none k-breadcrumb-last-item k-breadcrumb-item">
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                            <span className="k-cursor-pointer k-flex-none k-breadcrumb-link k-state-disabled">
                                Fifth item
                            </span>
                        </li>
                    </ol>
                </div>
            </div>

            <span className="k-colspan-all k-col-span-full">Navigation Mode</span>
            <div>
                <nav id="breadcrumbs" className="k-widget k-breadcrumb">
                    <ol className="k-breadcrumb-container">
                        <li className="k-breadcrumb-item k-breadcrumb-root-item">
                            <a href="#" className="k-breadcrumb-root-link k-breadcrumb-icon-link">
                                <Icon name="home" />
                            </a>
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                        </li>
                        <li className="k-breadcrumb-item">
                            <a className="k-breadcrumb-link" href="#">First item</a>
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                        </li>
                        <li className="k-breadcrumb-item">
                            <a className="k-breadcrumb-link" href="#">Second item</a>
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                        </li>
                        <li className="k-breadcrumb-item k-breadcrumb-last-item">
                            <a className="k-breadcrumb-link k-state-disabled" href="#">Third item</a>
                        </li>
                    </ol>
                </nav>
            </div>

            <div>
                <nav id="breadcrumbs" className="k-widget k-breadcrumb">
                    <ol className="k-breadcrumb-container">
                        <li className="k-breadcrumb-item k-breadcrumb-root-item">
                            <a href="#" className="k-breadcrumb-root-link k-breadcrumb-icon-link k-state-focused">
                                <Icon name="home" />
                            </a>
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                        </li>
                        <li className="k-breadcrumb-item">
                            <a className="k-breadcrumb-link k-state-focused" href="#">First item</a>
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                        </li>
                        <li className="k-breadcrumb-item">
                            <a className="k-breadcrumb-link" href="#">Second item</a>
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                        </li>
                        <li className="k-breadcrumb-item k-breadcrumb-last-item">
                            <a className="k-breadcrumb-link k-state-disabled" href="#">Third item</a>
                        </li>
                    </ol>
                </nav>
            </div>

            <div>
                <nav id="breadcrumbs" className="k-widget k-breadcrumb">
                    <ol className="k-breadcrumb-container">
                        <li className="k-breadcrumb-item k-breadcrumb-root-item">
                            <a href="#" className="k-breadcrumb-root-link k-breadcrumb-icon-link k-state-hover">
                                <Icon name="home" />
                            </a>
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                        </li>
                        <li className="k-breadcrumb-item">
                            <a className="k-breadcrumb-link k-state-hover" href="#">First item</a>
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                        </li>
                        <li className="k-breadcrumb-item">
                            <a className="k-breadcrumb-link" href="#">Second item</a>
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                        </li>
                        <li className="k-breadcrumb-item k-breadcrumb-last-item">
                            <a className="k-breadcrumb-link k-state-disabled" href="#">Third item</a>
                        </li>
                    </ol>
                </nav>
            </div>

            <div>
                <nav id="breadcrumbs" className="k-widget k-breadcrumb">
                    <ol className="k-breadcrumb-container">
                        <li className="k-breadcrumb-item k-breadcrumb-root-item">
                            <a href="#" className="k-breadcrumb-root-link k-breadcrumb-icon-link k-state-hover">
                                <Icon name="home" />
                            </a>
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                        </li>
                        <li className="k-breadcrumb-item">
                            <a className="k-breadcrumb-link k-breadcrumb-icontext-link" href="#">
                                <Icon name="cloud" />
                                First item
                            </a>
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                        </li>
                        <li className="k-breadcrumb-item">
                            <a className="k-breadcrumb-link k-breadcrumb-icon-link" href="#">
                                <Icon name="photo-camera" />
                            </a>
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                        </li>
                        <li className="k-breadcrumb-item k-breadcrumb-last-item">
                            <a className="k-breadcrumb-link k-state-disabled" href="#">Third item</a>
                        </li>
                    </ol>
                </nav>
            </div>

            <span className="k-colspan-all k-col-span-full">Edit Mode</span>
            <div>
                <nav id="breadcrumbs" className="k-widget k-breadcrumb k-state-focused">
                    <ol className="k-breadcrumb-container">
                        <li className="k-breadcrumb-item k-breadcrumb-root-item">
                            <a href="#" className="k-breadcrumb-root-link">
                                <Icon name="home" />
                            </a>
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                        </li>
                        <li className="k-breadcrumb-item">
                            <a className="k-breadcrumb-link" href="#">First item</a>
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                        </li>
                        <li className="k-breadcrumb-item">
                            <a className="k-breadcrumb-link" href="#">Second item</a>
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                        </li>
                        <li className="k-breadcrumb-item k-breadcrumb-last-item">
                            <a className="k-breadcrumb-link k-state-disabled" href="#">Third item</a>
                        </li>
                    </ol>
                </nav>
            </div>

            <div>
                <nav id="breadcrumbs" className="k-widget k-breadcrumb">
                    <div className="k-breadcrumb-input-container">
                        <Textbox showClearButton={false} value="First item/Second item/Breadcrumb Pattern/Third item" />
                    </div>
                </nav>
            </div>

            <span className="k-colspan-all k-col-span-full">Overflow</span>
            <div>
                <nav id="breadcrumbs" className="k-widget k-breadcrumb">
                    <ol className="k-breadcrumb-container">
                        <li className="k-breadcrumb-item k-breadcrumb-root-item">
                            <a href="#" className="k-breadcrumb-root-link k-breadcrumb-icon-link">
                                <Icon name="home" />
                            </a>
                            <Icon className="k-breadcrumb-delimiter-icon k-breadcrumb-overflow-icon" name="arrow-chevron-right" />
                            <Icon className="k-breadcrumb-delimiter-icon k-breadcrumb-overflow-icon" name="arrow-chevron-right" />
                        </li>
                        <li className="k-breadcrumb-item" hidden>
                            <a className="k-breadcrumb-link" href="#">First item</a>
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                        </li>
                        <li className="k-breadcrumb-item" hidden>
                            <a className="k-breadcrumb-link" href="#">Second item</a>
                            <Icon className="k-breadcrumb-delimiter-icon" name="arrow-chevron-right" />
                        </li>
                        <li className="k-breadcrumb-item k-breadcrumb-last-item">
                            <a className="k-breadcrumb-link k-state-disabled" href="#">Breadcrumb item </a>
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    </>
);
