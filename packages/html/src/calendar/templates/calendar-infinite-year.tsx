import { CalendarCaptionCell, CalendarCell, CalendarInfinite, CalendarTableRow, CalendarTbody } from '../index';

export const CalendarInfiniteYear = ({ firstCaption = "2021", secondCaption = "2022", activeCellId, ...other }: any) => (
    <CalendarInfinite calendarView="year" showWeekdays={false} calendarTitleText="2021"
        navigationItems={[
            '2016', '2017', '2018', '2019', '2020', '2021','2022',
            '2023', '2024','2025', '2026', '2027', '2028', '2029',
            '2030','2031', '2032', '2033', '2034', '2035', '2036',
            '2037','2038','2039','2040', '2041', '2042'
        ]}
        navigationMarkerConfig={{
            '2021': 'marker', '2030': 'marker', '2040': 'marker'
        }}
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
                        <CalendarCell text="Jan" today id={activeCellId} ariaLabel="January"></CalendarCell>
                        <CalendarCell text="Feb" ariaLabel="February"></CalendarCell>
                        <CalendarCell text="Mar" ariaLabel="March"></CalendarCell>
                        <CalendarCell text="Apr" ariaLabel="April"></CalendarCell>
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="May" ariaLabel="May"></CalendarCell>
                        <CalendarCell text="Jun" ariaLabel="June"></CalendarCell>
                        <CalendarCell text="Jul" ariaLabel="July"></CalendarCell>
                        <CalendarCell text="Aug" ariaLabel="August"></CalendarCell>
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="Sep" ariaLabel="September"></CalendarCell>
                        <CalendarCell text="Oct" ariaLabel="October"></CalendarCell>
                        <CalendarCell text="Nov" ariaLabel="November"></CalendarCell>
                        <CalendarCell text="Dec" ariaLabel="December"></CalendarCell>
                    </CalendarTableRow>
                </CalendarTbody>
                <CalendarTbody>
                    <CalendarTableRow>
                        <CalendarCaptionCell scope="col" colSpan={4} text={secondCaption} />
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="Jan" ariaLabel="January"></CalendarCell>
                        <CalendarCell text="Feb" ariaLabel="February"></CalendarCell>
                        <CalendarCell text="Mar" ariaLabel="March"></CalendarCell>
                        <CalendarCell text="Apr" ariaLabel="April"></CalendarCell>
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="May" ariaLabel="May"></CalendarCell>
                        <CalendarCell text="Jun" ariaLabel="June"></CalendarCell>
                        <CalendarCell text="Jul" ariaLabel="July"></CalendarCell>
                        <CalendarCell text="Aug" ariaLabel="August"></CalendarCell>
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="Sep" ariaLabel="September"></CalendarCell>
                        <CalendarCell text="Oct" ariaLabel="October"></CalendarCell>
                        <CalendarCell text="Nov" ariaLabel="November"></CalendarCell>
                        <CalendarCell text="Dec" ariaLabel="December"></CalendarCell>
                    </CalendarTableRow>
                </CalendarTbody>
            </>
        }{...other}>

    </CalendarInfinite>
);
