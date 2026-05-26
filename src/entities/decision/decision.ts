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

export interface Decision {
  /**
   * Globally unique identifier for this decision.
   */
  id: string;
  /**
   * IFS system identifier for this Decision.
   */
  ifsId: string;
  /**
   * Entity category for this object, normally Decision.
   */
  entityType: string;
  /**
   * Stable IFS reference to the object, proposal, rule, resource, or question being decided. Kept as a reference string because a decision subject can point to heterogeneous resources.
   */
  subject: string;
  /**
   * Current lifecycle state of the decision.
   */
  state: "open" | "closed" | "rejected" | "cancelled";
  outcome?: DecisionOutcome;
  /**
   * Member entities eligible to participate in this decision.
   */
  eligibleMembers: Member[];
  /**
   * Member entities affected by this decision under the IFS scope rule.
   */
  affectedMembers: Member[];
  /**
   * Vote entities cast directly by members or by delegates acting on their behalf.
   */
  votes: Vote[];
  /**
   * Rule entities that govern eligibility, delegation, quorum, thresholds, timing, or outcome calculation for this decision.
   */
  rules?: Rule[];
  /**
   * Snapshot count of members eligible to participate.
   */
  eligibleMemberCount: number;
  /**
   * Snapshot count of members affected by this decision.
   */
  affectedMemberCount: number;
  /**
   * Snapshot count of votes currently recorded for this decision.
   */
  voteCount: number;
  /**
   * Snapshot count of votes cast by delegates on behalf of eligible members.
   */
  delegateVoteCount?: number;
  /**
   * Timestamp when this decision opened for participation.
   */
  openedAt: string;
  /**
   * Optional timestamp when this decision closed.
   */
  closedAt?: string;
  /**
   * Optional timestamp when this decision was cancelled.
   */
  cancelledAt?: string;
  /**
   * Optional timestamp when participation, vote data, or outcome was verified.
   */
  verifiedAt?: string;
  /**
   * Optional timestamp when this decision produced an approved outcome.
   */
  approvedAt?: string;
  /**
   * Optional timestamp when this decision was rejected or produced a rejected outcome.
   */
  rejectedAt?: string;
  /**
   * Timestamp when this decision record was created.
   */
  createdAt: string;
  /**
   * Timestamp when this decision record was last updated.
   */
  updatedAt: string;
  [k: string]: unknown;
}
/**
 * Current outcome of the decision, if the decision has produced an outcome at least once.
 */
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
