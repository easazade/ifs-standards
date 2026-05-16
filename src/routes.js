export const SEGMENTS = Object.freeze({
  PROTOCOL: 'protocol',
  ABOUT: 'about',
  HOW_IT_WORKS: 'HOW_IT_WORKS',
  FAQ: 'faq',
});

export const ROUTES = Object.freeze({
  INDEX: '/',
  PROTOCOL: `/${SEGMENTS.PROTOCOL}`,
  HOW_IT_WORKS: `/${SEGMENTS.HOW_IT_WORKS}`,
  PROTOCOL_DETAIL: (id) => `/${SEGMENTS.PROTOCOL}/${id}`,
  ABOUT: `/${SEGMENTS.ABOUT}`,
  FAQ: `/${SEGMENTS.FAQ}`,
});
