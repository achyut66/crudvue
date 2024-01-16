import $ from "jquery";
import "select2/dist/css/select2.css";
import "select2";


export default {
  mounted() {
    $(".select2").select2();
  },
};