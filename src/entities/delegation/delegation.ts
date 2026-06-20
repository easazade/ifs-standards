// GENERATED FOR SCENARIO TESTING PURPOSES. DO NOT MODIFY BY HAND

export interface Delegation {
  /**
   * Globally unique identifier for this delegation.
   */
  id: string;
  /**
   * IFS system identifier for this Delegation.
   */
  ifsId: string;
  /**
   * Entity category for this object, normally Delegation.
   */
  entityType: string;
  /**
   * Timestamp when this delegation record was created.
   */
  createdAt: string;
  /**
   * Timestamp when this delegation record was last updated.
   */
  updatedAt?: string;
  /**
   * Identifier of the permission delegated from the delegator to the delegate.
   */
  permissionId: string;
  permission?: Permission;
  /**
   * Reference to the role or member delegating the permission.
   */
  delegatorRef: string;
  /**
   * Reference to the role or member receiving the delegated permission.
   */
  delegateRef: string;
  /**
   * Lifecycle state of the delegation.
   */
  state: "active" | "revoked" | "expired";
  /**
   * Timestamp when this delegation was revoked, if applicable.
   */
  revokedAt?: string;
  /**
   * Optional timestamp after which this delegation no longer applies.
   */
  expiresAt?: string;
  [k: string]: unknown;
}
/**
 * Permission entity represented by permissionId when expanded by an implementation.
 */
export interface Permission {
  /**
   * Globally unique identifier for this permission.
   */
  id: string;
  /**
   * IFS system identifier for this Permission.
   */
  ifsId: string;
  /**
   * Entity type discriminator. Always "Permission" for Permission entities.
   */
  entityType: "Permission";
  /**
   * Name of the action this permission is for
   */
  actionName?: string;
  /**
   * Id of the action object this permission is for
   */
  actionId: string;
  /**
   * Identifier of the member receiving this permission.
   */
  memberId?: string;
  /**
   * Identifier of the role receiving this permission.
   */
  roleId?: string;
  /**
   * Identifier of the scope object where this permission applies.
   */
  scopeId: string;
  /**
   * Scope object describing the system, project, process, area, or other bounded context where this permission applies.
   */
  scope?: {
    [k: string]: unknown;
  };
  /**
   * Lifecycle state of the permission. Example values may include drafted, under-review, active, suspended, or revoked.
   */
  state: "granted" | "under-review" | "revoked" | "drafted";
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
