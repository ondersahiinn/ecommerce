export interface ICategories {
    name: string,
    description: string,
    image: string,
    since: Date,
    seoTitle: string,
    seoKeyword: string,
    seoDescription: string,
    createDateTime: Date,
    admin: boolean,
    _id: string,
    children: ICategories[],
}
