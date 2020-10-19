export interface Song {
    slug: string
    icon: string
    title: string
    composer: string
    work?: string
    featured?: true
    tags?: string[]
    html: any
    url: string
    youtubeEmbedUrl?: string
    date: string
}