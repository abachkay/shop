export class ProductModel {
  constructor(
    public name: string,
    public description: string,
    public price: number,
    public quantity: number,
    public dateModified: Date,
    public category: string
  ) {
  }
}
