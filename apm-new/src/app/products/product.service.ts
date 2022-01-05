import { Injectable } from "@angular/core";
import { Iproduct } from "./product";

@Injectable({
    providedIn: 'root'
})
export class ProductServices {
    getProducts(): Iproduct[] {
        return[
            {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "gc-76",
                "releaseDate": "Mar 18,2021",
                "description": "15 gallon capacity",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl":"assets/images/garden_cart.png"
            },
            {
                "productId": 3,
                "productName": "Hammer",
                "productCode": "hr-53",
                "releaseDate": "Aug 18,2021",
                "description": "steel hammer",
                "price": 8.9,
                "starRating": 4.8,
                "imageUrl":"assets/images/hammer.png"
            }
        ]
    }
}