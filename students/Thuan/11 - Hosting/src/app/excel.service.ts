import { Injectable } from '@angular/core';
import * as $ from 'jquery';

import * as XLSX from 'xlsx';
import{saveAs} from 'file-saver';
type AOA =Array<Array<any>>;

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  id='abcd';
  constructor() { }
  import(){
    return new Promise((resolve, reject) => {
      $('body').append(`<input id="${this.id}" type="file" style="display:none">`);
      $(`#${this.id}`).change((evt: any) => {
        try {
          const target: DataTransfer = <DataTransfer>(evt.target);
          if (target.files.length !== 1) throw new Error('Cannot use multiple files');
          const reader: FileReader = new FileReader();
          reader.onload = (e: any) => {
            const bstr: string = e.target.result;
            const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
            const wsname: string = wb.SheetNames[0];
            const ws: XLSX.WorkSheet = wb.Sheets[wsname];
            let lines = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
            let records = [];
            let headers = lines[0];
            lines.splice(0, 1);
            lines.forEach(line => {
              let record = {};
              let hasValue = false
              headers.forEach((header, index) => {
                record[header] = line[index];
                if (line[index] !== undefined && line[index] !== null && line[index].toString()) hasValue = true;
              });
              if (hasValue) records.push(record);
            });
            resolve(records);
          };
          reader.readAsBinaryString(target.files[0]);
        } catch (error) {
          reject(error);
        }
      });
      $(`#${this.id}`).trigger('click');
    });
  }
  export(records: any[]) {
    /* Worksheet */
    let worksheet = XLSX.utils.json_to_sheet(records, { cellDates: true });
    /* Workbook */
    let workbook = XLSX.utils.book_new();
    /* Add worksheet to workbook */
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');

    let wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });
    let fileName = 'SuperDev.xlsx';
    saveAs(new Blob([this.s2ab(wbout)], { type: "application/octet-stream" }), fileName);
  }
  private s2ab(s): ArrayBuffer {
    let buffer = new ArrayBuffer(s.length);
    let view = new Uint8Array(buffer);
    for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buffer;
  }
}
