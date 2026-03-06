import { ActionSheetNormal, ActionSheetHeader, ActionSheetFooter } from "../../action-sheet";
import { Button } from "../../button";
import { ChipList, Chip, ChipAction } from "../../chip";
import { ColumnMenuNormal, ColumnMenuItemWrapper, ColumnMenuItem, ColumnMenuExpander } from "../../column-menu";
import { Icon } from "../../icon";
import { TableThead, TableRow, TableTbody, TableTd } from "../../table";
import { GridContainer } from "../grid-container.spec";
import { GridContent } from "../grid-content.spec";
import { GridGroupingHeader } from "../grid-grouping-header.spec";
import GridHeaderCell from "../grid-header-cell.spec";
import { GridHeaderTable } from "../grid-header-table.spec";
import { GridHeader } from "../grid-header.spec";
import { GridPinnedContainer } from "../grid-pinned-container.spec";
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
        <Grid
          className="k-grid-no-scrollbar"
          _renderAriaRoot
          groupingHeader={
            <GridGroupingHeader>
              <ChipList>
                <Chip
                  text="Rating"
                  actions={
                    <>
                      <ChipAction type="remove" />
                    </>
                  }
                />
              </ChipList>
            </GridGroupingHeader>
          }
        >
          <GridHeader draggable>
            <div className="k-grid-header-wrap">
              <GridHeaderTable>
                <colgroup>
                  <col className="k-group-col" />
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableThead>
                  <TableRow>
                    <GridHeaderCell colspan={1} rowspan={1} className="k-group-cell" accessibleLabel="Group"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Contact Name"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Job Title"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Country"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Rating"></GridHeaderCell>
                  </TableRow>
                </TableThead>
              </GridHeaderTable>
            </div>
          </GridHeader>
          <GridContainer>
            <GridContent>
              <GridTable>
                <colgroup>
                  <col className="k-group-col" />
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableTbody>
                  <TableRow className="k-table-group-row k-grouping-row">
                    <TableTd colspan={5}>
                      <p className="k-reset">
                        <Icon icon="caret-alt-down" />
                        Rating 3/5
                      </p>
                    </TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Sig Jeannel</TableTd>
                    <TableTd colspan={1}>Human Resources Assistant III</TableTd>
                    <TableTd colspan={1}>USA</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row" alt>
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Isadora Plumtree</TableTd>
                    <TableTd colspan={1}>Graphic Designer</TableTd>
                    <TableTd colspan={1}>Brazil</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Xerxes Borson</TableTd>
                    <TableTd colspan={1}>Content Writer</TableTd>
                    <TableTd colspan={1}>Netherlands</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-table-group-row k-grouping-row">
                    <TableTd colspan={5}>
                      <p className="k-reset">
                        <Icon icon="caret-alt-down" />
                        Rating 1/5
                      </p>
                    </TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Ruthi Bldini</TableTd>
                    <TableTd colspan={1}>Coordinator</TableTd>
                    <TableTd colspan={1}>Canada</TableTd>
                    <TableTd colspan={1}>1/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row" alt>
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Marcelina Vee</TableTd>
                    <TableTd colspan={1}>Marketing Specialist</TableTd>
                    <TableTd colspan={1}>China</TableTd>
                    <TableTd colspan={1}>1/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Finnian Bramble</TableTd>
                    <TableTd colspan={1}>Business Analyst</TableTd>
                    <TableTd colspan={1}>Russia</TableTd>
                    <TableTd colspan={1}>1/5</TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
            </GridContent>
          </GridContainer>
        </Grid>
      </section>

      <section>
        <Grid
          className="k-grid-no-scrollbar"
          _renderAriaRoot
          groupingHeader={
            <GridGroupingHeader>
              <ChipList>
                <Chip
                  text="Rating"
                  actions={
                    <>
                      <ChipAction type="remove" />
                    </>
                  }
                />
              </ChipList>
            </GridGroupingHeader>
          }
        >
          <GridHeader draggable>
            <div className="k-grid-header-wrap">
              <GridHeaderTable>
                <colgroup>
                  <col className="k-group-col" />
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableThead>
                  <TableRow>
                    <GridHeaderCell colspan={1} rowspan={1} className="k-group-cell" accessibleLabel="Group"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Contact Name"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Job Title"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Country"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Rating"></GridHeaderCell>
                  </TableRow>
                </TableThead>
              </GridHeaderTable>
            </div>
          </GridHeader>
          <GridContainer>
            <GridContent>
              <GridTable>
                <colgroup>
                  <col className="k-group-col" />
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableTbody>
                  <TableRow className="k-table-group-row k-grouping-row">
                    <TableTd colspan={5}>
                      <p className="k-reset">
                        <Icon icon="caret-alt-down" />
                        Rating 3/5
                      </p>
                    </TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Sig Jeannel</TableTd>
                    <TableTd colspan={1}>Human Resources Assistant III</TableTd>
                    <TableTd colspan={1}>USA</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row" alt>
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Isadora Plumtree</TableTd>
                    <TableTd colspan={1}>Graphic Designer</TableTd>
                    <TableTd colspan={1}>Brazil</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Xerxes Borson</TableTd>
                    <TableTd colspan={1}>Content Writer</TableTd>
                    <TableTd colspan={1}>Netherlands</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-table-group-row k-grouping-row">
                    <TableTd colspan={5}>
                      <p className="k-reset">
                        <Icon icon="caret-alt-down" />
                        Rating 1/5
                      </p>
                    </TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Ruthi Bldini</TableTd>
                    <TableTd colspan={1}>Coordinator</TableTd>
                    <TableTd colspan={1}>Canada</TableTd>
                    <TableTd colspan={1}>1/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row" alt>
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Marcelina Vee</TableTd>
                    <TableTd colspan={1}>Marketing Specialist</TableTd>
                    <TableTd colspan={1}>China</TableTd>
                    <TableTd colspan={1}>1/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Finnian Bramble</TableTd>
                    <TableTd colspan={1}>Business Analyst</TableTd>
                    <TableTd colspan={1}>Russia</TableTd>
                    <TableTd colspan={1}>1/5</TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
            </GridContent>
          </GridContainer>
        </Grid>
        <ActionSheetNormal
          adaptive
          header={<ActionSheetHeader actionsEnd={<Button icon="check" size="large" fillMode="flat" />} title="Group Content Menu" />}
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
              <ColumnMenuExpander itemText="Pin group" itemStartIcon="pin-outline" expanderIcon="chevron-right" />
              <ColumnMenuExpander itemText="Copy" itemStartIcon="copy" expanderIcon="chevron-right" />
              <ColumnMenuItem text="Select all rows" startIcon="grid-layout" />
              <ColumnMenuExpander itemText="Export" itemStartIcon="export" expanderIcon="chevron-right" />
            </ColumnMenuItemWrapper>
          </ColumnMenuNormal>
        </ActionSheetNormal>
      </section>

      <section>
        <Grid
          className="k-grid-no-scrollbar"
          _renderAriaRoot
          groupingHeader={
            <GridGroupingHeader>
              <ChipList>
                <Chip
                  text="Rating"
                  actions={
                    <>
                      <ChipAction type="remove" />
                    </>
                  }
                />
              </ChipList>
            </GridGroupingHeader>
          }
        >
          <GridHeader draggable>
            <div className="k-grid-header-wrap">
              <GridHeaderTable>
                <colgroup>
                  <col className="k-group-col" />
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableThead>
                  <TableRow>
                    <GridHeaderCell colspan={1} rowspan={1} className="k-group-cell" accessibleLabel="Group"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Contact Name"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Job Title"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Country"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Rating"></GridHeaderCell>
                  </TableRow>
                </TableThead>
              </GridHeaderTable>
            </div>
          </GridHeader>
          <GridContainer>
            <GridContent>
              <GridTable>
                <colgroup>
                  <col className="k-group-col" />
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableTbody>
                  <TableRow className="k-table-group-row k-grouping-row">
                    <TableTd colspan={5}>
                      <p className="k-reset">
                        <Icon icon="caret-alt-down" />
                        Rating 3/5
                      </p>
                    </TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Sig Jeannel</TableTd>
                    <TableTd colspan={1}>Human Resources Assistant III</TableTd>
                    <TableTd colspan={1}>USA</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row" alt>
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Isadora Plumtree</TableTd>
                    <TableTd colspan={1}>Graphic Designer</TableTd>
                    <TableTd colspan={1}>Brazil</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Xerxes Borson</TableTd>
                    <TableTd colspan={1}>Content Writer</TableTd>
                    <TableTd colspan={1}>Netherlands</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-table-group-row k-grouping-row">
                    <TableTd colspan={5}>
                      <p className="k-reset">
                        <Icon icon="caret-alt-down" />
                        Rating 1/5
                      </p>
                    </TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Ruthi Bldini</TableTd>
                    <TableTd colspan={1}>Coordinator</TableTd>
                    <TableTd colspan={1}>Canada</TableTd>
                    <TableTd colspan={1}>1/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row" alt>
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Marcelina Vee</TableTd>
                    <TableTd colspan={1}>Marketing Specialist</TableTd>
                    <TableTd colspan={1}>China</TableTd>
                    <TableTd colspan={1}>1/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Finnian Bramble</TableTd>
                    <TableTd colspan={1}>Business Analyst</TableTd>
                    <TableTd colspan={1}>Russia</TableTd>
                    <TableTd colspan={1}>1/5</TableTd>
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
              <ColumnMenuItem text="Pin group to top" startIcon="pin-outline-top" selected />
              <ColumnMenuItem text="Pin group to bottom" startIcon="pin-outline-bottom" />
            </ColumnMenuItemWrapper>
          </ColumnMenuNormal>
        </ActionSheetNormal>
      </section>

      <section>
        <Grid
          _renderAriaRoot
          groupingHeader={
            <GridGroupingHeader>
              <ChipList>
                <Chip
                  text="Rating"
                  actions={
                    <>
                      <ChipAction type="remove" />
                    </>
                  }
                />
              </ChipList>
            </GridGroupingHeader>
          }
        >
          <GridHeader draggable>
            <div className="k-grid-header-wrap">
              <GridHeaderTable>
                <colgroup>
                  <col className="k-group-col" />
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableThead>
                  <TableRow>
                    <GridHeaderCell colspan={1} rowspan={1} className="k-group-cell" accessibleLabel="Group"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Contact Name"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Job Title"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Country"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Rating"></GridHeaderCell>
                  </TableRow>
                </TableThead>
              </GridHeaderTable>
            </div>
          </GridHeader>
          <GridPinnedContainer>
            <div className="k-grid-pinned-wrap">
              <GridTable>
                <colgroup>
                  <col className="k-group-col" />
                  <col />
                </colgroup>
                <TableTbody>
                  <TableRow className="k-table-group-row k-grouping-row">
                    <TableTd colspan={5}>
                      <p className="k-reset">
                        <Icon icon="none" />
                        Rating 1/5
                      </p>
                    </TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
            </div>
          </GridPinnedContainer>
          <GridContainer>
            <GridContent>
              <GridTable>
                <colgroup>
                  <col className="k-group-col" />
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableTbody>
                  <TableRow className="k-table-group-row k-grouping-row">
                    <TableTd colspan={5}>
                      <p className="k-reset">
                        <Icon icon="caret-alt-down" />
                        Rating 3/5
                      </p>
                    </TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Sig Jeannel</TableTd>
                    <TableTd colspan={1}>Human Resources Assistant III</TableTd>
                    <TableTd colspan={1}>USA</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row" alt>
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Isadora Plumtree</TableTd>
                    <TableTd colspan={1}>Graphic Designer</TableTd>
                    <TableTd colspan={1}>Brazil</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Xerxes Borson</TableTd>
                    <TableTd colspan={1}>Content Writer</TableTd>
                    <TableTd colspan={1}>Netherlands</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-table-group-row k-grouping-row">
                    <TableTd colspan={5}>
                      <p className="k-reset">
                        <Icon icon="caret-alt-down" />
                        Rating 1/5
                      </p>
                    </TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Ruthi Bldini</TableTd>
                    <TableTd colspan={1}>Coordinator</TableTd>
                    <TableTd colspan={1}>Canada</TableTd>
                    <TableTd colspan={1}>1/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row" alt>
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Marcelina Vee</TableTd>
                    <TableTd colspan={1}>Marketing Specialist</TableTd>
                    <TableTd colspan={1}>China</TableTd>
                    <TableTd colspan={1}>1/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Finnian Bramble</TableTd>
                    <TableTd colspan={1}>Business Analyst</TableTd>
                    <TableTd colspan={1}>Russia</TableTd>
                    <TableTd colspan={1}>1/5</TableTd>
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
