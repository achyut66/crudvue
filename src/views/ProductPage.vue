<!-- AboutPage.vue -->
<template>
  <div class="container">
    <div class="btnClass"><router-link to="/addproduct"><button class="btn btn-success">Add New</button></router-link></div>
    <div class="card">
      <table class="table table-bordered table responsive table-striped">
        <thead class="">
          <tr class="theadclass">
            <td colspan="6">Products Name</td>
          </tr>
          <tr>
            <td>S.No.</td>
            <td>Product Code No</td>
            <td>Product Category</td>
            <td>Products Name</td>
            <td>Quantity</td>
            <td>#</td>
          </tr>
        </thead>
        
        <tbody>
          <tr v-for="(product, index) in products" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ product.p_code_no }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.p_name }}</td>
            <td>{{ product.quantity }}</td>
            <td>
              <button @click="editProduct(product.id)" class="btn btn-warning">Edit</button>
              || <span>
              <button @click="deleteProduct(product.id)" class="btn btn-danger">Delete</button>
              </span>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td class="text-left">Total</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {name: "ProductPage",
  data() {
    return {
      products: [], // Initialize the products array
    };
  },
  mounted() {
    axios.get('http://localhost:3000/api/product_details')
  .then((resp) => {
    this.products = resp.data;
    console.log('Response:', resp.data);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

  }
};
</script>

<style src="../css/style.css">

/* Add your styles here */
</style>
