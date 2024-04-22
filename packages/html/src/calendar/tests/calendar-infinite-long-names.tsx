import { CalendarInfiniteNormal } from '../index';

export default () => (
    <>
        <div id="test-area" className="k-d-grid">
            <section>
                <div>infinite calendar with long month names</div>
                <CalendarInfiniteNormal
                    navigationItems={
                        [ 'de nov.', 'de des.', '2018', 'de febr.', 'de març',
                            "d’abr.", 'de maig', 'de juny', 'de jul.', "d’ag.",
                            'de set.', "d’oct.", 'de nov.', 'de des.', '2019',
                            'de febr.', 'de març', "d’abr.", 'de maig', 'de juny',
                            'de jul.', "d’ag.", 'de set.', "d’oct.", 'de nov.',
                            'de des.', '2020', 'de febr.', 'de març', "d’abr."
                        ]}
                    calendarTitleText="d’abril 2018"
                    calendarWeekdays={[ 'DG.', 'DL.', 'DT.', 'DC.', 'DJ.', 'DV.', 'DS.' ]}
                    firstCaption="d’abril 2018"
                    secondCaption="de maig 2018"
                />
            </section>
        </div>
    </>
);
