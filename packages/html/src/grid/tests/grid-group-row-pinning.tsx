import { Icon } from "../../icon";
import { Chip, ChipList, ChipAction } from "../../chip";
import { Grid, GridHeader, GridHeaderCell, GridHeaderTable, GridGroupingHeader, GridContainer, GridContent, GridTable, GridStickyContainer } from "../../grid";
import { TableThead, TableRow, TableTd, TableTbody } from "../../table";
import { ContextMenu } from "../../context-menu";
import { MenuListItem } from "../../menu";
import { Popup } from "../../popup";

export default () => (
  <>
    <div id="test-area" className="k-d-grid k-grid-cols-3">
      <span>Context Menu only</span>
      <span>Group row pinned to top</span>
      <span>Group row pinned to bottom</span>

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
                </colgroup>
                <TableThead>
                  <TableRow>
                    <GridHeaderCell colspan={1} rowspan={1} className="k-group-cell"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Contact Name"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Job Title"></GridHeaderCell>
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
                </colgroup>
                <TableTbody>
                  <TableRow className="k-table-group-row k-grouping-row">
                    <TableTd colspan={4}>
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
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row" alt>
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Isadora Plumtree</TableTd>
                    <TableTd colspan={1}>Graphic Designer</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Xerxes Borson</TableTd>
                    <TableTd colspan={1}>Content Writer</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-table-group-row k-grouping-row">
                    <TableTd colspan={4}>
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
                    <TableTd colspan={1}>1/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row" alt>
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Marcelina Vee</TableTd>
                    <TableTd colspan={1}>Marketing Specialist</TableTd>
                    <TableTd colspan={1}>1/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Finnian Bramble</TableTd>
                    <TableTd colspan={1}>Business Analyst</TableTd>
                    <TableTd colspan={1}>1/5</TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
            </GridContent>
          </GridContainer>
        </Grid>
        {/* Row Pinning Context Menu */}
        <Popup className="k-menu-popup" offset={{ left: "145px", top: "395px" }}>
          <ContextMenu>
            <MenuListItem first text="Hide group" icon="eye-slash" />
            <MenuListItem text="Set group sticky" icon="stick" />
            <MenuListItem text="Pin group" icon="pin-outline" showArrow active />
          </ContextMenu>
        </Popup>

        {/* Pin row submenu */}
        <Popup className="k-menu-popup" offset={{ left: "306px", top: "451px" }}>
          <ContextMenu>
            <MenuListItem first text="Pin group to top" icon="pin-outline-top" selected />
            <MenuListItem last text="Pin group to bottom" icon="pin-outline-bottom" />
          </ContextMenu>
        </Popup>
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
                </colgroup>
                <TableThead>
                  <TableRow>
                    <GridHeaderCell colspan={1} rowspan={1} className="k-group-cell"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Contact Name"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Job Title"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Rating"></GridHeaderCell>
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
                    <col className="k-group-col" />
                    <col />
                  </colgroup>
                  <TableTbody>
                    <TableRow className="k-table-group-row k-grouping-row">
                      <TableTd colspan={9}>
                        <p className="k-reset">
                          <Icon icon="none" />
                          Rating 1/5
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
                </colgroup>
                <TableTbody>
                  <TableRow className="k-table-group-row k-grouping-row">
                    <TableTd colspan={4}>
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
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row" alt>
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Isadora Plumtree</TableTd>
                    <TableTd colspan={1}>Graphic Designer</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Xerxes Borson</TableTd>
                    <TableTd colspan={1}>Content Writer</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-table-group-row k-grouping-row">
                    <TableTd colspan={4}>
                      <p className="k-reset">
                        <Icon icon="caret-alt-down" />
                        Rating 1/5
                      </p>
                    </TableTd>
                  </TableRow>
                  <TableRow className="k-master-row k-pinned-source">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Ruthi Bldini</TableTd>
                    <TableTd colspan={1}>Coordinator</TableTd>
                    <TableTd colspan={1}>1/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row k-pinned-source" alt>
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Marcelina Vee</TableTd>
                    <TableTd colspan={1}>Marketing Specialist</TableTd>
                    <TableTd colspan={1}>1/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row k-pinned-source">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Finnian Bramble</TableTd>
                    <TableTd colspan={1}>Business Analyst</TableTd>
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
                </colgroup>
                <TableThead>
                  <TableRow>
                    <GridHeaderCell colspan={1} rowspan={1} className="k-group-cell"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Contact Name"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Job Title"></GridHeaderCell>
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
                </colgroup>
                <TableTbody>
                  <TableRow className="k-table-group-row k-grouping-row">
                    <TableTd colspan={4}>
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
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row" alt>
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Isadora Plumtree</TableTd>
                    <TableTd colspan={1}>Graphic Designer</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Xerxes Borson</TableTd>
                    <TableTd colspan={1}>Content Writer</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-table-group-row k-grouping-row">
                    <TableTd colspan={4}>
                      <p className="k-reset">
                        <Icon icon="caret-alt-down" />
                        Rating 1/5
                      </p>
                    </TableTd>
                  </TableRow>
                  <TableRow className="k-master-row k-pinned-source">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Ruthi Bldini</TableTd>
                    <TableTd colspan={1}>Coordinator</TableTd>
                    <TableTd colspan={1}>1/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row k-pinned-source" alt>
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Marcelina Vee</TableTd>
                    <TableTd colspan={1}>Marketing Specialist</TableTd>
                    <TableTd colspan={1}>1/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row k-pinned-source">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Finnian Bramble</TableTd>
                    <TableTd colspan={1}>Business Analyst</TableTd>
                    <TableTd colspan={1}>1/5</TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
              <GridStickyContainer position="bottom" style={{ insetBlockEnd: "0" }}>
                <GridTable>
                  <colgroup>
                    <col className="k-group-col" />
                    <col />
                  </colgroup>
                  <TableTbody>
                    <TableRow className="k-table-group-row k-grouping-row">
                      <TableTd colspan={4}>
                        <p className="k-reset">
                          <Icon icon="none" />
                          Rating 1/5
                        </p>
                      </TableTd>
                    </TableRow>
                  </TableTbody>
                </GridTable>
              </GridStickyContainer>
            </GridContent>
          </GridContainer>
        </Grid>
      </section>

      <span>Pinning Icon</span>
      <span>Group row pinned to top</span>
      <span>Group row pinned to bottom</span>

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
                </colgroup>
                <TableThead>
                  <TableRow>
                    <GridHeaderCell colspan={1} rowspan={1} className="k-group-cell"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Contact Name"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Job Title"></GridHeaderCell>
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
                </colgroup>
                <TableTbody>
                  <TableRow className="k-table-group-row k-grouping-row">
                    <TableTd colspan={4}>
                      <p className="k-reset">
                        <span className="k-pin-cell">
                          <Icon icon="pin-outline" />
                        </span>
                        <Icon icon="caret-alt-down" />
                        Rating 3/5
                      </p>
                    </TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Sig Jeannel</TableTd>
                    <TableTd colspan={1}>Human Resources Assistant III</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row" alt>
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Isadora Plumtree</TableTd>
                    <TableTd colspan={1}>Graphic Designer</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Xerxes Borson</TableTd>
                    <TableTd colspan={1}>Content Writer</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-table-group-row k-grouping-row">
                    <TableTd colspan={4}>
                      <p className="k-reset">
                        <span className="k-pin-cell">
                          <Icon icon="pin-outline" />
                        </span>
                        <Icon icon="caret-alt-down" />
                        Rating 1/5
                      </p>
                    </TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Ruthi Bldini</TableTd>
                    <TableTd colspan={1}>Coordinator</TableTd>
                    <TableTd colspan={1}>1/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row" alt>
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Marcelina Vee</TableTd>
                    <TableTd colspan={1}>Marketing Specialist</TableTd>
                    <TableTd colspan={1}>1/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Finnian Bramble</TableTd>
                    <TableTd colspan={1}>Business Analyst</TableTd>
                    <TableTd colspan={1}>1/5</TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
            </GridContent>
          </GridContainer>
        </Grid>
        {/* Row Pinning Context Menu */}
        <Popup className="k-menu-popup" offset={{ left: "45px", top: "1036px" }}>
          <ContextMenu>
            <MenuListItem first text="Pin group to top" icon="pin-outline-top" selected />
            <MenuListItem last text="Pin group to bottom" icon="pin-outline-bottom" />
          </ContextMenu>
        </Popup>
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
                </colgroup>
                <TableThead>
                  <TableRow>
                    <GridHeaderCell colspan={1} rowspan={1} className="k-group-cell"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Contact Name"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Job Title"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Rating"></GridHeaderCell>
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
                    <col className="k-group-col" />
                    <col />
                  </colgroup>
                  <TableTbody>
                    <TableRow className="k-table-group-row k-grouping-row">
                      <TableTd colspan={9}>
                        <p className="k-reset">
                          <span className="k-pin-cell">
                            <Icon icon="unpin-outline" />
                          </span>
                          <Icon icon="none" />
                          Rating 1/5
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
                </colgroup>
                <TableTbody>
                  <TableRow className="k-table-group-row k-grouping-row">
                    <TableTd colspan={4}>
                      <p className="k-reset">
                        <span className="k-pin-cell">
                          <Icon icon="pin-outline" />
                        </span>
                        <Icon icon="caret-alt-down" />
                        Rating 3/5
                      </p>
                    </TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Sig Jeannel</TableTd>
                    <TableTd colspan={1}>Human Resources Assistant III</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row" alt>
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Isadora Plumtree</TableTd>
                    <TableTd colspan={1}>Graphic Designer</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Xerxes Borson</TableTd>
                    <TableTd colspan={1}>Content Writer</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-table-group-row k-grouping-row">
                    <TableTd colspan={4}>
                      <p className="k-reset">
                        <span className="k-pin-cell">
                          <Icon icon="unpin-outline" />
                        </span>
                        <Icon icon="caret-alt-down" />
                        Rating 1/5
                      </p>
                    </TableTd>
                  </TableRow>
                  <TableRow className="k-master-row k-pinned-source">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Ruthi Bldini</TableTd>
                    <TableTd colspan={1}>Coordinator</TableTd>
                    <TableTd colspan={1}>1/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row k-pinned-source" alt>
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Marcelina Vee</TableTd>
                    <TableTd colspan={1}>Marketing Specialist</TableTd>
                    <TableTd colspan={1}>1/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row k-pinned-source">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Finnian Bramble</TableTd>
                    <TableTd colspan={1}>Business Analyst</TableTd>
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
                </colgroup>
                <TableThead>
                  <TableRow>
                    <GridHeaderCell colspan={1} rowspan={1} className="k-group-cell"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Contact Name"></GridHeaderCell>
                    <GridHeaderCell colspan={1} columnTitle="Job Title"></GridHeaderCell>
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
                </colgroup>
                <TableTbody>
                  <TableRow className="k-table-group-row k-grouping-row">
                    <TableTd colspan={4}>
                      <p className="k-reset">
                        <span className="k-pin-cell">
                          <Icon icon="pin-outline" />
                        </span>
                        <Icon icon="caret-alt-down" />
                        Rating 3/5
                      </p>
                    </TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Sig Jeannel</TableTd>
                    <TableTd colspan={1}>Human Resources Assistant III</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row" alt>
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Isadora Plumtree</TableTd>
                    <TableTd colspan={1}>Graphic Designer</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Xerxes Borson</TableTd>
                    <TableTd colspan={1}>Content Writer</TableTd>
                    <TableTd colspan={1}>3/5</TableTd>
                  </TableRow>
                  <TableRow className="k-table-group-row k-grouping-row">
                    <TableTd colspan={4}>
                      <p className="k-reset">
                        <span className="k-pin-cell">
                          <Icon icon="unpin-outline" />
                        </span>
                        <Icon icon="caret-alt-down" />
                        Rating 1/5
                      </p>
                    </TableTd>
                  </TableRow>
                  <TableRow className="k-master-row k-pinned-source">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Ruthi Bldini</TableTd>
                    <TableTd colspan={1}>Coordinator</TableTd>
                    <TableTd colspan={1}>1/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row k-pinned-source" alt>
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Marcelina Vee</TableTd>
                    <TableTd colspan={1}>Marketing Specialist</TableTd>
                    <TableTd colspan={1}>1/5</TableTd>
                  </TableRow>
                  <TableRow className="k-master-row k-pinned-source">
                    <TableTd className="k-table-group-td k-group-cell"></TableTd>
                    <TableTd colspan={1}>Finnian Bramble</TableTd>
                    <TableTd colspan={1}>Business Analyst</TableTd>
                    <TableTd colspan={1}>1/5</TableTd>
                  </TableRow>
                </TableTbody>
              </GridTable>
              <GridStickyContainer position="bottom" style={{ insetBlockEnd: "0" }}>
                <GridTable>
                  <colgroup>
                    <col className="k-group-col" />
                    <col />
                  </colgroup>
                  <TableTbody>
                    <TableRow className="k-table-group-row k-grouping-row">
                      <TableTd colspan={4}>
                        <p className="k-reset">
                          <span className="k-pin-cell">
                            <Icon icon="unpin-outline" />
                          </span>
                          <Icon icon="none" />
                          Rating 1/5
                        </p>
                      </TableTd>
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
