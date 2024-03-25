/* eslint-disable indent */
import { Typography } from '../../typography';
import { Button } from '../../button';

const styles = `
   #test-area {
        max-width: 1080px;
        gap: 10px;
   }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Headings</span>
            <span>Other Types</span>

            <section>
                <Typography type="h1">Heading 1</Typography>
                <Typography type="h2">Heading 2</Typography>
                <Typography type="h3">Heading 3</Typography>
                <Typography type="h4">Heading 4</Typography>
                <Typography type="h5">Heading 5</Typography>
                <Typography type="h6">Heading 6</Typography>
            </section>

            <section>
                <Typography type="p">A paragraph of regular body text with <strong>bold</strong>, <em>italic</em>, and <u>underline</u>. Also, the <Typography type="code">code</Typography> tag is available in typography.</Typography>

                <Button>Button</Button>

                <Typography type="pre">
<Typography type="code">{`const handleChange = ({ target }) => {
    const { name, value } = target;
    const newData = Object.assign({}, data, { [name]: value });
    setData(newData);
}`}</Typography>
                </Typography>
            </section>

            <span>Displays</span>
            <span></span>

            <section>
                <Typography type="display-1">Display 1</Typography>
                <Typography type="display-2">Display 2</Typography>
                <Typography type="display-3">Display 3</Typography>
                <Typography type="display-4">Display 4</Typography>
            </section>

            <section></section>
            </div>
    </>
);
