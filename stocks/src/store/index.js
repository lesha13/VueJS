import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            dataStocks: [
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
                {},
            ],
            dataNews: [
                {
                    "id": 1,
                    "imgSrc": "https://s.yimg.com/ny/api/res/1.2/Q3FY.oRX4zQPhdy.vtBXmg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTM5Nw--/https://s.yimg.com/uu/api/res/1.2/S0Pw4oaDDpagf4ue1WsiIQ--~B/aD02NzU7dz0xMjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/bloomberg_markets_842/1850f80f06e3fa7f6c524ba0c859885e",
                    "header": "BofA Strategists See Wall Street Rout Forcing Asset Sales",
                    "text": "(Bloomberg) -- Spiraling losses on Wall Street are now snowballing into forced asset liquidation, according to Bank of America Corp. strategists.",
                },
                {
                    "id": 2,
                    "imgSrc": "https://s.yimg.com/ny/api/res/1.2/Xl2uKClUVNx_0rZLApCE0A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTM1Mw--/https://s.yimg.com/uu/api/res/1.2/OqQV2fZoIECgwnDv60UAdg--~B/aD02NDA7dz0xMjgwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/Barrons.com/1c9bf358bfe079dfa025d7174f96457b",
                    "header": "For Long-Term Investors, It’s Time to Buy Tech Again. Here Are 20 Stocks to Look at First.",
                    "text": "The bear market in software stocks has already lasted far longer than the typical decline, according to MoffettNathanson,",
                },
                {
                    "id": 3,
                    "imgSrc": "https://s.yimg.com/ny/api/res/1.2/aioX7QuIz2DJcX5inMbUow--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTM1Mw--/https://s.yimg.com/uu/api/res/1.2/MvtzkezNEHzI_GFhHBjQGQ--~B/aD02NDA7dz0xMjgwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/marketwatch.com/a49d7dec783278ed4cbb040f5230a3e2",
                    "header": "It was the worst September for stocks since 2002. What that means for October.",
                    "text": "September more than lives up to its reputation as an ugly month for stocks. Here's what the data says about October performance.",
                },
            ]
        }
    },

    getters: {
        getStocks: (state) => state.dataStocks,
        getNews: (state) => state.dataNews,
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