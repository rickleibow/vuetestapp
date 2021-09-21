<template>
    <div>
        <form action="">
            <input type="text" name="" id="username" placeholder="Username">

            <button @click="submit">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        methods: {
            submit() {
            this.$emit('submit', this.email)
            }
        }
    }
</script>

<style scoped>

</style>