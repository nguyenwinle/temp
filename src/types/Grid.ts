import { Column } from '@devexpress/dx-react-grid';
import { Table, TableHeaderRow } from '@devexpress/dx-react-grid-bootstrap4';
import { FunctionComponent } from 'react';

export interface DataGridColumn extends Column {
  options: Partial<Table.ColumnExtension> & { decimalPlaces?: number; visible?: boolean };
}

export interface DataGridColumnGroup {
  title: string;
  children: {
    columnName: string;
  }[];
}

export interface GridColumnHeaders {
  name: string;
  title: string;
}

export interface GridBodyData {
  groupName: string,
  members: number;
  lastModified: string;
}

export interface TableColumnExtensions {
  columnName: string;
  align: string;
}

export type DataGridConfig = {
  maxHeight?: number | string;
  minHeight?: number | string;
  fixedColumns?: string[];
  rows?: {
    height?: number | string;
    cellComponent?: FunctionComponent<Table.DataCellProps>;
    rowComponent?: FunctionComponent<Table.DataRowProps>;
    stubCellComponent?: FunctionComponent<Table.CellProps>;
    headerStubCellComponent?: FunctionComponent<Table.CellProps>;
  };
  header?: {
    cellComponent?: FunctionComponent<TableHeaderRow.CellProps>;
  };
};

export type ColumnsMetadata = {
  name: string;
  title: string;
  numDecimals?: number;
  columnGroup?: string;
  visible?: boolean;
};