// GENERATED FOR SCENARIO TESTING PURPOSES. DO NOT MODIFY BY HAND

export type Scope = {
  [k: string]: unknown;
} & {
  /**
   * Globally unique identifier for this scope.
   */
  id: string;
  /**
   * Stable IFS entity identifier for Scope.
   */
  ifsId: string;
  /**
   * Human-readable name of the scope.
   */
  name: string;
  /**
   * Optional human-readable explanation of what this scope includes and excludes.
   */
  description?: string;
  /**
   * Primary boundary type used by this scope. Use mixed when the scope combines locations, groups, objects, or entities.
   */
  type: "location" | "group" | "object" | "entity" | "mixed";
  /**
   * Location identifiers or names included in this scope. Kept as strings for now.
   *
   * @minItems 1
   */
  locations?: [string, ...string[]];
  /**
   * Group identifiers or names included in this scope. Kept as strings for now.
   *
   * @minItems 1
   */
  groups?: [string, ...string[]];
  /**
   * Object identifiers or names included in this scope. Kept as strings for now.
   *
   * @minItems 1
   */
  objects?: [string, ...string[]];
  /**
   * Entity identifiers or names included in this scope. Kept as strings for now.
   *
   * @minItems 1
   */
  entities?: [string, ...string[]];
  /**
   * Identifier of a broader parent scope, when this scope is nested inside another scope.
   */
  parentScopeId?: string;
  /**
   * Identifiers of narrower child scopes contained by this scope.
   */
  childScopeIds?: string[];
  /**
   * Member or steward identifiers responsible for maintaining this scope definition.
   */
  stewardIds?: string[];
  /**
   * Role entities whose authority applies inside this scope.
   */
  roles?: Role[];
  /**
   * Permission entities whose authority applies inside this scope.
   */
  permissions?: Permission[];
  /**
   * Embedded scope-local rules for inclusion, exclusion, inheritance, or conflict resolution. This is not a referenced entity because boundary logic may be implementation-specific.
   */
  boundaryRules?: {
    [k: string]: unknown;
  };
  /**
   * Lifecycle state of the scope.
   */
  state: "drafted" | "under-review" | "active" | "suspended" | "revoked" | "expired";
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
/**
 * Scope entity describing where this role applies.
 */
export type Scope1 = {
  [k: string]: unknown;
} & {
  /**
   * Globally unique identifier for this scope.
   */
  id: string;
  /**
   * Stable IFS entity identifier for Scope.
   */
  ifsId: string;
  /**
   * Human-readable name of the scope.
   */
  name: string;
  /**
   * Optional human-readable explanation of what this scope includes and excludes.
   */
  description?: string;
  /**
   * Primary boundary type used by this scope. Use mixed when the scope combines locations, groups, objects, or entities.
   */
  type: "location" | "group" | "object" | "entity" | "mixed";
  /**
   * Location identifiers or names included in this scope. Kept as strings for now.
   *
   * @minItems 1
   */
  locations?: [string, ...string[]];
  /**
   * Group identifiers or names included in this scope. Kept as strings for now.
   *
   * @minItems 1
   */
  groups?: [string, ...string[]];
  /**
   * Object identifiers or names included in this scope. Kept as strings for now.
   *
   * @minItems 1
   */
  objects?: [string, ...string[]];
  /**
   * Entity identifiers or names included in this scope. Kept as strings for now.
   *
   * @minItems 1
   */
  entities?: [string, ...string[]];
  /**
   * Identifier of a broader parent scope, when this scope is nested inside another scope.
   */
  parentScopeId?: string;
  /**
   * Identifiers of narrower child scopes contained by this scope.
   */
  childScopeIds?: string[];
  /**
   * Member or steward identifiers responsible for maintaining this scope definition.
   */
  stewardIds?: string[];
  /**
   * Role entities whose authority applies inside this scope.
   */
  roles?: Role[];
  /**
   * Permission entities whose authority applies inside this scope.
   */
  permissions?: Permission[];
  /**
   * Embedded scope-local rules for inclusion, exclusion, inheritance, or conflict resolution. This is not a referenced entity because boundary logic may be implementation-specific.
   */
  boundaryRules?: {
    [k: string]: unknown;
  };
  /**
   * Lifecycle state of the scope.
   */
  state: "drafted" | "under-review" | "active" | "suspended" | "revoked" | "expired";
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

export interface Role {
  /**
   * Globally unique identifier for this role.
   */
  id: string;
  /**
   * Stable IFS entity identifier for Role.
   */
  ifsId: string;
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
  scope: Scope1;
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
