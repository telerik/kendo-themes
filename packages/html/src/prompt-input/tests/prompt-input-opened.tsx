import { PromptInputOpened } from '..';

const styles = `
    #test-area {
        max-width: 660px;
    }

    .k-animation-container {
        position: relative;
    }


    .k-list .k-list-item {
        align-items: flex-start;
    }

    .k-list-item-text {
        flex: 1;
        text-overflow: ellipsis;
        min-width: 0;
        overflow: hidden;
    }

    .k-list-item-text:has(+ .k-icon) {
        padding-inline-end: calc(var(--icon-offset) + (4px + 8px));
        overflow: hidden;
    }

    .k-list:has(.k-list-item>.k-icon) {
        --icon-offset: 16px;
    }

    .k-list .k-list-item:has(>.k-icon) {
        padding-inline-start: 8px;
    }

    .k-list .k-list-item {
        padding-inline-start: calc(var(--icon-offset) + (4px + 8px));
        flex-wrap: wrap;
    }

    .k-list .k-list-item:has(>.k-icon) .k-list-item-description {
        padding-inline-start: calc(var(--icon-offset) + 4px);
    }

    .k-list .k-list-item .k-list-item-text {
       /*  white-space: nowrap; */
    }

    .k-list .k-list-item-description {
       flex-basis: 100%;
       font-size: 12px;
       color: gray;
    }

    .k-list-group-item {
        border-top: 0;
    }


    .k-virtual-list .k-list-item, .k-virtual-list .k-list-optionlabel, .k-virtual-list .k-list-group-item, .k-virtual-content .k-list-item, .k-virtual-content .k-list-optionlabel, .k-virtual-content .k-list-group-item {
        position: static;
    }

`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>lineMode - single</span>
            <span>lineMode - multi</span>

            <div>
                <PromptInputOpened />
            </div>
            <div>
                <PromptInputOpened />
            </div>


        </div>
    </>
);
