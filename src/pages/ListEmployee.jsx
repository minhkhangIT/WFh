import React from "react";
import EmployeeNavComponent from "../components/EmployeeNavComponent";
import EmployeeTableComponent from "../components/EmployeeTableComponent";
import HeaderComponent from "../components/HeaderComponent";
 
class ListEmployee extends React.Component {
  render() {
    return (
        <div>
            <HeaderComponent/>
            <EmployeeNavComponent/>
            <EmployeeTableComponent/>
        </div>
        );
  }
}
 
export default ListEmployee;