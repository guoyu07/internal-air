import fakeData from "../mock/RT.json";

function counter(state = fakeData, action) {
    switch (action.type) {
        case 'a':
            return state.priceTable[0].airlineName;
        case 'b':
            return state.priceTable[1].airlineName;
        case 'c':
            return state.priceTable[2].airlineName;
        case 'd':
            return state.priceTable[3].airlineName;
        case 'e':
            return state.priceTable[4].airlineName;
        case 'f':
            return state.priceTable[5].airlineName;
        default:
            return state.priceTable[5].airlineName;
    }
}
export default counter;