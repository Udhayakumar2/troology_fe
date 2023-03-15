import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StatePopUpComponent } from '../state-pop-up/state-pop-up.component';
import { AlertPopUpComponent } from '../alert-pop-up/alert-pop-up.component';
import { StateServiceService } from '../state-service.service';

@Component({
  selector: "app-state-list",
  templateUrl: "./state-list.component.html",
  styleUrls: ["./state-list.component.scss"],
})
export class StateListComponent implements OnInit {
  stateList: any[] = [];
  stateColumns: string[] = [];
  tempData: any = []

  constructor(
    public dialog: MatDialog,
    public stateService: StateServiceService,
    public changeDetectorRefs: ChangeDetectorRef,
  ) {
    this.stateColumns = ["S.No", "State Code", "State Name", "Actions"];
  }

  ngOnInit(): void {
    this.getStates();
  }

  getStates() {
    this.stateService.getStateList().subscribe((result: any) => {
      this.tempData = [];
      result.data.forEach((ele: any, index: any) => {
         this.tempData.push({'sno': index+1,
                              'state_code': ele.state_code,
                               'state_name': ele.state_name,
                              'id': ele._id});
      })
      this.stateList = [...this.tempData];
    });
  }

  createState() {
    const dialogRef = this.dialog.open(StatePopUpComponent, {
      data: { title: "Create New State",
              action: 'Add',
              module: 'State' },
      height: "fit-content",
      width: "400px",
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if(res){
        this.getStates();
      }
    });

  }

  deleteState(id: any) {
    const dialogRef = this.dialog.open(AlertPopUpComponent, {
      data: {message: 'Are you sure want to delete',
            id: id,
            module: 'State'},
      height: "fit-content",
      width: "400px"
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if(res){
        this.getStates();
      }
    });
  }

  editState(id: any) {
    this.stateService.getDetailsById(id).subscribe((result) => {
      if (result.statusCode === 200) {
        const dialogRef = this.dialog.open(StatePopUpComponent, {
          data: { title: "Edit State",
          action: 'Edit',
          module: 'State', 
          stateId: id,
          state_code: result.data[0].state_code,
          state_name: result.data[0].state_name
          },
          height: "fit-content",
          width: "400px",
        });

        dialogRef.afterClosed().subscribe((res: any) => {
          if(res){
            this.getStates();
          }
        })
      }
    });
  }
}
