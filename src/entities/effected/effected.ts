// GENERATED FOR SCENARIO TESTING PURPOSES. DO NOT MODIFY BY HAND

export interface Effected {
  /**
   * Globally unique identifier for this effected object.
   */
  id: string;
  /**
   * IFS system identifier for this Effected.
   */
  ifsId: string;
  /**
   * Entity type discriminator. Always "Effected" for Effected entities.
   */
  entityType: "Effected";
  /**
   * Timestamp when this effected object was created.
   */
  createdAt: string;
  /**
   * Timestamp when this effected object was last updated.
   */
  updatedAt: string;
  [k: string]: unknown;
}
