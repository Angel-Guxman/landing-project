const endpoints = {
  auth: {
    signup: { method: 'POST', url: '/auth/v1/signup' },
    login: { method: 'POST', url: '/auth/v1/token?grant_type=password' },
    refresh: { method: 'POST', url: '/auth/v1/token?grant_type=refresh_token' },
    logout: { method: 'POST', url: '/auth/v1/logout' },
    user: { method: 'GET', url: '/auth/v1/user' },
  },
  alertas: {
    listar: { method: 'GET', url: '/functions/v1/alertas' },
    obtener: { method: 'GET', url: '/functions/v1/alertas/{id}' },
    crear: { method: 'POST', url: '/functions/v1/alertas' },
    actualizar: { method: 'PUT', url: '/functions/v1/alertas/{id}' },
    eliminar: { method: 'DELETE', url: '/functions/v1/alertas/{id}' },
  },
  pacientes: {
    listar: { method: 'GET', url: '/functions/v1/pacientes' },
    obtener: { method: 'GET', url: '/functions/v1/pacientes/{id}' },
    crear: { method: 'POST', url: '/functions/v1/pacientes' },
    actualizar: { method: 'PUT', url: '/functions/v1/pacientes/{id}' },
    eliminar: { method: 'DELETE', url: '/functions/v1/pacientes/{id}' },
  },
  perfil: {
    obtener: { method: 'GET', url: '/functions/v1/perfil' },
    crear: { method: 'POST', url: '/functions/v1/perfil' },
    actualizar: { method: 'PUT', url: '/functions/v1/perfil/{id}' },
  },
  invitacion: {
    crear: { method: 'GET', url: '/functions/v1/invitacion/crear-invitacion' },
    aceptar: { method: 'GET', url: '/functions/v1/invitacion/aceptar-invitacion' }, //se debe concatenar en apiRequest un token asi apiRequest(invitacion.aceptar, {token: tokenInvitacion})
  }
}

export default endpoints