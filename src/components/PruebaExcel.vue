<template>
    <div id="charge-file-component">
    	<v-row>
    		<v-col cols="6">
		        <v-file-input
		        	:rules = "formFileInput"
		        	accept=".xls,.xlsx" 
		        	label="Cargar maestros" 
		      		name="docentes"
					id="docentes"
					@change="actualizarArchivo()"
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
		archivo: '',
		formFileInput:[ 
			v => !!v || this.archivo.type != ".xls" || "Formato no admitido" , 
			v => !!v || this.archivo.type != ".xlsx" || "Formato no admitido"]
	}),
	methods:{
		actualizarArchivo(event){

			this.archivo = document.querySelector("input[name='docentes']").files[0];
			// console.log(this.archivo);
		},
		cargarArchivo(){

			const formData = new FormData();

			formData.append("docentes", this.archivo, this.archivo.name);

			console.log(formData);

			this.$http.post("http://localhost:8000/public/cargarexcel", formData, {
				headers:{
					'Content-Type': 'multipart/form-data',
           
				}
			}).then(res=>{

				console.log(res);

			}, error => {

				console.log("TODO ESTALLÓ");
			})

			var req = new XMLHttpRequest();

			// req.open("POST", "http://localhost:8000/public/cargarExcel", true);
			// req.setRequestHeader("Content-Type", 'multipart/form-data');
			// req.setRequestHeader("Access-Control-Allow-Origin", 'Content-Type');
			// req.setRequestHeader("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept');
			// req.setRequestHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS, DELETE');
			// req.setRequestHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
			// req.send(null);
			// if (req.status == 200) dump(req.responseText);

		}
	}
}
</script>
<style lang="stylus" scoped>

</style>