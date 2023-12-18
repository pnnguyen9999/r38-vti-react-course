import React, { useEffect, useState } from "react";
import EmployeeApi from "../services/EmployeeApi";
import withLoading from "../HOC/WithLoading";

const EmployeeRenderListWithLoading = withLoading(EmployeeListRender);
export default function EmployeeList() {
  const [employeeData, setEmployeeData] = useState([]);
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getListEmployee = async () => {
    try {
      setIsLoading(true);
      const response = await EmployeeApi.getEmployee();
      setIsLoading(false);
      console.log(response);
      setEmployeeData(response.data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const createNewEmployee = (data) => {
    EmployeeApi.createEmployee(data)
      .then((res) => {
        getListEmployee();
      })
      .catch((error) => console.log(error));
  };

  const updateEmployee = (id, data) => {
    EmployeeApi.updateEmployee(id, data)
      .then((res) => getListEmployee())
      .catch((error) => console.log(error));
  };

  const deleteEmployee = (id) => {
    EmployeeApi.deleteEmployee(id)
      .then((res) => getListEmployee())
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getListEmployee();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      name,
      department,
      phone,
    };
    createNewEmployee(newEmployee);
  };
  return (
    <div>
      <button onClick={() => getListEmployee()}>Get list employee</button>
      <EmployeeForm
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        department={department}
        setDepartment={setDepartment}
        phone={phone}
        setPhone={setPhone}
      />
      <EmployeeRenderListWithLoading
        isLoading={isLoading}
        employeeData={employeeData}
        updateEmployee={updateEmployee}
        deleteEmployee={deleteEmployee}
      />
    </div>
  );
}

function EmployeeListRender(props) {
  return (
    <>
      {props.employeeData.map((object) => (
        <EmployeeCard
          key={object.id}
          id={object.id}
          name={object.name}
          department={object.department}
          phone={object.phone}
          updateEmployee={props.updateEmployee}
          deleteEmployee={props.deleteEmployee}
        />
      ))}
    </>
  );
}

function EmployeeCard(props) {
  const [isOpenUpdateForm, setIsOpenUpdateForm] = useState(false);
  const [name, setName] = useState(props.name);
  const [department, setDepartment] = useState(props.department);
  const [phone, setPhone] = useState(props.phone);
  return (
    <>
      <ul>
        <li>{props.name}</li>
        <li>{props.department}</li>
        <li>{props.phone}</li>
      </ul>
      <button onClick={() => setIsOpenUpdateForm((prev) => !prev)}>
        Toogle Update Data Form
      </button>
      <button onClick={() => props.deleteEmployee(props.id)}>Delete</button>

      {isOpenUpdateForm && (
        <EmployeeForm
          handleSubmit={(e) => {
            e.preventDefault();
            props.updateEmployee(props.id, {
              name,
              department,
              phone,
            });
            setIsOpenUpdateForm(false);
          }}
          name={name}
          setName={setName}
          department={department}
          setDepartment={setDepartment}
          phone={phone}
          setPhone={setPhone}
        />
      )}
      <hr />
    </>
  );
}

function EmployeeForm(props) {
  return (
    <form
      onSubmit={props.handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "10px",
      }}
    >
      <input
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
        placeholder="input name"
      />
      <input
        value={props.department}
        onChange={(e) => props.setDepartment(e.target.value)}
        placeholder="input department"
      />
      <input
        value={props.phone}
        onChange={(e) => props.setPhone(e.target.value)}
        placeholder="input phone"
      />
      <input type="submit" value="create new employee" />
    </form>
  );
}
