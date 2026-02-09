import { classNames, optionClassNames, Size } from '../misc';

import { KendoComponent } from '../_types/component';
import { FORM_FOLDER_NAME, FORM_MODULE_NAME } from './constants';
export const FORM_CLASSNAME = 'k-form';

const states = [];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ]
};

export type KendoFormOptions = {
    size?: (typeof options.size)[number] | null;
};

export type KendoFormProps = KendoFormOptions & {
    orientation?: string;
    layout?: string;
    formButtons?: React.ReactNode;
    cols?: number;
    gutters?: string | { rows?: string; cols?: string };
    tag?: 'form' | 'div';
    children?: React.ReactNode;
};

const defaultOptions = {
    layout: 'basic',
    tag: 'form' as const
};

export const Form: KendoComponent<KendoFormProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoFormProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size,
        orientation,
        layout = defaultOptions.layout,
        formButtons,
        cols,
        gutters,
        tag = defaultOptions.tag,
        children
    } = props;

    const Tag = tag;

    const formClassNames = classNames(
        props.className,
        FORM_CLASSNAME,
        optionClassNames(FORM_CLASSNAME, {
            size
        }),
        {
            [`${FORM_CLASSNAME}-${orientation}`]: orientation
        }
    );

    const content = (
        <>
            { layout === 'grid' ?
                <div className={classNames(
                    'k-form-layout',
                    'k-d-grid',
                    {
                        [`k-grid-cols-${cols}`]: cols
                    }
                )} style={{
                    ...(typeof gutters === 'string' && { gap: gutters }),
                    ...(typeof gutters === 'object' && gutters.rows && { rowGap: gutters.rows }),
                    ...(typeof gutters === 'object' && gutters.cols && { columnGap: gutters.cols })
                }}>
                    {children}
                </div>
                :
                <>{children}</>
            }
            { formButtons &&
                <div className="k-form-buttons">
                    {formButtons}
                </div>
            }
        </>
    );

    return <Tag className={formClassNames}>{content}</Tag>;
};

Form.states = states;
Form.options = options;
Form.className = FORM_CLASSNAME;
Form.defaultOptions = defaultOptions;
Form.moduleName = FORM_MODULE_NAME;
Form.folderName = FORM_FOLDER_NAME;

export default Form;

