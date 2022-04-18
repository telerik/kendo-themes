import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .section {
        max-width: 400px;
    }

    .sections-wrapper > .section {
        display: inline-block;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area">
            <div className="sections-wrapper">
                <div className="section">
                    <div id="grid" className="k-grid k-widget k-grid-display-block k-grid-no-scrollbar" style={{ height: "60px" }}>
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap k-auto-scrollable">
                                <table>
                                    <colgroup>
                                        <col />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th scope="col" className="k-header k-with-icon">
                                                <a className="k-header-column-menu k-state-active" href="#">
                                                    <Icon name="more-vertical" />
                                                </a>
                                                Active Column Menu &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipiscing elit
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="section k-rtl">

                    <div id="grid" className="k-grid k-widget k-grid-display-block k-grid-no-scrollbar" style={{ height: "60px" }}>
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap k-auto-scrollable">
                                <table>
                                    <colgroup>
                                        <col />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th scope="col" className="k-header k-with-icon">
                                                <a className="k-header-column-menu" href="#">
                                                    <Icon name="more-vertical" />
                                                </a>
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; RTL Column Menu
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="sections-wrapper">

                <div className="section">

                    <div id="grid" className="k-grid k-widget k-grid-display-block k-grid-no-scrollbar" style={{ height: "60px" }}>
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap k-auto-scrollable">
                                <table>
                                    <colgroup>
                                        <col />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th scope="col" className="k-header k-with-icon k-filterable">
                                                <a className="k-grid-filter k-state-active" href="#">
                                                    <Icon name="filter" />
                                                </a>
                                                Active Filterable &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipiscing elit
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="section k-rtl">

                    <div id="grid" className="k-grid k-widget k-grid-display-block k-grid-no-scrollbar" style={{ height: "60px" }}>
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap k-auto-scrollable">
                                <table>
                                    <colgroup>
                                        <col />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th scope="col" className="k-header k-with-icon k-filterable">
                                                <a className="k-grid-filter" href="#">
                                                    <Icon name="filter" />
                                                </a>
                                                Lorem ipsum dolor sit amet consectetur adipiscing elit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; RTL Filterable
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="sections-wrapper">

                <div className="section">

                    <div id="grid" className="k-grid k-widget k-grid-display-block k-grid-no-scrollbar" style={{ height: "60px" }}>
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap k-auto-scrollable">
                                <table>
                                    <colgroup>
                                        <col />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th scope="col" className="k-header k-with-icon">
                                                <a className="k-header-column-menu" href="#">
                                                    <Icon name="more-vertical" />
                                                </a>
                                                <a className="k-link" href="#">
                                                    Sortable Column Menu &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipiscing elit
                                                </a>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="section k-rtl">

                    <div id="grid" className="k-grid k-widget k-grid-display-block k-grid-no-scrollbar" style={{ height: "60px" }}>
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap k-auto-scrollable">
                                <table>
                                    <colgroup>
                                        <col />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th scope="col" className="k-header k-with-icon">
                                                <a className="k-header-column-menu" href="#">
                                                    <Icon name="more-vertical" />
                                                </a>
                                                <a className="k-link" href="#">
                                                    Lorem ipsum dolor sit amet consectetur adipiscing elit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; RTL Sortable Column Menu
                                                </a>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="sections-wrapper">

                <div className="section">

                    <div id="grid" className="k-grid k-widget k-grid-display-block k-grid-no-scrollbar" style={{ height: "60px" }}>
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap k-auto-scrollable">
                                <table>
                                    <colgroup>
                                        <col />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th scope="col" className="k-header k-with-icon k-filterable">
                                                <a className="k-grid-filter" href="#">
                                                    <Icon name="filter" />
                                                </a>
                                                <a className="k-link" href="#">
                                                    Sortable Filterable &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipiscing elit
                                                </a>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="section k-rtl">

                    <div id="grid" className="k-grid k-widget k-grid-display-block k-grid-no-scrollbar" style={{ height: "60px" }}>
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap k-auto-scrollable">
                                <table>
                                    <colgroup>
                                        <col />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th scope="col" className="k-header k-with-icon k-filterable">
                                                <a className="k-grid-filter" href="#">
                                                    <Icon name="filter" />
                                                </a>
                                                <a className="k-link" href="#">
                                                    Lorem ipsum dolor sit amet consectetur adipiscing elit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; RTL Sortable Filterable
                                                </a>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* Angular Specific */}
            <div className="sections-wrapper">
                <div className="section">
                    <div className="k-widget k-grid k-grid-no-scrollbar" style={{ height: "60px" }}>
                        <div className="k-grid-aria-root">
                            {/* add padding-left or -right for scrollbar width */}
                            <div className="k-grid-header">
                                <div className="k-grid-header-wrap">
                                    <table>
                                        <colgroup>
                                            <col />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th className="k-filterable k-header">
                                                    <div>
                                                        <a href="#" className="k-grid-filter">
                                                            <Icon name="filter" />
                                                        </a>
                                                    </div>
                                                    <a className="k-link" href="#" style={{ touchAction: "none" }}>
                                                        Angular Filterable &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipiscing elit
                                                    </a>
                                                </th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Angular Specific */}
                <div className="section">
                    <div className="k-widget k-grid k-grid-no-scrollbar" dir="rtl" style={{ height: "60px" }}>
                        <div className="k-grid-aria-root">
                            <div className="k-grid-header">
                                {/* add padding-left or -right for scrollbar width */}
                                <div className="k-grid-header-wrap">
                                    <table>
                                        <colgroup>
                                            <col />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th className="k-filterable k-header">
                                                    <div>
                                                        <a href="#" className="k-grid-filter">
                                                            <Icon name="filter" />
                                                        </a>
                                                    </div>
                                                    <a className="k-link" href="#" style={{ touchAction: "none" }}>
                                                        Lorem ipsum dolor sit amet consectetur adipiscing elit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; RTL Angular Filterable
                                                    </a>
                                                </th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
);
