import { CalendarCaptionCell, CalendarCell, CalendarInfinite, CalendarTableRow, CalendarTbody } from '../index';

export const CalendarInfiniteCentury = ({ firstCaption = "2000 - 2099", ...other }: any) => (
    <CalendarInfinite calendarView="century" showWeekdays={false} calendarHeaderText="2000 - 2099"
        navigationItems={[ '1900', '2000' ]}
        navigationMarkerConfig={{ '2000': 'marker' }}
        children={
            <>
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                </colgroup>
                <CalendarTbody>
                    <CalendarTableRow>
                        <CalendarCaptionCell scope="col" colSpan={4} text={firstCaption} />
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="1900 - 1999"></CalendarCell>
                        <CalendarCell text="2000 - 2009"></CalendarCell>
                        <CalendarCell text="2010 - 2019"></CalendarCell>
                        <CalendarCell text="2020 - 2029"></CalendarCell>
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="2030 - 2039"></CalendarCell>
                        <CalendarCell text="2040 - 2049"></CalendarCell>
                        <CalendarCell text="2050 - 2059"></CalendarCell>
                        <CalendarCell text="2060 - 2069"></CalendarCell>
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="2070 - 2079"></CalendarCell>
                        <CalendarCell text="2080 - 2089"></CalendarCell>
                        <CalendarCell text="2090 - 2099"></CalendarCell>
                        <CalendarCell empty></CalendarCell>
                    </CalendarTableRow>
                </CalendarTbody>
            </>
        }{...other}>

    </CalendarInfinite>
);
