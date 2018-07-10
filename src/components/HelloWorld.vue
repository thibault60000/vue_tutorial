<template>
   <div>
      <h1> Hello {{ person.firstname }} {{ person.lastname }} de {{ from }} ! </h1>
   </div>

</template>

<script>
export default{
  data () {
    return {
      person: {
        firstname: 'John',
        lastname: 'Doe'
      },
      from: 'New York'
    }
  }
}
</script>

<style>
</style>
