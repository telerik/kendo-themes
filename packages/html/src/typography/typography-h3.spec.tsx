import { Typography } from './typography';
import { KendoComponent } from '../_types/component';
import { classNames } from '../misc';

const TYPOGRAPHY_H3_CLASSNAME = 'k-h3';

const states = [];
const options = {};

export type KendoTypographyH3Props = React.HTMLAttributes<HTMLHeadingElement>;

export const TypographyH3: KendoComponent<KendoTypographyH3Props> = (
    props: KendoTypographyH3Props
) => {
    return (
        <Typography {...props} className={classNames(props.className, TYPOGRAPHY_H3_CLASSNAME)} type="h3" />
    );
};

TypographyH3.states = states;
TypographyH3.options = options;
TypographyH3.className = TYPOGRAPHY_H3_CLASSNAME;
TypographyH3.moduleName = "typography";
TypographyH3.folderName = "typography";

export default TypographyH3;
