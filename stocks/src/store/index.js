import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            data: [
                {
                  "id": 1,
                  "ticker": "AAPL",
                  "companyName": "Apple inc.",
                  "price": 157.37,
                  "priceChange": "+1.88%",
                },
                {
                  "id": 2,
                  "ticker": "AMZN",
                  "companyName": "Amazon inc.",
                  "price": 299.68,
                  "priceChange": "+3.60%",
                },
                {
                  "id": 3,
                  "ticker": "TSLA",
                  "companyName": "Tesla inc.",
                  "price": 133.27,
                  "priceChange": "+4.37%",
                },
                {
                  "id": 4,
                  "ticker": "META",
                  "companyName": "Meta Platforms",
                  "price": 169.15,
                  "priceChange": "+2.66%",
                },
                {
                  "id": 5,
                  "ticker": "AMD",
                  "companyName": "AMD Inc.",
                  "price": 85.45,
                  "priceChange": "+3.23%",
                },
                {
                  "id": 6,
                  "ticker": "TKAYF",
                  "companyName": "Just Eat Takeaway",
                  "price": 17.14,
                  "priceChange": "-21.97%",
                },
                {
                  "id": 7,
                  "ticker": "OCPNY",
                  "companyName": "Olympus Co.",
                  "price": 22.88,
                  "priceChange": "-18.58%",
                },
                {
                  "id": 8,
                  "ticker": "TEFOF",
                  "companyName": "Telefónica, S.A.",
                  "price": 3.7401,
                  "priceChange": "-9.17%",
                },
                {
                  "id": 9,
                  "ticker": "GBTG",
                  "companyName": "GBTG Inc.",
                  "price": 7.53,
                  "priceChange": "-8.28%",
                },
                {
                  "id": 10,
                  "ticker": "RLAY",
                  "companyName": "Relay Therapeutics",
                  "price": 29.01,
                  "priceChange": "-7.52%",
                },
                {}
            ]
        }
    },

    getters: {
        getStocks: (state) => state.data
    },
    
    // mutations: {
    //     updateValue(state, payload) {
    //         state.value = payload;
    //     }
    // },

    // actions: {
    //     updateValue({commit}, payload) {
    //         commit('updateValue', payload);
    //     }
    // }
})

export default store