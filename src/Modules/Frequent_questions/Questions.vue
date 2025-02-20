<script lang="ts">
import Question from "./Question.vue"
export default {
    name: "questions",
    components: {
        Question
    },
    data() {
        return {
            q1: false,
            q2: false,
            q3: false
        }
    },
    methods: {
    toggleQuestion(questionName: string) {
        // Recorre las claves de $data
        Object.keys(this.$data).forEach((key) => {
            // Realiza un casting para evitar el error de TypeScript
            const dataKey = key as keyof typeof this.$data;
            if (dataKey === questionName) {
                this.$data[dataKey] = !this.$data[dataKey];
            } else {
                this.$data[dataKey] = false;
            }
        });
    }
}
}
</script>

<template>
    <div class="w-screen      pt-20">
        <h1 class="text-center font-poppins text-2xl font-semibold" style="color: var(--blue-1);">Soluciones que
            transforman</h1>
        <h2 class="text-center font-poppins text-2xl font-bold">Estamos aquí para ayudarte con tu bienestar visual</h2>
        <div class="container md:flex m-auto  py-12">
            <div class="w-full md:w-1/3  md:flex md:justify-center  md:m-auto">
                <img src="@/assets/images/wommancircle.png" alt="photo" class="w-full" />
            </div>
            <div class=" w-full   md:w-3/6  px-6   ">
                <Question :state="q1"
                    :text="'Para detectar problemas visuales en tu hijo a una edad temprana, es importante observar su comportamiento y desarrollo visual. Presta atención a signos como entrecerrar los ojos, frotarse los ojos con frecuencia, acercarse mucho a los objetos para verlos, desviar un ojo o tener problemas para seguir objetos en movimiento. También puede haber señales de dificultad al reconocer caras o colores, o una falta de interés en los libros ilustrados.'"
                    :question="'¿Cómo puedo detectar problemas visuales en mi hijo a una edad temprana?'" @toggleState="toggleQuestion('q1')"/>
                <Question :state="q2"
                    @toggleState="toggleQuestion('q2')"
                    :text="'Se recomienda visitar al oftalmólogo o al optometrista al menos una vez al año para un examen de la vista, incluso si no tienes problemas visuales aparentes. Sin embargo, la frecuencia puede variar según la edad y las condiciones de salud: los niños deben hacerse un chequeo al menos a los 6 meses, a los 3 años y antes de comenzar la escuela. Los adultos jóvenes pueden acudir cada 2 años si no tienen problemas de visión, mientras que las personas mayores de 40 años o aquellas con factores de riesgo, como diabetes o antecedentes familiares de problemas oculares, deben hacerlo anualmente.'"
                    :question="'¿Con qué frecuencia debo visitar al oftalmólogo o al optometrista?'" />
                <Question :state="q3"
                    :text="'Usar gafas de sol es fundamental para proteger tus ojos de los rayos ultravioleta (UV) del sol, que pueden causar daños a largo plazo, como cataratas, degeneración macular y cáncer en los párpados. Además, ayudan a reducir el deslumbramiento, mejoran la comodidad visual y previenen el envejecimiento prematuro de la piel alrededor de los ojos. Por lo tanto, utilizar gafas de sol con protección UV adecuada no solo es una cuestión de estilo, sino también de salud ocular.'"
                    :question="'¿Por qué es importante usar gafas de sol?'" 
                    @toggleState="toggleQuestion('q3')"
                    
                    />
                    <button class="cursor-pointer px-6 py-2 mt-2 font-medium tracking-wide text-white   transition-colors duration-300 transform   rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" style="background-color: var(--blue-1);">
                        Mostrar más
                    </button>
            </div>
        </div>
    </div>
</template>