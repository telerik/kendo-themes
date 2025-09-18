import { Typography } from './typography';
import { KendoComponent } from '../_types/component';
import { classNames } from '../misc';

const TYPOGRAPHY_H1_CLASSNAME = 'k-h1';

const states = [];
const options = {};

export type KendoTypographyH1Props = React.HTMLAttributes<HTMLHeadingElement>;

export const TypographyH1: KendoComponent<KendoTypographyH1Props> = (
    props: KendoTypographyH1Props
) => {
    return (
        <Typography {...props} className={classNames(props.className, TYPOGRAPHY_H1_CLASSNAME)} type="h1" />
    );
};

TypographyH1.states = states;
TypographyH1.options = options;
TypographyH1.className = TYPOGRAPHY_H1_CLASSNAME;
TypographyH1.moduleName = "typography";
TypographyH1.folderName = TypographyH1.moduleName;

export default TypographyH1;
