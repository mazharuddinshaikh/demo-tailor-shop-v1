import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiResponseUserHelp } from '../model/api-response-user-help';
import { UserHelpService } from '../service/user-help.service';
import { UserHelpDto } from '../model/user-help-dto';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'dts-home',
  templateUrl: './dts-home.component.html',
  styleUrls: ['./dts-home.component.css']
})
export class DtsHomeComponent implements OnInit {
  public userHelpDto: UserHelpDto;
  public userHelpList: UserHelpDto[];
  public userHelpLinkList: string[];
  public activeLinkIndex: number = 0;
  public contactUsForm = new FormGroup(
    {
      userName: new FormControl(''),
      email: new FormControl(''),
      comments: new FormControl(''),
      receivePromotion: new FormControl('')
    }
  );
  constructor(private userHelpService: UserHelpService) { }

  ngOnInit(): void {
    this.getUserHelpList();
  }

  public getUserHelpList(): void {

    console.log("Get user help");
    this.userHelpService.getUserHelp().subscribe((response) => {

      this.userHelpList = response.result;
      this.updateUserHelpLinks();
    })
  }
  public updateUserHelpLinks(): void {
    this.userHelpLinkList = this.userHelpList.map(userHelp => userHelp.title);
    this.getUserHelp(0);

  }

  public getUserHelp(helpIndex: number): void {
    this.activeLinkIndex = helpIndex;
    this.userHelpDto = this.userHelpList[helpIndex]
    // this.userHelpList.forEach(userHelp => {
    //   if (helpLink == userHelp.title) {
    //     this.userHelpDto = userHelp;
    //   }
    // })
  }
  public testMessage() {
    console.log("step clicked");
  }
  public contactUs() {
    let userName = this.contactUsForm.get('userName')?.value!;
    let email = this.contactUsForm.get('email')?.value!;
    let comments = this.contactUsForm.get('comments')?.value!;
    let receivePromotion = this.contactUsForm.get('receivePromotion')?.value!;
    console.log(userName + email + receivePromotion);
    this.userHelpService.contactUs(userName, email, comments, receivePromotion).subscribe(respons => {
      console.log(respons.body?.message);
    }, error => {
      console.log("Error occured " + error);
    }, () => {
      console.log("Request completed");
    })
  }

}
