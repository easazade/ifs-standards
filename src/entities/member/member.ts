// GENERATED FOR SCENARIO TESTING PURPOSES. DO NOT MODIFY BY HAND

/**
 * Scope entity describing where this role applies.
 */
export type Scope = {
  [k: string]: unknown;
} & {
  /**
   * Globally unique identifier for this scope.
   */
  id: string;
  /**
   * IFS system identifier for this Scope.
   */
  ifsId: string;
  /**
   * Entity type discriminator. Always "Scope" for Scope entities.
   */
  entityType: "Scope";
  /**
   * Human-readable name of the scope.
   */
  name: string;
  /**
   * Optional human-readable explanation of what this scope includes and excludes.
   */
  description?: string;
  /**
   * Location identifiers or names included in this scope. Kept as strings for now.
   */
  locations?: string[];
  /**
   * Group identifiers or names included in this scope. Kept as strings for now.
   */
  groups?: string[];
  /**
   * Object identifiers or names included in this scope. Kept as strings for now.
   */
  objects?: string[];
  /**
   * Entity identifiers or names included in this scope. Kept as strings for now.
   */
  entities?: string[];
  /**
   * Identifier of a broader parent scope, when this scope is nested inside another scope.
   */
  parentScopeId?: string;
  /**
   * Identifiers of narrower child scopes contained by this scope.
   */
  childScopeIds?: string[];
  /**
   * Embedded scope-local rules for inclusion, exclusion, inheritance, or conflict resolution. This is not a referenced entity because boundary logic may be implementation-specific.
   */
  boundaryRules?: {
    [k: string]: unknown;
  };
  /**
   * Timestamp when this scope record was created.
   */
  createdAt: string;
  /**
   * Timestamp when this scope record was last updated.
   */
  updatedAt: string;
  [k: string]: unknown;
};

export interface Member {
  /**
   * Globally unique identifier for this member.
   */
  id: string;
  /**
   * IFS system identifier for this Member.
   */
  ifsId: string;
  /**
   * Entity type discriminator. Always "Member" for Member entities.
   */
  entityType: "Member";
  /**
   * Human-readable name of the member.
   */
  name: string;
  roles: Role[];
  permissions: Permission[];
  /**
   * Whether this member is considered an owner of the system.
   */
  isOwner: boolean;
  /**
   * Timestamp when this member record was created.
   */
  createdAt: string;
  /**
   * Timestamp when this member record was last updated.
   */
  updatedAt: string;
  [k: string]: unknown;
}
export interface Role {
  /**
   * Globally unique identifier for this role.
   */
  id: string;
  /**
   * IFS system identifier for this Role.
   */
  ifsId: string;
  /**
   * Entity type discriminator. Always "Role" for Role entities.
   */
  entityType: "Role";
  /**
   * Human-readable name of the role.
   */
  name: string;
  /**
   * Optional human-readable explanation of what this role is for.
   */
  description?: string;
  /**
   * Identifier of the member acting through this role.
   */
  memberId: string;
  /**
   * Identifier of the scope where this role has authority.
   */
  scopeId: string;
  scope: Scope;
  /**
   * Permission entities bundled into this role.
   */
  permissions: Permission[];
  /**
   * Lifecycle state of the role.
   */
  state: "drafted" | "under-review" | "active" | "suspended" | "revoked" | "expired";
  /**
   * Timestamp when this role record was created.
   */
  createdAt: string;
  /**
   * Timestamp when this role record was last updated.
   */
  updatedAt: string;
  /**
   * Optional timestamp after which this role no longer applies.
   */
  expiresAt?: string;
  [k: string]: unknown;
}
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
