import { Captcha, CaptchaNormal } from '../../captcha';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            {[ "normal", ...Captcha.states ].map((state) => (
                <section>
                    <span>Captcha {state}</span>
                    <CaptchaNormal { ...{ [state]: true }} />
                </section>
            ))}
        </div>
    </>
);
