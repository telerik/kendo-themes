import { ActionSheet, ActionSheetHeader } from '../../action-sheet';
import { Button } from '../../button';
import { List, ListItem } from '../../list';
import { PagerInput } from '../templates/pager-input';


const styles = `
    #test-area {
        grid-template-columns: repeat(2, min-content);
        max-width: min-content;
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
        <div id="test-area" className="k-d-grid">

            <span>resolutions 500 &lt;= 768</span>
            <span>resolutions &lt;= 500</span>

            <section>
                <PagerInput refresh={false} />
                <ActionSheet
                    adaptive
                    header={
                        <ActionSheetHeader
                            actionsEnd={<Button icon="check" size="large" themeColor="primary" fillMode="flat" />}
                            title="Items per page">
                        </ActionSheetHeader>
                    }
                >
                    <div className="k-list-container">
                        <List size="large">
                            <ListItem text="All" />
                            <ListItem text="5" selected />
                            <ListItem text="20" />
                        </List>
                    </div>
                </ActionSheet>
            </section>

            <section>
                <PagerInput pageTitleInfo={false} refresh={false} info={false} pagerSizeInfo={false} />
                <ActionSheet
                    adaptive
                    fullscreen
                    header={
                        <ActionSheetHeader
                            actionsEnd={<Button icon="check" size="large" themeColor="primary" fillMode="flat" />}
                            title="Items per page">
                        </ActionSheetHeader>
                    }
                >
                    <div className="k-list-container">
                        <List size="large">
                            <ListItem text="All" />
                            <ListItem text="5" selected />
                            <ListItem text="20" />
                        </List>
                    </div>
                </ActionSheet>
            </section>

        </div>
    </>
);
