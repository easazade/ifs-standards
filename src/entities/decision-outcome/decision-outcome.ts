// GENERATED FOR SCENARIO TESTING PURPOSES. DO NOT MODIFY BY HAND

export interface DecisionOutcome {
  /**
   * Globally unique identifier for this decision outcome.
   */
  id: string;
  /**
   * IFS system identifier for this DecisionOutcome.
   */
  ifsId: string;
  /**
   * Entity category for this object, normally DecisionOutcome.
   */
  entityType: string;
  /**
   * Timestamp when this decision outcome record was created.
   */
  createdAt: string;
  /**
   * Timestamp when this decision outcome record was last updated.
   */
  updatedAt: string;
  [k: string]: unknown;
}
