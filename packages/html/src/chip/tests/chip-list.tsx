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
                    <ChipNormal>First</ChipNormal>
                    <ChipNormal selected>Selected</ChipNormal>
                </ChipList>
            </section>
            <section className="k-rtl">
                <ChipList>
                    <ChipNormal>First</ChipNormal>
                    <ChipNormal selected>Selected</ChipNormal>
                </ChipList>
            </section>

            <section>
                <ChipList>
                    <ChipNormal fillMode="outline">First</ChipNormal>
                    <ChipNormal fillMode="outline" selected>Selected</ChipNormal>
                </ChipList>
            </section>
            <section className="k-rtl">
                <ChipList>
                    <ChipNormal fillMode="outline">First</ChipNormal>
                    <ChipNormal fillMode="outline" selected>Selected</ChipNormal>
                </ChipList>
            </section>
        </div>
    </>
);
