import { classNames, stateClassNames } from "../misc";

export const CARD_LIST_CLASSNAME = `k-card-list`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoCardListOptions = {};

export type KendoCardListProps = KendoCardListOptions & {};

export type KendoCardListState = { [K in (typeof states)[number]]?: boolean };

export const CardList = (props: KendoCardListProps & KendoCardListState & React.HTMLAttributes<HTMLDivElement>) => {
  const { ...other } = props;

  return (
    <div {...other} className={classNames(props.className, CARD_LIST_CLASSNAME, stateClassNames(CARD_LIST_CLASSNAME, {}))}>
      <>{props.children}</>
    </div>
  );
};

CardList.states = states;
CardList.options = options;
CardList.className = CARD_LIST_CLASSNAME;
CardList.defaultOptions = defaultOptions;

export default CardList;
