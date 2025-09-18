import { Typography } from './typography';
import { KendoComponent } from '../_types/component';
import { TYPOGRAPHY_FOLDER_NAME, TYPOGRAPHY_MODULE_NAME } from './constants';
import { classNames } from '../misc';

const TYPOGRAPHY_DISPLAY4_CLASSNAME = 'k-display-4';

const states = [];
const options = {};

export type KendoTypographyDisplay4Props = React.HTMLAttributes<HTMLDivElement>;

export const TypographyDisplay4: KendoComponent<KendoTypographyDisplay4Props> = (
    props: KendoTypographyDisplay4Props
) => {
    return (
        <Typography {...props} className={classNames(props.className, TYPOGRAPHY_DISPLAY4_CLASSNAME)} type="div" />
    );
};

TypographyDisplay4.states = states;
TypographyDisplay4.options = options;
TypographyDisplay4.className = TYPOGRAPHY_DISPLAY4_CLASSNAME;
TypographyDisplay4.moduleName = TYPOGRAPHY_MODULE_NAME;
TypographyDisplay4.folderName = TYPOGRAPHY_FOLDER_NAME;

export default TypographyDisplay4;
