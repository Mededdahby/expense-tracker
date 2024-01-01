export default function reducer(state, action) {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(e =>
                    e.id !== action.payload
                )
            };
        case 'add_Transaction':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            };
        default:
            return state;
    }
}
