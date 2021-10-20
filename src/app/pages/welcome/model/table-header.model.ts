export interface TableHeadersModel {
  id?:number;
  jobCode?: string;
  jobName?: string;
  frequency?: string;
  lastExecuteTime?: string;
  executeStartTimeUTC?: string;
  actualStartTimeUTC?: string;
  actualEndTimeUTC?: string;
  executeStatus?: string;
  resultMessage?: string;
}
