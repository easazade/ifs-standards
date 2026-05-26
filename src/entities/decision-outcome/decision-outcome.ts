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
   * Id of previous DecisionOutcome if there was one
   */
  previousOutcomeId?: string;
  previousOutcome?: DecisionOutcome1;
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
/**
 * Previous DecisionOutcome if there was one
 */
export interface DecisionOutcome1 {
  /**
   * Globally unique identifier for this decision outcome.
   */
  id: string;
  /**
   * IFS system identifier for this DecisionOutcome.
   */
  ifsId: string;
  /**
   * Id of previous DecisionOutcome if there was one
   */
  previousOutcomeId?: string;
  previousOutcome?: DecisionOutcome2;
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
/**
 * Previous DecisionOutcome if there was one
 */
export interface DecisionOutcome2 {
  /**
   * Globally unique identifier for this decision outcome.
   */
  id: string;
  /**
   * IFS system identifier for this DecisionOutcome.
   */
  ifsId: string;
  /**
   * Id of previous DecisionOutcome if there was one
   */
  previousOutcomeId?: string;
  previousOutcome?: DecisionOutcome2;
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
