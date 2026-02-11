import { Icon } from "../../icon/icon.spec";
import { Chip } from "../../chip/chip.spec";
import { ChipList } from "../../chip/chip-list.spec";
import { ChipAction } from "../../chip/chip-action";
import { Grid } from "../grid.spec";
import { GridContainer } from "../grid-container.spec";
import { GridContent } from "../grid-content.spec";
import { GridTable } from "../grid-table.spec";
import { GridHeader } from "../grid-header.spec";
import { GridHeaderTable } from "../grid-header-table.spec";
import { GridHeaderCell } from "../grid-header-cell.spec";
import { GridGroupingHeader } from "../grid-grouping-header.spec";
import { GridStickyContainer } from "../grid-sticky-container.spec";
import { TableThead } from '../../table/table-thead';
import { TableRow } from '../../table/table-row';
import { TableTd } from '../../table/table-td';
import { TableTbody } from '../../table/table-tbody';

export default () => (
  <>
    <div id="test-area" className="k-d-grid">
      <Grid
        style={{ height: "600px" }}
        _renderAriaRoot
        groupingHeader={
          <GridGroupingHeader>
            <ChipList>
              <Chip
                icon="sort-asc-small"
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
                  <GridHeaderCell colspan={1} columnTitle="Phone"></GridHeaderCell>
                  <GridHeaderCell colspan={1} columnTitle="Address"></GridHeaderCell>
                </TableRow>
              </TableThead>
            </GridHeaderTable>
          </div>
        </GridHeader>
        <GridContainer>
          <GridContent>
            <GridStickyContainer>
              <GridTable className="k-grid-group-sticky-header-table">
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <TableTbody>
                  <TableRow className="k-table-group-row k-grouping-row">
                    <TableTd colspan={9}>
                      <p className="k-reset">
                        <Icon icon="caret-alt-right" />
                        Rating 3/5
                      </p>
                    </TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
            </GridStickyContainer>
            <GridTable>
              <colgroup>
                  <col className="k-group-col" />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
              </colgroup>
              <TableTbody>
                <TableRow className="k-table-group-row k-grouping-row">
                  <TableTd colspan={9}>
                    <p className="k-reset">
                      <Icon icon="caret-alt-down" />
                      Rating 5/5
                    </p>
                  </TableTd>
                </TableRow>
                <TableRow className="k-master-row">
                  <TableTd className="k-table-group-td k-group-cell"></TableTd>
                  <TableTd colspan={1}>Shelden Greyes</TableTd>
                  <TableTd colspan={1}>Operator</TableTd>
                  <TableTd colspan={1}>UK</TableTd>
                  <TableTd colspan={1}>5/5</TableTd>
                  <TableTd colspan={1}>40%</TableTd>
                  <TableTd colspan={1}>$40.00</TableTd>
                  <TableTd colspan={1}>(343) 6656271</TableTd>
                  <TableTd colspan={1}>2 Waxwing Point</TableTd>
                </TableRow>
                <TableRow className="k-master-row" alt>
                  <TableTd className="k-table-group-td k-group-cell"></TableTd>
                  <TableTd colspan={1}>Shelden Greyes</TableTd>
                  <TableTd colspan={1}>Operator</TableTd>
                  <TableTd colspan={1}>UK</TableTd>
                  <TableTd colspan={1}>5/5</TableTd>
                  <TableTd colspan={1}>40%</TableTd>
                  <TableTd colspan={1}>$40.00</TableTd>
                  <TableTd colspan={1}>(343) 6656271</TableTd>
                  <TableTd colspan={1}>2 Waxwing Point</TableTd>
                </TableRow>
                <TableRow className="k-master-row">
                  <TableTd className="k-table-group-td k-group-cell"></TableTd>
                  <TableTd colspan={1}>Nerissa Dapple</TableTd>
                  <TableTd colspan={1}>Web Designer</TableTd>
                  <TableTd colspan={1}>Norway</TableTd>
                  <TableTd colspan={1}>5/5</TableTd>
                  <TableTd colspan={1}>88%</TableTd>
                  <TableTd colspan={1}>$100.00</TableTd>
                  <TableTd colspan={1}>(683) 7896543</TableTd>
                  <TableTd colspan={1}>12 Silver Maple Lane</TableTd>
                </TableRow>
                <TableRow className="k-master-row" alt>
                  <TableTd className="k-table-group-td k-group-cell"></TableTd>
                  <TableTd colspan={1}>Dahlia Channing</TableTd>
                  <TableTd colspan={1}>Customer Support Representative</TableTd>
                  <TableTd colspan={1}>South Africa</TableTd>
                  <TableTd colspan={1}>5/5</TableTd>
                  <TableTd colspan={1}>90%</TableTd>
                  <TableTd colspan={1}>$95.00</TableTd>
                  <TableTd colspan={1}>(758) 3039625</TableTd>
                  <TableTd colspan={1}>64 Sunset Terrace</TableTd>
                </TableRow>
                <TableRow className="k-master-row">
                  <TableTd className="k-table-group-td k-group-cell"></TableTd>
                  <TableTd colspan={1}>Tobias Edger</TableTd>
                  <TableTd colspan={1}>Software Developer</TableTd>
                  <TableTd colspan={1}>Japan</TableTd>
                  <TableTd colspan={1}>5/5</TableTd>
                  <TableTd colspan={1}>78%</TableTd>
                  <TableTd colspan={1}>$75.00</TableTd>
                  <TableTd colspan={1}>(672) 4819203</TableTd>
                  <TableTd colspan={1}>42 Maplewood Drive</TableTd>
                </TableRow>
                <TableRow className="k-master-row" alt>
                  <TableTd className="k-table-group-td k-group-cell"></TableTd>
                  <TableTd colspan={1}>Orin Thistledown</TableTd>
                  <TableTd colspan={1}>System Analyst</TableTd>
                  <TableTd colspan={1}>Turkey</TableTd>
                  <TableTd colspan={1}>5/5</TableTd>
                  <TableTd colspan={1}>91%</TableTd>
                  <TableTd colspan={1}>$84.00</TableTd>
                  <TableTd colspan={1}>(309) 7821948</TableTd>
                  <TableTd colspan={1}>72 Kingswood Place</TableTd>
                </TableRow>
                <TableRow className="k-table-group-row k-grouping-row">
                  <TableTd colspan={9}>
                    <p className="k-reset">
                      <Icon icon="caret-alt-down" />
                      Rating 5/5
                    </p>
                  </TableTd>
                </TableRow>
                <TableRow className="k-master-row">
                  <TableTd className="k-table-group-td k-group-cell"></TableTd>
                  <TableTd colspan={1}>Shelden Greyes</TableTd>
                  <TableTd colspan={1}>Operator</TableTd>
                  <TableTd colspan={1}>UK</TableTd>
                  <TableTd colspan={1}>5/5</TableTd>
                  <TableTd colspan={1}>40%</TableTd>
                  <TableTd colspan={1}>$40.00</TableTd>
                  <TableTd colspan={1}>(343) 6656271</TableTd>
                  <TableTd colspan={1}>2 Waxwing Point</TableTd>
                </TableRow>
                <TableRow className="k-master-row" alt>
                  <TableTd className="k-table-group-td k-group-cell"></TableTd>
                  <TableTd colspan={1}>Shelden Greyes</TableTd>
                  <TableTd colspan={1}>Operator</TableTd>
                  <TableTd colspan={1}>UK</TableTd>
                  <TableTd colspan={1}>5/5</TableTd>
                  <TableTd colspan={1}>40%</TableTd>
                  <TableTd colspan={1}>$40.00</TableTd>
                  <TableTd colspan={1}>(343) 6656271</TableTd>
                  <TableTd colspan={1}>2 Waxwing Point</TableTd>
                </TableRow>
                <TableRow className="k-master-row">
                  <TableTd className="k-table-group-td k-group-cell"></TableTd>
                  <TableTd colspan={1}>Nerissa Dapple</TableTd>
                  <TableTd colspan={1}>Web Designer</TableTd>
                  <TableTd colspan={1}>Norway</TableTd>
                  <TableTd colspan={1}>5/5</TableTd>
                  <TableTd colspan={1}>88%</TableTd>
                  <TableTd colspan={1}>$100.00</TableTd>
                  <TableTd colspan={1}>(683) 7896543</TableTd>
                  <TableTd colspan={1}>12 Silver Maple Lane</TableTd>
                </TableRow>
                <TableRow className="k-master-row" alt>
                  <TableTd className="k-table-group-td k-group-cell"></TableTd>
                  <TableTd colspan={1}>Dahlia Channing</TableTd>
                  <TableTd colspan={1}>Customer Support Representative</TableTd>
                  <TableTd colspan={1}>South Africa</TableTd>
                  <TableTd colspan={1}>5/5</TableTd>
                  <TableTd colspan={1}>90%</TableTd>
                  <TableTd colspan={1}>$95.00</TableTd>
                  <TableTd colspan={1}>(758) 3039625</TableTd>
                  <TableTd colspan={1}>64 Sunset Terrace</TableTd>
                </TableRow>
                <TableRow className="k-master-row">
                  <TableTd className="k-table-group-td k-group-cell"></TableTd>
                  <TableTd colspan={1}>Tobias Edger</TableTd>
                  <TableTd colspan={1}>Software Developer</TableTd>
                  <TableTd colspan={1}>Japan</TableTd>
                  <TableTd colspan={1}>5/5</TableTd>
                  <TableTd colspan={1}>78%</TableTd>
                  <TableTd colspan={1}>$75.00</TableTd>
                  <TableTd colspan={1}>(672) 4819203</TableTd>
                  <TableTd colspan={1}>42 Maplewood Drive</TableTd>
                </TableRow>
                <TableRow className="k-master-row" alt>
                  <TableTd className="k-table-group-td k-group-cell"></TableTd>
                  <TableTd colspan={1}>Orin Thistledown</TableTd>
                  <TableTd colspan={1}>System Analyst</TableTd>
                  <TableTd colspan={1}>Turkey</TableTd>
                  <TableTd colspan={1}>5/5</TableTd>
                  <TableTd colspan={1}>91%</TableTd>
                  <TableTd colspan={1}>$84.00</TableTd>
                  <TableTd colspan={1}>(309) 7821948</TableTd>
                  <TableTd colspan={1}>72 Kingswood Place</TableTd>
                </TableRow>
                <TableRow className="k-table-group-row k-grouping-row">
                  <TableTd colspan={9}>
                    <p className="k-reset">
                      <Icon icon="caret-alt-down" />
                      Rating 2/5
                    </p>
                  </TableTd>
                </TableRow>
                <TableRow className="k-master-row">
                  <TableTd className="k-table-group-td k-group-cell"></TableTd>
                  <TableTd colspan={1}>Shelden Greyes</TableTd>
                  <TableTd colspan={1}>Operator</TableTd>
                  <TableTd colspan={1}>UK</TableTd>
                  <TableTd colspan={1}>5/5</TableTd>
                  <TableTd colspan={1}>40%</TableTd>
                  <TableTd colspan={1}>$40.00</TableTd>
                  <TableTd colspan={1}>(343) 6656271</TableTd>
                  <TableTd colspan={1}>2 Waxwing Point</TableTd>
                </TableRow>
                <TableRow className="k-master-row" alt>
                  <TableTd className="k-table-group-td k-group-cell"></TableTd>
                  <TableTd colspan={1}>Shelden Greyes</TableTd>
                  <TableTd colspan={1}>Operator</TableTd>
                  <TableTd colspan={1}>UK</TableTd>
                  <TableTd colspan={1}>5/5</TableTd>
                  <TableTd colspan={1}>40%</TableTd>
                  <TableTd colspan={1}>$40.00</TableTd>
                  <TableTd colspan={1}>(343) 6656271</TableTd>
                  <TableTd colspan={1}>2 Waxwing Point</TableTd>
                </TableRow>
                <TableRow className="k-master-row">
                  <TableTd className="k-table-group-td k-group-cell"></TableTd>
                  <TableTd colspan={1}>Nerissa Dapple</TableTd>
                  <TableTd colspan={1}>Web Designer</TableTd>
                  <TableTd colspan={1}>Norway</TableTd>
                  <TableTd colspan={1}>5/5</TableTd>
                  <TableTd colspan={1}>88%</TableTd>
                  <TableTd colspan={1}>$100.00</TableTd>
                  <TableTd colspan={1}>(683) 7896543</TableTd>
                  <TableTd colspan={1}>12 Silver Maple Lane</TableTd>
                </TableRow>
                <TableRow className="k-master-row" alt>
                  <TableTd className="k-table-group-td k-group-cell"></TableTd>
                  <TableTd colspan={1}>Dahlia Channing</TableTd>
                  <TableTd colspan={1}>Customer Support Representative</TableTd>
                  <TableTd colspan={1}>South Africa</TableTd>
                  <TableTd colspan={1}>5/5</TableTd>
                  <TableTd colspan={1}>90%</TableTd>
                  <TableTd colspan={1}>$95.00</TableTd>
                  <TableTd colspan={1}>(758) 3039625</TableTd>
                  <TableTd colspan={1}>64 Sunset Terrace</TableTd>
                </TableRow>
                <TableRow className="k-master-row">
                  <TableTd className="k-table-group-td k-group-cell"></TableTd>
                  <TableTd colspan={1}>Tobias Edger</TableTd>
                  <TableTd colspan={1}>Software Developer</TableTd>
                  <TableTd colspan={1}>Japan</TableTd>
                  <TableTd colspan={1}>5/5</TableTd>
                  <TableTd colspan={1}>78%</TableTd>
                  <TableTd colspan={1}>$75.00</TableTd>
                  <TableTd colspan={1}>(672) 4819203</TableTd>
                  <TableTd colspan={1}>42 Maplewood Drive</TableTd>
                </TableRow>
                <TableRow className="k-master-row" alt>
                  <TableTd className="k-table-group-td k-group-cell"></TableTd>
                  <TableTd colspan={1}>Orin Thistledown</TableTd>
                  <TableTd colspan={1}>System Analyst</TableTd>
                  <TableTd colspan={1}>Turkey</TableTd>
                  <TableTd colspan={1}>5/5</TableTd>
                  <TableTd colspan={1}>91%</TableTd>
                  <TableTd colspan={1}>$84.00</TableTd>
                  <TableTd colspan={1}>(309) 7821948</TableTd>
                  <TableTd colspan={1}>72 Kingswood Place</TableTd>
                </TableRow>
              </TableTbody>
            </GridTable>
            <GridStickyContainer position="bottom" style={{ insetBlockEnd: 0 }}>
              <GridTable className="k-grid-group-sticky-footer-table">
                <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                </colgroup>
                <TableTbody>
                  <TableRow className="k-group-footer">
                    <TableTd colspan={9}>Total items: 0</TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
            </GridStickyContainer>
          </GridContent>
        </GridContainer>
      </Grid>
    </div>
  </>
);
