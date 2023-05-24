export default (state: any, action: any): any => {
    let newState;
    switch (action.type) {
        case 'INIT':
            return { ...state, heroList: action.payload };
            break;
        default:
            throw new Error();
    }
    return newState;
}