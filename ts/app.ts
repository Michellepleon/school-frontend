//------------------------------------------------------------------------------
// DOM manipulations
//------------------------------------------------------------------------------
const wrapper: HTMLDivElement = document.createElement("div");
document.body.appendChild(wrapper);
wrapper.style.flex;
wrapper.style.justifyContent = "center";
wrapper.style.alignItems = "center";
wrapper.style.paddingLeft = "100px";
wrapper.style.paddingRight = "100px";
wrapper.id = "wrapper";

const titleH1: HTMLHeadingElement = document.createElement("h1");
titleH1.innerHTML = "School-Students";
titleH1.id = "tittle-h1";
titleH1.style.textAlign = "center";
wrapper.appendChild(titleH1);
//------------------------------------------------------------------------------
// classes / interfaces
//------------------------------------------------------------------------------
class Student {
  //class properties
  private id: number;
  private firstName: string;
  private lastName: string;
  private sex: string;
  private age: number;
  //constructor to initialize the properties
  constructor(
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    sex: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.sex = sex;
  }
  // instance function
  public getId() {
    return this.id;
  }
  public getFirstName() {
    return this.firstName;
  }
  public getLastName() {
    return this.lastName;
  }
  public getAge() {
    return this.age;
  }
  public getSex() {
    return this.sex;
  }
}

interface StudentData {
  id: number;
  firstName: string;
  lastName: string;
  sex: string;
  age: number;
}
//------------------------------------------------------------------------------
// Creation the table students (ASYNC)
//------------------------------------------------------------------------------
const studentsPromise: Promise<StudentData[]> = getFromDataBase("/students");
studentsPromise.then((data) => {
  // manage data received parsed in TS
  // parse data that is object[] => Student[]
  console.log(data);
  console.log("Data length:", data.length);

  const students: Student[] = parseObjetToStudentType(data);

  console.log("data:", students);

  const studentsTable: HTMLTableElement = createTable();
  createTableHeader(studentsTable);
  createTableBody(studentsTable, students);
});
//------------------------------------------------------------------------------
// global functions
//------------------------------------------------------------------------------
function createTable(): HTMLTableElement {
  const table: HTMLTableElement = document.createElement("table");
  table.style.margin = "auto";
  table.style.borderCollapse = "collapse";
  table.style.width = "100%";
  table.style.backgroundColor = "lightgrey";
  table.style.border = "1px solid black";
  table.id = "students-table";
  wrapper.appendChild(table);
  return table;
}

function createTableHeader(table: HTMLTableElement): void {
  const tableHead: HTMLTableRowElement = document.createElement("tr");
  table.appendChild(tableHead);

  for (let i: number = 0; i <= 4; i++) {
    tableHead.insertCell(i);
    const tableHeadCell: HTMLTableCellElement = tableHead.cells[i];
    tableHeadCell.style.border = "3px solid black";
    tableHeadCell.style.padding = "4px";
    tableHeadCell.style.backgroundColor = "grey";
    tableHeadCell.style.fontWeight = "bolder";
    tableHeadCell.style.border = "1px solid black";
    tableHeadCell.style.textAlign = "center";
    switch (i) {
      case 0:
        tableHeadCell.textContent = "Id";
        break;
      case 1:
        tableHeadCell.textContent = "First Name";
        break;
      case 2:
        tableHeadCell.textContent = "Last Name";
        break;
      case 3:
        tableHeadCell.textContent = "Sex";
        break;
      case 4:
        tableHeadCell.textContent = "Age";
        break;
    }
  }
}

function createTableBody(table: HTMLTableElement, students: Student[]): void {
  for (let i: number = 1; i < students.length; i++) {
    const row: HTMLTableRowElement = document.createElement("tr");
    for (let j: number = 0; j <= 4; j++) {
      row.insertCell(j);
      const tableCell: HTMLTableCellElement = row.cells[j];
      switch (j) {
        case 0:
          tableCell.textContent = students[i].getId().toString();
          break;
        case 1:
          tableCell.textContent = students[i].getFirstName();
          break;
        case 2:
          tableCell.textContent = students[i].getLastName();
          break;
        case 3:
          tableCell.textContent = students[i].getSex();
          break;
        case 4:
          tableCell.textContent = students[i].getAge().toString();
          break;
      }
      tableCell.style.border = "1px solid black";
      tableCell.style.padding = "4px";
      tableCell.style.textAlign = "center";
    }
    table.appendChild(row);
  }
}

function parseObjetToStudentType(data: StudentData[]): Student[] {
  let students: Student[] = [];

  for (let i: number = 0; i < data.length; i++) {
    const student: Student = new Student(
      data[i].id,
      data[i].firstName,
      data[i].lastName,
      data[i].age,
      data[i].sex
    );
    students.push(student);
  }

  return students;
}
//------------------------------------------------------------------------------
// async functions
//------------------------------------------------------------------------------
async function getFromDataBase(endpoint: string): Promise<StudentData[]> {
  try {
    const response: Response = await fetch(`http://localhost:8000${endpoint}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: StudentData[] = await response.json();

    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error; // Rethrow the error if necessary
  }
}
