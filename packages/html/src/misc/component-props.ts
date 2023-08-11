import { FillMode, Roundness, Size, States, ThemeColor } from "./theme";

export type KendoComponentProps<E extends React.ElementType, P extends object> = {
  as?: E;
  className?: string;
  style?: React.CSSProperties;
  tabIndex?: number;
  id?: string;
} & React.ComponentPropsWithoutRef<E> &
  P;

export type KendoComponent<DE extends React.ElementType, P extends object> = (<E extends React.ElementType = DE>(props: KendoComponentProps<E, P>) => React.ReactElement) & {
  className: string;
  states?: (typeof States)[];
  options?: {
    size?: (keyof typeof Size)[];
    roundness?: (keyof typeof Roundness)[];
    fillMode?: (keyof typeof FillMode)[];
    themeColor?: (keyof typeof ThemeColor)[];
  };
  defaultProps?: Partial<KendoComponentProps<DE, P>>;
};
