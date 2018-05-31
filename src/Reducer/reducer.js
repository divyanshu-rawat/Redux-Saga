

const intialState = {
	count: 0
}

export const Reducer = (state = intialState , action) =>{	

	console.log('clicked', action);
	switch(action.type){

		case 'INCREMENT':
			return { count: state.count + 1 };
			break;

		case 'DECREMENT':
			return { count: state.count - 1 };
			break;

		default:
			return { count: state.count };

	}
}