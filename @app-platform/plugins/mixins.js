import Vue from 'vue'
import {mapActions} from "vuex";
Vue.mixin({
    computed: {
        isFullyPublic() {
            return true
        },
        headerTitle() {
            return this.$store.state.utils.title
        },
    },
    methods: {
        ...mapActions('utils', { showSnackbar: 'showSnackbar' }),
        can (permission) {
            return this.$store.getters['permissions/can'](permission)
        },
        setTitle (title) {
            this.$store.commit('utils/setTitle', title)
        }
    }
})
