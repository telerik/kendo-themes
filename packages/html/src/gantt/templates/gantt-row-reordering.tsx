import { Gantt, GanttColumnsTable, GanttContent, GanttFooterToolbar, GanttHeaderToolbar, GanttLine, GanttRowsTable, GanttTables, GanttTask, GanttTaskContent, GanttTaskDot, GanttTaskWrap, GanttTasksTable } from "..";
import { GridHeader, GridHeaderTable, GridHeaderCell, GridContainer, GridContent, GridTable, Grid } from "../../grid";
import { TableThead, TableRow, TableTbody, TableTd } from "../../table";
import { Splitter, SplitterPane } from "../../splitter";
import { ButtonGroup } from "../../button-group";
import { TreeList } from "../../treelist";
import { Button } from "../../button";
import { Icon } from "../../icon";


export const GanttRowReordering = ({ flexBasis = "30%", gridContentHeight = "530px", tablesWidth = "4200px", tablesHeight = "828px", currentTimeLeftOffset = "243px", ganttDependencies, menu, ...other }: any) => (
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
                    <SplitterPane className="k-gantt-treelist" flexBasis={flexBasis}>
                        <TreeList>
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
                                                <GridHeaderCell className="k-drag-cell"></GridHeaderCell>
                                                <GridHeaderCell menu={menu} rowspan={1} columnTitle="ID"></GridHeaderCell>
                                                <GridHeaderCell menu={menu} rowspan={1} columnTitle="Title"></GridHeaderCell>
                                            </TableRow>
                                        </TableThead>
                                    </GridHeaderTable>
                                </div>
                            </GridHeader>
                            <GridContainer>
                                <GridContent style={{ height: gridContentHeight }}>
                                    <GridTable className="k-selectable" style={{ minWidth: "250px" }}>
                                        <colgroup>
                                            <col className="k-drag-col" />
                                            <col style={{ width: '50px' }} />
                                            <col />
                                        </colgroup>
                                        <TableTbody>
                                            <TableRow className="k-treelist-group">
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
                                            <TableRow className="k-treelist-group">
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
                                            <TableRow className="k-alt" alt>
                                                <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                                                <TableTd>39</TableTd>
                                                <TableTd>
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    Functional and Technical Specification
                                                </TableTd>
                                            </TableRow>
                                            <TableRow className="k-treelist-group">
                                                <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                                                <TableTd>12</TableTd>
                                                <TableTd>
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="caret-alt-down" />
                                                    Design
                                                </TableTd>
                                            </TableRow>
                                            <TableRow className="k-alt" alt>
                                                <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                                                <TableTd>22</TableTd>
                                                <TableTd>
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    UI Design
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                                                <TableTd>23</TableTd>
                                                <TableTd>
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    HTML Prototype
                                                </TableTd>
                                            </TableRow>
                                            <TableRow className="k-alt k-treelist-group" alt>
                                                <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                                                <TableTd>13</TableTd>
                                                <TableTd>
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="caret-alt-down" />
                                                    Implementation
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                                                <TableTd>24</TableTd>
                                                <TableTd>
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    Prototype
                                                </TableTd>
                                            </TableRow>
                                            <TableRow className="k-alt" alt>
                                                <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                                                <TableTd>26</TableTd>
                                                <TableTd>
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    Architecture
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                                                <TableTd>27</TableTd>
                                                <TableTd>
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    Data Layer
                                                </TableTd>
                                            </TableRow>
                                            <TableRow className="k-alt" alt>
                                                <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                                                <TableTd>29</TableTd>
                                                <TableTd>
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    UI and Interaction
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                                                <TableTd>28</TableTd>
                                                <TableTd>
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    Unit Tests
                                                </TableTd>
                                            </TableRow>
                                            <TableRow className="k-alt k-treelist-group" alt>
                                                <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                                                <TableTd>14</TableTd>
                                                <TableTd>
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="caret-alt-down" />
                                                    Testing
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                                                <TableTd>32</TableTd>
                                                <TableTd>
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    Integration Testing
                                                </TableTd>
                                            </TableRow>
                                            <TableRow className="k-alt" alt>
                                                <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                                                <TableTd>33</TableTd>
                                                <TableTd>
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    Load Testing
                                                </TableTd>
                                            </TableRow>
                                            <TableRow className="k-treelist-group">
                                                <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                                                <TableTd>30</TableTd>
                                                <TableTd>
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="caret-alt-down" />
                                                    Documentation
                                                </TableTd>
                                            </TableRow>
                                            <TableRow className="k-alt" alt>
                                                <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                                                <TableTd>34</TableTd>
                                                <TableTd>
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    Structure
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                                                <TableTd>35</TableTd>
                                                <TableTd>
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    Articles
                                                </TableTd>
                                            </TableRow>
                                            <TableRow className="k-alt k-treelist-group" alt>
                                                <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                                                <TableTd>31</TableTd>
                                                <TableTd>
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="caret-alt-right" />
                                                    Demos
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd className="k-drag-cell"><Icon icon="reorder" /></TableTd>
                                                <TableTd>17</TableTd>
                                                <TableTd>
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    <Icon className="k-treelist-toggle" icon="none" />
                                                    Release
                                                </TableTd>
                                            </TableRow>
                                        </TableTbody>
                                    </GridTable>
                                </GridContent>
                            </GridContainer>
                        </TreeList>
                    </SplitterPane>,
                    <SplitterPane className="k-gantt-timeline-pane">
                        <Grid className="k-gantt-timeline">
                            <GridHeader>
                                <div className="k-grid-header-wrap">
                                    <GridHeaderTable style={{ width: tablesWidth }}>
                                        <colgroup>
                                            <col /><col /><col /><col /><col /><col /><col />
                                            <col /><col /><col /><col /><col /><col /><col />
                                            <col /><col /><col /><col /><col /><col /><col />
                                            <col /><col /><col /><col /><col /><col /><col />
                                            <col /><col /><col /><col /><col /><col /><col />
                                            <col /><col /><col /><col /><col /><col /><col />
                                        </colgroup>
                                        <TableTbody>
                                            <TableRow >
                                                <TableTd className="k-header" colspan={7} >Sun 6/01 - Sat 6/07</TableTd>
                                                <TableTd className="k-header" colspan={7} >Sun 6/08 - Sat 6/14</TableTd>
                                                <TableTd className="k-header" colspan={7} >Sun 6/15 - Sat 6/21</TableTd>
                                                <TableTd className="k-header" colspan={7} >Sun 6/22 - Sat 6/28</TableTd>
                                                <TableTd className="k-header" colspan={7} >Sun 6/29 - Sat 7/05</TableTd>
                                                <TableTd className="k-header" colspan={7} >Sun 7/06 - Sat 7/12</TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd colspan={1} className="k-header k-nonwork-hour">Sun 6/01</TableTd>
                                                <TableTd className="k-header" colspan={1} >Mon 6/02</TableTd>
                                                <TableTd className="k-header" colspan={1} >Tue 6/03</TableTd>
                                                <TableTd className="k-header" colspan={1} >Wed 6/04</TableTd>
                                                <TableTd className="k-header" colspan={1} >Thu 6/05</TableTd>
                                                <TableTd className="k-header" colspan={1} >Fri 6/06</TableTd>
                                                <TableTd colspan={1} className="k-header k-nonwork-hour">Sat 6/07</TableTd>
                                                <TableTd colspan={1} className="k-header k-nonwork-hour">Sun 6/08</TableTd>
                                                <TableTd className="k-header" colspan={1} >Mon 6/09</TableTd>
                                                <TableTd className="k-header" colspan={1} >Tue 6/10</TableTd>
                                                <TableTd className="k-header" colspan={1} >Wed 6/11</TableTd>
                                                <TableTd className="k-header" colspan={1} >Thu 6/12</TableTd>
                                                <TableTd className="k-header" colspan={1} >Fri 6/13</TableTd>
                                                <TableTd colspan={1} className="k-header k-nonwork-hour">Sat 6/14</TableTd>
                                                <TableTd colspan={1} className="k-header k-nonwork-hour">Sun 6/15</TableTd>
                                                <TableTd className="k-header" colspan={1} >Mon 6/16</TableTd>
                                                <TableTd className="k-header" colspan={1} >Tue 6/17</TableTd>
                                                <TableTd className="k-header" colspan={1} >Wed 6/18</TableTd>
                                                <TableTd className="k-header" colspan={1} >Thu 6/19</TableTd>
                                                <TableTd className="k-header" colspan={1} >Fri 6/20</TableTd>
                                                <TableTd colspan={1} className="k-header k-nonwork-hour">Sat 6/21</TableTd>
                                                <TableTd colspan={1} className="k-header k-nonwork-hour">Sun 6/22</TableTd>
                                                <TableTd className="k-header" colspan={1} >Mon 6/23</TableTd>
                                                <TableTd className="k-header" colspan={1} >Tue 6/24</TableTd>
                                                <TableTd className="k-header" colspan={1} >Wed 6/25</TableTd>
                                                <TableTd className="k-header" colspan={1} >Thu 6/26</TableTd>
                                                <TableTd className="k-header" colspan={1} >Fri 6/27</TableTd>
                                                <TableTd colspan={1} className="k-header k-nonwork-hour">Sat 6/28</TableTd>
                                                <TableTd colspan={1} className="k-header k-nonwork-hour">Sun 6/29</TableTd>
                                                <TableTd className="k-header" colspan={1} >Mon 6/30</TableTd>
                                                <TableTd className="k-header" colspan={1} >Tue 7/01</TableTd>
                                                <TableTd className="k-header" colspan={1} >Wed 7/02</TableTd>
                                                <TableTd className="k-header" colspan={1} >Thu 7/03</TableTd>
                                                <TableTd className="k-header" colspan={1} >Fri 7/04</TableTd>
                                                <TableTd colspan={1} className="k-header k-nonwork-hour">Sat 7/05</TableTd>
                                                <TableTd colspan={1} className="k-header k-nonwork-hour">Sun 7/06</TableTd>
                                                <TableTd className="k-header" colspan={1} >Mon 7/07</TableTd>
                                                <TableTd className="k-header" colspan={1} >Tue 7/08</TableTd>
                                                <TableTd className="k-header" colspan={1} >Wed 7/09</TableTd>
                                                <TableTd className="k-header" colspan={1} >Thu 7/10</TableTd>
                                                <TableTd className="k-header" colspan={1} >Fri 7/11</TableTd>
                                                <TableTd colspan={1} className="k-header k-nonwork-hour">Sat 7/12</TableTd>
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
                                            <TableRow className="k-alt" alt><TableTd></TableTd></TableRow>
                                            <TableRow><TableTd></TableTd></TableRow>
                                            <TableRow className="k-alt" alt><TableTd></TableTd></TableRow>
                                            <TableRow><TableTd></TableTd></TableRow>
                                            <TableRow className="k-alt" alt><TableTd></TableTd></TableRow>
                                            <TableRow><TableTd></TableTd></TableRow>
                                            <TableRow className="k-alt" alt><TableTd></TableTd></TableRow>
                                            <TableRow><TableTd></TableTd></TableRow>
                                            <TableRow className="k-alt" alt><TableTd></TableTd></TableRow>
                                            <TableRow><TableTd></TableTd></TableRow>
                                            <TableRow className="k-alt" alt><TableTd></TableTd></TableRow>
                                            <TableRow><TableTd></TableTd></TableRow>
                                            <TableRow className="k-alt" alt><TableTd></TableTd></TableRow>
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
                                            <col /><col /><col /><col /><col /><col /><col />
                                            <col /><col /><col /><col /><col /><col /><col />
                                            <col /><col /><col /><col /><col /><col /><col />
                                            <col /><col /><col /><col /><col /><col /><col />
                                            <col /><col /><col /><col /><col /><col /><col />
                                        </colgroup>
                                        <TableTbody>
                                            <TableRow>
                                                <TableTd className="k-nonwork-hour"></TableTd>
                                                <TableTd></TableTd><TableTd></TableTd><TableTd></TableTd><TableTd></TableTd><TableTd></TableTd>
                                                <TableTd className="k-nonwork-hour"></TableTd>
                                                <TableTd className="k-nonwork-hour"></TableTd>
                                                <TableTd></TableTd><TableTd></TableTd><TableTd></TableTd><TableTd></TableTd><TableTd></TableTd>
                                                <TableTd className="k-nonwork-hour"></TableTd>
                                                <TableTd className="k-nonwork-hour"></TableTd>
                                                <TableTd></TableTd><TableTd></TableTd><TableTd></TableTd><TableTd></TableTd><TableTd></TableTd>
                                                <TableTd className="k-nonwork-hour"></TableTd>
                                                <TableTd className="k-nonwork-hour"></TableTd>
                                                <TableTd></TableTd><TableTd></TableTd><TableTd></TableTd><TableTd></TableTd><TableTd></TableTd>
                                                <TableTd className="k-nonwork-hour"></TableTd>
                                                <TableTd className="k-nonwork-hour"></TableTd>
                                                <TableTd></TableTd><TableTd></TableTd><TableTd></TableTd><TableTd></TableTd><TableTd></TableTd>
                                                <TableTd className="k-nonwork-hour"></TableTd>
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
                                            <TableRow>
                                                <TableTd>
                                                    <GanttTaskWrap style={{ left: "313px" }}>
                                                        <GanttTask style={{ width: "300px" }}>
                                                            <div className="k-task-complete" style={{ width: "69px" }}></div>
                                                            <GanttTaskContent content="Functional and Technical Specification"></GanttTaskContent>
                                                        </GanttTask>
                                                        <GanttTaskDot />
                                                        <GanttTaskDot position="end" style={{ right: "0px" }} />
                                                        <div className="k-task-draghandle" style={{ left: "69px" }}></div>
                                                    </GanttTaskWrap>
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd>
                                                    <GanttTaskWrap type="summary" style={{ left: "813px" }}>
                                                        <GanttTask type="summary" style={{ width: "500px" }}>
                                                            <div className="k-task-summary-progress" style={{ width: "300px" }}>
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
                                                    <GanttTaskWrap style={{ left: "813px" }}>
                                                        <GanttTask style={{ width: "200px" }}>
                                                            <div className="k-task-complete" style={{ width: "112px" }}></div>
                                                            <GanttTaskContent content="UI Design"></GanttTaskContent>
                                                        </GanttTask>
                                                        <GanttTaskDot />
                                                        <GanttTaskDot position="end" style={{ right: "0px" }} />
                                                        <div className="k-task-draghandle" style={{ left: "112px" }}></div>
                                                    </GanttTaskWrap>
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd>
                                                    <GanttTaskWrap style={{ left: "1013px" }}>
                                                        <GanttTask style={{ width: "300px" }}>
                                                            <div className="k-task-complete" style={{ width: "192px" }}></div>
                                                            <GanttTaskContent content="HTML Prototype"></GanttTaskContent>
                                                        </GanttTask>
                                                        <GanttTaskDot />
                                                        <GanttTaskDot position="end" style={{ right: "0px" }} />
                                                        <div className="k-task-draghandle" style={{ left: "192px" }}></div>
                                                    </GanttTaskWrap>
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd>
                                                    <GanttTaskWrap type="summary" style={{ left: "1013px" }}>
                                                        <GanttTask type="summary" style={{ width: "2100px" }}>
                                                            <div className="k-task-summary-progress" style={{ width: "1617px" }}>
                                                                <div className="k-task-summary-complete" style={{ width: "2100px" }}></div>
                                                            </div>
                                                        </GanttTask>
                                                        <GanttTaskDot />
                                                        <GanttTaskDot position="end" style={{ right: "0px" }} />
                                                    </GanttTaskWrap>
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd>
                                                    <GanttTaskWrap style={{ left: "1013px" }}>
                                                        <GanttTask style={{ width: "600px" }}>
                                                            <div className="k-task-complete" style={{ width: "462px" }}></div>
                                                            <GanttTaskContent content="Prototype"></GanttTaskContent>
                                                        </GanttTask>
                                                        <GanttTaskDot />
                                                        <GanttTaskDot position="end" style={{ right: "0px" }} />
                                                        <div className="k-task-draghandle" style={{ left: "462px" }}></div>
                                                    </GanttTaskWrap>
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd>
                                                    <GanttTaskWrap style={{ left: "1613px" }}>
                                                        <GanttTask style={{ width: "100px" }}>
                                                            <div className="k-task-complete" style={{ width: "82px" }}></div>
                                                            <GanttTaskContent content="Architecture"></GanttTaskContent>
                                                        </GanttTask>
                                                        <GanttTaskDot />
                                                        <GanttTaskDot position="end" style={{ right: "0px" }} />
                                                        <div className="k-task-draghandle" style={{ left: "82px" }}></div>
                                                    </GanttTaskWrap>
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd>
                                                    <GanttTaskWrap style={{ left: "1713px" }}>
                                                        <GanttTask style={{ width: "600px" }}>
                                                            <div className="k-task-complete" style={{ width: "600px" }}></div>
                                                            <GanttTaskContent content="Data Layer"></GanttTaskContent>
                                                        </GanttTask>
                                                        <GanttTaskDot />
                                                        <GanttTaskDot position="end" style={{ right: "0px" }} />
                                                        <div className="k-task-draghandle" style={{ left: "600px" }}></div>
                                                    </GanttTaskWrap>
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd>
                                                    <GanttTaskWrap style={{ left: "2613px" }}>
                                                        <GanttTask style={{ width: "500px" }}>
                                                            <div className="k-task-complete" style={{ width: "300px" }}></div>
                                                            <GanttTaskContent content="UI and Interaction"></GanttTaskContent>
                                                        </GanttTask>
                                                        <GanttTaskDot />
                                                        <GanttTaskDot position="end" style={{ right: "0px" }} />
                                                        <div className="k-task-draghandle" style={{ left: "300px" }}></div>
                                                    </GanttTaskWrap>
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd>
                                                    <GanttTaskWrap style={{ left: "1713px" }}>
                                                        <GanttTask style={{ width: "900px" }}>
                                                            <div className="k-task-complete" style={{ width: "612px" }}></div>
                                                            <GanttTaskContent content="Unit Tests"></GanttTaskContent>
                                                        </GanttTask>
                                                        <GanttTaskDot />
                                                        <GanttTaskDot position="end" style={{ right: "0px" }} />
                                                        <div className="k-task-draghandle" style={{ left: "612px" }}></div>
                                                    </GanttTaskWrap>
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd>
                                                    <GanttTaskWrap type="summary" style={{ left: "2913px" }}>
                                                        <GanttTask type="summary" style={{ width: "500px" }}>
                                                            <div className="k-task-summary-progress" style={{ width: "260px" }}>
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
                                                    <GanttTaskWrap style={{ left: "2913px" }}>
                                                        <GanttTask style={{ width: "500px" }}>
                                                            <div className="k-task-complete" style={{ width: "470px" }}></div>
                                                            <GanttTaskContent content="Integration Testing"></GanttTaskContent>
                                                        </GanttTask>
                                                        <GanttTaskDot />
                                                        <GanttTaskDot position="end" style={{ right: "0px" }} />
                                                        <div className="k-task-draghandle" style={{ left: "470px" }}></div>
                                                    </GanttTaskWrap>
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd>
                                                    <GanttTaskWrap style={{ left: "2913px" }}>
                                                        <GanttTask style={{ width: "500px" }}>
                                                            <div className="k-task-complete" style={{ width: '50px' }}></div>
                                                            <GanttTaskContent content="Load Testing"></GanttTaskContent>
                                                        </GanttTask>
                                                        <GanttTaskDot />
                                                        <GanttTaskDot position="end" style={{ right: "0px" }} />
                                                        <div className="k-task-draghandle" style={{ left: '50px' }}></div>
                                                    </GanttTaskWrap>
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd>
                                                    <GanttTaskWrap type="summary" style={{ left: "2213px" }}>
                                                        <GanttTask type="summary" style={{ width: "1200px" }}>
                                                            <div className="k-task-summary-progress" style={{ width: "168px" }}>
                                                                <div className="k-task-summary-complete" style={{ width: "1200px" }}></div>
                                                            </div>
                                                        </GanttTask>
                                                        <GanttTaskDot />
                                                        <GanttTaskDot position="end" style={{ right: "0px" }} />
                                                    </GanttTaskWrap>
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd>
                                                    <GanttTaskWrap style={{ left: "2213px" }}>
                                                        <GanttTask style={{ width: "300px" }}>
                                                            <div className="k-task-complete" style={{ width: "84px" }}></div>
                                                            <GanttTaskContent content="Structure"></GanttTaskContent>
                                                        </GanttTask>
                                                        <GanttTaskDot />
                                                        <GanttTaskDot position="end" style={{ right: "0px" }} />
                                                        <div className="k-task-draghandle" style={{ left: "84px" }}></div>
                                                    </GanttTaskWrap>
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd>
                                                    <GanttTaskWrap style={{ left: "2513px" }}>
                                                        <GanttTask style={{ width: "900px" }}>
                                                            <div className="k-task-complete" style={{ width: '0px' }}></div>
                                                            <GanttTaskContent content="Articles"></GanttTaskContent>
                                                        </GanttTask>
                                                        <GanttTaskDot />
                                                        <GanttTaskDot position="end" style={{ right: "0px" }} />
                                                        <div className="k-task-draghandle" style={{ left: '0px' }}></div>
                                                    </GanttTaskWrap>
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd>
                                                    <GanttTaskWrap type="summary" style={{ left: "2913px" }}>
                                                        <GanttTask type="summary" style={{ width: "1200px" }}>
                                                            <div className="k-task-summary-progress" style={{ width: "984px" }}>
                                                                <div className="k-task-summary-complete" style={{ width: "1200px" }}></div>
                                                            </div>
                                                        </GanttTask>
                                                        <GanttTaskDot />
                                                        <GanttTaskDot position="end" style={{ right: "0px" }} />
                                                    </GanttTaskWrap>
                                                </TableTd>
                                            </TableRow>
                                            <TableRow>
                                                <TableTd>
                                                    <GanttTaskWrap type="milestone" style={{ left: "4113px" }}>
                                                        <GanttTask type="milestone"></GanttTask>
                                                        <GanttTaskDot />
                                                        <GanttTaskDot position="end" style={{ right: "0px" }} />
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
                                        <GanttLine style={{ left: "1013px", top: "269px", width: "10px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "1021px", top: "269px", height: "18px" }}></GanttLine>
                                        <GanttLine style={{ left: "1003px", top: "287px", width: "20px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "1003px", top: "287px", height: "18px" }}></GanttLine>
                                        <GanttLine style={{ left: "1003px", top: "305px", width: "9px" }}><span className="k-arrow-e"></span></GanttLine>
                                        <GanttLine style={{ left: "1313px", top: "305px", width: "10px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "1321px", top: "305px", height: "18px" }}></GanttLine>
                                        <GanttLine style={{ left: "1003px", top: "323px", width: "320px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "1003px", top: "323px", height: "54px" }}></GanttLine>
                                        <GanttLine style={{ left: "1003px", top: "377px", width: "9px" }}><span className="k-arrow-e"></span></GanttLine>
                                        <GanttLine style={{ left: "1613px", top: "377px", width: "10px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "1621px", top: "377px", height: "18px" }}></GanttLine>
                                        <GanttLine style={{ left: "1603px", top: "395px", width: "20px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "1603px", top: "395px", height: "18px" }}></GanttLine>
                                        <GanttLine style={{ left: "1603px", top: "413px", width: "9px" }}><span className="k-arrow-e"></span></GanttLine>
                                        <GanttLine style={{ left: "1713px", top: "413px", width: "10px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "1721px", top: "413px", height: "18px" }}></GanttLine>
                                        <GanttLine style={{ left: "1703px", top: "431px", width: "20px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "1703px", top: "431px", height: "18px" }}></GanttLine>
                                        <GanttLine style={{ left: "1703px", top: "449px", width: "9px" }}><span className="k-arrow-e"></span></GanttLine>
                                        <GanttLine style={{ left: "1713px", top: "413px", width: "10px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "1721px", top: "413px", height: "18px" }}></GanttLine>
                                        <GanttLine style={{ left: "1703px", top: "431px", width: "20px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "1703px", top: "431px", height: "90px" }}></GanttLine>
                                        <GanttLine style={{ left: "1703px", top: "521px", width: "9px" }}><span className="k-arrow-e"></span></GanttLine>
                                        <GanttLine style={{ left: "2313px", top: "449px", width: "10px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "2321px", top: "449px", height: "36px" }}></GanttLine>
                                        <GanttLine style={{ left: "2321px", top: "485px", width: "291px" }}><span className="k-arrow-e"></span></GanttLine>
                                        <GanttLine style={{ left: "2613px", top: "521px", width: "510px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "3121px", top: "485px", height: "38px" }}></GanttLine>
                                        <GanttLine style={{ left: "3114px", top: "485px", width: "7px" }}><span className="k-caret-alt-left"></span></GanttLine>
                                        <GanttLine style={{ left: "3113px", top: "485px", width: "10px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "3121px", top: "485px", height: "18px" }}></GanttLine>
                                        <GanttLine style={{ left: "2903px", top: "503px", width: "220px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "2903px", top: "503px", height: "90px" }}></GanttLine>
                                        <GanttLine style={{ left: "2903px", top: "593px", width: "9px" }}><span className="k-arrow-e"></span></GanttLine>
                                        <GanttLine style={{ left: "3113px", top: "485px", width: "10px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "3121px", top: "485px", height: "18px" }}></GanttLine>
                                        <GanttLine style={{ left: "2903px", top: "503px", width: "220px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "2903px", top: "503px", height: "126px" }}></GanttLine>
                                        <GanttLine style={{ left: "2903px", top: "629px", width: "9px" }}><span className="k-arrow-e"></span></GanttLine>
                                        <GanttLine style={{ left: "2513px", top: "701px", width: "10px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "2521px", top: "701px", height: "18px" }}></GanttLine>
                                        <GanttLine style={{ left: "2503px", top: "719px", width: "20px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "2503px", top: "719px", height: "18px" }}></GanttLine>
                                        <GanttLine style={{ left: "2503px", top: "737px", width: "9px" }}><span className="k-arrow-e"></span></GanttLine>
                                        <GanttLine style={{ left: "3413px", top: "593px", width: "10px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "3421px", top: "593px", height: "38px" }}></GanttLine>
                                        <GanttLine style={{ left: "3414px", top: "629px", width: "7px" }}><span className="k-caret-alt-left"></span></GanttLine>
                                        <GanttLine style={{ left: "3413px", top: "629px", width: "10px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "3421px", top: "629px", height: "180px" }}></GanttLine>
                                        <GanttLine style={{ left: "3421px", top: "809px", width: "679.5px" }}><span className="k-arrow-e"></span></GanttLine>
                                        <GanttLine style={{ left: "3413px", top: "737px", width: "10px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "3421px", top: "737px", height: "72px" }}></GanttLine>
                                        <GanttLine style={{ left: "3421px", top: "809px", width: "679.5px" }}><span className="k-arrow-e"></span></GanttLine>
                                        <GanttLine style={{ left: "3113px", top: "341px", width: "10px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "3121px", top: "341px", height: "146px" }}></GanttLine>
                                        <GanttLine style={{ left: "3114px", top: "485px", width: "7px" }}><span className="k-caret-alt-left"></span></GanttLine>
                                        <GanttLine style={{ left: "124.5px", top: "53px", width: "10px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "132.5px", top: "53px", height: "18px" }}></GanttLine>
                                        <GanttLine style={{ left: "103px", top: "71px", width: "31.5px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "103px", top: "71px", height: "90px" }}></GanttLine>
                                        <GanttLine style={{ left: "103px", top: "161px", width: "9px" }}><span className="k-arrow-e"></span></GanttLine>
                                        <GanttLine style={{ left: "313px", top: "161px", width: "10px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "321px", top: "161px", height: "18px" }}></GanttLine>
                                        <GanttLine style={{ left: "303px", top: "179px", width: "20px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "303px", top: "179px", height: "18px" }}></GanttLine>
                                        <GanttLine style={{ left: "303px", top: "197px", width: "9px" }}><span className="k-arrow-e"></span></GanttLine>
                                        <GanttLine style={{ left: "313px", top: "125px", width: "10px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "321px", top: "125px", height: "18px" }}></GanttLine>
                                        <GanttLine style={{ left: "303px", top: "143px", width: "20px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "303px", top: "143px", height: "54px" }}></GanttLine>
                                        <GanttLine style={{ left: "303px", top: "197px", width: "9px" }}><span className="k-arrow-e"></span></GanttLine>
                                        <GanttLine style={{ left: "613px", top: "197px", width: "10px" }}></GanttLine>
                                        <GanttLine orientation="vertical" style={{ left: "621px", top: "197px", height: "72px" }}></GanttLine>
                                        <GanttLine style={{ left: "621px", top: "269px", width: "191px" }}><span className="k-arrow-e"></span></GanttLine>
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
