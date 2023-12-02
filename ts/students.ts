//------------------------------------------------------------------------------
// Creation div to containt H1
//------------------------------------------------------------------------------
const wrapper: HTMLDivElement =document.createElement("div");
document.body.appendChild(wrapper);
wrapper.id ="wrapper";
//------------------------------------------------------------------------------
// Creation the H1 when you creat the elemet
//------------------------------------------------------------------------------
const titleH1: HTMLHeadingElement = document.createElement ("h1");
titleH1.innerHTML = "School-Students";
titleH1.id ="tittle-h1";
titleH1.style.textAlign ="center";
wrapper.appendChild(titleH1);

//------------------------------------------------------------------------------
// Crearion the table students
//------------------------------------------------------------------------------
interface students{
    id: number;
    name: string;
    lastName: string;
    age: number;
}
const tableContainer = document.getElementById ("tableContainer")
const data: students [] =[
    {id: 1, name:'Minou', lastName: 'Montpetit', age: 9}
];
const studentsTable: HTMLTableElement = document.createElement ("table");
document.body.appendChild(studentsTable);