
var data = {name: "xiaoming"}
var arrow = data => (dispatch)=> dispatch({data})
// 台鬼畜了， 应该怎么分
var arrow3 = data => dispatch => dispatch({data})
arrow(data)


var arrow2 = function(data) {
    return function(dispatch) {
        return dispatch({data})
    }
}
arrow2(data)