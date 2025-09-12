import { Typography } from './typography';
import { KendoComponent } from '../_types/component';
import { classNames } from '../misc';

const TYPOGRAPHY_DISPLAY2_CLASSNAME = 'k-display-2';

const states = [];
const options = {};

export type KendoTypographyDisplay2Props = React.HTMLAttributes<HTMLDivElement>;

export const TypographyDisplay2: KendoComponent<KendoTypographyDisplay2Props> = (
    props: KendoTypographyDisplay2Props
) => {
    return (
        <Typography {...props} className={classNames(props.className, TYPOGRAPHY_DISPLAY2_CLASSNAME)} type="div" />
    );
};

TypographyDisplay2.states = states;
TypographyDisplay2.options = options;
TypographyDisplay2.className = TYPOGRAPHY_DISPLAY2_CLASSNAME;
TypographyDisplay2.moduleName = "typography";
TypographyDisplay2.folderName = "typography";

export default TypographyDisplay2;
