export default function (context) {
  if (context.store.getters['auth/isAuthenticated']) {
    console.log('[Middleware] Disable Access to Login')
    context.redirect('/home')
  }
}
