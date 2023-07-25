import { Icon } from '../../icon';
import { ListGroupItem, ListGroupNormal } from '../../listgroup';


export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-4">
            <span className="col-4">LTR</span>

            <section>
                <ListGroupNormal>
                    <ListGroupItem text="Item"></ListGroupItem>
                    <ListGroupItem text="Link" href="#"></ListGroupItem>
                    <ListGroupItem text="Pseudo link" pseudo></ListGroupItem>
                </ListGroupNormal>
            </section>

            <section>
                <ListGroupNormal>
                    <ListGroupItem>
                        <a href="#" className="k-link">
                            Link
                            <span className="k-select"><Icon icon="chevron-right" /></span>
                        </a>
                    </ListGroupItem>
                    <ListGroupItem className="k-listgroup-item-segmented">
                        <>
                            <span className="k-link">Pseudo link</span>
                            <span className="k-select"><Icon icon="chevron-right" /></span>
                        </>
                    </ListGroupItem>
                </ListGroupNormal>
            </section>

            <hr className="k-hr col-4" />

            <section className="col-2">
                <ListGroupNormal>
                    <ListGroupItem>
                        <span className="k-listgroup-form-row">
                            <span className="k-listgroup-form-field-label">Select</span>
                            <span className="k-listgroup-form-field-wrapper">
                                <select></select>
                            </span>
                        </span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <span className="k-listgroup-form-row">
                            <span className="k-listgroup-form-field-label">Text</span>
                            <span className="k-listgroup-form-field-wrapper">
                                <input type="text" />
                            </span>
                        </span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <span className="k-listgroup-form-row">
                            <span className="k-listgroup-form-field-label">Password</span>
                            <span className="k-listgroup-form-field-wrapper">
                                <input type="password" />
                            </span>
                        </span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <span className="k-listgroup-form-row">
                            <span className="k-listgroup-form-field-label">Date</span>
                            <span className="k-listgroup-form-field-wrapper">
                                <input type="date" />
                            </span>
                        </span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <span className="k-listgroup-form-row">
                            <span className="k-listgroup-form-field-label">Time</span>
                            <span className="k-listgroup-form-field-wrapper">
                                <input type="time" />
                            </span>
                        </span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <span className="k-listgroup-form-row">
                            <span className="k-listgroup-form-field-label">Number</span>
                            <span className="k-listgroup-form-field-wrapper">
                                <input type="number" />
                            </span>
                        </span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <span className="k-listgroup-form-row">
                            <span className="k-listgroup-form-field-label">Radio</span>
                            <span className="k-listgroup-form-field-wrapper">
                                <input type="radio" />
                            </span>
                        </span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <span className="k-listgroup-form-row">
                            <span className="k-listgroup-form-field-label">Checkbox</span>
                            <span className="k-listgroup-form-field-wrapper">
                                <input type="checkbox" />
                            </span>
                        </span>
                    </ListGroupItem>
                </ListGroupNormal>
            </section>
        </div>
    </>
);
