// GENERATED FOR SCENARIO TESTING PURPOSES. DO NOT MODIFY BY HAND

export interface Protocol {
  /**
   * identifier protocol.
   */
  id: string;
  /**
   * IFS system identifier for this Protocol.
   */
  ifsId: string;
  /**
   * Entity type discriminator. Always "Protocol" for Protocol entities.
   */
  entityType: "Protocol";
  createdAt: string;
  [k: string]: unknown;
}
