<template>
    <div id="charge-file-component">
    	<v-row>
    		<v-col cols="6">
		        <v-file-input
		        	:rules = "formFileInput"
		        	accept=".xls,.xlsx" 
		        	label="Cargar maestros" 
		        	v-model = "file"
		      		name="docentes"
		        >
		        </v-file-input>
		    </v-col>
		    <v-col cols="6">
	        	<v-btn class="info" @click="cargarArchivo">Cargar archivo</v-btn>
		    </v-col>
    	</v-row>
    </div>
</template>
<script>
export default {
    
	name: "pruebas-excel",
	data: () => ({

		file: [],
		//formFileInput:[ v => !!v || this.file.type != ".xls" || "Formato no admitido" , v => !!v || this.file.type != ".xlsx" || "Formato no admitido"]
	}),
	methods:{
		cargarArchivo(){

			const formData = new FormData();

			formData.append("docentes", this.file);

			// this.$http.post("http://localhost:8000/public/receiveExcel", formData, {
			// 	headers:{
			// 		'Content-Type': 'multipart/form-data',
   //          'Access-Control-Allow-Origin': '*',
   //          'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
   //          'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
   //          'Accept': 'application/json'
			// 	}
			// }).then(res=>{

			// 	alert(res);

			// }, error => {

			// 	console.log("TODO ESTALLÓ");
			// })

			var req = new XMLHttpRequest();

			req.open("POST", "http://localhost:8000/public/receiveExcel", true);
			req.setRequestHeader("Content-Type", 'multipart/form-data');
			req.setRequestHeader("Access-Control-Allow-Origin", '*');
			req.setRequestHeader("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept');
			req.setRequestHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS, DELETE');
			req.send(null);
			if (req.status == 200) dump(req.responseText);

		}
	}
}
</script>
<style lang="stylus" scoped>

</style>