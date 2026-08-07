import { page } from '../page.config';

const formatter = new Intl.DateTimeFormat(page.locale, page?.datetime);

export const formatDatetime = (date: Date) => formatter.format(new Date(date));
