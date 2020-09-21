
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

let createTimeOutEvent = function(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')
    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return employee;
}