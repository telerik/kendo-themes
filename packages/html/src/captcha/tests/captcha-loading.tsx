import { Captcha } from '../../captcha';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>Captcha Loading</span>
            <section>
                <Captcha loading />
            </section>
        </div>
    </>
);
