import { classNames } from '../misc';
import { Button } from '../button';

import { KendoComponent } from '../_types/component';
import { SUGGESTION_FOLDER_NAME, SUGGESTION_MODULE_NAME } from './constants';
export const SUGGESTIONGROUP_CLASSNAME = `k-suggestion-group`;

const states = [];

const options = {};

export type KendoSuggestionGroupOptions = {};

export type KendoSuggestionGroupProps = KendoSuggestionGroupOptions & {
    layout?: 'scrollable' | 'scrollButtons' | 'wrap';
    scrollingPosition?: "start" | "end" | "both";
};

const defaultOptions = {
    layout: 'scrollable',
    scrollingPosition: 'start'
};

export const SuggestionGroup: KendoComponent<KendoSuggestionGroupProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoSuggestionGroupProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        layout = defaultOptions.layout,
        scrollingPosition,
        ...other
    } = props;

    const suggestionContent = (
        <div
            {...other}
            className={classNames(
                SUGGESTIONGROUP_CLASSNAME,
                {
                    [`k-suggestion-group-scrollable`]: layout == 'scrollable',
                    [`${SUGGESTIONGROUP_CLASSNAME}-scrollable-start`]: scrollingPosition === 'start' || scrollingPosition === 'both',
                    [`${SUGGESTIONGROUP_CLASSNAME}-scrollable-end`]: scrollingPosition === 'end' || scrollingPosition === 'both'
                },
                props.className
            )}
            role="group"
        >
            {(layout === 'scrollable' || layout === 'scrollButtons') ? (
                <div className="k-suggestions-scroll">
                    {props.children}
                </div>
            ) : props.children}
        </div>
    );

    if (layout =='scrollButtons') {
        return (
            <div className="k-suggestion-scrollwrap">
                <Button fillMode={"flat"} icon="chevron-left" size="small"></Button>
                {suggestionContent}
                <Button fillMode={"flat"} icon="chevron-right" size="small"></Button>
            </div>
        );
    }
    return suggestionContent;
};

SuggestionGroup.states = states;
SuggestionGroup.options = options;
SuggestionGroup.className = SUGGESTIONGROUP_CLASSNAME;
SuggestionGroup.defaultOptions = defaultOptions;
SuggestionGroup.moduleName = SUGGESTION_MODULE_NAME;
SuggestionGroup.folderName = SUGGESTION_FOLDER_NAME;

export default SuggestionGroup;
