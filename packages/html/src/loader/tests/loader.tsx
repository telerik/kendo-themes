import { Loader } from '../loader.spec';
import { LoaderConverging } from '../templates/loader-converging';
import { LoaderInfinite } from '../templates/loader-infinite';
import { LoaderNormal } from '../templates/loader-normal';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span></span>
            <span className="col">Pulsing 2</span>
            <span className="col">Spinner 3</span>
            <span className="col">Spinner 4</span>

            {Loader.options.size.map((size) => (
                <>
                    <span>{`${size}`}</span>
                    <span>
                        <LoaderNormal size={size} />
                    </span>

                    <span>
                        <LoaderInfinite size={size} />
                    </span>

                    <span>
                        <LoaderConverging size={size} />
                    </span>
                </>

            ))}
        </div>
    </>
);
