import React from "react";
export class FirstAPI extends React.Component {
    constructor(props)
    {
        super(props);
        this.state =
        {
          items: [],
          DataisLoaded: false
        };
    }
      componentDidMount()
    {
          fetch("https://hub.dummyapis.com/employee?noofRecords=7&idStarts=1001")
              .then((res) => res.json())
              .then((json) => {
                  this.setState({
                      items: json,
                      DataisLoaded: true
                  });
              })
      }
      render()
    {
      const { DataisLoaded, items } = this.state;
      if (!DataisLoaded) return <div><h1> Pleses wait some time.... </h1> </div> ;
      return (
        <div className = "Apps">
          <h1> Order Details of Customers</h1>
          <table>
            <thead>
              <th>
                emp_ID
              </th>
              <th>
                first_Name
              </th>
              <th>
                last_Name
              </th>
              <th>
                Email
              </th>
            </thead>
            <tbody>
              {
                items.map((item) =>
                 (
                    <tr key = { item.id } >
                      <td>
                        { item.id }
                      </td>
                      <td>
                        { item.firstName }
                      </td>
                      <td>
                        { item.lastName }
                      </td>
                      <td>
                        { item.email}
                      </td>
                    </tr>
                  ))
              }
            </tbody>
          </table>
        </div>
        );
    }
  }