import nuxtConfig from '@/nuxt.config'
import * as questionsService from "@/services/questionsService";

export default ({ app, store }) => {
    questionsService._initialize(store)
}