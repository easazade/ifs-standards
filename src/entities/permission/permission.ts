// GENERATED FOR SCENARIO TESTING PURPOSES. DO NOT MODIFY BY HAND

export interface Permission {
  /**
   * Globally unique identifier for this permission.
   */
  id: string;
  /**
   * Stable IFS entity identifier for Permission.
   */
  ifsId: string;
  /**
   * Human-readable or machine-readable permission name, such as ACCESS_SYSTEM_DOCUMENTS or ADMIN.
   */
  name: string;
  /**
   * Identifier of the actor receiving this permission.
   */
  actorId: string;
  /**
   * Identifier of the scope object where this permission applies.
   */
  scopeId: string;
  /**
   * Scope object describing the system, project, process, area, or other bounded context where this permission applies.
   */
  scope: {
    [k: string]: unknown;
  };
  /**
   * Lifecycle state of the permission. Example values may include drafted, under-review, active, suspended, or revoked.
   */
  state: 'granted' | 'under-review' | 'revoked' | 'drafted';
  /**
   * Timestamp when this permission record was created.
   */
  createdAt: string;
  /**
   * Timestamp when this permission record was last updated.
   */
  updatedAt?: string;
  /**
   * Optional timestamp after which this permission no longer applies.
   */
  expiresAt: string;
  [k: string]: unknown;
}
