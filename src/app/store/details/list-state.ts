import { ListModel } from '../../models/list-model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ListService } from '../../services/list.service';
import { Injectable } from '@angular/core';

export interface TableModel {

  tableData: ListModel[];

  totalRows: number;
  currentPageNum: number;
  filterOpened: boolean;

}

export class SetTableData {
  public static readonly type = '[LIST] setTableData';
  constructor(public readonly tableData: ListModel[]) {}
}

export class LoadTableData {
  public static readonly type = '[LIST] loadTableData';
}

@State<TableModel>({
  name: 'list',
  defaults: {
    tableData: [],
    currentPageNum: 0,
    filterOpened: false,
    totalRows: 0
  }
})
@Injectable()
export class ListState {

  @Selector()
  public static tableData(state: TableModel): ListModel[] {
    return state.tableData;
  }

  constructor(private listService: ListService) {
  }

  @Action(SetTableData)
  public setTableData(ctx: StateContext<TableModel>, action: SetTableData): void {
    ctx.patchState({ tableData: action.tableData });
  }

  @Action(LoadTableData)
  public loadTableData(ctx: StateContext<TableModel>, action: LoadTableData): Promise<void> {
    return this.listService.loadList().toPromise()
      .then((response) => this.handleLoadTableResponse(ctx, response));
  }

  private handleLoadTableResponse(ctx: StateContext<TableModel>, response: ListModel[]): void {
    ctx.dispatch(new SetTableData(response));
  }

}
