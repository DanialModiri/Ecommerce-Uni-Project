import { imageFomats } from "../../../../utils/images";

export const isExtentionValid = msg => v => imageFomats.includes(v) ? undefined : msg; 