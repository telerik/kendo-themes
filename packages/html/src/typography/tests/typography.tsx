import { TypographyCode, TypographyDisplay1, TypographyDisplay2, TypographyDisplay3, TypographyDisplay4, TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyH6, TypographyP, TypographyPre } from '../../typography';
import { Button } from '../../button';

const styles = `
   #test-area {
        max-width: 1080px;
        gap: 10px;
   }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Headings</span>
            <span>Other Types</span>

            <section>
                <TypographyH1>Heading 1</TypographyH1>
                <TypographyH2>Heading 2</TypographyH2>
                <TypographyH3>Heading 3</TypographyH3>
                <TypographyH4>Heading 4</TypographyH4>
                <TypographyH5>Heading 5</TypographyH5>
                <TypographyH6>Heading 6</TypographyH6>
            </section>

            <section>
                <TypographyP>A paragraph of regular body text with <strong>bold</strong>, <em>italic</em>, and <u>underline</u>. Also, the <TypographyCode>code</TypographyCode> tag is available in typography.</TypographyP>

                <Button>Button</Button>

                <TypographyPre>
                    <TypographyCode>{`const handleChange = ({ target }) => {
    const { name, value } = target;
    const newData = Object.assign({}, data, { [name]: value });
    setData(newData);
}`}</TypographyCode>
                </TypographyPre>
            </section>

            <span>Displays</span>
            <span></span>

            <section>
                <TypographyDisplay1>Display 1</TypographyDisplay1>
                <TypographyDisplay2>Display 2</TypographyDisplay2>
                <TypographyDisplay3>Display 3</TypographyDisplay3>
                <TypographyDisplay4>Display 4</TypographyDisplay4>
            </section>

            <section></section>
        </div>
    </>
);
