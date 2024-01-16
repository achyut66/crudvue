<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">Add Details Here</div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <label class="label_class">Products Code No:</label>
            <span><input type="text" name="p_code_no" class="form-control" v-model="p_code_no" /></span>
          </div>
          <div class="col-md-2">
            <label class="label_class">Category:</label>
            <span>
              <select class="select2 form-control first_select" name="category" v-model="category">
                <option value="0">--Select--</option>
                <option value="1">PC</option>
                <option value="2">Mobile Phones</option>
                <option value="3">Electronics</option>
              </select>
            </span>
          </div>
          <div class="col-md-2">
            <label class="label_class">Products Name:</label>
            <span>
              <select class="select2 form-control" name="p_name" v-model="p_name">
                <option value="0">--Select--</option>
                <option value="1">MacBook</option>
                <option value="2">Dell</option>
                <option value="3">Acer</option>
                <option value="4">iPhone</option>
                <option value="5">Nokia</option>
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
                v-model="quantity"
                min="0"
                max="1000"
                step="1"
              />
            </span>
          </div>
        </div>
      </div>
        <div class="card-footer btnClass">
      <button class="btn btn-success" @click="saveData">Save</button>
      </div>
    </div>
  </div>
</template>
<!-- <link src="../script/select2.js"> -->
<script src="../script/select2">

// export default {
//   data() {
//     return {
//       formData: {
//         p_code_no: "12356",
//         category: "PC",
//         p_name: "Dell",
//         quantity: 10
//       }
//     };
//   },
  
//   methods: {
//     saveData() {
//       // Send formData to the server
//       console.log("Saving data:", this.formData);
//       // Here, you would typically make an API request to save data on the server
//     }
//   }
// };
</script>

<style src="../css/style.css"></style>
