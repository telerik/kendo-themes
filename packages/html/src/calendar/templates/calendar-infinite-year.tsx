import { CalendarCaptionCell, CalendarCell, CalendarInfinite, CalendarTableRow, CalendarTbody } from '../index';

export const CalendarInfiniteYear = ({ firstCaption = "2021", secondCaption = "2022", ...other }: any) => (
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
                        <CalendarCell text="Jan" today></CalendarCell>
                        <CalendarCell text="Feb"></CalendarCell>
                        <CalendarCell text="Mar"></CalendarCell>
                        <CalendarCell text="Apr"></CalendarCell>
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="May"></CalendarCell>
                        <CalendarCell text="Jun"></CalendarCell>
                        <CalendarCell text="Jul"></CalendarCell>
                        <CalendarCell text="Aug"></CalendarCell>
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="Sep"></CalendarCell>
                        <CalendarCell text="Oct"></CalendarCell>
                        <CalendarCell text="Nov"></CalendarCell>
                        <CalendarCell text="Dec"></CalendarCell>
                    </CalendarTableRow>
                </CalendarTbody>
                <CalendarTbody>
                    <CalendarTableRow>
                        <CalendarCaptionCell scope="col" colSpan={4} text={secondCaption} />
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="Jan"></CalendarCell>
                        <CalendarCell text="Feb"></CalendarCell>
                        <CalendarCell text="Mar"></CalendarCell>
                        <CalendarCell text="Apr"></CalendarCell>
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="May"></CalendarCell>
                        <CalendarCell text="Jun"></CalendarCell>
                        <CalendarCell text="Jul"></CalendarCell>
                        <CalendarCell text="Aug"></CalendarCell>
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="Sep"></CalendarCell>
                        <CalendarCell text="Oct"></CalendarCell>
                        <CalendarCell text="Nov"></CalendarCell>
                        <CalendarCell text="Dec"></CalendarCell>
                    </CalendarTableRow>
                </CalendarTbody>
            </>
        }{...other}>

    </CalendarInfinite>
);
