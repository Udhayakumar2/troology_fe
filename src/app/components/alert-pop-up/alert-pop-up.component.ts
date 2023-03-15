import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StateServiceService } from '../state-service.service';

@Component({
  selector: 'app-alert-pop-up',
  templateUrl: './alert-pop-up.component.html',
  styleUrls: ['./alert-pop-up.component.scss']
})
export class AlertPopUpComponent implements OnInit{
  popUpMessage: any;
  constructor(public dialogRef: MatDialogRef<AlertPopUpComponent>,
    public stateService: StateServiceService,
    @Inject(MAT_DIALOG_DATA) public data: any){}

  ngOnInit(): void {
    this.popUpMessage = this.data.message;
  }

  deleteRecord(){
    if(this.data && this.data.module === 'State'){
      this.stateService.deleteState(this.data.id).subscribe((res: any) => {
        if(res && res.statusCode === 200){
          this.dialogRef.close(res);
        } else if(res && res.statusCode !== 200) {
          alert("Operation Failed : "+res.message);
          this.dialogRef.close(res);
        }
      })
    } else if(this.data && this.data.module === 'District'){
      this.stateService.deleteDistrict(this.data.id).subscribe((res: any) => {
        if(res && res.statusCode === 200){
          this.dialogRef.close(res);
        } else if(res && res.statusCode !== 200) {
          alert("Operation Failed : "+res.message);
          this.dialogRef.close(res);
        }
      })
    } else if(this.data && this.data.module === 'Block'){
      this.stateService.deleteBlock(this.data.id).subscribe((res: any) => {
        if(res && res.statusCode === 200){
          this.dialogRef.close(res);
        }else if(res && res.statusCode !== 200) {
          alert("Operation Failed : "+res.message);
          this.dialogRef.close(res);
        }
      })
    } else if(this.data && this.data.module === 'Village'){
      this.stateService.deleteVillage(this.data.id).subscribe((res: any) => {
        if(res && res.statusCode === 200){
          this.dialogRef.close(res);
        }
      })
    }
  }

  closePopUp(){
    this.dialogRef.close();
  }
}
