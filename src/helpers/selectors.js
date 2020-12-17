export function getAppointmentsForDay(state, day) {
  let resultArr = [];
  let appointments = [];
  for (let theDay of state.days) {
    if (theDay.name === day){
      appointments = theDay.appointments;
    }
  }
  for (let i of appointments){
  resultArr.push(state.appointments[i])
  }
  return resultArr
}

export function getInterview(state, interview){
  if(interview === null){
    return null
  }
  let resultInterviewObj = {};
  resultInterviewObj.interviewer = state.interviewers[interview.interviewer]
  resultInterviewObj.student = interview.student
  return resultInterviewObj
}

export function getInterviewersForDay(state, day) {
  let resultArr = [];
  for (let theDay of state.days){
    if (theDay.name === day){
      for (let interviewerNum of theDay.interviewers){
        if(state.interviewers[interviewerNum]){
          resultArr.push(state.interviewers[interviewerNum])
        }
      }
    }
       }
  return resultArr
}

