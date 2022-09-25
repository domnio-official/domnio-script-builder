<script>
import { ref } from "vue";
import BlocklyComponent from "./BlocklyComponent.vue";
import './importBlocks';
import Theme from '@blockly/theme-dark';
import Swal from "sweetalert2";
import JSZip from "jszip";
import beautify from "js-beautify";
import localforage from "localforage";
import Blockly from "blockly";
import BlocklyJS from "blockly/javascript";

const foo = ref(window.parent.Document.getElementById("workspace"));

export default {
    methods: {

    }
}
</script>