import { Typography } from './typography';
import { KendoComponent } from '../_types/component';
import { TYPOGRAPHY_FOLDER_NAME, TYPOGRAPHY_MODULE_NAME } from './constants';
import { classNames } from '../misc';

const TYPOGRAPHY_H4_CLASSNAME = 'k-h4';

const states = [];
const options = {};

export type KendoTypographyH4Props = React.HTMLAttributes<HTMLHeadingElement>;

export const TypographyH4: KendoComponent<KendoTypographyH4Props> = (
    props: KendoTypographyH4Props
) => {
    return (
        <Typography {...props} className={classNames(props.className, TYPOGRAPHY_H4_CLASSNAME)} type="h4" />
    );
};

TypographyH4.states = states;
TypographyH4.options = options;
TypographyH4.className = TYPOGRAPHY_H4_CLASSNAME;
TypographyH4.moduleName = TYPOGRAPHY_MODULE_NAME;
TypographyH4.folderName = TYPOGRAPHY_FOLDER_NAME;

export default TypographyH4;
