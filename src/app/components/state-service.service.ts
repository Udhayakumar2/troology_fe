import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StateServiceService {

  constructor(private http: HttpClient) { }

/*State Services */

  getStateList(): Observable<any>{
    return this.http.get(environment.BASE_URL + 'state');
  }

  addState(data: any): Observable<any>{
    return this.http.post(environment.BASE_URL + 'state',data);
  }

  updateState(id: any, data: any): Observable<any>{
    return this.http.put(environment.BASE_URL + 'stateById?id=' + id, data);
  }

  deleteState(id: any): Observable<any>{
    return this.http.delete(environment.BASE_URL + 'stateById?id=' + id);
  }


  getDetailsById(id: any): Observable<any>{
    return this.http.get(environment.BASE_URL + 'stateById' + '?id=' + id);
  }

/*District Services */  

  getDistrictList(): Observable<any>{
    return this.http.get(environment.BASE_URL + 'district');
  }

  getDistrictListbyStateId(id:any): Observable<any>{
    return this.http.get(environment.BASE_URL + 'districtByStateId' + '?id=' + id);
  }


  getDistrictDetails(id: any): Observable<any>{
    return this.http.get(environment.BASE_URL + 'districtById' + '?id=' + id);
  }

  addDistrict(data: any): Observable<any>{
    return this.http.post(environment.BASE_URL + 'district',data);
  }

  updateDistrict(id: any, data: any): Observable<any>{
    return this.http.put(environment.BASE_URL + 'districtById?id=' + id, data);
  }

  deleteDistrict(id: any){
    return this.http.delete(environment.BASE_URL + 'districtById?id=' + id);
  }

/*Block Services */

  getBlockList(): Observable<any>{
    return this.http.get(environment.BASE_URL + 'block');
  }

  getblockListbyDistrictId(id:any): Observable<any>{
    return this.http.get(environment.BASE_URL + 'blockByDistrictId' + '?id=' + id);
  }

  addBlock(data: any): Observable<any>{
    return this.http.post(environment.BASE_URL + 'block',data);
  }

  updateBlock(id: any, data: any): Observable<any>{
    return this.http.put(environment.BASE_URL + 'blockById?id=' + id, data);
  }

  deleteBlock(id: any){
    return this.http.delete(environment.BASE_URL + 'blockById?id=' + id);
  }

  getBlockDetails(id: any): Observable<any>{
    return this.http.get(environment.BASE_URL + 'blockById' + '?id=' + id);
  }

/*Village Services */
  getVillageList(): Observable<any>{
    return this.http.get(environment.BASE_URL + 'village');
  }

  updateVillage(id: any, data: any): Observable<any>{
    return this.http.put(environment.BASE_URL + 'villageById?id=' + id, data);
  }

  deleteVillage(id: any){
    return this.http.delete(environment.BASE_URL + 'villageById?id=' + id);
  }
  getVillageDetails(id: any): Observable<any>{
    return this.http.get(environment.BASE_URL + 'villageById' + '?id=' + id);
  }

  addVillage(data: any): Observable<any>{
    return this.http.post(environment.BASE_URL + 'village',data);
  }

}
