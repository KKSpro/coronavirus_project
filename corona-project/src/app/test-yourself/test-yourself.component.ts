import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-yourself',
  templateUrl: './test-yourself.component.html',
  styleUrls: ['./test-yourself.component.css']
})
export class TestYourselfComponent implements OnInit {

  symptomnoa;
  traveledchk;
  constructor() { }

  ngOnInit(): void {
  }
  test()
  {
    alert("Hope you have filled details correctly..!")
  }

}
