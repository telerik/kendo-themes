import { Loader } from '../../loader';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span></span>
            <span className="col">Pulsing 2</span>
            <span className="col">Spinner 3</span>
            <span className="col">Spinner 4</span>


            <span>Small</span>
            <span>
                <Loader size={'small'} themeColor={'primary'} animation={'pulsing'} />
            </span>

            <span>
                <Loader size={'small'} themeColor={'primary'} animation={'infinite-spinner'} />
            </span>

            <span>
                <Loader size={'small'} themeColor={'primary'} animation={'converging-spinner'} />
            </span>

            <span>Medium</span>
            <span>
                <Loader size={'medium'} themeColor={'primary'} animation={'pulsing'} />
            </span>

            <span>
                <Loader size={'medium'} themeColor={'primary'} animation={'infinite-spinner'} />
            </span>

            <span>
                <Loader size={'medium'} themeColor={'primary'} animation={'converging-spinner'} />
            </span>

            <span>Large</span>
            <span>
                <Loader size={'large'} themeColor={'primary'} animation={'pulsing'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'primary'} animation={'infinite-spinner'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'primary'} animation={'converging-spinner'} />
            </span>
        </div>
    </>
);
