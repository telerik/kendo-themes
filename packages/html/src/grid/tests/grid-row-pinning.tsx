import { MenuListItem } from "../../menu/menu-list-item.spec";
import { MenuSeparator } from "../../menu/menu-separator.spec";
import { Popup } from "../../popup/popup.spec";
import { ContextMenu } from "../../context-menu/context-menu.spec";
import { Grid } from "../grid.spec";
import { GridHeader } from "../grid-header.spec";
import { GridContainer } from "../grid-container.spec";
import { GridContent } from "../grid-content.spec";
import { GridHeaderTable } from "../grid-header-table.spec";
import { GridHeaderCell } from "../grid-header-cell.spec";
import { GridTable } from "../grid-table.spec";
import { GridStickyContainer } from "../grid-sticky-container.spec";
import { TableThead } from '../../table/table-thead';
import { TableTbody } from '../../table/table-tbody';
import { TableRow } from '../../table/table-row';
import { TableTd } from '../../table/table-td';
import { Icon } from "../../icon/icon.spec";

export default () => (
  <>
    <div id="test-area" className="k-d-grid k-grid-cols-3">
      <span>Context Menu only</span>
      <span>Row pinned to top</span>
      <span>Row pinned to bottom</span>

      <section>
        <Grid>
          <GridHeader>
            <div className="k-grid-header-wrap">
              <GridHeaderTable>
                <colgroup>
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableThead>
                  <TableRow>
                    <GridHeaderCell columnTitle="Contact Name" />
                    <GridHeaderCell columnTitle="Job Title" />
                    <GridHeaderCell columnTitle="Country" />
                  </TableRow>
                </TableThead>
              </GridHeaderTable>
            </div>
          </GridHeader>
          <GridContainer>
            <GridContent>
              <GridTable>
                <colgroup>
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableTbody>
                  <TableRow className="k-master-row">
                    <TableTd>Sig Jeannel</TableTd>
                    <TableTd>Human Resources Assistant III</TableTd>
                    <TableTd>USA</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row" alt>
                    <TableTd>Shelden Greyes</TableTd>
                    <TableTd>Senior Developer</TableTd>
                    <TableTd>UK</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd>Ruthi Baldini</TableTd>
                    <TableTd>Coordinator</TableTd>
                    <TableTd>Canada</TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
            </GridContent>
          </GridContainer>
        </Grid>

        {/* Row Pinning Context Menu */}
        <Popup className="k-menu-popup" offset={{ left: "145px", top: "185px" }}>
          <ContextMenu>
            <MenuListItem first text="Hide row" icon="eye-slash" />
            <MenuListItem text="Set row sticky" icon="stick" />
            <MenuListItem text="Pin row" icon="pin-outline" showArrow active />
            <MenuSeparator />
            <MenuListItem text="Copy" icon="copy" showArrow />
            <MenuListItem text="Select all rows" icon="grid-layout" />
            <MenuListItem last text="Export" icon="export" showArrow />
          </ContextMenu>
        </Popup>

        {/* Pin row submenu */}
        <Popup className="k-menu-popup" offset={{ left: "296px", top: "241px" }}>
          <ContextMenu>
            <MenuListItem first text="Pin row to top" icon="pin-outline-top" selected />
            <MenuListItem last text="Pin row to bottom" icon="pin-outline-bottom" />
          </ContextMenu>
        </Popup>
      </section>

      <section>
        <Grid>
          <GridHeader>
            <div className="k-grid-header-wrap">
              <GridHeaderTable>
                <colgroup>
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableThead>
                  <TableRow>
                    <GridHeaderCell columnTitle="Contact Name" />
                    <GridHeaderCell columnTitle="Job Title" />
                    <GridHeaderCell columnTitle="Country" />
                  </TableRow>
                </TableThead>
              </GridHeaderTable>
            </div>
          </GridHeader>
          <GridContainer>
            <GridContent>
              {/* Pinned Content - Row pinned to top */}
              <GridStickyContainer>
                <GridTable>
                  <colgroup>
                    <col />
                    <col />
                    <col />
                  </colgroup>
                  <TableTbody>
                    <TableRow className="k-master-row">
                      <TableTd>Shelden Greyes</TableTd>
                      <TableTd>Operator</TableTd>
                      <TableTd>UK</TableTd>
                    </TableRow>
                  </TableTbody>
                </GridTable>
              </GridStickyContainer>
              <GridTable>
                <colgroup>
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableTbody>
                  <TableRow className="k-master-row">
                    <TableTd>Sig Jeannel</TableTd>
                    <TableTd>Human Resources Assistant III</TableTd>
                    <TableTd>USA</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row k-pinned-source" alt>
                    <TableTd>Shelden Greyes</TableTd>
                    <TableTd>Operator</TableTd>
                    <TableTd>UK</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd>Ruthi Baldini</TableTd>
                    <TableTd>Data Coordinator</TableTd>
                    <TableTd>Canada</TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
            </GridContent>
          </GridContainer>
        </Grid>
      </section>

      <section>
        <Grid>
          <GridHeader>
            <div className="k-grid-header-wrap">
              <GridHeaderTable>
                <colgroup>
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableThead>
                  <TableRow>
                    <GridHeaderCell columnTitle="Contact Name" />
                    <GridHeaderCell columnTitle="Job Title" />
                    <GridHeaderCell columnTitle="Country" />
                  </TableRow>
                </TableThead>
              </GridHeaderTable>
            </div>
          </GridHeader>
          <GridContainer>
            <GridContent>
              <GridTable>
                <colgroup>
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableTbody>
                  <TableRow className="k-master-row">
                    <TableTd>Sig Jeannel</TableTd>
                    <TableTd>Human Resources Assistant III</TableTd>
                    <TableTd>USA</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row k-pinned-source" alt>
                    <TableTd>Shelden Greyes</TableTd>
                    <TableTd>Operator</TableTd>
                    <TableTd>UK</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd>Ruthi Baldini</TableTd>
                    <TableTd>Data Coordinator</TableTd>
                    <TableTd>Canada</TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
              {/* Pinned Content - Row pinned to bottom */}
              <GridStickyContainer position="bottom" style={{ insetBlockEnd: 0 }}>
                <GridTable>
                  <colgroup>
                    <col />
                    <col />
                    <col />
                  </colgroup>
                  <TableTbody>
                    <TableRow className="k-master-row">
                      <TableTd>Shelden Greyes</TableTd>
                      <TableTd>Operator</TableTd>
                      <TableTd>UK</TableTd>
                    </TableRow>
                  </TableTbody>
                </GridTable>
              </GridStickyContainer>
            </GridContent>
          </GridContainer>
        </Grid>
      </section>

      <span>Pinning Column</span>
      <span>Row pinned to top</span>
      <span>Row pinned to bottom</span>

      <section>
        <Grid>
          <GridHeader>
            <div className="k-grid-header-wrap">
              <GridHeaderTable>
                <colgroup>
                  <col style={{ width: "48px" }} />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableThead>
                  <TableRow>
                    <GridHeaderCell></GridHeaderCell>
                    <GridHeaderCell columnTitle="Contact Name" />
                    <GridHeaderCell columnTitle="Job Title" />
                    <GridHeaderCell columnTitle="Country" />
                  </TableRow>
                </TableThead>
              </GridHeaderTable>
            </div>
          </GridHeader>
          <GridContainer>
            <GridContent>
              <GridTable>
                <colgroup>
                  <col style={{ width: "48px" }} />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableTbody>
                  <TableRow className="k-master-row">
                    <TableTd><span className="k-pin-cell"><Icon icon="pin-outline" /></span></TableTd>
                    <TableTd>Sig Jeannel</TableTd>
                    <TableTd>Human Resources Assistant III</TableTd>
                    <TableTd>USA</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row" alt>
                    <TableTd><span className="k-pin-cell"><Icon icon="pin-outline" /></span></TableTd>
                    <TableTd>Shelden Greyes</TableTd>
                    <TableTd>Senior Developer</TableTd>
                    <TableTd>UK</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd><span className="k-pin-cell"><Icon icon="pin-outline" /></span></TableTd>
                    <TableTd>Ruthi Baldini</TableTd>
                    <TableTd>Coordinator</TableTd>
                    <TableTd>Canada</TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
            </GridContent>
          </GridContainer>
        </Grid>

        {/* Row Pinning Context Menu */}
        <Popup className="k-menu-popup" offset={{ left: "50px", top: "580px" }}>
          <ContextMenu>
            <MenuListItem first text="Pin row to top" icon="pin-outline-top" selected />
            <MenuListItem last text="Pin row to bottom" icon="pin-outline-bottom" />
          </ContextMenu>
        </Popup>
      </section>

      <section>
        <Grid>
          <GridHeader>
            <div className="k-grid-header-wrap">
              <GridHeaderTable>
                <colgroup>
                  <col style={{ width: "48px" }} />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableThead>
                  <TableRow>
                    <GridHeaderCell></GridHeaderCell>
                    <GridHeaderCell columnTitle="Contact Name" />
                    <GridHeaderCell columnTitle="Job Title" />
                    <GridHeaderCell columnTitle="Country" />
                  </TableRow>
                </TableThead>
              </GridHeaderTable>
            </div>
          </GridHeader>
          <GridContainer>
            <GridContent>
              {/* Pinned Content - Row pinned to top */}
              <GridStickyContainer>
                <GridTable>
                  <colgroup>
                    <col style={{ width: "48px" }} />
                    <col />
                    <col />
                    <col />
                  </colgroup>
                  <TableTbody>
                    <TableRow className="k-master-row">
                      <TableTd><span className="k-pin-cell"><Icon icon="unpin-outline" /></span></TableTd>
                      <TableTd>Shelden Greyes</TableTd>
                      <TableTd>Operator</TableTd>
                      <TableTd>UK</TableTd>
                    </TableRow>
                  </TableTbody>
                </GridTable>
              </GridStickyContainer>
              <GridTable>
                <colgroup>
                  <col style={{ width: "48px" }} />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableTbody>
                  <TableRow className="k-master-row">
                    <TableTd><span className="k-pin-cell"><Icon icon="pin-outline" /></span></TableTd>
                    <TableTd>Sig Jeannel</TableTd>
                    <TableTd>Human Resources Assistant III</TableTd>
                    <TableTd>USA</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row k-pinned-source" alt>
                    <TableTd><span className="k-pin-cell"><Icon icon="unpin-outline" /></span></TableTd>
                    <TableTd>Shelden Greyes</TableTd>
                    <TableTd>Operator</TableTd>
                    <TableTd>UK</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd><span className="k-pin-cell"><Icon icon="pin-outline" /></span></TableTd>
                    <TableTd>Ruthi Baldini</TableTd>
                    <TableTd>Data Coordinator</TableTd>
                    <TableTd>Canada</TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
            </GridContent>
          </GridContainer>
        </Grid>
      </section>

      <section>
        <Grid>
          <GridHeader>
            <div className="k-grid-header-wrap">
              <GridHeaderTable>
                <colgroup>
                  <col style={{ width: "48px" }} />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableThead>
                  <TableRow>
                    <GridHeaderCell></GridHeaderCell>
                    <GridHeaderCell columnTitle="Contact Name" />
                    <GridHeaderCell columnTitle="Job Title" />
                    <GridHeaderCell columnTitle="Country" />
                  </TableRow>
                </TableThead>
              </GridHeaderTable>
            </div>
          </GridHeader>
          <GridContainer>
            <GridContent>
              <GridTable>
                <colgroup>
                  <col style={{ width: "48px" }} />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableTbody>
                  <TableRow className="k-master-row">
                    <TableTd><span className="k-pin-cell"><Icon icon="pin-outline" /></span></TableTd>
                    <TableTd>Sig Jeannel</TableTd>
                    <TableTd>Human Resources Assistant III</TableTd>
                    <TableTd>USA</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row k-pinned-source" alt>
                    <TableTd><span className="k-pin-cell"><Icon icon="unpin-outline" /></span></TableTd>
                    <TableTd>Shelden Greyes</TableTd>
                    <TableTd>Operator</TableTd>
                    <TableTd>UK</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd><span className="k-pin-cell"><Icon icon="pin-outline" /></span></TableTd>
                    <TableTd>Ruthi Baldini</TableTd>
                    <TableTd>Data Coordinator</TableTd>
                    <TableTd>Canada</TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
              {/* Pinned Content - Row pinned to bottom */}
              <GridStickyContainer position="bottom" style={{ insetBlockEnd: 0 }}>
                <GridTable>
                  <colgroup>
                    <col style={{ width: "48px" }} />
                    <col />
                    <col />
                    <col />
                  </colgroup>
                  <TableTbody>
                    <TableRow className="k-master-row">
                      <TableTd><span className="k-pin-cell"><Icon icon="unpin-outline" /></span></TableTd>
                      <TableTd>Shelden Greyes</TableTd>
                      <TableTd>Operator</TableTd>
                      <TableTd>UK</TableTd>
                    </TableRow>
                  </TableTbody>
                </GridTable>
              </GridStickyContainer>
            </GridContent>
          </GridContainer>
        </Grid>
      </section>

      <span>Pinning Column with Separate Pinning Icons</span>
      <span>Row pinned to top</span>
      <span>Row pinned to bottom</span>

      <section>
        <Grid>
          <GridHeader>
            <div className="k-grid-header-wrap">
              <GridHeaderTable>
                <colgroup>
                  <col style={{ width: "72px" }} />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableThead>
                  <TableRow>
                    <GridHeaderCell></GridHeaderCell>
                    <GridHeaderCell columnTitle="Contact Name" />
                    <GridHeaderCell columnTitle="Job Title" />
                    <GridHeaderCell columnTitle="Country" />
                  </TableRow>
                </TableThead>
              </GridHeaderTable>
            </div>
          </GridHeader>
          <GridContainer>
            <GridContent>
              <GridTable>
                <colgroup>
                  <col style={{ width: "72px" }} />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableTbody>
                  <TableRow className="k-master-row">
                    <TableTd><span className="k-pin-cell"><Icon icon="pin-outline-top" /><Icon icon="pin-outline-bottom" /></span></TableTd>
                    <TableTd>Sig Jeannel</TableTd>
                    <TableTd>Human Resources Assistant III</TableTd>
                    <TableTd>USA</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row" alt>
                    <TableTd><span className="k-pin-cell"><Icon icon="pin-outline-top" /><Icon icon="pin-outline-bottom" /></span></TableTd>
                    <TableTd>Shelden Greyes</TableTd>
                    <TableTd>Senior Developer</TableTd>
                    <TableTd>UK</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd><span className="k-pin-cell"><Icon icon="pin-outline-top" /><Icon icon="pin-outline-bottom" /></span></TableTd>
                    <TableTd>Ruthi Baldini</TableTd>
                    <TableTd>Coordinator</TableTd>
                    <TableTd>Canada</TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
            </GridContent>
          </GridContainer>
        </Grid>
      </section>

      <section>
        <Grid>
          <GridHeader>
            <div className="k-grid-header-wrap">
              <GridHeaderTable>
                <colgroup>
                  <col style={{ width: "72px" }} />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableThead>
                  <TableRow>
                    <GridHeaderCell></GridHeaderCell>
                    <GridHeaderCell columnTitle="Contact Name" />
                    <GridHeaderCell columnTitle="Job Title" />
                    <GridHeaderCell columnTitle="Country" />
                  </TableRow>
                </TableThead>
              </GridHeaderTable>
            </div>
          </GridHeader>
          <GridContainer>
            <GridContent>
              {/* Pinned Content - Row pinned to top */}
              <GridStickyContainer>
                <GridTable>
                  <colgroup>
                    <col style={{ width: "72px" }} />
                    <col />
                    <col />
                    <col />
                  </colgroup>
                  <TableTbody>
                    <TableRow className="k-master-row">
                      <TableTd><span className="k-pin-cell"><Icon icon="unpin-outline" /><Icon icon="pin-outline-bottom" /></span></TableTd>
                      <TableTd>Shelden Greyes</TableTd>
                      <TableTd>Operator</TableTd>
                      <TableTd>UK</TableTd>
                    </TableRow>
                  </TableTbody>
                </GridTable>
              </GridStickyContainer>
              <GridTable>
                <colgroup>
                  <col style={{ width: "72px" }} />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableTbody>
                  <TableRow className="k-master-row">
                    <TableTd><span className="k-pin-cell"><Icon icon="pin-outline-top" /><Icon icon="pin-outline-bottom" /></span></TableTd>
                    <TableTd>Sig Jeannel</TableTd>
                    <TableTd>Human Resources Assistant III</TableTd>
                    <TableTd>USA</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row k-pinned-source" alt>
                    <TableTd><span className="k-pin-cell"><Icon icon="unpin-outline" /><Icon icon="pin-outline-bottom" /></span></TableTd>
                    <TableTd>Shelden Greyes</TableTd>
                    <TableTd>Operator</TableTd>
                    <TableTd>UK</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd><span className="k-pin-cell"><Icon icon="pin-outline-top" /><Icon icon="pin-outline-bottom" /></span></TableTd>
                    <TableTd>Ruthi Baldini</TableTd>
                    <TableTd>Data Coordinator</TableTd>
                    <TableTd>Canada</TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
            </GridContent>
          </GridContainer>
        </Grid>
      </section>

      <section>
        <Grid>
          <GridHeader>
            <div className="k-grid-header-wrap">
              <GridHeaderTable>
                <colgroup>
                  <col style={{ width: "72px" }} />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableThead>
                  <TableRow>
                    <GridHeaderCell></GridHeaderCell>
                    <GridHeaderCell columnTitle="Contact Name" />
                    <GridHeaderCell columnTitle="Job Title" />
                    <GridHeaderCell columnTitle="Country" />
                  </TableRow>
                </TableThead>
              </GridHeaderTable>
            </div>
          </GridHeader>
          <GridContainer>
            <GridContent>
              <GridTable>
                <colgroup>
                  <col style={{ width: "72px" }} />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableTbody>
                  <TableRow className="k-master-row">
                    <TableTd><span className="k-pin-cell"><Icon icon="pin-outline-top" /><Icon icon="pin-outline-bottom" /></span></TableTd>
                    <TableTd>Sig Jeannel</TableTd>
                    <TableTd>Human Resources Assistant III</TableTd>
                    <TableTd>USA</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row k-pinned-source" alt>
                    <TableTd><span className="k-pin-cell"><Icon icon="pin-outline-top" /><Icon icon="unpin-outline" /></span></TableTd>
                    <TableTd>Shelden Greyes</TableTd>
                    <TableTd>Operator</TableTd>
                    <TableTd>UK</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd><span className="k-pin-cell"><Icon icon="pin-outline-top" /><Icon icon="pin-outline-bottom" /></span></TableTd>
                    <TableTd>Ruthi Baldini</TableTd>
                    <TableTd>Data Coordinator</TableTd>
                    <TableTd>Canada</TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
              {/* Pinned Content - Row pinned to bottom */}
              <GridStickyContainer position="bottom" style={{ insetBlockEnd: 0 }}>
                <GridTable>
                  <colgroup>
                    <col style={{ width: "72px" }} />
                    <col />
                    <col />
                    <col />
                  </colgroup>
                  <TableTbody>
                    <TableRow className="k-master-row">
                      <TableTd><span className="k-pin-cell"><Icon icon="pin-outline-top" /><Icon icon="unpin-outline" /></span></TableTd>
                      <TableTd>Shelden Greyes</TableTd>
                      <TableTd>Operator</TableTd>
                      <TableTd>UK</TableTd>
                    </TableRow>
                  </TableTbody>
                </GridTable>
              </GridStickyContainer>
            </GridContent>
          </GridContainer>
        </Grid>
      </section>
    </div>
  </>
);
