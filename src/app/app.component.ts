import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor(private router: Router) {}

	private sub: any;

	ngOnInit() {
		/**
		*	Router is not scrolling to top in all cases
		*	post navigation, this is a solution.
		*/
		this.sub = this.router.events
			.filter(event => event instanceof NavigationEnd)
			.subscribe(event => {
				document.body.scrollTop = 0;
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

}