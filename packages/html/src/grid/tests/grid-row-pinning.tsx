import { MenuListItem, MenuSeparator } from "../../menu";
import { Popup } from "../../popup";
import { ContextMenu } from "../../context-menu";
import { Grid, GridHeader, GridContainer, GridContent, GridHeaderTable, GridHeaderCell, GridTable, GridPinnedContainer } from "../../grid";
import { TableThead, TableTbody, TableRow, TableTd } from "../../table";
import { Icon } from "../../icon";

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
            <MenuListItem text="Pin row" icon="pin" showArrow active />
            <MenuSeparator />
            <MenuListItem text="Copy" icon="copy" showArrow />
            <MenuListItem text="Select all rows" icon="grid-layout" />
            <MenuListItem last text="Export" icon="export" showArrow />
          </ContextMenu>
        </Popup>

        {/* Pin row submenu */}
        <Popup className="k-menu-popup" offset={{ left: "296px", top: "241px" }}>
          <ContextMenu>
            <MenuListItem first text="Pin row to top" icon="pin-top" selected />
            <MenuListItem last text="Pin row to bottom" icon="pin-bottom" />
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
          {/* Pinned Content - Row pinned to top */}
          <GridPinnedContainer>
            <div className="k-grid-pinned-wrap">
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
            </div>
          </GridPinnedContainer>
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
            </GridContent>
          </GridContainer>
          {/* Pinned Content - Row pinned to bottom */}
          <GridPinnedContainer position="bottom">
            <div className="k-grid-pinned-wrap">
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
            </div>
          </GridPinnedContainer>
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
                    <GridHeaderCell accessibleLabel="Actions"></GridHeaderCell>
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
                    <TableTd><span className="k-pin-cell"><Icon icon="pin" /></span></TableTd>
                    <TableTd>Sig Jeannel</TableTd>
                    <TableTd>Human Resources Assistant III</TableTd>
                    <TableTd>USA</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row" alt>
                    <TableTd><span className="k-pin-cell"><Icon icon="pin" /></span></TableTd>
                    <TableTd>Shelden Greyes</TableTd>
                    <TableTd>Senior Developer</TableTd>
                    <TableTd>UK</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd><span className="k-pin-cell"><Icon icon="pin" /></span></TableTd>
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
            <MenuListItem first text="Pin row to top" icon="pin-top" selected />
            <MenuListItem last text="Pin row to bottom" icon="pin-bottom" />
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
                    <GridHeaderCell accessibleLabel="Actions"></GridHeaderCell>
                    <GridHeaderCell columnTitle="Contact Name" />
                    <GridHeaderCell columnTitle="Job Title" />
                    <GridHeaderCell columnTitle="Country" />
                  </TableRow>
                </TableThead>
              </GridHeaderTable>
            </div>
          </GridHeader>
          {/* Pinned Content - Row pinned to top */}
          <GridPinnedContainer>
            <div className="k-grid-pinned-wrap">
              <GridTable>
                <colgroup>
                  <col style={{ width: "48px" }} />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableTbody>
                  <TableRow className="k-master-row">
                    <TableTd><span className="k-pin-cell"><Icon icon="unpin" className="k-action-icon" /></span></TableTd>
                    <TableTd>Shelden Greyes</TableTd>
                    <TableTd>Operator</TableTd>
                    <TableTd>UK</TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
            </div>
          </GridPinnedContainer>
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
                    <TableTd><span className="k-pin-cell"><Icon icon="pin" /></span></TableTd>
                    <TableTd>Sig Jeannel</TableTd>
                    <TableTd>Human Resources Assistant III</TableTd>
                    <TableTd>USA</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row k-pinned-source" alt>
                    <TableTd><span className="k-pin-cell"><Icon icon="unpin" className="k-action-icon" /></span></TableTd>
                    <TableTd>Shelden Greyes</TableTd>
                    <TableTd>Operator</TableTd>
                    <TableTd>UK</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd><span className="k-pin-cell"><Icon icon="pin" /></span></TableTd>
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
                    <GridHeaderCell accessibleLabel="Actions"></GridHeaderCell>
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
                    <TableTd><span className="k-pin-cell"><Icon icon="pin" /></span></TableTd>
                    <TableTd>Sig Jeannel</TableTd>
                    <TableTd>Human Resources Assistant III</TableTd>
                    <TableTd>USA</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row k-pinned-source" alt>
                    <TableTd><span className="k-pin-cell"><Icon icon="unpin" className="k-action-icon" /></span></TableTd>
                    <TableTd>Shelden Greyes</TableTd>
                    <TableTd>Operator</TableTd>
                    <TableTd>UK</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd><span className="k-pin-cell"><Icon icon="pin" /></span></TableTd>
                    <TableTd>Ruthi Baldini</TableTd>
                    <TableTd>Data Coordinator</TableTd>
                    <TableTd>Canada</TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
            </GridContent>
          </GridContainer>
          {/* Pinned Content - Row pinned to bottom */}
          <GridPinnedContainer position="bottom">
            <div className="k-grid-pinned-wrap">
              <GridTable>
                <colgroup>
                  <col style={{ width: "48px" }} />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableTbody>
                  <TableRow className="k-master-row">
                    <TableTd><span className="k-pin-cell"><Icon icon="unpin" className="k-action-icon" /></span></TableTd>
                    <TableTd>Shelden Greyes</TableTd>
                    <TableTd>Operator</TableTd>
                    <TableTd>UK</TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
            </div>
          </GridPinnedContainer>
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
                    <GridHeaderCell accessibleLabel="Actions"></GridHeaderCell>
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
                    <TableTd><span className="k-pin-cell"><Icon icon="pin-top" /><Icon icon="pin-bottom" /></span></TableTd>
                    <TableTd>Sig Jeannel</TableTd>
                    <TableTd>Human Resources Assistant III</TableTd>
                    <TableTd>USA</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row" alt>
                    <TableTd><span className="k-pin-cell"><Icon icon="pin-top" /><Icon icon="pin-bottom" /></span></TableTd>
                    <TableTd>Shelden Greyes</TableTd>
                    <TableTd>Senior Developer</TableTd>
                    <TableTd>UK</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd><span className="k-pin-cell"><Icon icon="pin-top" /><Icon icon="pin-bottom" /></span></TableTd>
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
                    <GridHeaderCell accessibleLabel="Actions"></GridHeaderCell>
                    <GridHeaderCell columnTitle="Contact Name" />
                    <GridHeaderCell columnTitle="Job Title" />
                    <GridHeaderCell columnTitle="Country" />
                  </TableRow>
                </TableThead>
              </GridHeaderTable>
            </div>
          </GridHeader>
          {/* Pinned Content - Row pinned to top */}
          <GridPinnedContainer>
            <div className="k-grid-pinned-wrap">
              <GridTable>
                <colgroup>
                  <col style={{ width: "72px" }} />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableTbody>
                  <TableRow className="k-master-row">
                    <TableTd><span className="k-pin-cell"><Icon icon="unpin" className="k-action-icon" /><Icon icon="pin-bottom" /></span></TableTd>
                    <TableTd>Shelden Greyes</TableTd>
                    <TableTd>Operator</TableTd>
                    <TableTd>UK</TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
            </div>
          </GridPinnedContainer>
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
                    <TableTd><span className="k-pin-cell"><Icon icon="pin-top" /><Icon icon="pin-bottom" /></span></TableTd>
                    <TableTd>Sig Jeannel</TableTd>
                    <TableTd>Human Resources Assistant III</TableTd>
                    <TableTd>USA</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row k-pinned-source" alt>
                    <TableTd><span className="k-pin-cell"><Icon icon="unpin" className="k-action-icon" /><Icon icon="pin-bottom" /></span></TableTd>
                    <TableTd>Shelden Greyes</TableTd>
                    <TableTd>Operator</TableTd>
                    <TableTd>UK</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd><span className="k-pin-cell"><Icon icon="pin-top" /><Icon icon="pin-bottom" /></span></TableTd>
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
                    <GridHeaderCell accessibleLabel="Actions"></GridHeaderCell>
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
                    <TableTd><span className="k-pin-cell"><Icon icon="pin-top" /><Icon icon="pin-bottom" /></span></TableTd>
                    <TableTd>Sig Jeannel</TableTd>
                    <TableTd>Human Resources Assistant III</TableTd>
                    <TableTd>USA</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row k-pinned-source" alt>
                    <TableTd><span className="k-pin-cell"><Icon icon="pin-top" /><Icon icon="unpin" className="k-action-icon" /></span></TableTd>
                    <TableTd>Shelden Greyes</TableTd>
                    <TableTd>Operator</TableTd>
                    <TableTd>UK</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd><span className="k-pin-cell"><Icon icon="pin-top" /><Icon icon="pin-bottom" /></span></TableTd>
                    <TableTd>Ruthi Baldini</TableTd>
                    <TableTd>Data Coordinator</TableTd>
                    <TableTd>Canada</TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
            </GridContent>
          </GridContainer>
          {/* Pinned Content - Row pinned to bottom */}
          <GridPinnedContainer position="bottom">
            <div className="k-grid-pinned-wrap">
              <GridTable>
                <colgroup>
                  <col style={{ width: "72px" }} />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableTbody>
                  <TableRow className="k-master-row">
                    <TableTd><span className="k-pin-cell"><Icon icon="pin-top" /><Icon icon="unpin" className="k-action-icon" /></span></TableTd>
                    <TableTd>Shelden Greyes</TableTd>
                    <TableTd>Operator</TableTd>
                    <TableTd>UK</TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
            </div>
          </GridPinnedContainer>
        </Grid>
      </section>
    </div>
  </>
);
