// GENERATED FOR SCENARIO TESTING PURPOSES. DO NOT MODIFY BY HAND

export interface Rule {
  /**
   * Globally unique identifier for this rule.
   */
  id: string;
  /**
   * IFS system identifier for this Rule.
   */
  ifsId: string;
  /**
   * Entity category for this object, normally Rule.
   */
  entityType: string;
  /**
   * Timestamp when this rule record was created.
   */
  createdAt: string;
  /**
   * Timestamp when this rule record was last updated.
   */
  updatedAt: string;
  [k: string]: unknown;
}
