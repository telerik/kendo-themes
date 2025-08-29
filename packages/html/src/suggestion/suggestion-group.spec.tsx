import { classNames } from '../misc';
import { Button } from '../button';

import { KendoComponent } from '../_types/component';
export const SUGGESTIONGROUP_CLASSNAME = `k-suggestion-group`;

const states = [];

const options = {};

export type KendoSuggestionGroupOptions = {};

export type KendoSuggestionGroupProps = KendoSuggestionGroupOptions & {
    scrollable?: boolean;
};

const defaultOptions = {
    scrollable: true
};

export const SuggestionGroup: KendoComponent<KendoSuggestionGroupProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoSuggestionGroupProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        scrollable = defaultOptions.scrollable,
        ...other
    } = props;

    const suggestionContent = (
        <div
            {...other}
            className={classNames(
                SUGGESTIONGROUP_CLASSNAME,
                props.className
            )}>
            {props.children}
        </div>
    );

    if (scrollable) {
        return (
            <div className="k-suggestion-scrollwrap">
                <Button icon="chevron-left"></Button>
                {suggestionContent}
                <Button icon="chevron-right"></Button>
            </div>
        );
    }
    return suggestionContent;
};

SuggestionGroup.states = states;
SuggestionGroup.options = options;
SuggestionGroup.className = SUGGESTIONGROUP_CLASSNAME;
SuggestionGroup.defaultOptions = defaultOptions;

export default SuggestionGroup;
