/**
 * Static protocol catalog for demos. In a real app this often comes from an API.
 */
export const PROTOCOLS = [
  { id: 'iso-22000', title: 'ISO 22000 — Food safety' },
  { id: 'brcgs-food', title: 'BRCGS Food Safety' },
  { id: 'ifs-food', title: 'IFS Food Standard' },
];

export function getProtocolById(id) {
  return PROTOCOLS.find((p) => p.id === id);
}
