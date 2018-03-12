import $ from "jquery";

export function sendData (data) {
  console.log(data)
    return (dispatch, getState) => {
        return $.ajax({
        url: 'http://localhost:5000/dataAction/'+data,
        method: 'POST'
    }).done(data => {
        dispatch({type:'SEND_DATA', data:data})
    })
  }
}