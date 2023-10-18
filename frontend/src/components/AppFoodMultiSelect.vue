<template>
    <div class="secondaryContainer" style="color: #3a2a1c;">
        <div class="dropdown" @click="toggleDropdown">
            <button class="dropdown-button">{{ buttonTitle }}</button>
            <div class="dropdown-content" v-if="isDropdownOpen">
                <div v-for="(group, groupIndex) in optionGroups" :key="groupIndex">
                    <h3>{{ group.groupName }}</h3>
                    <a
                            v-for="(option, optionIndex) in group.options"
                            :key="optionIndex"
                            @click="handleOptionClick(option)"
                            class="dropdown-option"
                    >{{ option }}</a>
                </div>
            </div>
        </div>
        <div class="secondaryContainer" style="background-color: #4f8646ad; width: 50%;">
            <h4>{{ notesTitle }}</h4>
            <ul>
                <li v-for="(selectedOption, index) in selectedOptions" :key="index">{{ selectedOption }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        optionGroups: Array,
        buttonTitle: String,
        notesTitle: String,

    },
    data() {
        return {
            isDropdownOpen: false,
            selectedOptions: [],
        };
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        handleOptionClick(option) {
            if (this.selectedOptions.includes(option)) {
                // Si el elemento ya está seleccionado, lo eliminamos de selectedOptions
                this.selectedOptions = this.selectedOptions.filter((item) => item !== option);
            } else {
                // Si no está seleccionado, lo agregamos a selectedOptions
                this.selectedOptions.push(option);
            }
        },
    },
};
</script>


<style>
/* Contenedor del dropdown */
.dropdown {
    position: relative;
    display: inline-block;
}

/* Botón que activa el dropdown */
.dropdown-button {
    background-color: black;
    color: #fff;
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    margin-bottom: 8px;
    margin-top: 8px;
}

/* Contenido del dropdown */
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
    max-height: 150px; /* Altura máxima antes de que el contenido se vuelva scrolleable */
    overflow-y: auto; /* Habilita el scroll vertical cuando se supera la altura máxima */
}

/* Estilo de las opciones del dropdown */
.dropdown-option {
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    color: #333;
}

/* Estilo de las opciones al pasar el ratón por encima */
.dropdown-option:hover {
    background-color: #ddd;
}

/* Muestra el contenido del dropdown al pasar el ratón por encima del botón */
.dropdown:hover .dropdown-content {
    display: block;
}

</style>
