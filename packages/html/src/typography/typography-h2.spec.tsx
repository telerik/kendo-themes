import { Typography } from './typography';
import { KendoComponent } from '../_types/component';
import { classNames } from '../misc';

const TYPOGRAPHY_H2_CLASSNAME = 'k-h2';

const states = [];
const options = {};

export type KendoTypographyH2Props = React.HTMLAttributes<HTMLHeadingElement>;

export const TypographyH2: KendoComponent<KendoTypographyH2Props> = (
    props: KendoTypographyH2Props
) => {
    return (
        <Typography {...props} className={classNames(props.className, TYPOGRAPHY_H2_CLASSNAME)} type="h2" />
    );
};

TypographyH2.states = states;
TypographyH2.options = options;
TypographyH2.className = TYPOGRAPHY_H2_CLASSNAME;

export default TypographyH2;
