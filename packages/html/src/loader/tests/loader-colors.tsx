import { Loader, LoaderConverging, LoaderInfinite, LoaderNormal } from '..';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span></span>
            <span className="col">Pulsing 2</span>
            <span className="col">Spinner 3</span>
            <span className="col">Spinner 4</span>

            {Loader.options.themeColor.map((themeColor) => (
                <>
                    <span>{`${themeColor}`}</span>

                    <span>
                        <LoaderNormal size={'large'} themeColor={themeColor} />
                    </span>

                    <span>
                        <LoaderInfinite size={'large'} themeColor={themeColor} />
                    </span>

                    <span>
                        <LoaderConverging size={'large'} themeColor={themeColor} />
                    </span>
                </>

            ))}

        </div>
    </>
);
