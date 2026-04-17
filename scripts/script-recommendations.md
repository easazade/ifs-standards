# Script Recommendations

This file tracks ideas for scripts that could reduce token usage and agent cost.

## Criteria for Adding Ideas

- Must reduce token usage by at least 5% in typical scenarios
- Must NOT negatively affect task outcome quality
- Must NOT increase agent cost (more computation = bad)
- Must NOT duplicate Pencil MCP functionality

## How to Use

- At each run's start, briefly review this file
- When encountering a task that is:
  - Context-heavy (requires many file reads, deep searches)
  - Tedious (repetitive across multiple files)
  - Token-costly (high context requirements)
- Document the task here with: what, why costly, potential solution
- Flag for discussion - do NOT auto-implement

## Ideas

(None yet - add as you encounter patterns)

---

## Pencil Workflow Ideas

> Scripts below are candidates - not yet implemented. Exclude batch relabel (MCP supports it via pencil_batch_design).

### 1. Token Extractor

- **What**: Sync from `.pen` variables → `design/tokens.json`.
- **Why**: Reverse of `sync-tokens.sh`. Keeps codebase truth updated if visual design changes in Pencil UI.
- **Safety Requirements**:
  - **Dry Run**: Must show a diff of changes before writing.
  - **Manual Only**: Never runs automatically; requires user confirmation.
  - **Git Check**: Only runs if `tokens.json` has no unstaged changes.
- **Token Savings**: **2–5%** (High accuracy/speed impact, low token impact).
- **Status**: Recommended (with safeguards).

### 2. Component Inventory

- **What**: Scan `design/*.pen` → `design/inventory.md`.
- **Why**: Lists all `reusable` nodes, their properties, and usage counts. Agent avoids repeated deep searches.
- **MCP Overlap**: `pencil_batch_get` provides raw data; script provides a persistent, searchable summary.
- **Token Savings**: **20–30%** (Biggest impact; eliminates large exploratory JSON reads).
- **Status**: Recommended.

### 3. Style Audit

- **What**: Scan nodes → flag values not in `tokens.json`.
- **Why**: Ensures adherence to `DESIGN.md`.
- **MCP Overlap**: `pencil_search_all_unique_properties` lists values; script compares them against the token whitelist.
- **Token Savings**: **10–15%** (Reduces repetitive listing of unique properties).
- **Status**: Recommended.

### 4. hygiene (Orphans & Structure)

- **What**: Find unused components, deeply nested frames (>5), or misaligned nodes (off-grid).
- **Why**: Keeps design files clean and efficient for MCP.
- **MCP Overlap**: None. MCP is for manipulation; script is for linting.
- **Token Savings**: **15–20%** (Prevents deep-tree scanning which is very expensive).
- **Status**: Recommended.

### 5. Accessibility (Contrast)

- **What**: Scan text + background fills → report contrast ratios.
- **Why**: Compliance with accessibility standards without manual math.
- **MCP Overlap**: None.
- **Token Savings**: **5–10%** (Saves reading node properties for manual math).
- **Status**: Recommended.

---

## Rejected / Redundant Ideas

- **Batch Relabel**: Duplicate. `pencil_batch_design` handles batch updates natively.
- **Spec Generator**: Redundant. `DESIGN.md` and `specs/` are manually maintained; auto-generated specs often add noise/stale data.
