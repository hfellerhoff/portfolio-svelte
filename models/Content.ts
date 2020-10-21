export interface Content {
    slug: string
    title: string
    subtitle: string
    featured?: true
    tags?: string[]
    html: any
    date: string
    icon?: string
    image?: string
    hidden?: boolean
}