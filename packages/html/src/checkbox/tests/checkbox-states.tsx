import { CheckboxNormal } from '../templates/checkbox-normal';
import { CheckboxChecked } from '../templates/checkbox-checked';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-5">

            <span></span>
            <span>Normal</span>
            <span>Hover</span>
            <span>Focus</span>
            <span>Disabled</span>

            <div>Unchecked</div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal />
                    Label
                </label>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal hover />
                    Label
                </label>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal focus />
                    Label
                </label>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal disabled />
                    Label
                </label>
            </div>

            <div>Checked</div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxChecked />
                    Label
                </label>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxChecked hover />
                    Label
                </label>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxChecked focus />
                    Label
                </label>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxChecked disabled />
                    Label
                </label>
            </div>

            <div>Indeterminate</div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal indeterminate />
                    Label
                </label>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal indeterminate hover />
                    Label
                </label>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal indeterminate focus />
                    Label
                </label>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal indeterminate disabled />
                    Label
                </label>
            </div>

            <div>Invalid</div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal invalid />
                    Label
                </label>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal invalid hover />
                    Label
                </label>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal invalid focus />
                    Label
                </label>
            </div>
            <div>
                <label className="k-checkbox-label">
                    <CheckboxNormal invalid disabled />
                    Label
                </label>
            </div>

        </div>
    </>
);
