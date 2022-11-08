import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            uniData: [
                {
                    id: 1,
                    name: "UZHNU",
                    address: "Uzhhorod",
                    numberFaculties: 12,
                    accreditation: 100, 
                    rating: 100,
                },
                {
                    id: 2,
                    name: "Politech",
                    address: "Lviv",
                    numberFaculties: 10,
                    accreditation: 95, 
                    rating: 95,
                },
                {
                    id: 3,
                    name: "Shevchenka",
                    address: "Kyiv",
                    numberFaculties: 15,
                    accreditation: 100, 
                    rating: 97,
                },
                {
                    id: 4,
                    name: "KUK",
                    address: "Kyiv",
                    numberFaculties: 21,
                    accreditation: 70, 
                    rating: 54,
                },
            ]
        }
    },

    getters: {
        getUnis: (state) => state.uniData,
    },

    mutations: {
        deleteUni(state, name) {
           state.uniData = state.uniData.filter(item => item.name != name)
        },
        filterByAddressUni(state, address) {
            state.uniData = state.uniData.filter(item => item.address.toLocaleLowerCase().startsWith(address.toLocaleLowerCase()))
        },
        findByNameUni(state, name) {
            state.uniData = state.uniData.filter(item => item.name.toLocaleLowerCase() == name.toLocaleLowerCase())
        }
    },

    actions: {
        deleteUniAction({commit}, name) {
            commit('deleteUni', name);
        },
        filterByAddressUniAction({commit}, address) {
            commit('filterByAddressUni', address)
        },
        findByNameUniAction({commit}, name) {
            commit('findByNameUni', name)
        }
    }
})

export default store;
