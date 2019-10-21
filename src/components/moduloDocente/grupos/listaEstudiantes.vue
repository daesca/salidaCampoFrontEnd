<template>
    <div id="listaEstudiantes">
        <v-simple-table>
            <template v-slot:default>
                <thead>

                </thead>
                <tbody>
                    <tr v-for="(estudiante, index) in lista" :key="index" >
                        <td>{{ estudiante }}</td>
                    </tr>
                </tbody>
            </template>
        <v-simple-table>
    </div>
</template>
<script>
export default {
    name: 'listaEstudiantes',
    data: () => ({
        lista: [
            {
                nombre: "Estudiante 1"
            },
            {
                nombre: "Estudiante 2"
            },
            {
                nombre: "Estudiante 3"
            },
            {
                nombre: "Estudiante 4"
            },
            {
                nombre: "Estudiante 5"
            }
        ]

    })
}
</script>