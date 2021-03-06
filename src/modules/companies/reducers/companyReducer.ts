import { FETCH_COMPANIES, IAction } from "../types";

const initialState = { items: [] };

export default function (state = initialState, action: IAction) {
    switch (action.type) {
        case FETCH_COMPANIES:
            return { ...state, items: action.payload };
        default:
            return state;
    }
}
