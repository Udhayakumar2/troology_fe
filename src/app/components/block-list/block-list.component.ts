import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertPopUpComponent } from '../alert-pop-up/alert-pop-up.component';
import { AddEditPopUpComponent } from '../add-edit-pop-up/add-edit-pop-up.component';
import { StateServiceService } from '../state-service.service';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.scss']
})
export class BlockListComponent {
  blockList: any[] = [];
  blockColumns: string[] = [];
  tempData: any = []

  constructor(
    public dialog: MatDialog,
    public stateService: StateServiceService
  ) {
    this.blockColumns = ["S.No", "Block Code", "State Name","District Name", 'Block Name',"Actions"];
  }

  ngOnInit(): void {
    this.getBlockList();
  }

  /** Retrieving all blocksList */
  getBlockList() {
    this.stateService.getBlockList().subscribe((result: any) => {
      this.tempData = [];
      result.data.forEach((ele: any, index: any) => {
         this.tempData.push({'sno': index+1,
                              'block_code': ele.block_code,
                              'block_name': ele.block_name,
                              'state_name': ele.state_info && ele.state_info[0] && ele.state_info[0].state_name ? ele.state_info[0].state_name : '',
                              'district_name': ele.district_info && ele.district_info[0] && ele.district_info[0].district_name ? ele.district_info[0].district_name : '',
                              'id': ele._id});
      })
      this.blockList = [...this.tempData];
    });
  }

  /** CRUD operations on blocks using pop-up */
  createBlock() {
    const dialogRef = this.dialog.open(AddEditPopUpComponent, {
      data: { title: "Create New Block",
              action: 'Add',
              module: 'Block' },
      height: "fit-content",
      width: "400px",
    });
    dialogRef.afterClosed().subscribe((res: any) => {
      if(res){
        this.getBlockList();
      }
    })

  }

  deleteBlock(id: any) {
    const dialogRef = this.dialog.open(AlertPopUpComponent, {
      data: {message: 'Are you sure want to delete',
            id: id,
            module: 'Block'},
      height: "fit-content",
      width: "400px"
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      if(res){
        this.getBlockList();
      }
    });
  }

  editBlock(id: any) {
    this.stateService.getBlockDetails(id).subscribe((result: any) => {
      if (result.statusCode === 200) {
        const dialogRef = this.dialog.open(AddEditPopUpComponent, {
          data: { title: "Edit Block",
          action: 'Edit',
          module: 'Block', 
          state_id: result.data[0].state_id, 
          district_id: result.data[0].district_id,
          block_code: result.data[0].block_code,
          block_name: result.data[0].block_name
          },
          height: "fit-content",
          width: "400px",
        });

        dialogRef.afterClosed().subscribe((res: any) => {
          if(res){
            this.getBlockList();
          }
        });
      }
    });
  }
}
