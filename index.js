
let createEmployeeRecord = (row) =>{
  return {
      firstName: row[0],
      familyName: row[1],
      title: row[2],
      payPerHour: row[3],
      timeInEvents: [],
      timeOutEvents: []
  }
}

const createEmployeeRecords = (data)=> {
    return data.map((row) => createEmployeeRecord(row))
}

let createTimeInEvent = function(emp, date){
    let [date, hour] = date.split(' ')
    emp.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    })
    return emp;
}
