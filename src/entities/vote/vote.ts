// GENERATED FOR SCENARIO TESTING PURPOSES. DO NOT MODIFY BY HAND

export interface Vote {
  /**
   * Globally unique identifier for this vote.
   */
  id: string;
  /**
   * IFS system identifier for this Vote.
   */
  ifsId: string;
  /**
   * Entity category for this object, normally Vote.
   */
  entityType: string;
  /**
   * Timestamp when this vote record was created.
   */
  createdAt: string;
  /**
   * Timestamp when this vote record was last updated.
   */
  updatedAt: string;
  [k: string]: unknown;
}
