import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { product } from '../../model/product';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {

  allProducts: product[]=[]

  constructor(private http: HttpClient){}

  ngOnInit() {   
    this.getProductsDetails()
  }
//----------

  onProductFetch(){
    this.getProductsDetails();
  }

//----------Post Method -------------------
  onProductCreate(products: {pName: string, desc: string, price: string}) {
    console.log(products);
    const headers = new HttpHeaders({'myHeader': 'rohit'})
    this.http.post<{name: string}>('https://rohitfirstapi-default-rtdb.firebaseio.com/products.json', products, {headers: headers})
    .subscribe( (res)=>{
      console.log(res)
    } )
  }

  //-----------------------------------------> Get Method
  private getProductsDetails (){
    this.http.get <{[key: string]: product}>('https://rohitfirstapi-default-rtdb.firebaseio.com/products.json')
    .pipe(map((res)=> {
      const products = [];
      for(const key in res) {
        if (res.hasOwnProperty(key)){
          products.push({...res[key], id:key})
        }
        
      }
      return products;
    }))
     .subscribe( (products) => {
      console.log(products);
      this.allProducts = products
     })
  }

//------Delete From DB using HTTP---------

  onDeleteProduct(id: string){
    this.http.delete('https://rohitfirstapi-default-rtdb.firebaseio.com/products/'+id+ '.json')
    .subscribe()
  }


  onDeleteAllProducts(){
    this.http.delete('https://rohitfirstapi-default-rtdb.firebaseio.com/products.json')
    .subscribe()
  }
}

