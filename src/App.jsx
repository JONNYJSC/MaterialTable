import { useState } from 'react'
import MaterialTable from 'material-table'
// import GetAppIcon from 'material-ui/icons/GetApp';
// import AddIcon from 'material-ui/icons/Add';

function App() {

  const [tableData, setTableData] = useState([
    { name: "Jonny", email: "jjonath21@gmail.com", phone: 78434643, age: 31, gender: "M", city: "Managua", fee: 1500 },
    { name: "Jonathan", email: "jjonath21@hotmail.com", phone: 57779150, age: 25, gender: "M", city: "Managua", fee: 2500 },
    { name: "Skarleth", email: "skar@hotmail.com", phone: 58603853, age: 24, gender: "F", city: "Managua", fee: 10500 },
    { name: "Karlita", email: "karlita@hotmail.com", phone: 12345678, age: null, gender: "F", city: "Managua", fee: 15600 },
    { name: "Karlita", email: "karlita@hotmail.com", phone: 12345678, age: null, gender: "F", city: "Managua", fee: 15600 },
  ]);

  const columns = [
    {
      title: "Name",
      field: "name",
      sorting: false,
      filtering: false,
      cellStyle: { background: "#009688" },
      headerStyle: { color: "#fff" }
    },
    {
      title: "Email",
      field: "email",
      filterPlaceholder: "Filter by email"
    },
    {
      title: "Phone",
      field: "phone",
      align: "center",
      grouping: true
    },
    {
      title: "Age",
      field: "age",
      emptyValue: () => <em>Null</em>,
      defaultSort: "asc",
      searchable: false,
      render: (rowData) => <div style={
        {
          background: rowData.age >= 18 ? "#008000aa" : "#f90000aa", borderRadius: "4px", paddingLeft: 5
        }
      }>{rowData.age >= 18 ? "18+" : "18-"}</div>,
      export: false
    },
    {
      title: "Gender",
      field: "gender",
      lookup: { M: "Male", F: "Female" }
    },
    { title: "City", field: "city" },
    {
      title: "School Fee",
      field: "fee",
      type: "currency",
      currencySetting: { currencyCode: "NIO", minimumFractionDigits: 0 },
      cellStyle: { background: "#009688" },
      headerStyle: { color: "#fff" }
    },
  ]

  // Nota: type: boolean | numeric | date | time | currency
  // currencySetting: tipo de moneda
  // minimumFractionDigits: 0 fraccion de numero a la derecha 
  // searchable: omite esa busqueda en el search
  // searchFieldVariant: "standard" | para el estilo del search 

  return (
    <div>
      <h1>Material Table</h1>
      <MaterialTable
        columns={columns}
        data={tableData}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            setTableData([...tableData, newRow])
            console.log(newRow);
            setTimeout(() => resolve(), 500)
          }),
          onRowUpdate: (newRow, oldRow) => new Promise((resolve, reject) => {
            const updatedData = [...tableData]
            updatedData[oldRow.tableData.id] = newRow
            setTableData(updatedData)
            setTimeout(() => resolve(), 500)
          }),
          onRowDelete: (selectedRow) => new Promise((resolve, reject) => {
            const updatedData = [...tableData]
            updatedData.splice(selectedRow.tableData.id, 1)
            setTableData(updatedData)
            setTimeout(() => resolve(), 1000)

          })
        }}
        actions={[
          {
            // icon: () => <GetAppIcon />,
            icon: () => <button>Click me</button>,
            tooltip: "Click me",
            onClick: (e, data) => console.log(data),
            // isFreeAction: true
          }
        ]}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options=
        {
          {
            sorting: true,
            search: true,
            searchText: "",
            // searchText: "kar",
            searchFieldAlignment: "left",
            searchAutoFocus: true,
            searchFieldVariant: "standard",
            filtering: true,
            paging: true, // maneja paginado
            pageSizeOptions: [2, 5, 10, 20, 25, 50, 100],
            pageSize: 2,
            paginationType: "stepped",
            showFirstLastPageButtons: false,
            paginationPosition: "both",
            exportButton: true,
            exportAllData: true,
            exportFileName: "TableData",
            addRowPosition: "first",
            actionsColumnIndex: -1,
            selection: true,
            showSelectAllCheckbox: false,
            showTextRowsSelected: false,
            selectionProps: rowData => ({
              disabled: rowData.age == null,
              // color:"primary"
            }),
            grouping: true,
            columnsButton: true,
            rowStyle: (data, index) => index % 2 === 0 ? { background: "#f5f5f5" } : null,
            headerStyle: { background: "#f44336", color: "#fff" }
          }
        }
        title={"Test"}
        // icons={{ Add: () => <AddIcon /> }}
        icons={{ Add: () => <button>Click me</button> }} />
      <h2>hh</h2>
    </div>
  )
}

export default App
