<template>
  <div class="container">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">Select Banner Images</div>
        <div class="card-body">
          <span><input type="file" name="banner" /></span>
        </div>
        <div class="card-footer btnClass">
          <button class="btn btn-success">Save</button>
        </div>
      </div>
    </div>
  </div>
  <div class="container bannercon">
    <div class="col-md-12">
      <table class="table table-bordered table-responsive">
        <thead class="">
          <tr>
            <td>S.No</td>
            <td>Banner's Name</td>
            <td>Type</td>
            <td>#</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>SlideBar banner</td>
            <td>.jpg</td>
            <td>
              <button class="btn btn-warning">Edit</button> ||
              <span> <button class="btn btn-danger">Delete</button></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style src="../css/style.css"></style>
