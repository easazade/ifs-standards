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
/**
 * Primary Scope entity that bounds who is legitimately affected by and authorized to review this change.
 */
export type Scope1 = {
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

export interface Change {
  /**
   * Globally unique identifier for this change.
   */
  id: string;
  /**
   * IFS system identifier for this Change.
   */
  ifsId: string;
  /**
   * Entity type discriminator. Always "Change" for Change entities.
   */
  entityType: "Change";
  /**
   * Human-readable title summarizing the proposed change.
   */
  title: string;
  /**
   * Detailed explanation of what this change proposes and why it is needed.
   */
  description: string;
  /**
   * String references to the objects, entities, records, rules, or resources that this change intends to modify.
   */
  changes: string[];
  /**
   * Recent Comment entities for this change, such as the first page of comments.
   */
  comments?: Comment[];
  /**
   * URL where the full comment thread for this change can be fetched or viewed.
   */
  commentsUrl?: string;
  /**
   * ReviewComment entities tied to changed objects, fields, records, or diff entries.
   */
  reviewComments?: ReviewComment[];
  /**
   * Member entities that authored or co-authored this change.
   */
  authors: Member[];
  /**
   * Identifier of the primary member responsible for this change.
   */
  mainAuthorId: string;
  mainAuthor: Member1;
  /**
   * Member entities requested or assigned to review this change.
   */
  reviewers?: Member[];
  /**
   * Lifecycle status of the change.
   */
  status: "drafted" | "closed" | "open" | "rejected" | "approved" | "merged";
  /**
   * URL showing a diff for all changed objects, similar to a GitHub pull request diff.
   */
  diffUrl?: string;
  /**
   * Human-friendly sequence number for this change inside the relevant system or scope.
   */
  number: number;
  /**
   * Label assigned to this change.
   */
  labels?: string[];
  /**
   * Identifier of the effected object for this change.
   */
  effectedId?: string;
  effected: Effected;
  /**
   * Whether this change has been merged into the target system state.
   */
  merged: boolean;
  /**
   * Whether this change currently conflicts with another change or with the target system state.
   */
  hasConflict: boolean;
  /**
   * Any links related to this change.
   */
  links?: string[];
  /**
   * Identifier of the primary IFS scope where this change is proposed or reviewed.
   */
  scopeId: string;
  scope: Scope1;
  /**
   * Timestamp when this change was created.
   */
  createdAt: string;
  /**
   * Timestamp when this change was last updated.
   */
  updatedAt: string;
  /**
   * Optional timestamp when this change was merged.
   */
  mergedAt?: string;
  /**
   * Optional timestamp when this change was closed without being merged.
   */
  closedAt?: string;
  [k: string]: unknown;
}
export interface Comment {
  /**
   * Globally unique identifier for this comment.
   */
  id: string;
  /**
   * IFS system identifier for this Comment.
   */
  ifsId: string;
  /**
   * Entity type discriminator. Always "Comment" for Comment entities.
   */
  entityType: "Comment";
  /**
   * Timestamp when this comment was created.
   */
  createdAt: string;
  /**
   * Timestamp when this comment was last updated.
   */
  updatedAt: string;
  [k: string]: unknown;
}
export interface ReviewComment {
  /**
   * Globally unique identifier for this review comment.
   */
  id: string;
  /**
   * IFS system identifier for this ReviewComment.
   */
  ifsId: string;
  /**
   * Entity type discriminator. Always "ReviewComment" for ReviewComment entities.
   */
  entityType: "ReviewComment";
  /**
   * Timestamp when this review comment was created.
   */
  createdAt: string;
  /**
   * Timestamp when this review comment was last updated.
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
/**
 * Primary member responsible for this change.
 */
export interface Member1 {
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
/**
 * Effected entity describing members, organizations, locations, entities, objects, scopes, or other participants affected by this change.
 */
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
