import { Typography } from './typography';
import { KendoComponent } from '../_types/component';
import { classNames } from '../misc';

const TYPOGRAPHY_DISPLAY1_CLASSNAME = 'k-display-1';

const states = [];
const options = {};

export type KendoTypographyDisplay1Props = React.HTMLAttributes<HTMLDivElement>;

export const TypographyDisplay1: KendoComponent<KendoTypographyDisplay1Props> = (
    props: KendoTypographyDisplay1Props
) => {
    return (
        <Typography {...props} className={classNames(props.className, TYPOGRAPHY_DISPLAY1_CLASSNAME)} type="div" />
    );
};

TypographyDisplay1.states = states;
TypographyDisplay1.options = options;
TypographyDisplay1.className = TYPOGRAPHY_DISPLAY1_CLASSNAME;

export default TypographyDisplay1;
