import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})


export class CommonService {

    constructor(){}
    addToCartItems:Array<any>=[];

    storeItems(items:any)
    {
this.addToCartItems.push(items);
    }
}