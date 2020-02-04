export class CartItemModel {
    constructor(
        public product: string,
        public quantity: number,
        public maxQuantity: number
    ) {
    }
}
