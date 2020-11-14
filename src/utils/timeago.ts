import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en";
(TimeAgo as any).addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

export { timeAgo };
