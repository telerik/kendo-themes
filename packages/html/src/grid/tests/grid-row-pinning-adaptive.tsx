import { ActionSheetNormal, ActionSheetHeader, ActionSheetFooter } from "../../action-sheet";
import { Button } from "../../button";
import { ColumnMenuExpander, ColumnMenuItem, ColumnMenuItemWrapper, ColumnMenuNormal } from "../../column-menu";
import { TableThead, TableRow, TableTbody, TableTd } from "../../table";
import { GridContainer } from "../grid-container.spec";
import { GridContent } from "../grid-content.spec";
import GridHeaderCell from "../grid-header-cell.spec";
import { GridHeaderTable } from "../grid-header-table.spec";
import { GridHeader } from "../grid-header.spec";
import { GridStickyContainer } from "../grid-sticky-container.spec";
import { GridTable } from "../grid-table.spec";
import Grid from "../grid.spec";

const styles = `
    #test-area {
        max-width: 1060px;
        --kendo-actionsheet-height: 400px;
        --kendo-actionsheet-max-height: 400px;
    }
    #test-area > section {
        height: 600px;
        outline: 1px dotted;
        overflow: hidden;
        position: relative;
        transform: translateZ(0);
    }
`;

export default () => (
  <>
    <style>{styles}</style>
    <div id="test-area" className="k-d-grid k-grid-cols-2">
      <section>
        <Grid _renderAriaRoot className="k-grid-no-scrollbar">
          <GridHeader>
            <div className="k-grid-header-wrap">
              <GridHeaderTable>
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableThead>
                  <TableRow>
                    <GridHeaderCell columnTitle="Contact Name" />
                    <GridHeaderCell columnTitle="Job Title" />
                    <GridHeaderCell columnTitle="Country" />
                    <GridHeaderCell columnTitle="Rating" />
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
                  <col />
                </colgroup>
                <TableTbody>
                  <TableRow className="k-master-row">
                    <TableTd>Sig Jeannel</TableTd>
                    <TableTd>Human Resources Assistant III</TableTd>
                    <TableTd>USA</TableTd>
                    <TableTd>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row" alt selected>
                    <TableTd>Shelden Greyes</TableTd>
                    <TableTd>Senior Developer</TableTd>
                    <TableTd>UK</TableTd>
                    <TableTd>5/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd>Ruthi Baldini</TableTd>
                    <TableTd>Coordinator</TableTd>
                    <TableTd>Canada</TableTd>
                    <TableTd>1/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd>Annecorinne Morter</TableTd>
                    <TableTd>Professor</TableTd>
                    <TableTd>Australia</TableTd>
                    <TableTd>2/5</TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
            </GridContent>
          </GridContainer>
        </Grid>
      </section>

      <section>
        <Grid _renderAriaRoot className="k-grid-no-scrollbar">
          <GridHeader>
            <div className="k-grid-header-wrap">
              <GridHeaderTable>
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableThead>
                  <TableRow>
                    <GridHeaderCell columnTitle="Contact Name" />
                    <GridHeaderCell columnTitle="Job Title" />
                    <GridHeaderCell columnTitle="Country" />
                    <GridHeaderCell columnTitle="Rating" />
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
                  <col />
                </colgroup>
                <TableTbody>
                  <TableRow className="k-master-row">
                    <TableTd>Sig Jeannel</TableTd>
                    <TableTd>Human Resources Assistant III</TableTd>
                    <TableTd>USA</TableTd>
                    <TableTd>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row" alt>
                    <TableTd>Shelden Greyes</TableTd>
                    <TableTd>Senior Developer</TableTd>
                    <TableTd>UK</TableTd>
                    <TableTd>5/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd>Ruthi Baldini</TableTd>
                    <TableTd>Coordinator</TableTd>
                    <TableTd>Canada</TableTd>
                    <TableTd>1/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd>Annecorinne Morter</TableTd>
                    <TableTd>Professor</TableTd>
                    <TableTd>Australia</TableTd>
                    <TableTd>2/5</TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
            </GridContent>
          </GridContainer>
        </Grid>
        <ActionSheetNormal
          adaptive
          header={<ActionSheetHeader actionsEnd={<Button icon="check" size="large" fillMode="flat" />} title="Row Content Menu" />}
          footer={
            <ActionSheetFooter>
              <Button icon="cancel-outline" size="large">
                Cancel
              </Button>
              <Button icon="check" size="large" themeColor="primary" disabled>
                Apply
              </Button>
            </ActionSheetFooter>
          }
        >
          <ColumnMenuNormal size="large">
            <ColumnMenuItemWrapper>
              <ColumnMenuItem text="Hide row" startIcon="eye-slash" />
              <ColumnMenuItem text="Set row sticky" startIcon="stick" />
              <ColumnMenuExpander itemText="Pin row" itemStartIcon="pin-outline" expanderIcon="chevron-right" />
              <ColumnMenuExpander itemText="Copy" itemStartIcon="copy" expanderIcon="chevron-right" />
              <ColumnMenuItem text="Select all rows" startIcon="grid-layout" />
              <ColumnMenuExpander itemText="Export" itemStartIcon="export" expanderIcon="chevron-right" />
            </ColumnMenuItemWrapper>
          </ColumnMenuNormal>
        </ActionSheetNormal>
      </section>

      <section>
        <Grid _renderAriaRoot className="k-grid-no-scrollbar">
          <GridHeader>
            <div className="k-grid-header-wrap">
              <GridHeaderTable>
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableThead>
                  <TableRow>
                    <GridHeaderCell columnTitle="Contact Name" />
                    <GridHeaderCell columnTitle="Job Title" />
                    <GridHeaderCell columnTitle="Country" />
                    <GridHeaderCell columnTitle="Rating" />
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
                  <col />
                </colgroup>
                <TableTbody>
                  <TableRow className="k-master-row">
                    <TableTd>Sig Jeannel</TableTd>
                    <TableTd>Human Resources Assistant III</TableTd>
                    <TableTd>USA</TableTd>
                    <TableTd>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row" alt>
                    <TableTd>Shelden Greyes</TableTd>
                    <TableTd>Senior Developer</TableTd>
                    <TableTd>UK</TableTd>
                    <TableTd>5/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd>Ruthi Baldini</TableTd>
                    <TableTd>Coordinator</TableTd>
                    <TableTd>Canada</TableTd>
                    <TableTd>1/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd>Annecorinne Morter</TableTd>
                    <TableTd>Professor</TableTd>
                    <TableTd>Australia</TableTd>
                    <TableTd>2/5</TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
            </GridContent>
          </GridContainer>
        </Grid>
        <ActionSheetNormal
          adaptive
          header={<ActionSheetHeader actionsStart={<Button icon="chevron-left" size="large" fillMode="flat" />} actionsEnd={<Button icon="check" size="large" fillMode="flat" />} title="Pin row" />}
          footer={
            <ActionSheetFooter>
              <Button icon="cancel" size="large">
                Cancel
              </Button>
              <Button icon="check" size="large" themeColor="primary">
                Apply
              </Button>
            </ActionSheetFooter>
          }
        >
          <ColumnMenuNormal size="large">
            <ColumnMenuItemWrapper>
              <ColumnMenuItem text="Pin row to top" startIcon="pin-outline-top" selected />
              <ColumnMenuItem text="Pin row to bottom" startIcon="pin-outline-bottom" />
            </ColumnMenuItemWrapper>
          </ColumnMenuNormal>
        </ActionSheetNormal>
      </section>

      <section>
        <Grid _renderAriaRoot className="k-grid-no-scrollbar">
          <GridHeader>
            <div className="k-grid-header-wrap">
              <GridHeaderTable>
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableThead>
                  <TableRow>
                    <GridHeaderCell columnTitle="Contact Name" />
                    <GridHeaderCell columnTitle="Job Title" />
                    <GridHeaderCell columnTitle="Country" />
                    <GridHeaderCell columnTitle="Rating" />
                  </TableRow>
                </TableThead>
              </GridHeaderTable>
            </div>
          </GridHeader>
          <GridContainer>
            <GridContent>
              <GridStickyContainer>
                <GridTable>
                  <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                  </colgroup>
                  <TableTbody>
                    <TableRow className="k-master-row">
                      <TableTd>Shelden Greyes</TableTd>
                      <TableTd>Operator</TableTd>
                      <TableTd>UK</TableTd>
                      <TableTd>5/5</TableTd>
                    </TableRow>
                  </TableTbody>
                </GridTable>
              </GridStickyContainer>
              <GridTable>
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableTbody>
                  <TableRow className="k-master-row">
                    <TableTd>Sig Jeannel</TableTd>
                    <TableTd>Human Resources Assistant III</TableTd>
                    <TableTd>USA</TableTd>
                    <TableTd>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row k-pinned-source" alt>
                    <TableTd>Shelden Greyes</TableTd>
                    <TableTd>Senior Developer</TableTd>
                    <TableTd>UK</TableTd>
                    <TableTd>5/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd>Ruthi Baldini</TableTd>
                    <TableTd>Coordinator</TableTd>
                    <TableTd>Canada</TableTd>
                    <TableTd>1/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd>Annecorinne Morter</TableTd>
                    <TableTd>Professor</TableTd>
                    <TableTd>Australia</TableTd>
                    <TableTd>2/5</TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
            </GridContent>
          </GridContainer>
        </Grid>
      </section>
    </div>
  </>
);
