export class Delivery {
    constructor(
        public id: string,
        public imagePath: string,
        public local: string,
        public estimativa: number,
        public price: number,
        public restaurantId: string
    ) { }
} 