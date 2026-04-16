import { classNames, stateClassNames } from "../misc";

import { KendoComponent } from '../_types/component';
import { CARD_FOLDER_NAME, CARD_MODULE_NAME } from './constants';

export const CARD_LIST_CLASSNAME = `k-card-list`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoCardListOptions = {};

export type KendoCardListProps = KendoCardListOptions & {};

export type KendoCardListState = { [K in (typeof states)[number]]?: boolean };

export const CardList: KendoComponent<KendoCardListProps & KendoCardListState & React.HTMLAttributes<HTMLDivElement>> = (props: KendoCardListProps & KendoCardListState & React.HTMLAttributes<HTMLDivElement>) => {
  const { ...other } = props;

  return (
    <div {...other} className={classNames(props.className, CARD_LIST_CLASSNAME, stateClassNames(CARD_LIST_CLASSNAME, {}))} role="list">
      <>{props.children}</>
    </div>
  );
};

CardList.states = states;
CardList.options = options;
CardList.className = CARD_LIST_CLASSNAME;
CardList.defaultOptions = defaultOptions;
CardList.moduleName = CARD_MODULE_NAME;
CardList.folderName = CARD_FOLDER_NAME;

/**
 * Accessibility specification for CardList.
 *
 * @wcag 1.3.1 Info and Relationships - list container for cards
 * @see Card.ariaSpec for card-level rules when inside a list
 */
CardList.ariaSpec = {
    selector: '.k-card-list',
    sectionLinks: { card: 'card' },
    seeAlso: ['card'],
    rules: [
        { selector: '.k-card-list', attribute: 'role=list', usage: 'The card list container announces its list role.' },
        { section: 'card', selector: '.k-card-list .k-card', attribute: 'role=listitem', usage: 'Each card in the list has the listitem role.' },
        { section: 'card', selector: '.k-card-list .k-card', attribute: 'tabindex=0', usage: 'The card is focusable when navigatable.' },
        { section: 'card', selector: '.k-card-list .k-card', attribute: 'aria-describedby=.k-card-title id', usage: 'Associate the card to its title element.' },
        { section: 'card', selector: '.k-card-list .k-card', attribute: 'aria-keyshortcuts=Enter', usage: 'Announces the Enter key for navigation inside the card.' },
    ]
};

export default CardList;
