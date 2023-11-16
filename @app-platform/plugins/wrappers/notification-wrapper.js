import * as notificationService from '../../services/notificationService'

export default (ctx, inject) => {
  notificationService.initialize(ctx.$dialog, ctx.$store)
  inject('notifications', notificationService.default)
}
