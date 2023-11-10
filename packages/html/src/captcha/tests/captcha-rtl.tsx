import { Captcha, CaptchaNormal } from '..';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2 k-rtl">

            {[ "normal", ...Captcha.states ].map((state) => (
                <section>
                    <span>Captcha {state}</span>
                    <CaptchaNormal { ...{ [state]: true }} />
                </section>
            ))}
        </div>
    </>
);
