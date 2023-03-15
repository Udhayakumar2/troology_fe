import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertPopUpComponent } from '../alert-pop-up/alert-pop-up.component';
import { AddEditPopUpComponent } from '../add-edit-pop-up/add-edit-pop-up.component';
import { StateServiceService } from '../state-service.service';

@Component({
  selector: 'app-village-list',
  templateUrl: './village-list.component.html',
  styleUrls: ['./village-list.component.scss']
})
export class VillageListComponent {
  villageList: any[] = [];
  villageColumns: string[] = [];
  tempData: any = []

  constructor(
    public dialog: MatDialog,
    public stateService: StateServiceService
  ) {
    this.villageColumns = ["S.No", "Village Code","Village Name","Block Name", "State Name","District Name", "Actions"];
  }

  ngOnInit(): void {
    this.getVillageList();
  }

  /** Fetching all Village List */
  getVillageList() {
    this.stateService.getVillageList().subscribe((result: any) => {
      this.tempData = [];
      result.data.forEach((ele: any, index: any) => {
         this.tempData.push({'sno': index+1,
                              'village_code': ele.village_code,
                              'village_name': ele.village_name,
                              'state_name': ele.state_info && ele.state_info[0] && ele.state_info[0].state_name ? ele.state_info[0].state_name : '',
                              'district_name': ele.district_info && ele.district_info[0] && ele.district_info[0].district_name ? ele.district_info[0].district_name : '',
                              'block_name': ele.district_info && ele.district_info[0] && ele.district_info[0].district_name ? ele.district_info[0].district_name : '',
                              'id': ele._id});
      })
      this.villageList = [...this.tempData]
    });
  }

  createVillage() {
    const dialogRef = this.dialog.open(AddEditPopUpComponent, {
      data: { title: "Create New Village",
              action: 'Add',
              module: 'Village' },
      height: "fit-content",
      width: "400px",
    });
    dialogRef.afterClosed().subscribe((res: any) => {
      if(res){
        this.getVillageList();
      }
    })
  }

  deleteVillage(id: any) {
    const dialogRef = this.dialog.open(AlertPopUpComponent, {
      data: {message: 'Are you sure want to delete',
            id: id,
            module: 'Village'},
      height: "fit-content",
      width: "400px"
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if(res){
        this.getVillageList();
      }
    });

  }

  editVillage(id: any) {
    this.stateService.getVillageDetails(id).subscribe((result: any) => {
      if (result.statusCode === 200) {
        const dialogRef = this.dialog.open(AddEditPopUpComponent, {
          data: { title: "Edit Village",
          action: 'Edit',
          module: 'Village', 
          state_id: result.data[0].state_id, 
          district_id: result.data[0].district_id,
          block_id: result.data[0].block_id,
          village_code: result.data[0].village_code,
          village_id: result.data[0]._id,
          village_name: result.data[0].village_name
          },
          height: "fit-content",
          width: "400px",
        });
        dialogRef.afterClosed().subscribe((res: any) => {
          if(res){
            this.getVillageList();
          }
        })    
      }
    });
  }
}
