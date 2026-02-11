import { Scheduler, KendoSchedulerProps } from '../scheduler.spec';
import { SchedulerToolbar } from '../scheduler-toolbar.spec';
import { SchedulerFlexAgenda } from '../templates/scheduler-flex-agenda';
import { SchedulerFlexDay } from '../templates/scheduler-flex-day';
import { SchedulerFlexMonth } from '../templates/scheduler-flex-month';
import { SchedulerFlexTimeline } from '../templates/scheduler-flex-timeline';
import { SchedulerFlexWeek } from '../templates/scheduler-flex-week';
import { Button } from '../../button/button.spec';

const options = Scheduler.options;
const states = Scheduler.states;
const defaults = {
  ...Scheduler.defaultOptions,
  variant: 'day',
};

const variants = [
    {
        name: 'day',
        title: 'Day View',
    },
    {
        name: 'week',
        title: 'Week View',
    },
    {
        name: 'month',
        title: 'Month View',
    },
    {
        name: 'timeline',
        title: 'Timeline View',
    },
    {
        name: 'agenda',
        title: 'Agenda View',
    }
];

const modifiers = [
    {
        name: 'footer',
        title: 'Footer',
    }
];

export const SchedulerDemo = (
    props: KendoSchedulerProps & { variant?: (typeof variants)[number]['name'] } & {
        modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
    }
) => {
    const { variant, modifiers: mods, ...other } = { ...defaults, ...props };

    const schedulerFooter = (
        <>
            <SchedulerToolbar footer>
                <Button icon="clock" className="k-scheduler-fullday">Show business hours</Button>
            </SchedulerToolbar>
        </>
    );

    let additionalProps: any = {
        footer: schedulerFooter
    };

    Object.keys(mods || {}).forEach((modifier) => {
        switch (modifier) {
            case 'footer': {
                additionalProps.footer = mods?.[modifier] ? schedulerFooter : undefined;
                break;
            }
        }
    });

    switch (variant) {
        case 'agenda':
            return (
                <SchedulerFlexAgenda style={{ height: "350px", width: "100%" }} {...other} {...additionalProps} />
            );
        case 'timeline':
            return (
                <SchedulerFlexTimeline style={{ height: "350px", width: "100%" }} {...other} {...additionalProps} />
            );
        case 'month':
            return (
                <SchedulerFlexMonth style={{ height: "350px", width: "100%" }} {...other} {...additionalProps} />
            );
        case 'week':
            return (
                <SchedulerFlexWeek style={{ height: "350px", width: "100%" }} {...other} {...additionalProps} />
            );
        case 'day':
        default:
            return (
                <SchedulerFlexDay style={{ height: "350px", width: "100%" }} {...other} {...additionalProps} />
            );
    }
}


SchedulerDemo.options = options;
SchedulerDemo.states = states;
SchedulerDemo.variants = variants;
SchedulerDemo.defaultOptions = defaults;
SchedulerDemo.modifiers = modifiers;

export default SchedulerDemo;

