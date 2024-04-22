import { CalendarCaptionCell, CalendarCell, CalendarInfinite, CalendarTableRow, CalendarTbody } from '../index';

export const CalendarInfiniteNormal = ({ firstCaption = "January 2021", secondCaption = "February 2021", ...other }: any) => (
    <CalendarInfinite
        calendarTitleText="January 2021"
        children={
            <>
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                </colgroup>
                <CalendarTbody>
                    <CalendarTableRow>
                        <CalendarCaptionCell scope="col" colSpan={7} text={firstCaption}></CalendarCaptionCell>
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell empty></CalendarCell>
                        <CalendarCell empty></CalendarCell>
                        <CalendarCell empty></CalendarCell>
                        <CalendarCell empty></CalendarCell>
                        <CalendarCell empty></CalendarCell>
                        <CalendarCell text="1"></CalendarCell>
                        <CalendarCell text="2" weekend></CalendarCell>
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="3" weekend></CalendarCell>
                        <CalendarCell text="4"></CalendarCell>
                        <CalendarCell text="5"></CalendarCell>
                        <CalendarCell text="6"></CalendarCell>
                        <CalendarCell text="7"></CalendarCell>
                        <CalendarCell text="8"></CalendarCell>
                        <CalendarCell text="9" weekend></CalendarCell>
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="10" weekend></CalendarCell>
                        <CalendarCell text="11"></CalendarCell>
                        <CalendarCell text="12"></CalendarCell>
                        <CalendarCell text="13"></CalendarCell>
                        <CalendarCell text="14"></CalendarCell>
                        <CalendarCell text="15"></CalendarCell>
                        <CalendarCell text="16" weekend></CalendarCell>
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="17" weekend></CalendarCell>
                        <CalendarCell text="18"></CalendarCell>
                        <CalendarCell text="19"></CalendarCell>
                        <CalendarCell text="20"></CalendarCell>
                        <CalendarCell text="21"></CalendarCell>
                        <CalendarCell text="22"></CalendarCell>
                        <CalendarCell text="23" weekend></CalendarCell>
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="24" weekend></CalendarCell>
                        <CalendarCell text="25"></CalendarCell>
                        <CalendarCell text="26"></CalendarCell>
                        <CalendarCell text="27"></CalendarCell>
                        <CalendarCell text="28"></CalendarCell>
                        <CalendarCell text="29"></CalendarCell>
                        <CalendarCell text="30" weekend></CalendarCell>
                    </CalendarTableRow>
                    <CalendarTableRow>
                        <CalendarCell text="31" weekend></CalendarCell>
                        <CalendarCell empty></CalendarCell>
                        <CalendarCell empty></CalendarCell>
                        <CalendarCell empty></CalendarCell>
                        <CalendarCell empty></CalendarCell>
                        <CalendarCell empty></CalendarCell>
                        <CalendarCell empty></CalendarCell>
                    </CalendarTableRow>
                </CalendarTbody>
                <CalendarTbody>
                    <CalendarTableRow>
                        <CalendarCaptionCell scope="col" colSpan={7} text={secondCaption}></CalendarCaptionCell>
                    </CalendarTableRow>
                </CalendarTbody>
            </>
        }
        {...other}>

    </CalendarInfinite>
);
