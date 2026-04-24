import { Gantt, GanttColumnsTable, GanttContent, GanttHeaderToolbar, GanttRowsTable, GanttTables, GanttTask, GanttTaskContent, GanttTaskDot, GanttTaskWrap, GanttTasksTable } from "..";
import { GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, Grid } from "../../grid";
import { TableThead, TableRow, TableTbody, TableTd } from "../../table";
import { Splitter, SplitterPane } from "../../splitter";
import { SegmentedControl, SegmentedControlButton } from "../../segmented-control";
import { TreeList } from "../../treelist";
import { Button } from "../../button";
import { Icon } from "../../icon";
import { Tooltip } from "../../tooltip";


export const GanttWithTooltip = ({ flexBasis = "30%", gridContentHeight = "180px", tablesWidth = "675px", tablesHeight = "828px", ...other }: any) => (
    <Gantt
        headerToolbar={(
            <GanttHeaderToolbar aria-label="Toolbar">
                <Button className="k-gantt-toggle" icon="layout-1-by-4" aria-label="Toggle TreeList"></Button>
                <Button className="k-gantt-create" icon="plus">Add Task</Button>
                <span className="k-spacer"></span>
                <div className="k-gantt-views-wrapper">
                    <select className="k-picker k-dropdown-list k-dropdown k-views-dropdown" aria-label="Select view">
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                    </select>
                    <SegmentedControl thumbStyles={{ width: "33%", left: "30%" }} className="k-gantt-views">
                        <SegmentedControlButton>Day</SegmentedControlButton>
                        <SegmentedControlButton selected>Week</SegmentedControlButton>
                        <SegmentedControlButton>Month</SegmentedControlButton>
                    </SegmentedControl>
                </div>
            </GanttHeaderToolbar>
        )}
        {...other}
    >
        <GanttContent>
            {other.children ||
                <Splitter className="k-gantt-splitter" panes={[
                    <SplitterPane key="gantt-treelist-pane" className="k-gantt-treelist" flexBasis={flexBasis}>
                        <TreeList _renderAriaRoot>
                            <GridHeader>
                                <div className="k-grid-header-wrap">
                                    <GridHeaderTable style={{ minWidth: "250px" }}>
                                        <colgroup>
                                            <col style={{ width: '50px' }} />
                                            <col />
                                        </colgroup>
                                        <TableThead>
                                            <TableRow>
                                                <GridHeaderCell rowspan={1} columnTitle="ID"></GridHeaderCell>
                                                <GridHeaderCell rowspan={1} columnTitle="Title"></GridHeaderCell>
                                            </TableRow>
                                        </TableThead>
                                    </GridHeaderTable>
                                </div>
                            </GridHeader>
                            <GridContainer>
                                <GridContent style={{ height: gridContentHeight }}>
                                    <GridTable style={{ minWidth: "250px" }}>
                                        <colgroup>
                                            <col style={{ width: '50px' }} />
                                            <col />
                                        </colgroup>
                                        <TableTbody>
                                            <TableRow>
                                                <TableTd>7</TableTd>
                                                <TableTd>
                                                    <Icon className="k-treelist-toggle" icon="caret-alt-down" />
                                                    Software validation
                                                </TableTd>
                                            </TableRow>
                                            <TableRow alt>
                                                <TableTd>11</TableTd>
                                                <TableTd>
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    Validation with Customers
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd>12</TableTd>
                                                <TableTd>
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
                                            <TableRow>
                                                <TableTd className="k-header" colspan={7}>Sun 6/01 - Sat 6/07</TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd colspan={1} className="k-header k-nonwork-hour">Sun 6/01</TableTd>
                                                <TableTd className="k-header" colspan={1}>Mon 6/02</TableTd>
                                                <TableTd className="k-header" colspan={1}>Tue 6/03</TableTd>
                                                <TableTd className="k-header" colspan={1}>Wed 6/04</TableTd>
                                                <TableTd className="k-header" colspan={1}>Thu 6/05</TableTd>
                                                <TableTd className="k-header" colspan={1}>Fri 6/06</TableTd>
                                                <TableTd colspan={1} className="k-header k-nonwork-hour">Sat 6/07</TableTd>
                                            </TableRow>
                                        </TableTbody>
                                    </GridHeaderTable>
                                </div>
                            </GridHeader>
                            <GridContent style={{ height: gridContentHeight }} role="tree">
                                <GanttTables>
                                    <GanttRowsTable className="k-grid-table" style={{ width: tablesWidth }}>
                                        <colgroup>
                                            <col />
                                        </colgroup>
                                        <TableTbody>
                                            <TableRow><TableTd></TableTd></TableRow>
                                            <TableRow alt><TableTd></TableTd></TableRow>
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
                                                        <GanttTask type="summary" ariaLevel={1} aria-label="Software validation" style={{ width: "500px" }}>
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
                                                        <GanttTask ariaLevel={2} aria-label="Validation with Customers" aria-describedby="gantt-task-tooltip" style={{ width: "200px" }}>
                                                            <div className="k-task-complete" aria-hidden="true" style={{ width: '50px' }}></div>
                                                            <GanttTaskContent content="Validation with Customers"></GanttTaskContent>
                                                        </GanttTask>
                                                        <GanttTaskDot />
                                                        <GanttTaskDot position="end" style={{ right: "0px" }} />
                                                        <div className="k-task-draghandle" aria-hidden="true" style={{ left: '50px' }}></div>
                                                    </GanttTaskWrap>
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd>
                                                    <GanttTaskWrap style={{ left: "113px" }}>
                                                        <GanttTask ariaLevel={2} aria-label="Market Research" style={{ width: "200px" }}>
                                                            <div className="k-task-complete" aria-hidden="true" style={{ width: "164px" }}></div>
                                                            <GanttTaskContent content="Market Research"></GanttTaskContent>
                                                        </GanttTask>
                                                        <GanttTaskDot />
                                                        <GanttTaskDot position="end" style={{ right: "0px" }} />
                                                        <div className="k-task-draghandle" aria-hidden="true" style={{ left: "164px" }}></div>
                                                    </GanttTaskWrap>
                                                </TableTd>
                                            </TableRow>
                                        </TableTbody>
                                    </GanttTasksTable>
                                </GanttTables>
                                <Tooltip
                                    id="gantt-task-tooltip"
                                    callout="bottom"
                                    style={{ position: "absolute", top: "20px", left: "150px" }}
                                    title="Validation with Customers"
                                    content={<>25%<br/>Start: 03:00 AM Mon, Jun 2<br/>End: 03:00 AM Wed, Jun 4</>}
                                />
                            </GridContent>
                        </Grid>
                    </SplitterPane>
                ]}>
                </Splitter>
            }
        </GanttContent>
    </Gantt>
);
