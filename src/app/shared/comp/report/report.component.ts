import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { timer } from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  trackingLink:string;
  report: boolean = false;
  qustionNumber:number = 0;
  result:any;
  timer:number = 7;

  constructor(private _location:Location,private _router:Router,private _activatedRoute:ActivatedRoute) {}

  OpenReport() {
    console.log('Report is Opening....');
    this.report = true;
    console.log('Reseting the qustion number....');
    this.qustionNumber = 0;
    this.GenrallIssuses = [];
    this.ConnectionType = "";
    this.DeviceType = "";
  }

  GenrallIssuses:any = [];
  ConnectionType:string = "";
  DeviceType:string = "";
  WindowSize: number = window.innerWidth;

  //to convert all the elements inside the array to lowercase
  toLowerCase(value:any){
    return value.map(elem => elem.toLowerCase())
  }

  search(value:string,list:any,type?:string){
    if(type === 'ConnectionType'){
      // console.log('this is a string answer', this.ConnectionType);
      if(this.ConnectionType === value){
        return true
      } 
      else{
        return false
      } 
    }
    if(type === 'DeviceType'){
      // console.log('this is a string answer', this.DeviceType);
      if(this.DeviceType === value){
        return true
      } 
      else{
        return false
      } 
    }
    if(type === 'GenrallIssuses'){
      console.log('this is an array of answers')
      // console.log(list.includes(value))
      return list.includes(value); 
    }
  }
  
  //adding issuese
  AddIssuses(issuse:string,type:string){
    if(type === "GenrallIssuses"){
      //checking if the value do exist
      if(this.search(issuse, this.GenrallIssuses, 'GenrallIssuses') === true){
        //delete the valuse if it already exist
        this.GenrallIssuses.splice(this.GenrallIssuses.indexOf(issuse),1);
      }else{
        //add the valuse if it wasnt existing
        this.GenrallIssuses.push(issuse);
        //converting the data to lowercase
        this.GenrallIssuses = this.toLowerCase(this.GenrallIssuses);
      }  
    }
    if(type === "ConnectionType"){
      //checking if the value do exist
      if(this.search(issuse, this.ConnectionType, 'ConnectionType') === true){
        //delete the valuse if it already exist
        this.ConnectionType = "";
      }else{
        //add the valuse if it wasnt existing
        this.ConnectionType = issuse;
        //converting the data to lowercase
        // this.ConnectionType = this.toLowerCase(this.ConnectionType);
      }  
    }
    if(type === "DeviceType"){
      //checking if the value do exist
      if(this.search(issuse, this.DeviceType, 'DeviceType') === true){
        //delete the valuse if it already exist
        this.DeviceType = "";
      }else{
        //add the valuse if it wasnt existing
        this.DeviceType = issuse;
        //converting the data to lowercase
        // this.DeviceType = this.toLowerCase(this.DeviceType);
      }  
    }
  }

  nextqustion(){
    console.log('am in qustion',this.qustionNumber)

    if(this.qustionNumber == 0 && this.GenrallIssuses == "" || this.GenrallIssuses == []){
      alert('You must answer that qustion');
    }else if(this.qustionNumber == 1 && this.ConnectionType == ""){
      alert('We need to know your connection type to solve it');
    }else if(this.qustionNumber == 2 && this.DeviceType == ""){
      alert('We need to know your device to solve it');
    }else{
      this.qustionNumber = this.qustionNumber + 1;    
    }
    
    if(this.qustionNumber >= 3){
     console.log('connectiontype',this.ConnectionType,
     'DeviceType', this.DeviceType,
     'GenrallIssuses', this.GenrallIssuses,
     'window-size', this.WindowSize);
      
     console.log('Making the report result...')
     this.result = `connection type ${this.ConnectionType} Device type ${this.DeviceType} WindowSize ${this.WindowSize} isses ${this.GenrallIssuses}`
     this.result = this.result.toLowerCase()
     //for spaces
    //  this.result = this.result.replace(/ /g,'-')
     //for ,
    //  this.result = this.result.replace(/[,]/g,'-');
     //for any --
    //  this.result = this.result.replace(/[^\w-]+/g,'')
     //lets make it a url
    //  this.result = this.result.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g,'%20');
      console.log(this.result);
      
      console.log('Recreating the new url for tracking...')
      const url = this._router.createUrlTree([],{relativeTo: this._activatedRoute, queryParams: {utm_source: 'report', utm_medium: 'MovieReport', utm_campaign: 'report', utm_content: this.result}}).toString();
      this._location.go(url);
      
     
      var counter = setInterval(()=>{
        if(this.timer == 0){
          clearInterval(counter);
          console.log('Report Is Sent');
          this._router.navigate(['/']);
        }else{
          this.timer = this.timer - 1;
          console.log(this.timer);
        }
      },1000);

    }
  }

  ngOnInit(){}

  qustions:any = [
    {
      "q": "why did you report this content?",
      "number": 0,
      "type":"GenrallIssuses",
      "answers":[
        {
          "string": "I can't download it",
          "value": "i cant download it"
        },
        {
          "string": "it’s not working",
          "value": "its not working"
        },
        {
          "string": "it’s not loading",
          "value": "its not loading"
        },
        {
          "string": "Voice not working",
          "value": "voice not working"
        },
        {
          "string": "Servers are not working",
          "value": "servers are not working"
        },
        {
          "string": "the player is not working right",
          "value": "the player is not working right"
        },
        {
          "string": "there is a bug in this page",
          "value": "there is a bug in this page"
        },
        {
          "string": "the info is not right",
          "value": "the info is not right"
        },
        {
          "string": "trailer is not working",
          "value": "trailer is not working"
        },
        {
          "string": "Other",
          "value": "other"
        }
      ]
    },
    {
      "q": "what is your internet connection type?",
      "number": 1,
      "type":"ConnectionType",
      "answers":[
        {
          "string": "DSL (internet home cable)",
          "value": "DSL"
        },
        {
          "string": "Wifi",
          "value": "wifi"
        },
        {
          "string": "Mobile data 3G~4G",
          "value": "Mobile data"
        },
        {
          "string": "Other",
          "value": "other"
        }
      ]
    },
    {
      "q": "what is your device type?",
      "number": 2,
      "type":"DeviceType",
      "answers":[
        {
          "string": "Iphone phone",
          "value": "iphone phone"
        },
        {
          "string": "Android phone",
          "value": "android phone"
        },
        {
          "string": "Laptop",
          "value": "laptop"
        },
        {
          "string": "Pc",
          "value": "pc"
        },
        {
          "string": "TV",
          "value": "tv"
        },
        {
          "string": "Other",
          "value": "other"
        }
      ]
    }
  ]


}
