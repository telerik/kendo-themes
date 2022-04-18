## Calendar

```html
<!-- default rendering -->
<div class="k-calendar">
    <div class="k-calendar-header">
        <button type="button" value="" class="k-button k-button-md k-button-flat k-button-flat-base k-rounded-md k-calendar-title">
            <span class="k-button-text">October 2021</span>
        </button>
        <span class="k-spacer"></span>
        <span class="k-calendar-nav">
            <button type="button" class="k-button k-button-md k-button-flat k-button-flat-base k-rounded-md k-icon-button k-nav-prev">
                <span class="k-button-icon k-icon k-i-arrow-chevron-left"></span>
            </button>
            <span class="k-nav-today">TODAY</span>
            <button type="button" class="k-button k-button-md k-button-flat k-button-flat-base k-rounded-md k-icon-button k-nav-next">
                <span class="k-button-icon k-icon k-i-arrow-chevron-right"></span>
            </button>
        </span>
    </div>

    <!-- month view -->
    <div class="k-calendar-view k-hstack k-align-items-start k-justify-content-center k-calendar-monthview">
        <table class="k-calendar-table">
            <thead class="k-calendar-thead">
                <tr class="k-calendar-tr">
                    <th class="k-calendar-th">Su</th>
                    ...
                </tr>
            </thead>
            <tbody class="k-calendar-tbody">
                <tr class="k-calendar-tr">
                    <td class="k-calendar-td k-other-month">&nbsp;</td>
                    <td class="k-calendar-td">
                        <span class="k-link">1</span>
                    </td>
                    ...
                </tr>
                ...
            </tbody>
        </table>
    </div>

    <!-- year view -->
    <div class="k-calendar-view k-hstack k-align-items-start k-justify-content-center k-calendar-yearview">
        <table class="k-calendar-table">
            <tbody class="k-calendar-tbody">
                <tr class="k-calendar-tr">
                    <td class="k-calendar-td">Jan</td>
                    ...
                </tr>
                ...
            </tbody>
        </table>
    </div>

    <!-- decade view -->
    <div class="k-calendar-view k-hstack k-align-items-start k-justify-content-center k-calendar-decadehview">
        <table class="k-calendar-table">
            <tbody class="k-calendar-tbody">
                <tr class="k-calendar-tr">
                    <td class="k-out-of-range k-calendar-td"></td>
                    <td class="k-calendar-td">
                        <span class="k-link">2020</span>
                    </td>
                    ...
                </tr>
                ...
            </tbody>
        </table>
    </div>

    <!-- century view -->
    <div class="k-calendar-view k-hstack k-align-items-start k-justify-content-center k-calendar-centuryview">
        <table class="k-calendar-table">
            <tbody class="k-calendar-tbody">
                <tr class="k-calendar-tr">
                    <td class="k-calendar-td">
                        <span class="k-link">1990 - 1999</span>
                    </td>
                    ...
                </tr>
                ...
            </tbody>
        </table>
    </div>

    <div class="k-calendar-footer">
        <a href="#" class="k-link k-nav-today">Monday, March 21, 2022</a>
    </div>
</div>


<!-- canonical rendering -->
<div class="
    k-calendar
    {showWeek && 'k-week-number'}
">

     <div class="k-calendar-header">
        <button type="button" value="" class="k-button k-button-md k-button-flat k-button-flat-base k-rounded-md k-calendar-title">
            <span class="k-button-text">...</span>
        </button>
        <span class="k-spacer"></span>
        <span class="k-calendar-nav">
            <button type="button" class="k-button k-button-md k-button-flat k-button-flat-base k-rounded-md k-icon-button k-nav-prev">
                <span class="k-button-icon k-icon k-i-arrow-chevron-left"></span>
            </button>
            {!showCalendarFooter && <span class="k-nav-today">...</span> }
            <button type="button" class="k-button k-button-md k-button-flat k-button-flat-base k-rounded-md k-icon-button k-nav-next">
                <span class="k-button-icon k-icon k-i-arrow-chevron-right"></span>
            </button>
        </span>
    </div>

    <div class="k-calendar-view
                k-calendar-{calendarView}view
                k-align-items-start
                k-justify-content-center
                {verticalCalendar ? 'k-vstack' : 'k-hstack' }
            ">
        <table class="k-calendar-table">
            {showCalendarCaption && <caption class="k-calendar-caption">...</caption>}

            {calendarView === 'month' && <thead class="k-calendar-thead">
                    <tr class="k-calendar-tr">
                        {showWeek && <th class="k-calendar-th">&nbsp;</th>}
                        <th class="k-calendar-th">...</th>
                        ...
                    </tr>
                </thead>
            }
            <tbody class="k-calendar-tbody">
                <tr class="k-calendar-tr">
                    {showWeek && <td class="k-calendar-td k-alt">...</td>}
                    {otherMonth && showOtherMonth <td class="k-calendar-td k-other-month"><span class="k-link">...</span></td> }
                    {otherMonth && !showOtherMonth <td class="k-calendar-td k-other-month">&nbsp;</td> }
                    <td class="k-calendar-td
                                {hover && 'k-hover'}
                                {focus && 'k-focus'}
                                {selected && 'k-selected'}
                                {disabled && 'k-disabled'}
                                {today && 'k-today'}
                                {weekend && 'k-weekend'}
                                {weekCell && 'k-alt'}
                            ">
                        <span class="k-link">...</span>
                    </td>
                    ...
                </tr>
                ...
            </tbody>
        </table>
    </div>
    {showCalendarFooter && <div class="k-calendar-footer"><a href="#" class="k-link k-nav-today">...</a></div>}
</div>
```
