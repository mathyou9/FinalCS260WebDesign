var app = new Vue({
  el: '#app',
  data: {
    entries: []
  },
  created() {
    this.getEntries();
  },
  methods: {
    async getEntries(){
      try {
        let response = await axios.get("/api/entries");
        this.entries = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    formatDate(date){
      if(moment(date).diff(Date.now(), 'days') < 15) {
        return moment(date).fromNow();
      } else {
        return moment(date).format('d MMMM YYYY');
      }
    }
  }
});
