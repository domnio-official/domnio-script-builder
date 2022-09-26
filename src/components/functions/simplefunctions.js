import { ref } from "vue";
import BlocklyComponent from "../BlocklyComponent.vue";
import Theme from '@blockly/theme-dark';
import Swal from "sweetalert2";
import JSZip from "jszip";
// import * as save from './components/save-load';
import Blockly from "blockly";
import BlocklyJS from "blockly/javascript";




function clearWorkspace(workspace) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "The workspace will be cleared. You can undo this by pressing the \"undo\" button.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            workspace.clear();
          swalWithBootstrapButtons.fire(
            'Done!',
            'The workspace has been cleared',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {}
      })
}

export { clearWorkspace }