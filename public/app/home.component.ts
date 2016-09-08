import {Component} from 'angular2/core'
import {RouteParams} from 'angular2/router' 
import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {Headers, RequestOptions} from 'angular2/http'
import 'rxjs/Rx';

@Component({ 
	selector: 'home', 
	templateUrl: `/app/home.component.html`, 
	styleUrls: ['app/home.component.css'],
}) 


export class HomeComponent { 
	message: string; 
	m:string = '';
	str:string = '';
	calcs: Array<any> = [];

	constructor( public http: Http){}

	giveExpToServer(m){
 		let body = JSON.stringify({"value": m});
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers});
 
    return this.http.post('http://localhost:3000/return', body,options) 
    .map(res => res.json());
  }

	postDataToServer(){
		this.giveExpToServer(this.m)
		.subscribe(
      data => this.message = data.some,
      err => console.log("Error HTTP Post Service")
    ); 
  }
  
	takeExp(value:string){
		this.m = value;
	}

	addCalcs(m:string, message:string) {
		this.calcs.push(
			{exp:m, answ:message});
    if (m == 'cls'){
    	this.calcs = [];
    }
  }
}
