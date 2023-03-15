import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { StateServiceService } from '../state-service.service';

@Component({
  selector: 'app-state-pop-up',
  templateUrl: './add-edit-pop-up.component.html',
  styleUrls: ['./add-edit-pop-up.component.scss']
})
export class AddEditPopUpComponent implements OnInit{
  stateForm: FormGroup;
  districtForm: FormGroup;
  blockForm: FormGroup;
  villageForm: FormGroup;
  isEdit: boolean = false;
  states :any
  districts :any
  blocks :any
  districtFlag :boolean=false

  constructor(public dialogRef: MatDialogRef<AddEditPopUpComponent>,
    public stateService: StateServiceService,
    @Inject(MAT_DIALOG_DATA) public data: any, private toastr: ToastrService){
    this.stateForm = new FormGroup({
      state_code: new FormControl('',[Validators.required]),
      state_name: new FormControl('',[Validators.required])
    });
    this.districtForm = new FormGroup({
      district_code: new FormControl('',[Validators.required]),
      district_name: new FormControl('',[Validators.required]),
      state_id: new FormControl('',[Validators.required])
    });
    this.blockForm = new FormGroup({
      block_code: new FormControl('',[Validators.required]),
      block_name: new FormControl('',[Validators.required]),
      state_id: new FormControl('',[Validators.required]),
      district_id: new FormControl('',[Validators.required])
    });
    this.villageForm = new FormGroup({
      village_code: new FormControl('',[Validators.required]),
      village_name: new FormControl('',[Validators.required]),
      state_id: new FormControl('',[Validators.required]),
      district_id: new FormControl('',[Validators.required]),
      block_id: new FormControl('',[Validators.required])
    });
  }

  ngOnInit(): void {
    /** patching different form default values based on module name */
    if(this.data && this.data.module === 'State') {
      if(this.data.title && this.data.action === 'Edit'){
        this.isEdit = true;
        this.stateForm.patchValue({
          state_code: this.data.state_code,
          state_name: this.data.state_name
        });
      }  
    } else if(this.data && this.data.module === 'District'){
      this.getStateList();
      if(this.data.title && this.data.action === 'Edit'){
        this.isEdit = true;
        this.districtForm.patchValue({
          district_code: this.data.district_code,
          district_name: this.data.district_name,
          state_id: this.data.state_id
        });
      }
    } else if(this.data && this.data.module === 'Block'){
      this.getStateList();
      if(this.data.title && this.data.action === 'Edit'){
        this.isEdit = true;
        this.getDistrictListbyStateId(this.data.state_id);
        this.blockForm.patchValue({
          block_code: this.data.block_code,
          block_name: this.data.block_name,
          state_id: this.data.state_id,
          district_id: this.data.district_id
        });
      }
    } else if(this.data && this.data.module === 'Village'){
      this.getStateList();
      if(this.data.title && this.data.action === 'Edit'){
        this.isEdit = true;
        this.getDistrictListbyStateId(this.data.state_id);
        this.getblockListbyDistrictId(this.data.district_id);
        this.villageForm.patchValue({
          village_code: this.data.village_code,
          village_name: this.data.village_name,
          state_id: this.data.state_id,
          district_id: this.data.district_id,
          block_id: this.data.block_id
        });
      }
    }
  }

  add(){
    if(this.data.module === 'State'){
      this.addState();
    } else if(this.data.module === 'District'){
      this.addDistrict();
    } else if(this.data.module === 'Block'){
      this.addBlock();
    } else if(this.data.module === 'Village'){
      this.addVillage();
    }
  }

  /** Adding new Village */
  addVillage(){
    if(this.villageForm.valid){
      const blockData = {
       village_code : this.villageForm.value.village_code,
       village_name: this.villageForm.value.village_name,
       state_id: this.villageForm.value.state_id,
       district_id: this.villageForm.value.district_id,
       block_id: this.villageForm.value.block_id
      };
      this.stateService.addVillage(blockData).subscribe((result: any) => {
       if(result && result.statusCode === 201){
        this.toastr.success(`${result.message}`);
         this.dialogRef.close(result);
       }
      });
   } else {
     return;
   }
  }

    /** Adding new Block */
  addBlock(){
    if(this.blockForm.valid){
       const blockData = {
        block_code : this.blockForm.value.block_code,
        block_name: this.blockForm.value.block_name,
        state_id: this.blockForm.value.state_id,
        district_id: this.blockForm.value.district_id
       };
       this.stateService.addBlock(blockData).subscribe((result: any) => {
        if(result && result.statusCode === 201){
          this.toastr.success(`${result.message}`);
          this.dialogRef.close(result);
        }
       });
    } else {
      return;
    }
  }

    /** Adding new District */
  addDistrict(){
    if(this.districtForm.valid){
      const districtData = {
        district_code: this.districtForm.value.district_code,
        district_name: this.districtForm.value.district_name,
        state_id: this.districtForm.value.state_id
      };
      this.stateService.addDistrict(districtData).subscribe((result: any) => {
        if(result && result.statusCode === 201){
          this.toastr.success(`${result.message}`);
          this.dialogRef.close(result);
        }
      })
    } else {
      return;
    }
  }

    /** Adding new State */
  addState(){
    if(this.stateForm.invalid){
      return;
    }

    if(this.stateForm.valid){
      const stateData = {
        state_code: this.stateForm.value.state_code,
        state_name: this.stateForm.value.state_name
      };
      this.stateService.addState(stateData).subscribe((res: any) => {
        if(res) {
          console.log(res);
          this.toastr.success(`${res.message}`);
          this.dialogRef.close(res);
        }
      });
    }
    
  }

  getStateList(){
    this.stateService.getStateList().subscribe((result: any) => {
      if(result && result.statusCode === 200){
        this.states = result.data;
      }
    });
  }

  /** Fetching district List based on selected state */
  getDistrictListbyStateId(id:any){
    this.stateService.getDistrictListbyStateId(id).subscribe((result: any) => {
      if(result && result.statusCode === 200){
        this.districts = result.data;
      }
    })
  }
  
  getBlockList(){
    this.stateService.getBlockList().subscribe((result: any) => {
      if(result && result.statusCode === 200){
        this.blocks = result.data;
      }
    })
  }

  getblockListbyDistrictId(id:any){
    this.stateService.getblockListbyDistrictId(id).subscribe((result: any) => {
      if(result && result.statusCode === 200){
        this.blocks = result.data;
      }
    })
  }

  modify(id: any){
    if(this.data.module === 'State'){
      this.modifyState(id);
    } else if(this.data.module === 'District'){
      this.modifyDistrict(id);
    } else if(this.data.module === 'Block'){
      this.modifyBlock(id);
    } else if(this.data.module === 'Village'){
      this.modifyVillage(id);
    }
  }

    /** Updating Village */
  modifyVillage(id: any){
    if(this.villageForm.valid){
      const updateData = {
        block_id: this.villageForm.value.block_id,
        village_code: this.villageForm.value.village_code,
        village_name: this.villageForm.value.village_name,
        state_id: this.villageForm.value.state_id,
        district_id: this.villageForm.value.district_id,
      };
      this.stateService.updateVillage(id, updateData).subscribe((res) => {
        if(res && res.statusCode === 200){
          this.toastr.success(`${res.message}`);
          this.dialogRef.close(res)
        } else if(res && res.statusCode !== 200){
          this.toastr.success(`${res.message}`);
          this.dialogRef.close(res);
        }
      })
    } else {
      return;
    }
  }

  /** Updating Block */
  modifyBlock(id: any){
    if(this.blockForm.valid){
      const updateData = {
        block_code: this.blockForm.value.block_code,
        block_name: this.blockForm.value.block_name,
        state_id: this.blockForm.value.state_id,
        district_id: this.blockForm.value.district_id
      };
      this.stateService.updateBlock(id, updateData).subscribe((res) => {
        if(res && res.statusCode === 200){
          this.toastr.success(`${res.message}`);
          this.dialogRef.close(res)
        } else if(res && res.statusCode !== 200){
          this.toastr.success(`${res.message}`);
          this.dialogRef.close(res);
        }
      })
    } else {
      return;
    }
  }

/** Updating District */
  modifyDistrict(id: any){
    if(this.districtForm.valid){
      const updateData = {
        state_id: this.districtForm.value.state_id,
        district_code: this.districtForm.value.district_code,
        district_name: this.districtForm.value.district_name
      };
      this.stateService.updateDistrict(id, updateData).subscribe((res) => {
        if(res && res.statusCode === 200){
          this.toastr.success(`${res.message}`);
          this.dialogRef.close(res)
        } else if(res && res.statusCode !== 200){
          this.toastr.success(`${res.message}`);
          this.dialogRef.close(res);
        }
      })
    } else {
      return;
    }
  }
  /** Updating State */
  modifyState(id: any){
    if(this.stateForm.valid){
      const updateData = {
        state_code: this.stateForm.value.state_code,
        state_name: this.stateForm.value.state_name
      };

      this.stateService.updateState(id, updateData).subscribe((result) => {
        if(result && result.statusCode === 200){
          this.toastr.success(`${result.message}`);
          this.dialogRef.close(result);
        } else if(result && result.statusCode !== 200){
          this.toastr.success(`${result.message}`);
          this.dialogRef.close(result);
        }
      })
    } else {
      return;
    }
  }

  closePopUp(){
    this.dialogRef.close();
  }

  getdistrictList(form:any,name? : any){
    this.getDistrictListbyStateId(form.controls['state_id'].value);
    if(name === 'villageForm'){
      this.villageForm.controls['block_id'].reset();
      this.blocks = [];
    }
  }

  getblockList(form:any){
    this.getblockListbyDistrictId(form.controls['district_id'].value);
  }
}
