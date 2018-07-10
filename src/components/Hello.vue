<template>
  <div>
   <h1> {{ message }}</h1>
   <h2> Hello {{ person.firstname }} {{ person.lastname }}</h2>
   <label> Firstname : <input type="text" v-model="person.firstname" /> </label>
   <label> Lastname : <input type="text" v-model="person.lastname" /> </label>
   <label> Message : <input type="text" v-model="message" /> </label>
  </div>
</template>

<script>
export default {
  data () {
    return {
      person: {
        firstname: 'John',
        lastname: 'Doe'
      },
      message: 'Welcome!'
    }
  }
}
</script>
