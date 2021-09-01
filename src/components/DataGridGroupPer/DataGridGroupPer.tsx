import React, { useState } from "react";
import {
  SearchState,
  SortingState,
  IntegratedSorting,
  PagingState,
  IntegratedPaging,
  FilteringState,
  IntegratedFiltering,
  EditingState,
  DataTypeProviderProps,
  DataTypeProvider,
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  PagingPanel,
  SearchPanel,
  Toolbar,
  TableFilterRow,
  TableEditRow,
  TableEditColumn,
} from "@devexpress/dx-react-grid-bootstrap4";
import { dateToFormat } from "../../helpers/formatters/date";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import data from "./MOCK_DATA";
import { Wrapper } from "./DataGridGroupPerStyles";
import { GridColumnHeaders, GridBodyData} from "../../types/Grid"


const LastModifiedDateProvider: React.ComponentType<DataTypeProviderProps> = (
  props: DataTypeProviderProps
) => (
  <DataTypeProvider formatterComponent={LastModifiedDateFormatter} {...props} />
);

const LastModifiedDateFormatter: React.ComponentType<DataTypeProvider.ValueFormatterProps> =
  ({ value }: DataTypeProvider.ValueFormatterProps) => (
    <p className="formatted__date">{dateToFormat(value)}</p>
  );

export const DataGridGroupPer: React.FC = () => {
  const [columns] = useState<GridColumnHeaders[]>([
    { name: "groupName", title: "Group Name" },
    { name: "members", title: "Members" },
    { name: "lastModified", title: "Last Modified" },
  ]);

  const handleEdit = () => {

  }

  const [actionColumns, setActionColumns] = useState([
    {
      columnName: "Open",
      label: "Open details",
      onClick: handleEdit,
      icon: <MoreHorizIcon />
    }
  ])
  const [rows] = useState<GridBodyData[]>(data);
  const [pageSizes] = useState<number[]>([5, 10, 15, 0]);
  const [lastModifiedDateColumns] = React.useState(["lastModified"]);

  return (
    <Wrapper>
      <Grid rows={rows} columns={columns}>
        <SearchState defaultValue="" />
        <IntegratedFiltering />
        <Toolbar />
        <ActionColumns actionColumns={actionColumns} />
        <SearchPanel />

        <SortingState
          defaultSorting={[{ columnName: "city", direction: "asc" }]}
        />
        <IntegratedSorting />
        <PagingState defaultCurrentPage={0} defaultPageSize={15} />
        <IntegratedPaging />

        <Table />
        <TableHeaderRow showSortingControls />

        <PagingPanel pageSizes={pageSizes} />
        <LastModifiedDateProvider for={lastModifiedDateColumns} />
      </Grid>
    </Wrapper>
  );
};
