// notification message component
Vue.component('notification-message', {
    template: '#notification-message-template',
    props: {
        type: {
            type: String,
            required: true
        },
        header: {
            type: String,
            required: true
        }
        // Attempted to pass a method as props from parent(root instance). 
        // this is bad practice!
    },
    computed: {
        // returns a completed string with the updated type value based on the passed prop
        notificationMessageClass: function(type) {
            return `ui ${this.type} message` 
        }
    },
    data() {
        return {
            // property that determines the presence of the notification message in the DOM
            hidden: false
        }
    },
    methods: {
        // method to alter the hidden value in data when the close icon is selected
        closeNotificationMessage() {
            this.hidden = true
        }
    }
})

new Vue({
    el: '#app'
})