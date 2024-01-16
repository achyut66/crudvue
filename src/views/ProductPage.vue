<!-- AboutPage.vue -->
<template>
  <div class="container">
    <div class="headPage">Banners</div>
    <div class="btnClass"><button class="btn btn-success">Add New</button></div>
    <div class="card">
      <table class="table table-bordered table responsive">
        <thead class="">
          <tr>
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
  name: "AboutPage",
};
</script>

<style scoped>
.btnClass {
  text-align: right;
  border-radius: 6px;
  padding: 7px 9px;
}
.headPage {
  text-align: left;
}
/* Add your styles here */
</style>
