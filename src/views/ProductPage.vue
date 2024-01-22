<!-- AboutPage.vue -->
<template>
  <div class="container">
    <div class="btnClass"><router-link to="/addproduct"><button class="btn btn-success">Add New</button></router-link></div>
    <div class="card">
      <table class="table table-bordered table responsive table-striped">
        <thead class="">
          <tr class="theadclass">
            <td colspan="5">Products Name</td>
          </tr>
          <tr>
            <td>S.No.</td>
            <td>Products Name</td>
            <td>Category</td>
            <td>Quantity</td>
            <td>#</td>
          </tr>
        </thead>
        
        <tbody>
          <tr>
            <td>1.</td>
            <td>Laptop</td>
            <td>Dell</td>
            <td>10</td>
            <td>
              <button class="btn btn-warning">Edit</button>
              || <span> <button class="btn btn-danger">Delete</button></span>
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
export default {
  name: "ProductPage",
};
</script>

<style src="../css/style.css">

/* Add your styles here */
</style>
