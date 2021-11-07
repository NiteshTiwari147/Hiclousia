export const getTableData = () => {
   return  fetch("/table")
   .then((res) => res.json())
   .then((data) => {
       console.log("here is the table data", data.resp);
       return data});        
}