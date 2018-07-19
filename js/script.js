const regional_ex = ['coinbase', 'bitfinex', 'kraken', 'ydbic', 'binance',]




const purchaseSettingsComponent = Vue.component('purchase-settings', {
    template: '#ps',
    methods: {
        onChangeEvent(event, from) {
            this.$emit('on-change-handler', {value: event.target.value, from})
        }
    }
})

const app = new Vue({
    el: '#vue-app',
    components: {
        purchaseSettingsComponent
    },
    data(){
        return {
            mockData: [],
            mockDataBlue: [],
            mockDataRed: [],
            activeTab: 2,
            toolbarTitles: ['RealTime Quote Feed', 'Second Title', 'Third Title'],
            currentToolbarTitle: 0 
        }
    },
    
    methods: {
        changeToolbarTitle(action) {
            if(action == '+') {
                this.currentToolbarTitle === this.toolbarTitles.length - 1 ? this.currentToolbarTitle = 0 : this.currentToolbarTitle ++
            } else {
                this.currentToolbarTitle === 0 ? this.currentToolbarTitle = this.toolbarTitles.length - 1 : this.currentToolbarTitle --
            }
        }
    },
        
    beforeMount() {
        for(let i = 0; i < 30; i++) {
            this.mockData.push({
                price: (Math.random() / 10).toFixed('8'),
                amt: (Math.random() * 10).toFixed('8'),
                regionalExData: regional_ex[(Math.floor(Math.random() * (regional_ex.length-1 - 0 + 1)) + 0)],
                color: (Math.random() * 10) > 5 ? 'blue' : 'red',
            })
        }
        this.mockDataBlue = this.mockData.filter(item => item.color === 'blue')
        this.mockDataRed = this.mockData.filter(item => item.color === 'red')
    }
})




