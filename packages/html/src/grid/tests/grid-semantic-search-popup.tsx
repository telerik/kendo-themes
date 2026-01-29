import { SmartBoxOpened } from '../../smart-box';
import { SegmentedControl, SegmentedControlButton } from '../../segmented-control';
import { List, ListGroup, ListItem } from '../../list';
import { Icon } from "../../icon";
import { IconButton } from '../../button';
import { NoData } from "../../nodata";


const styles = `
    .k-animation-container {
        position: relative;
        margin-top: 2px;
    }

    .k-segmented-control-thumb {
        width: 130px;
        left: 150px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>Search + Semantic Search + AI Prompt</span>
            <span>Search + AI Prompt</span>
            <span>No previous searches</span>

            <section>
                <SmartBoxOpened
                    separators={false}
                    prefix={
                        <>
                            <Icon icon="sparkles" className='k-accent-icon' />
                        </>
                    }
                    suffix={
                        <>
                            <IconButton icon="microphone-outline" fillMode="clear" rounded="full" size="small" />
                            <IconButton icon="arrow-up-outline" rounded="full" size="small" disabled />
                        </>
                    }
                    popup={
                        <>
                            <SegmentedControl stretched children={
                                <>
                                    <SegmentedControlButton icon="search">Search</SegmentedControlButton>
                                    <SegmentedControlButton icon="sparkles" iconClassName="k-accent-icon" selected> AI Assisstant</SegmentedControlButton>
                                </>
                            } />
                            <List>
                                <ListGroup>
                                    <ListItem iconName="check" iconClassName="k-smart-box-check-icon" description='Fuzzy relevance across fields using similarity scoring'>Search</ListItem>
                                    <ListItem description='Keyword + semantic ranking for best results'>Semantic Search</ListItem>
                                </ListGroup>
                                <ListGroup label="Previously searched" groupIconName="clock-arrow-rotate">
                                    <ListItem>account</ListItem>
                                    <ListItem>transactions Long long long long long content</ListItem>
                                    <ListItem>customer</ListItem>
                                </ListGroup>
                            </List>
                    </>} />
            </section>

            <section>
                <SmartBoxOpened
                    separators={false}
                    prefix={
                        <>
                            <Icon icon="sparkles" className='k-accent-icon' />
                        </>
                    }
                    suffix={
                        <>
                            <IconButton icon="microphone-outline" fillMode="clear" rounded="full" size="small" />
                            <IconButton icon="arrow-up-outline" rounded="full" size="small" disabled />
                        </>
                    }
                    popup={
                        <>
                            <SegmentedControl stretched children={
                                <>
                                    <SegmentedControlButton icon="search">Search</SegmentedControlButton>
                                    <SegmentedControlButton icon="sparkles" iconClassName="k-accent-icon" selected> AI Assisstant</SegmentedControlButton>
                                </>
                            } />
                            <List>
                                <ListGroup label="Suggested prompts" groupIconName="lightbulb-outline">
                                    <ListItem>Filter by account type</ListItem>
                                    <ListItem>Show only failed transactions</ListItem>
                                    <ListItem>Hide Currency column</ListItem>
                                    <ListItem>Sort by Customer Name ascending</ListItem>
                                </ListGroup>
                                <ListGroup label="Previously asked" groupIconName="clock-arrow-rotate">
                                    <ListItem description="03:07">Sort by amount descending</ListItem>
                                    <ListItem description="10:02">Sort by amount ascending</ListItem>
                                </ListGroup>
                            </List>
                    </>} />
            </section>

            <section>
                <SmartBoxOpened
                    separators={false}
                    prefix={
                        <>
                            <Icon icon="sparkles" className='k-accent-icon' />
                        </>
                    }
                    suffix={
                        <>
                            <IconButton icon="microphone-outline" fillMode="clear" rounded="full" size="small" />
                            <IconButton icon="arrow-up-outline" rounded="full" size="small" disabled />
                        </>
                    }
                    popup={
                    <>
                        <SegmentedControl stretched children={
                            <>
                                <SegmentedControlButton icon="search">Search</SegmentedControlButton>
                                <SegmentedControlButton icon="sparkles" iconClassName="k-accent-icon" selected> AI Assisstant</SegmentedControlButton>
                            </>
                        } />
                        <NoData className="k-smart-box-no-data">
                            <Icon icon="file-clock-outline" size={"xxxlarge"} />
                            <span>No previous searches</span>
                        </NoData>
                    </>} />
            </section>

        </div>
    </>
);
