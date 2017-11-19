
//第一个参数是默认的store的state

let _state={
	userID:"17839192950",
	password:'1234567'
}
//reducer必须return出state这样store才能用到state
const reducer=(state=_state,action)=>{
	switch(action.type){
		case 'REGISTER':
		//这里写state的处理怎样处理状态的；；；
		//还没有写
			return Object.assign({},state);break;
		default :
			return state;break;
	}
}
export default reducer