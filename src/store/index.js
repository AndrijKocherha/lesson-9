import { createStore } from 'vuex'

export default createStore({
   state: {
      companiesList: [
         {
            id: 1,
            title: 'Company 1',
            rate: 21,
            year: 2009,
            owner: 'Petro I.O',
         },
         {
            id: 2,
            title: 'Company 2',
            rate: 15,
            year: 2017,
            owner: 'Oleh K.O',
         },
      ],
      filterObj: {
         title: {
            name: 'Title',
            value: null,
         },
         rate: {
            name: 'Rate',
            value: null,
         },
         year: {
            name: 'Year',
            value: null,
         },
         owner: {
            name: 'Owner',
            value: null,
         },
      },
   },
   getters: {
      getFilterObj: (state) => state.filterObj,
      getCompaniesList: ({ companiesList, filterObj }) => {
         const title = filterObj.title.value
         const rate = filterObj.rate.value
         const year = filterObj.year.value
         const owner = filterObj.owner.value
         return companiesList.filter((company) => {
            return (
               (!title || company.title.toLowerCase().startsWith(title.toLowerCase())) &&
               (!rate || rate == company.rate) &&
               (!year || company.year == year) &&
               (!owner || company.owner.toLowerCase().includes(owner.toLowerCase()))
            )
         })
      },
      getCompanyById: (state) => (id) => {
         //return state.companiesList.find((company) => company.id == id)
         return { ...state.companiesList.find((company) => company.id == id) }
      },
   },
   mutations: {
      onUpdateFilter(state, { key, value }) {
         state.filterObj[key] = { ...state.filterObj[key], value }
      },
      addCompany(state, company) {
         state.companiesList.push(company)
      },
      onUpdateCompany(state, company) {
         state.companiesList.forEach((companyFromList, indx) => {
            if (companyFromList.id === company.id) {
               state.companiesList[indx] = company
               return
            }
         })
      },
      onRemoveCompany(state, id) {
         state.companiesList = state.companiesList.filter((company) => company.id !== id)
      },
   },
   actions: {
      updateFilter({ commit }, data) {
         commit('onUpdateFilter', data)
      },
      addCompany({ commit }, company) {
         commit('addCompany', company)
      },
      updateCompany({ commit }, company) {
         commit('onUpdateCompany', company)
      },
      removeCompany({ commit }, id) {
         commit('onRemoveCompany', id)
      },
   },
})
