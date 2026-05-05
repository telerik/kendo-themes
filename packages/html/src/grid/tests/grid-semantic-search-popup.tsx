import { SmartBoxOpened } from '../../smart-box';
import { SegmentedControl, SegmentedControlButton } from '../../segmented-control';
import { List, ListItem, ListGroupItem, ListContent, ListUl } from '../../list';
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
            <span>Semantic Search Selected</span>
            <span>Search + AI Prompt</span>

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
                            <IconButton icon="microphone" fillMode="clear" rounded="full" size="small" />
                            <IconButton icon="arrow-up" rounded="full" size="small" disabled />
                        </>
                    }
                    popup={
                        <>
                            <SegmentedControl size="small" stretched children={
                                <>
                                    <SegmentedControlButton icon="search">Search</SegmentedControlButton>
                                    <SegmentedControlButton icon="sparkles" iconClassName="k-accent-icon" selected> AI Assistant</SegmentedControlButton>
                                </>
                            } />
                            <List>
                                <ListContent grouping>
                                    <ListUl>
                                        <ListItem iconName="check" iconClassName="k-smart-box-check-icon" description='Fuzzy relevance across fields using similarity scoring'>Search</ListItem>
                                        <ListItem description='Keyword + semantic ranking for best results'>Semantic Search</ListItem>
                                    </ListUl>
                                    <ListUl>
                                        <ListGroupItem groupIconName="clock-arrow-rotate">Previously searched</ListGroupItem>
                                        <ListItem>account</ListItem>
                                        <ListItem>transactions Long long long long long content</ListItem>
                                        <ListItem>customer</ListItem>
                                    </ListUl>
                                </ListContent>
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
                            <IconButton icon="microphone" fillMode="clear" rounded="full" size="small" />
                            <IconButton icon="arrow-up" rounded="full" size="small" disabled />
                        </>
                    }
                    popup={
                        <>
                            <SegmentedControl size="small" stretched children={
                                <>
                                    <SegmentedControlButton icon="zoom-sparkle">Search</SegmentedControlButton>
                                    <SegmentedControlButton icon="sparkles" iconClassName="k-accent-icon" selected> AI Assistant</SegmentedControlButton>
                                </>
                            } />
                            <List>
                                <ListContent grouping>
                                    <ListUl>
                                        <ListItem description='Fuzzy relevance across fields using similarity scoring'>Search</ListItem>
                                        <ListItem iconName="check" iconClassName="k-smart-box-check-icon" description='Keyword + semantic ranking for best results'>Semantic Search</ListItem>
                                    </ListUl>
                                    <ListUl>
                                        <ListGroupItem groupIconName="clock-arrow-rotate">Previously searched</ListGroupItem>
                                        <ListItem>account</ListItem>
                                        <ListItem>transactions Long long long long long content</ListItem>
                                        <ListItem>customer</ListItem>
                                    </ListUl>
                                </ListContent>
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
                            <IconButton icon="microphone" fillMode="clear" rounded="full" size="small" />
                            <IconButton icon="arrow-up" rounded="full" size="small" disabled />
                        </>
                    }
                    popup={
                        <>
                            <SegmentedControl size="small" stretched children={
                                <>
                                    <SegmentedControlButton icon="search">Search</SegmentedControlButton>
                                    <SegmentedControlButton icon="sparkles" iconClassName="k-accent-icon" selected> AI Assistant</SegmentedControlButton>
                                </>
                            } />
                            <List>
                                <ListContent grouping>
                                    <ListUl>
                                        <ListGroupItem groupIconName="lightbulb">Suggested prompts</ListGroupItem>
                                        <ListItem>Filter by account type</ListItem>
                                        <ListItem>Show only failed transactions</ListItem>
                                        <ListItem>Hide Currency column</ListItem>
                                        <ListItem>Sort by Customer Name ascending</ListItem>
                                    </ListUl>
                                    <ListUl>
                                        <ListGroupItem groupIconName="clock-arrow-rotate">Previously asked</ListGroupItem>
                                        <ListItem description="03:07">Sort by amount descending</ListItem>
                                        <ListItem description="10:02">Sort by amount ascending</ListItem>
                                    </ListUl>
                                </ListContent>
                            </List>
                    </>} />
            </section>


            <span>No previous searches</span>
            <span></span>
            <span></span>


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
                            <IconButton icon="microphone" fillMode="clear" rounded="full" size="small" />
                            <IconButton icon="arrow-up" rounded="full" size="small" disabled />
                        </>
                    }
                    popup={
                    <>
                        <SegmentedControl size="small" stretched children={
                            <>
                                <SegmentedControlButton icon="search">Search</SegmentedControlButton>
                                <SegmentedControlButton icon="sparkles" iconClassName="k-accent-icon" selected> AI Assistant</SegmentedControlButton>
                            </>
                        } />
                        <NoData className="k-smart-box-no-data">
                            <Icon icon="file-clock" size={"xxxlarge"} />
                            <span>No previous searches</span>
                        </NoData>
                    </>} />
            </section>

        </div>
    </>
);
