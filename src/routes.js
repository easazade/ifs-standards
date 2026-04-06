export const SEGMENTS = Object.freeze({
  PROTOCOL: 'protocol',
  ABOUT: 'about',
})

export const ROUTES = Object.freeze({
  HOME: '/',
  PROTOCOL: `/${SEGMENTS.PROTOCOL}`,
  PROTOCOL_DETAIL: (id) => `/${SEGMENTS.PROTOCOL}/${id}`,
  ABOUT: `/${SEGMENTS.ABOUT}`,
})
