import {ADD_TASK, ALL_TASK, DELETE_TASK, EDIT_TASK, UPDATE_TASK} from '../actionCreator';

export const getAllTask = () => {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDU4NzU1NDEsIm5iZiI6MTYwNTg3NTU0MSwianRpIjoiY2M3YmQ5MTUtMzJiMy00M2Q1LTg5ZDYtMThjZDEyY2VkZGExIiwiaWRlbnRpdHkiOnsibmFtZSI6IlNhcmF2YW5hbiBUZXN0aW5nIiwiZW1haWwiOiJzcGljZWJsdWV0ZXN0MUBnbWFpbC5jb20iLCJ1c2VyX2lkIjoidXNlcl8yZTYyOTc1NzFmY2I0ZTA3YWU3MjRlZjVhODJhMjM1MyIsImNvbXBhbnlfaWQiOiJjb21wYW55XzMzZTU0MmIzNWNiYTRkZTA5MjBjNTBiZWRhMDg3OTMwIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9hZGU1MjA3ZDViNDJjNWRhNTk1ZWRkNzgxODlkNzcxNz9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGaGVsbG9tYWlsLWltYWdlcy5zMy1hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tJTJGc2xvb3ZpJTJGaW1hZ2VzJTJGYXZhdGFyLWRlZmF1bHQtaWNvbi5wbmciLCJieV9kZWZhdWx0Ijoib3V0cmVhY2gifSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.mYGW6fVXAZxAytmHwJcxkwnUToiTjpdmSG12gm7yvn0";
    
    const requestOptions = {
        "method": 'GET',
        "headers": { 'Authorization': 'Bearer ' + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    };
    const apiUrl = 'https://stageapi.hellomail.io/task/lead_59a79b6cb211449f9698bad058a593e4';
    
    return dispatch => {
        return fetch(apiUrl, requestOptions)
          .then(res => res.json())
          .then(res => {
            dispatch(setData(res.results));
          })
        
      };
}

export const setData = (data) => { console.log('setdata', data);
    return {
      type: ALL_TASK,
      data: data
    };
  }

export const addTask = (task) => {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDU4NzU1NDEsIm5iZiI6MTYwNTg3NTU0MSwianRpIjoiY2M3YmQ5MTUtMzJiMy00M2Q1LTg5ZDYtMThjZDEyY2VkZGExIiwiaWRlbnRpdHkiOnsibmFtZSI6IlNhcmF2YW5hbiBUZXN0aW5nIiwiZW1haWwiOiJzcGljZWJsdWV0ZXN0MUBnbWFpbC5jb20iLCJ1c2VyX2lkIjoidXNlcl8yZTYyOTc1NzFmY2I0ZTA3YWU3MjRlZjVhODJhMjM1MyIsImNvbXBhbnlfaWQiOiJjb21wYW55XzMzZTU0MmIzNWNiYTRkZTA5MjBjNTBiZWRhMDg3OTMwIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9hZGU1MjA3ZDViNDJjNWRhNTk1ZWRkNzgxODlkNzcxNz9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGaGVsbG9tYWlsLWltYWdlcy5zMy1hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tJTJGc2xvb3ZpJTJGaW1hZ2VzJTJGYXZhdGFyLWRlZmF1bHQtaWNvbi5wbmciLCJieV9kZWZhdWx0Ijoib3V0cmVhY2gifSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.mYGW6fVXAZxAytmHwJcxkwnUToiTjpdmSG12gm7yvn0";
    const userId = 'user_2e6297571fcb4e07ae724ef5a82a2353';
    const time = Date.parse(task.taskDate +' '+ task.taskTime);
    console.log(time);
    const requestOptions = {
        "method": 'POST',
        "headers": { 'Authorization': 'Bearer ' + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        "body": JSON.stringify({
            assigned_user:  userId, 
            task_date: task.taskDate,
            task_time: time,
            task_msg: task.description,
        })
    };
    const apiUrl = 'https://stageapi.hellomail.io/task/lead_59a79b6cb211449f9698bad058a593e4';

    fetch(apiUrl, requestOptions)
        .then(response => response.json())
    console.log(task);
    const action={
        type: ADD_TASK,
        data: task
    } 

    return action;
}

export const deleteTask=(id)=>{
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDU4NzU1NDEsIm5iZiI6MTYwNTg3NTU0MSwianRpIjoiY2M3YmQ5MTUtMzJiMy00M2Q1LTg5ZDYtMThjZDEyY2VkZGExIiwiaWRlbnRpdHkiOnsibmFtZSI6IlNhcmF2YW5hbiBUZXN0aW5nIiwiZW1haWwiOiJzcGljZWJsdWV0ZXN0MUBnbWFpbC5jb20iLCJ1c2VyX2lkIjoidXNlcl8yZTYyOTc1NzFmY2I0ZTA3YWU3MjRlZjVhODJhMjM1MyIsImNvbXBhbnlfaWQiOiJjb21wYW55XzMzZTU0MmIzNWNiYTRkZTA5MjBjNTBiZWRhMDg3OTMwIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9hZGU1MjA3ZDViNDJjNWRhNTk1ZWRkNzgxODlkNzcxNz9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGaGVsbG9tYWlsLWltYWdlcy5zMy1hcC1zb3V0aGVhc3QtMS5hbWF6b25hd3MuY29tJTJGc2xvb3ZpJTJGaW1hZ2VzJTJGYXZhdGFyLWRlZmF1bHQtaWNvbi5wbmciLCJieV9kZWZhdWx0Ijoib3V0cmVhY2gifSwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.mYGW6fVXAZxAytmHwJcxkwnUToiTjpdmSG12gm7yvn0";
    
    const requestOptions = {
        "method": 'DELETE',
        "headers": { 'Authorization': 'Bearer ' + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        "body": {}
    };
    const apiUrl = 'https://stageapi.hellomail.io/task/lead_59a79b6cb211449f9698bad058a593e4/'+id;

    fetch(apiUrl, requestOptions)
        .then(response => response.json())
    
        
    const action={
        type:DELETE_TASK,
        id 
    }
    return action;
}

export const editTask=(id)=>{
    const action={
        type:EDIT_TASK,
        id 
    }
    return action;
}

export const updateTask=(data)=>{
    const action={
        type: UPDATE_TASK,
        data 
    }
    return action;
}
