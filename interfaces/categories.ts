export interface ICategories {
    name?: string
    description?: string
    children?: ICategories
    image?: string
    seoTitle?: string
    seoKeyword?: string
    seoDescription?: string
    images: string[]
    slug: string
    createDateTime?:Date
}
