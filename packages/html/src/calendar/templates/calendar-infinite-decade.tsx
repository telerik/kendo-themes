import { CalendarCaptionCell, CalendarCell, CalendarInfinite, CalendarTableRow, CalendarTbody } from '../index';

export const CalendarInfiniteDecade = ({ firstCaption = "2020 - 2029", secondCaption = "2030 - 2039", ...other }: any) => (
    <CalendarInfinite calendarView="decade" showWeekdays={false} calendarTitleText="2020 - 2029"
        navigationItems={[
            '1970', '1980', '1990', '2000', '2010', '2020',
            '2030', '2040','2050', '2060', '2070', '2080', '2090'
        ]}
        navigationMarkerConfig={{ '2020': 'marker' }}
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
                        <CalendarCell text="2020" today></CalendarCell>
                        <CalendarCell text="2021"></CalendarCell>
                        <CalendarCell text="2022"></CalendarCell>
                        <CalendarCell text="2023"></CalendarCell>
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="2024"></CalendarCell>
                        <CalendarCell text="2025"></CalendarCell>
                        <CalendarCell text="2026"></CalendarCell>
                        <CalendarCell text="2027"></CalendarCell>
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="2028"></CalendarCell>
                        <CalendarCell text="2029"></CalendarCell>
                        <CalendarCell empty></CalendarCell>
                        <CalendarCell empty></CalendarCell>
                    </CalendarTableRow>
                </CalendarTbody>
                <CalendarTbody>
                    <CalendarTableRow>
                        <CalendarCaptionCell scope="col" colSpan={4} text={secondCaption} />
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="2030"></CalendarCell>
                        <CalendarCell text="2031"></CalendarCell>
                        <CalendarCell text="2032"></CalendarCell>
                        <CalendarCell text="2033"></CalendarCell>
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="2034"></CalendarCell>
                        <CalendarCell text="2035"></CalendarCell>
                        <CalendarCell text="2036"></CalendarCell>
                        <CalendarCell text="2037"></CalendarCell>
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="2038"></CalendarCell>
                        <CalendarCell text="2039"></CalendarCell>
                        <CalendarCell empty></CalendarCell>
                        <CalendarCell empty></CalendarCell>
                    </CalendarTableRow>
                </CalendarTbody>
            </>
        }{...other}>

    </CalendarInfinite>
);

export default CalendarInfiniteDecade;
