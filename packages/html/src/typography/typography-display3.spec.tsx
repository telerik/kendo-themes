import { Typography } from './typography';
import { KendoComponent } from '../_types/component';
import { TYPOGRAPHY_FOLDER_NAME, TYPOGRAPHY_MODULE_NAME } from './constants';
import { classNames } from '../misc';

const TYPOGRAPHY_DISPLAY3_CLASSNAME = 'k-display-3';

const states = [];
const options = {};

export type KendoTypographyDisplay3Props = React.HTMLAttributes<HTMLDivElement>;

export const TypographyDisplay3: KendoComponent<KendoTypographyDisplay3Props> = (
    props: KendoTypographyDisplay3Props
) => {
    return (
        <Typography {...props} className={classNames(props.className, TYPOGRAPHY_DISPLAY3_CLASSNAME)} type="div" />
    );
};

TypographyDisplay3.states = states;
TypographyDisplay3.options = options;
TypographyDisplay3.className = TYPOGRAPHY_DISPLAY3_CLASSNAME;
TypographyDisplay3.moduleName = TYPOGRAPHY_MODULE_NAME;
TypographyDisplay3.folderName = TYPOGRAPHY_FOLDER_NAME;

export default TypographyDisplay3;
