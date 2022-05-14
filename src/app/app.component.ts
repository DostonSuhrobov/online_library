import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, VERSION, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, filter, map, mergeMap, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  @ViewChild('inputText', {static: true}) inputbox: ElementRef;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

  }

}
