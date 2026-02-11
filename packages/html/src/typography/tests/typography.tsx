import { TypographyCode } from '../../typography/typography-code.spec';
import { TypographyDisplay1 } from '../../typography/typography-display1.spec';
import { TypographyDisplay2 } from '../../typography/typography-display2.spec';
import { TypographyDisplay3 } from '../../typography/typography-display3.spec';
import { TypographyDisplay4 } from '../../typography/typography-display4.spec';
import { TypographyH1 } from '../../typography/typography-h1.spec';
import { TypographyH2 } from '../../typography/typography-h2.spec';
import { TypographyH3 } from '../../typography/typography-h3.spec';
import { TypographyH4 } from '../../typography/typography-h4.spec';
import { TypographyH5 } from '../../typography/typography-h5.spec';
import { TypographyH6 } from '../../typography/typography-h6.spec';
import { TypographyP } from '../../typography/typography-p.spec';
import { TypographyPre } from '../../typography/typography-pre.spec';
import { Button } from '../../button/button.spec';

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
