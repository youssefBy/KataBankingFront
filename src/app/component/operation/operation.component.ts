import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit{

  operationType: any;


  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.operationType = this.route.snapshot.paramMap.get('type');
    console.log(this.operationType);
  }


}

enum OperationTypes {
  deposit,
  withdrawal
};
