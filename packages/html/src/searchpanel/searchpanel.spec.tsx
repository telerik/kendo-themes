import { classNames } from '../misc';
import { Button } from '../button';
import { Textbox } from '../textbox';

export const SEARCHPANEL_CLASSNAME = `k-search-panel`;

const states = [];

const options = {};

const defaultProps = {};

export const SearchPanel = (
    props: React.HTMLAttributes<HTMLDivElement>
) => {
    const { ...other } = props;

    return (
        <div
            {...other}
            className={classNames(props.className, SEARCHPANEL_CLASSNAME, "k-pos-sticky k-top-center")}
        >
            <Textbox suffix={ <Button fillMode="flat" className="k-match-case-button" icon="convert-lowercase"></Button> } />
            <span className="k-search-matches">
                <span>0</span> of <span>1</span>
            </span>
            <Button fillMode="flat" icon="arrow-up"></Button>
            <Button fillMode="flat" icon="arrow-down"></Button>
            <Button fillMode="flat" icon="x"></Button>
            {props.children}
        </div>
    );
};

SearchPanel.states = states;
SearchPanel.options = options;
SearchPanel.className = SEARCHPANEL_CLASSNAME;
SearchPanel.defaultProps = defaultProps;

export default SearchPanel;