import type { Content } from "./Content";

export interface Song extends Content {
    icon: string
    composer: string
    work?: string
    html: any
    url: string
    youtubeEmbedUrl?: string
}