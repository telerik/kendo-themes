import { Icon } from "../../icon";
import { Chip, ChipList, ChipAction } from "../../chip";
import { Grid, GridHeader, GridHeaderCell, GridHeaderTable, GridGroupingHeader, GridContainer, GridContent, GridTable, GridPinnedContainer, GridStickyContainer } from "../../grid";
import { TableThead, TableRow, TableTd, TableTbody } from "../../table";

export default () => (
  <>
    <div id="test-area" className="k-d-grid k-grid-cols-1">
      <span>Row pinned to top with sticky grouping on top</span>

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
                  <col />
                  <col />
                </colgroup>
                <TableThead>
                  <TableRow>
                    <GridHeaderCell colspan={1} rowspan={1} className="k-group-cell"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Contact Name"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Job Title"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Country"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Rating"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Engagement"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Budget"></GridHeaderCell>
                  </TableRow>
                </TableThead>
              </GridHeaderTable>
            </div>
          </GridHeader>
          {/* Pinned row on top */}
          <GridPinnedContainer>
            <div className="k-grid-pinned-wrap">
              <GridTable>
                <colgroup>
                  <col className="k-group-col" />
                  <col />
                </colgroup>
                <TableTbody>
                  <TableRow className="k-table-group-row k-grouping-row">
                    <TableTd colspan={7}>
                      <p className="k-reset">
                        <Icon icon="unpin-outline" className="k-action-icon" />
                        Rating 1/5
                      </p>
                    </TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
            </div>
          </GridPinnedContainer>
          {/* Sticky group header on top */}
          <GridContainer>
            <GridStickyContainer>
              <GridTable>
                <colgroup>
                  <col className="k-group-col" />
                  <col />
                </colgroup>
                <TableTbody>
                  <TableRow className="k-table-group-row k-grouping-row">
                    <TableTd colspan={7}>
                      <p className="k-reset">
                        <Icon icon="chevron-right" />
                        Rating 3/5
                      </p>
                    </TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
            </GridStickyContainer>
            <GridContent>
              <GridTable>
                <colgroup>
                  <col className="k-group-col" />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableTbody>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Sig Jeannel</TableTd>
                    <TableTd colspan={1}>Human Resources Assistant III</TableTd>
                    <TableTd colspan={1}>USA</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                    <TableTd colspan={1}>100%</TableTd>
                    <TableTd colspan={1}>$100,000</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row" alt>
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Isadora Plumtree</TableTd>
                    <TableTd colspan={1}>Graphic Designer</TableTd>
                    <TableTd colspan={1}>Brazil</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                    <TableTd colspan={1}>72%</TableTd>
                    <TableTd colspan={1}>$110,000</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Xerxes Borson</TableTd>
                    <TableTd colspan={1}>Content Writer</TableTd>
                    <TableTd colspan={1}>Netherlands</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                    <TableTd colspan={1}>56%</TableTd>
                    <TableTd colspan={1}>$45,000</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row" alt>
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Flowen Maelis</TableTd>
                    <TableTd colspan={1}>Research Scientist</TableTd>
                    <TableTd colspan={1}>Singapore</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                    <TableTd colspan={1}>77%</TableTd>
                    <TableTd colspan={1}>$65,000</TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
            </GridContent>
            {/* Sticky group footer on bottom */}
            <GridStickyContainer position="bottom">
              <GridTable>
                <colgroup>
                  <col className="k-group-col" />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableTbody>
                  <TableRow className="k-group-footer">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}></TableTd>
                    <TableTd colspan={1}></TableTd>
                    <TableTd colspan={1}></TableTd>
                    <TableTd colspan={1}>Average: 3/5</TableTd>
                    <TableTd colspan={1}>Average: 76%</TableTd>
                    <TableTd colspan={1}>Sum: $320,000</TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
            </GridStickyContainer>
          </GridContainer>
        </Grid>
      </section>
    </div>
  </>
);
