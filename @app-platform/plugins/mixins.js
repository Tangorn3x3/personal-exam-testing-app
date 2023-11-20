import Vue from 'vue'
import {mapActions, mapMutations, mapState,} from "vuex";
Vue.mixin({
    data: () => ({

    }),
    computed: {
        ...mapState('utils', ['isBackButtonVisible', 'isMenuButtonVisible']),
        isFullyPublic() {
            return true
        },
        headerTitle() {
            return this.$store.state.utils.title
        },
    },
    methods: {
        ...mapActions('utils', { showSnackbar: 'showSnackbar' }),
        ...mapMutations('utils', { setMenuButtonVisibility: 'setMenuButtonVisibility', setBackButtonVisibility: 'setBackButtonVisibility'}),
        can (permission) {
            return this.$store.getters['permissions/can'](permission)
        },
        setTitle (title) {
            this.$store.commit('utils/setTitle', title)
        },
        enableBackButton () {
            this.setBackButtonVisibility(true)
        },
        disableBackButton () {
            this.setBackButtonVisibility(false)
        },
        enableMenuButton () {
            this.setMenuButtonVisibility(true)
        },
        disableMenuButton () {
            this.setMenuButtonVisibility(false)
        }
    }
})
