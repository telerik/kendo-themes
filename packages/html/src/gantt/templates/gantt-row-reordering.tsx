import { Gantt, GanttColumnsTable, GanttContent, GanttFooterToolbar, GanttHeaderToolbar, GanttLine, GanttRowsTable, GanttTables, GanttTask, GanttTaskContent, GanttTaskDot, GanttTaskWrap, GanttTasksTable } from "..";
import { GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, Grid } from "../../grid";
import { TableThead, TableRow, TableTbody, TableTd } from "../../table";
import { Splitter, SplitterPane } from "../../splitter";
import { ButtonGroup } from "../../button-group";
import { TreeList } from "../../treelist";
import { Button } from "../../button";
import { Icon } from "../../icon";


export const GanttRowReordering = ({ flexBasis = "30%", gridContentHeight = "180px", tablesWidth = "675px", tablesHeight = "828px", currentTimeLeftOffset = "243px", ganttDependencies, menu, ...other }: any) => (
    <Gantt
        headerToolbar={(
            <GanttHeaderToolbar>
                <Button className="k-gantt-toggle" icon="layout-1-by-4"></Button>
                <Button className="k-gantt-create" icon="plus">Add Task</Button>
                <span className="k-spacer"></span>
                <div className="k-gantt-views-wrapper">
                    <select className="k-picker k-picker-solid k-dropdown-list k-dropdown k-views-dropdown k-rounded-md">
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                    </select>
                    <ButtonGroup className="k-gantt-views">
                        <Button className="k-view-day k-group-start">Day</Button>
                        <Button className="k-view-week" selected>Week</Button>
                        <Button className="k-view-month k-group-end">Month</Button>
                    </ButtonGroup>
                </div>
            </GanttHeaderToolbar>
        )}
        footerToolbar={(
            <GanttFooterToolbar>
                <Button className="k-gantt-create" icon="plus">Add Task</Button>
            </GanttFooterToolbar>
        )}
        {...other}
    >
        <GanttContent>
            {other.children ||
                <Splitter className="k-gantt-splitter" children={[
                    <SplitterPane key="gantt-treelist-pane" className="k-gantt-treelist" flexBasis={flexBasis}>
                        <TreeList _renderAriaRoot>
                            <GridHeader>
                                <div className="k-grid-header-wrap">
                                    <GridHeaderTable style={{ minWidth: "250px" }}>
                                        <colgroup>
                                            <col className="k-drag-col" />
                                            <col style={{ width: '50px' }} />
                                            <col />
                                        </colgroup>
                                        <TableThead>
                                            <TableRow>
                                                <GridHeaderCell></GridHeaderCell>
                                                <GridHeaderCell menu={menu} rowspan={1} columnTitle="ID"></GridHeaderCell>
                                                <GridHeaderCell menu={menu} rowspan={1} columnTitle="Title"></GridHeaderCell>
                                            </TableRow>
                                        </TableThead>
                                    </GridHeaderTable>
                                </div>
                            </GridHeader>
                            <GridContainer>
                                <GridContent style={{ height: gridContentHeight }}>
                                    <GridTable style={{ minWidth: "250px" }}>
                                        <colgroup>
                                            <col className="k-drag-col" />
                                            <col style={{ width: '50px' }} />
                                            <col />
                                        </colgroup>
                                        <TableTbody>
                                            <TableRow>
                                                <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                                                <TableTd>7</TableTd>
                                                <TableTd>
                                                    <Icon className="k-treelist-toggle" icon="caret-alt-down" />
                                                    Software validation, research and implementation
                                                </TableTd>
                                            </TableRow>
                                            <TableRow className="k-alt" alt>
                                                <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                                                <TableTd>18</TableTd>
                                                <TableTd>
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    Project Kickoff
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                                                <TableTd>11</TableTd>
                                                <TableTd>
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="caret-alt-down" />
                                                    Research
                                                </TableTd>
                                            </TableRow>
                                            <TableRow className="k-alt" alt>
                                                <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                                                <TableTd>19</TableTd>
                                                <TableTd>
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    Validation with Customers
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                                                <TableTd>20</TableTd>
                                                <TableTd>
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    Market Research
                                                </TableTd>
                                            </TableRow>
                                        </TableTbody>
                                    </GridTable>
                                </GridContent>
                            </GridContainer>
                        </TreeList>
                    </SplitterPane>,
                    <SplitterPane key="gantt-timeline-pane" className="k-gantt-timeline-pane">
                        <Grid className="k-gantt-timeline">
                            <GridHeader>
                                <div className="k-grid-header-wrap">
                                    <GridHeaderTable style={{ width: tablesWidth }}>
                                        <colgroup>
                                            <col /><col /><col /><col /><col /><col /><col />
                                        </colgroup>
                                        <TableTbody>
                                            <TableRow >
                                                <TableTd className="k-header" colspan={7} >Sun 6/01 - Sat 6/07</TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd colspan={1} className="k-header k-nonwork-hour">Sun 6/01</TableTd>
                                                <TableTd className="k-header" colspan={1} >Mon 6/02</TableTd>
                                                <TableTd className="k-header" colspan={1} >Tue 6/03</TableTd>
                                                <TableTd className="k-header" colspan={1} >Wed 6/04</TableTd>
                                                <TableTd className="k-header" colspan={1} >Thu 6/05</TableTd>
                                                <TableTd className="k-header" colspan={1} >Fri 6/06</TableTd>
                                                <TableTd colspan={1} className="k-header k-nonwork-hour">Sat 6/07</TableTd>
                                            </TableRow>
                                        </TableTbody>
                                    </GridHeaderTable>
                                </div>
                            </GridHeader>
                            <GridContent style={{ height: gridContentHeight }}>
                                <GanttTables>
                                    <GanttRowsTable className="k-grid-table" style={{ width: tablesWidth }}>
                                        <colgroup>
                                            <col />
                                        </colgroup>
                                        <TableTbody>
                                            <TableRow><TableTd></TableTd></TableRow>
                                            <TableRow className="k-alt" alt><TableTd></TableTd></TableRow>
                                            <TableRow><TableTd></TableTd></TableRow>
                                            <TableRow className="k-alt" alt><TableTd></TableTd></TableRow>
                                            <TableRow><TableTd></TableTd></TableRow>
                                        </TableTbody>
                                    </GanttRowsTable>
                                    <GanttColumnsTable style={{ width: tablesWidth, height: tablesHeight }}>
                                        <colgroup>
                                            <col /><col /><col /><col /><col /><col /><col />
                                        </colgroup>
                                        <TableTbody>
                                            <TableRow>
                                                <TableTd className="k-nonwork-hour"></TableTd>
                                                <TableTd></TableTd><TableTd></TableTd><TableTd></TableTd><TableTd></TableTd><TableTd></TableTd>
                                                <TableTd className="k-nonwork-hour"></TableTd>
                                            </TableRow>
                                        </TableTbody>
                                    </GanttColumnsTable>
                                    <GanttTasksTable style={{ width: tablesWidth }}>
                                        <colgroup>
                                            <col />
                                        </colgroup>
                                        <TableTbody>
                                            <TableRow>
                                                <TableTd>
                                                    <GanttTaskWrap type="summary" style={{ left: "113px" }}>
                                                        <GanttTask type="summary" style={{ width: "4000px" }}>
                                                            <div className="k-task-summary-progress" style={{ width: "1720px" }}>
                                                                <div className="k-task-summary-complete" style={{ width: "4000px" }}></div>
                                                            </div>
                                                        </GanttTask>
                                                        <GanttTaskDot />
                                                        <GanttTaskDot position="end" style={{ right: "0px" }} />
                                                    </GanttTaskWrap>
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd>
                                                    <GanttTaskWrap type="milestone" style={{ left: "113px" }}>
                                                        <GanttTask type="milestone"></GanttTask>
                                                        <GanttTaskDot />
                                                        <GanttTaskDot position="end" style={{ right: "0px" }} />
                                                    </GanttTaskWrap>
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd>
                                                    <GanttTaskWrap type="summary" style={{ left: "113px" }}>
                                                        <GanttTask type="summary" style={{ width: "500px" }}>
                                                            <div className="k-task-summary-progress" style={{ width: "215px" }}>
                                                                <div className="k-task-summary-complete" style={{ width: "500px" }}></div>
                                                            </div>
                                                        </GanttTask>
                                                        <GanttTaskDot />
                                                        <GanttTaskDot position="end" style={{ right: "0px" }} />
                                                    </GanttTaskWrap>
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd>
                                                    <GanttTaskWrap style={{ left: "113px" }}>
                                                        <GanttTask style={{ width: "200px" }}>
                                                            <div className="k-task-complete" style={{ width: '50px' }}></div>
                                                            <GanttTaskContent content="Validation with Customers"></GanttTaskContent>
                                                        </GanttTask>
                                                        <GanttTaskDot />
                                                        <GanttTaskDot position="end" style={{ right: "0px" }} />
                                                        <div className="k-task-draghandle" style={{ left: '50px' }}></div>
                                                    </GanttTaskWrap>
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd>
                                                    <GanttTaskWrap style={{ left: "113px" }}>
                                                        <GanttTask style={{ width: "200px" }}>
                                                            <div className="k-task-complete" style={{ width: "164px" }}></div>
                                                            <GanttTaskContent content="Market Research"></GanttTaskContent>
                                                        </GanttTask>
                                                        <GanttTaskDot />
                                                        <GanttTaskDot position="end" style={{ right: "0px" }} />
                                                        <div className="k-task-draghandle" style={{ left: "164px" }}></div>
                                                    </GanttTaskWrap>
                                                </TableTd>
                                            </TableRow>
                                        </TableTbody>
                                    </GanttTasksTable>
                                </GanttTables>
                                {ganttDependencies ||
                                    <div className="k-gantt-dependencies" style={{ width: tablesWidth }}>
                                        <GanttLine style={{ left: "124.5px", top: "53px", width: "10px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "132.5px", top: "53px", height: "18px" }}></GanttLine>
                                        <GanttLine style={{ left: "103px", top: "71px", width: "31.5px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "103px", top: "71px", height: "54px" }}></GanttLine>
                                        <GanttLine style={{ left: "103px", top: "125px", width: "9px" }}><span className="k-arrow-e"></span></GanttLine>
                                        <GanttLine style={{ left: "124.5px", top: "53px", width: "10px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "132.5px", top: "53px", height: "18px" }}></GanttLine>
                                        <GanttLine style={{ left: "103px", top: "71px", width: "31.5px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "103px", top: "71px", height: "90px" }}></GanttLine>
                                        <GanttLine style={{ left: "103px", top: "161px", width: "9px" }}><span className="k-arrow-e"></span></GanttLine>
                                        <GanttLine style={{ left: "313px", top: "125px", width: "10px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "321px", top: "125px", height: "18px" }}></GanttLine>
                                        <GanttLine style={{ left: "303px", top: "143px", width: "20px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "303px", top: "143px", height: "18px" }}></GanttLine>
                                    </div>
                                }
                                <div className="k-current-time" style={{ left: currentTimeLeftOffset, top: "0px", width: "1px", height: tablesHeight }}></div>
                            </GridContent>
                        </Grid>
                    </SplitterPane>
                ]}>
                </Splitter>
            }
        </GanttContent>
    </Gantt>
);
