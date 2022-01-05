import { Component, OnInit } from "@angular/core";
import { Iproduct } from "./product";
import { ProductServices } from "./product.service";

@Component({
    selector: 'pm-product',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListCompont implements OnInit {
    pageTitle : string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    
    private _listFilter: string = '';
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        console.log('In setter:', value);
        this.filteredProducts = this.performFilter(value);
    }
    filteredProducts: Iproduct[] = [];

    products: Iproduct[] = [
        // {
        //     "productId": 2,
        //     "productName": "Garden Cart",
        //     "productCode": "gc-76",
        //     "releaseDate": "Mar 18,2021",
        //     "description": "15 gallon capacity",
        //     "price": 32.99,
        //     "starRating": 4.2,
        //     "imageUrl":"assets/images/garden_cart.png"
        // },
        // {
        //     "productId": 3,
        //     "productName": "Hammer",
        //     "productCode": "hr-53",
        //     "releaseDate": "Aug 18,2021",
        //     "description": "steel hammer",
        //     "price": 8.9,
        //     "starRating": 4.8,
        //     "imageUrl":"assets/images/hammer.png"
        // }
    ];

    constructor(private productService: ProductServices){}

    performFilter(filterBy: string): Iproduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: Iproduct) =>
           product.productName.toLocaleLowerCase().includes(filterBy));
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    }

}