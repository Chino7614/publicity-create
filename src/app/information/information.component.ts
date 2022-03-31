import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  information = {
    url1: '',
    url2: '',
    url3: '',
    image: '',
    description: ''
  }

  constructor(private route: ActivatedRoute, private readonly router: Router) {
    this.route.queryParams.subscribe((res: any) => {
      this.information = res;
    });
  }

  ngOnInit(): void {
  }
}
