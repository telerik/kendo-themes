import { Icon } from '../../icon';


const styles = `
    .section {
        max-width: 400px;
    }

    .sections-wrapper > .section {
        display: inline-block;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area">
            <div className="sections-wrapper">
                <div className="section">
                    <div id="grid" className="k-grid k-grid-md k-grid-display-block k-grid-no-scrollbar" style={{ height: "60px" }}>
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap k-auto-scrollable">
                                <table className="k-table k-table-md k-grid-header-table">
                                    <colgroup>
                                        <col />
                                    </colgroup>
                                    <thead className="k-table-thead">
                                        <tr className="k-table-row">
                                            <th scope="col" className="k-table-th k-header k-filterable">
                                                <span className="k-cell-inner">
                                                    <span className="k-link">
                                                        <span className="k-column-title">Active Column Menu &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipiscing elit</span>
                                                    </span>
                                                    <a className="k-grid-header-menu k-grid-column-menu k-active" href="#"><Icon icon="more-vertical" /></a>
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="section k-rtl">

                    <div id="grid" className="k-grid k-grid-md k-grid-display-block k-grid-no-scrollbar" style={{ height: "60px" }}>
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap k-auto-scrollable">
                                <table className="k-table k-table-md k-grid-header-table">
                                    <colgroup>
                                        <col />
                                    </colgroup>
                                    <thead className="k-table-thead">
                                        <tr className="k-table-row">
                                            <th scope="col" className="k-table-th k-header k-filterable">
                                                <span className="k-cell-inner">
                                                    <span className="k-link">
                                                        <span className="k-column-title">Lorem ipsum dolor sit amet consectetur adipiscing elit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; RTL Column Menu</span>
                                                    </span>
                                                    <a className="k-grid-header-menu k-grid-column-menu" href="#"><Icon icon="more-vertical" /></a>
                                                </span>
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

                    <div id="grid" className="k-grid k-grid-md k-grid-display-block k-grid-no-scrollbar" style={{ height: "60px" }}>
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap k-auto-scrollable">
                                <table className="k-table k-table-md k-grid-header-table">
                                    <colgroup>
                                        <col />
                                    </colgroup>
                                    <thead className="k-table-thead">
                                        <tr className="k-table-row">
                                            <th scope="col" className="k-table-th k-header k-filterable">
                                                <span className="k-cell-inner">
                                                    <span className="k-link">
                                                        <span className="k-column-title">Active Filterable &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipiscing elit</span>
                                                    </span>
                                                    <a href="#" className="k-grid-filter-menu k-grid-header-menu k-active"><Icon icon="filter" /></a>
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="section k-rtl">

                    <div id="grid" className="k-grid k-grid-md k-grid-display-block k-grid-no-scrollbar" style={{ height: "60px" }}>
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap k-auto-scrollable">
                                <table className="k-table k-table-md k-grid-header-table">
                                    <colgroup>
                                        <col />
                                    </colgroup>
                                    <thead className="k-table-thead">
                                        <tr className="k-table-row">
                                            <th scope="col" className="k-table-th k-header k-filterable">
                                                <span className="k-cell-inner">
                                                    <span className="k-link">
                                                        <span className="k-column-title">Lorem ipsum dolor sit amet consectetur adipiscing elit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; RTL Filterable</span>
                                                    </span>
                                                    <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon icon="filter" /></a>
                                                </span>
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

                    <div id="grid" className="k-grid k-grid-md k-grid-display-block k-grid-no-scrollbar" style={{ height: "60px" }}>
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap k-auto-scrollable">
                                <table className="k-table k-table-md k-grid-header-table">
                                    <colgroup>
                                        <col />
                                    </colgroup>
                                    <thead className="k-table-thead">
                                        <tr className="k-table-row">
                                            <th scope="col" className="k-table-th k-header k-filterable">
                                                <span className="k-cell-inner">
                                                    <span className="k-link">
                                                        <span className="k-column-title">Sortable Column Menu &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipiscing elit</span>
                                                    </span>
                                                    <a className="k-grid-header-menu k-grid-column-menu" href="#"><Icon icon="more-vertical" /></a>
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="section k-rtl">

                    <div id="grid" className="k-grid k-grid-md k-grid-display-block k-grid-no-scrollbar" style={{ height: "60px" }}>
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap k-auto-scrollable">
                                <table className="k-table k-table-md k-grid-header-table">
                                    <colgroup>
                                        <col />
                                    </colgroup>
                                    <thead className="k-table-thead">
                                        <tr className="k-table-row">
                                            <th scope="col" className="k-table-th k-header k-filterable">
                                                <span className="k-cell-inner">
                                                    <span className="k-link">
                                                        <span className="k-column-title">Lorem ipsum dolor sit amet consectetur adipiscing elit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; RTL Sortable Column Menu</span>
                                                    </span>
                                                    <a className="k-grid-header-menu k-grid-column-menu" href="#"><Icon icon="more-vertical" /></a>
                                                </span>
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

                    <div id="grid" className="k-grid k-grid-md k-grid-display-block k-grid-no-scrollbar" style={{ height: "60px" }}>
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap k-auto-scrollable">
                                <table className="k-table k-table-md k-grid-header-table">
                                    <colgroup>
                                        <col />
                                    </colgroup>
                                    <thead className="k-table-thead">
                                        <tr className="k-table-row">
                                            <th scope="col" className="k-table-th k-header k-filterable">
                                                <span className="k-cell-inner">
                                                    <span className="k-link">
                                                        <span className="k-column-title">Sortable Filterable &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipiscing elit</span>
                                                    </span>
                                                    <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon icon="filter" /></a>
                                                </span>
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="section k-rtl">

                    <div id="grid" className="k-grid k-grid-md k-grid-display-block k-grid-no-scrollbar" style={{ height: "60px" }}>
                        <div className="k-grid-header">
                            <div className="k-grid-header-wrap k-auto-scrollable">
                                <table className="k-table k-table-md k-grid-header-table">
                                    <colgroup>
                                        <col />
                                    </colgroup>
                                    <thead className="k-table-thead">
                                        <tr className="k-table-row">
                                            <th scope="col" className="k-table-th k-header k-filterable">
                                                <span className="k-cell-inner">
                                                    <span className="k-link">
                                                        <span className="k-column-title">Lorem ipsum dolor sit amet consectetur adipiscing elit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; RTL Sortable Filterable</span>
                                                    </span>
                                                    <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon icon="filter" /></a>
                                                </span>
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
                    <div className="k-grid k-grid-md k-grid-no-scrollbar" style={{ height: "60px" }}>
                        <div className="k-grid-aria-root">
                            {/* add padding-left or -right for scrollbar width */}
                            <div className="k-grid-header">
                                <div className="k-grid-header-wrap">
                                    <table className="k-table k-table-md k-grid-header-table">
                                        <colgroup>
                                            <col />
                                        </colgroup>
                                        <thead className="k-table-thead">
                                            <tr className="k-table-row">
                                                <th className="k-table-th k-filterable k-header">
                                                    <span className="k-cell-inner">
                                                        <span className="k-link">
                                                            <span className="k-column-title">Angular Filterable &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipiscing elit</span>
                                                        </span>
                                                        <div><a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon icon="filter" /></a></div>
                                                    </span>
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
                    <div className="k-grid k-grid-md k-grid-no-scrollbar" dir="rtl" style={{ height: "60px" }}>
                        <div className="k-grid-aria-root">
                            <div className="k-grid-header">
                                {/* add padding-left or -right for scrollbar width */}
                                <div className="k-grid-header-wrap">
                                    <table className="k-table k-table-md k-grid-header-table">
                                        <colgroup>
                                            <col />
                                        </colgroup>
                                        <thead className="k-table-thead">
                                            <tr className="k-table-row">
                                                <th className="k-table-th k-filterable k-header">
                                                    <span className="k-cell-inner">
                                                        <span className="k-link">
                                                            <span className="k-column-title">Lorem ipsum dolor sit amet consectetur adipiscing elit &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; RTL Angular Filterable</span>
                                                        </span>
                                                        <a href="#" className="k-grid-filter-menu k-grid-header-menu"><Icon icon="filter" /></a>
                                                    </span>
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
