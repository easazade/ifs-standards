export const SEGMENTS = Object.freeze({
  PROTOCOL: 'protocol',
  ABOUT: 'about',
  FAQ: 'faq',
});

export const ROUTES = Object.freeze({
  HOME: '/',
  PROTOCOL: `/${SEGMENTS.PROTOCOL}`,
  PROTOCOL_DETAIL: (id) => `/${SEGMENTS.PROTOCOL}/${id}`,
  ABOUT: `/${SEGMENTS.ABOUT}`,
  FAQ: `/${SEGMENTS.FAQ}`,
});
