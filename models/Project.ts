import type { Content } from "./Content";

export interface Project extends Content {
    subtitle: string
    url?: string
    source?: string
}