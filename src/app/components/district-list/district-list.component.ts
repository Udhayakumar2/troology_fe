import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertPopUpComponent } from '../alert-pop-up/alert-pop-up.component';
import { StatePopUpComponent } from '../state-pop-up/state-pop-up.component';
import { StateServiceService } from '../state-service.service';

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.scss']
})
export class DistrictListComponent {
  districtList: any[] = [];
  districtColumns: string[] = [];
  tempData: any = []

  constructor(
    public dialog: MatDialog,
    public stateService: StateServiceService
  ) {
    this.districtColumns = ["S.No", "District Code", "State Name","District Name", "Actions"];
  }

  ngOnInit(): void {
    this.getDistrictList();
  }

  getDistrictList() {
    this.stateService.getDistrictList().subscribe((result: any) => {
      this.tempData = [];
      result.data.forEach((ele: any, index: any) => {
         this.tempData.push({'sno': index+1,
                              'district_code': ele.district_code,
                              'state_name':  ele.state_info && ele.state_info[0] && ele.state_info[0].state_name ? ele.state_info[0].state_name : '',
                              'district_name': ele.district_name,
                              'id': ele._id});
      })
      this.districtList = [...this.tempData];
    });
  }

  createDistrict() {
    const dialogRef = this.dialog.open(StatePopUpComponent, {
      data: { title: "Create New District",
              action: 'Add',
              module: 'District' },
      height: "fit-content",
      width: "400px",
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if(res){
        this.getDistrictList();
      }
    })
  }

  deleteDistrict(id: any) {
    const dialogRef = this.dialog.open(AlertPopUpComponent, {
      data: {message: 'Are you sure want to delete',
            id: id,
            module: 'District'},
      height: "fit-content",
      width: "400px"
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if(res){
        this.getDistrictList();
      }
    });
  }

  editDistrict(id: any) {
    this.stateService.getDistrictDetails(id).subscribe((result: any) => {
      if (result.statusCode === 200) {
        const dialogRef = this.dialog.open(StatePopUpComponent, {
          data: { title: "Edit District",
          action: 'Edit',
          module: 'District',
          state_id: result.data[0].state_id, 
          district_id: id,
          district_code: result.data[0].district_code,
          district_name: result.data[0].district_name
          },
          height: "fit-content",
          width: "400px",
        });

        dialogRef.afterClosed().subscribe((res: any) => {
          if(res){
            this.getDistrictList();
          }
        })
    
      }
    });
  }
}
