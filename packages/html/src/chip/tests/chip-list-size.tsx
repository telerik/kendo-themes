import { Chip } from '../../chip/chip.spec';
import { ChipList } from '../../chip/chip-list.spec';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            {Chip.options.size.map((size) => (
                <>
                    <span>{`${size}`}</span>
                    <section>
                        <ChipList size={size}>
                            <Chip text="Chip Text" size={size}></Chip>
                            <Chip text="Chip Text" size={size}></Chip>
                            <Chip text="Chip Text" size={size}></Chip>
                        </ChipList>
                    </section>
                </>
            ))}
        </div>
    </>
);
