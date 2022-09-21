import { format, differenceInMinutes } from "date-fns";

const StandardDateTimeFormat = "M/dd/yyyy";
const getTimePastIfLessThanDay = (compTime: Date | null): string => {
    if (!compTime) return "";

    const now = new Date();
    const diffInMinutes = differenceInMinutes(now, new Date(compTime));

    if (diffInMinutes > 60) {
        if (diffInMinutes > 24 * 60) {
            return format(new Date(compTime), StandardDateTimeFormat)
        }
        return Math.round(diffInMinutes / 60) + "h ago";
    }
    return Math.round(diffInMinutes) + "m ago";
};

export { getTimePastIfLessThanDay };
