import React from 'react';

// DO NOT CHANGE THIS FUNCTION, IT RETURNS TRUE OR FALSE ACCORDING TO GIVEN DATES
// joiningDate COMES FROM input-date, validityDate COMES FROM studentList,
export function checkValidity(joiningDate, validityDate) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split('-');
  const [yyyy, mm, dd] = validityDate.split('-');
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  return (maxValid >= selected) && (maxValid >= today);
}





function Search({handleClick,input,input2,setInput,setInput2, currentStudent}) {

 

  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">Student Name:
        <div>
          <input onChange={(e)=>{setInput(e.target.value)}} value={input} id="studentName" data-testid="studentName" type="text" className="mr-30 mt-10" required/>
        </div>
      </label>
      <label htmlFor="joiningDate">Joining Date:
        <div>
          <input onChange={(e)=>{setInput2(e.target.value)}} value={input2} id="joiningDate" data-testid="joiningDate" type="date" className="mr-30 mt-10" required/>
        </div>
      </label>
      <button onClick={handleClick} type="button" data-testid="addBtn" className="small mb-0">Add</button>
    </div>
  );
}

export default Search;
