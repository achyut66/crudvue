<template>
  <div class="container">
    <div class="col-md-12 col12">
      <div class="row">
        <div class="col-md-4">
          <div class="card col4">
            <hr class="hr" />
            <p class="pclasss">No Of Banners</p>
            <span><i class="bx bx-notepad banneri"></i></span
            ><span class="count">10</span>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card col5">
            <hr class="hr" />
            <p class="pclasss">No Of Products</p>
            <span><i class="bx bx-notepad banneri"></i></span>
            <span class="count">10</span>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card col6">
            <hr class="hr" />
            <p class="pclasss">No Of Files</p>
            <span><i class="bx bx-notepad banneri"></i></span
            ><span class="count">10</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container anothercon">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-6">
          <table class="table table-bordered table-responsive table-striped">
            <thead class="thead">
              <tr class="theadclass">
                <td colspan="4">Banners</td>
              </tr>
              <tr class="tbodyclass">
                <td>S.No</td>
                <td>Banner's Name</td>
                <td>Type</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Banner1</td>
                <td>JPG</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Banner2</td>
                <td>JPG</td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Banner3</td>
                <td>JPG</td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Banner4</td>
                <td>JPG</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-6">
          <table class="table table-bordered table-responsive table-striped">
            <thead class="thead">
              <tr class="theadclass">
                <td colspan="4">Products</td>
              </tr>
              <tr class="tfootclass">
                <td>S.No</td>
                <td>Products's Name</td>
                <td>Category</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Dell</td>
                <td>Pc</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>MacBookAir</td>
                <td>Pc</td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Nokia</td>
                <td>Mobiles</td>
              </tr>
              <tr>
                <td>4.</td>
                <td>IPhone13</td>
                <td>Mobiles</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.col4 {
  background-image: url("../assets/img1.jpg");
  height: 135px;
  border-radius: 15px;
}
.col5 {
  background-image: url("../assets/img2.jpg");
  height: 135px;
  border-radius: 15px;
}
.col6 {
  background-image: url("../assets/img3.jpg");
  height: 135px;
  border-radius: 15px;
}
.hr {
  border: 2px solid blue;
  width: 135px;
}
.pclasss {
  color: navy;
  font-weight: bold;
  font-family: cursive;
}
.banneri {
  font-size: 2.5em;
}
.count {
  font-family: cursive;
  margin-left: 50px;
  margin-top: -35px;
  font-size: 22px;
}
.col12 {
  margin-top: 65px;
}
.anothercon{
  margin-top:25px;
}
.theadclass{
  background-color: #A9CCE3;
}
/* .tfootclass{
  background-color: #A9CCE3;
} */
</style>
