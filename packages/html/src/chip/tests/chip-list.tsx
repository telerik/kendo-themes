import { ChipList } from '../../chip';
import { ChipNormal } from '../templates/chip-normal';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-4">
            <span>Solid chip List</span>
            <span>Solid chip List (rtl)</span>
            <span>Outline chip list</span>
            <span>Outline chip list (rtl)</span>

            <section>
                <ChipList>
                    <ChipNormal text="First" />
                    <ChipNormal text="Selected" selected />
                </ChipList>
            </section>
            <section className="k-rtl">
                <ChipList>
                    <ChipNormal text="First" />
                    <ChipNormal text="Selected" selected />
                </ChipList>
            </section>

            <section>
                <ChipList>
                    <ChipNormal fillMode="outline" text="First" />
                    <ChipNormal fillMode="outline" text="Selected" selected />
                </ChipList>
            </section>
            <section className="k-rtl">
                <ChipList>
                    <ChipNormal fillMode="outline" text="First" />
                    <ChipNormal fillMode="outline" text="Selected" selected />
                </ChipList>
            </section>
        </div>
    </>
);
