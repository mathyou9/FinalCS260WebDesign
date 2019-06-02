var app = new Vue({
  el: '#app',
  data: {
    clients: [],
    client: null,
    pets: [],
    showAddClient: false,
    showViewClient: false,
    clientName: '',
    clientAddress: '',
    clientPhone: '',
    petName: '',
    petType: '',
    error: ''
  },
  created() {
    this.getClients();
  },
  methods: {
    showAddClientModal() {
      this.clientName = '';
      this.clientAddress = '';
      this.clientPhone = '';
      this.error = '';
      this.showAddClient = true;
    },
    closeAddClientModal() {
      this.showAddClient = false;
    },
    showViewClientModal() {
      this.petName = '';
      this.petType = '';
      this.error = '';
      this.showViewClient = true;
    },
    closeViewClientModal() {
      this.showViewClient = false;
      this.pets = [];
    },
    selectClient(client) {
      this.client = client;
      this.getPets(client);
      this.showViewClientModal();
    },
    async getClients() {
      try {
        let response = await axios.get("/api/clients");
        this.clients = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getPets(client) {
      try {
        let response = await axios.get("/api/clients/" + client._id + "/pets");
        this.pets = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async addClient() {
      try {
        let response = await axios.post("/api/clients", {
          name: this.clientName,
          address: this.clientAddress,
          phone: this.clientPhone
        });
        this.closeAddClientModal();
        this.getClients();
      } catch (error) {
        console.log(error);
        this.error = error.response.data.message;
      }
    },
    async addPet(client) {
      try {
        let response = await axios.post("/api/clients/" + client._id + "/pets", {
          name: this.petName,
          type: this.petType,
        });
        this.petName = '';
        this.petType = '';
        this.error = '';
        this.getPets(client);
      } catch (error) {
        console.log(error);
        this.error = error.response.data.message;
      }

    }
  }
});
