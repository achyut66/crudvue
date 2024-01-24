<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">Add Details Here</div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <label class="label_class">Products Code No:</label>
            <span><input type="text" name="p_code_no" class="form-control" v-model="formData.p_code_no" /></span>
          </div>
          <div class="col-md-2">
            <label class="label_class">Category:</label>
            <span>
              <select class="select2 form-control first_select" name="category" v-model="formData.category">
                <option value="0">--Select--</option>
                <option value="PC">PC</option>
                <option value="Mobile Phones">Mobile Phones</option>
                <option value="Electronics">Electronics</option>
              </select>
            </span>
          </div>
          <div class="col-md-2">
            <label class="label_class">Products Name:</label>
            <span>
              <select class="select2 form-control" name="p_name" v-model="formData.p_name">
                <option value="0">--Select--</option>
                <option value="MacBook">MacBook</option>
                <option value="Dell">Dell</option>
                <option value="Acer">Acer</option>
                <option value="iPhone">iPhone</option>
                <option value="Nokia">Nokia</option>
              </select>
            </span>
          </div>
          <div class="col-md-2">
            <label class="label_class">Quantity:</label>
            <span>
              <input
                class="form-control"
                id="quantity"
                type="number"
                name="quantity"
                v-model="formData.quantity"
                min="0"
                max="1000"
                step="1"
              />
            </span>
          </div>
        </div>
      </div>
      <div class="card-footer btnClass">
        <button class="btn btn-success" @click="saveData">Save Data</button>
      </div>
    </div>
    <alert-modal ref="alertModal"></alert-modal>
  </div>
</template>

<script>
import axios from 'axios';
import AlertModal from "@/components/AlertModal.vue";
export default {
  components: {
    AlertModal,
  },
  data() {
    return {
      formData: {
        p_code_no: '',
        category: '0',
        p_name: '0',
        quantity: 0,
      },
    };
  },
  methods: {
  async saveData() {
  try {
    console.log('Sending data:', this.formData);
    const response = await axios.post('http://localhost:3000/api/product_details', this.formData);

    console.log('Response:', response);

    if (response.status === 200) {
      this.$refs.alertModal.openModal('Data Saved Successfully', response);
      
    } else {
      this.$refs.alertModal.openModal('Failed to save data: ' + response.statusText);
    }
  } catch (error) {
    console.error('Error saving data in vue:', error);
    this.$refs.alertModal.openModal('Error saving data in vue: ' + error.message);
  }
  this.$router.push('/productpage');
},

    clearForm() {
      // Clear form data after submission
      this.formData = {
        p_code_no: '',
        category: '0',
        p_name: '0',
        quantity: 0,
      };
    },
  },
};
</script>
<style src="../css/style.css">

</style>