var app = new Vue({
  el: '#app',
  data: {
    author: "",
    title: "",
    entry: "",
    created: "",
    message: ""
  },
  methods: {
    async upload() {
      if(!this.author){
        this.message = "Please enter an Authors name."
      } else{
        if(!this.title){
          this.message = "Please enter a Title."
        } else {
          if(!this.entry){
            this.message = "Please enter an Entry."
          } else {
            try {
              let response = await axios.post("/api/entries", {
                author: this.author,
                title: this.title,
                entry: this.entry,
                created: this.created,
              });
              this.author = "",
              this.title = "",
              this.entry = "",
              this.created = "",
              this.message = "Successfully posted new blog post!"
            } catch (error) {
              this.message = "Something went wrong! Please try again."
              console.log(error);
            }
          }
        }
      }
    }
  }
});
