# Resources Module Rollout Execution

## Scope
This document summarizes the full 7-day rollout plan for the Resources module and records the final approved implementation direction.

## Final Outcome
- Rollout strategy completed for Day 1 to Day 7.
- Option A selected and approved: public read + controlled upload.
- Architecture, metadata model, policy, UX, QA, and launch checks are implementation-ready.

## Architecture Decision
- File hosting: Google Drive
- Metadata catalog: Google Sheet (MVP), Firestore deferred to Phase 2
- App behavior: catalog-driven rendering with search and filters
- File actions: preview and download via Drive fileId links

## Access Policy (Option A)
- Viewers: can browse, search, preview, and download.
- Uploaders: can upload new resources but cannot approve/reject.
- Moderators/Admins: can approve/reject/archive and manage permissions.

## Folder and Naming Standards
Drive path pattern:
- SE_GRADE_TRACKER_RESOURCES/{PROGRAM}/{SEMESTER}/{YEAR}/{TYPE}

Filename pattern:
- {COURSECODE}_{TYPE}_{YEAR}_{SESSION}_{VARIANT}.{ext}

Example:
- CSC3201_FINAL_2024_MAIN_V1.pdf

## Metadata Contract (MVP)
Core fields:
- resourceId, fileId, title, courseCode, semKey, year, type
- program, session, variant
- fileName, fileExt, fileSizeBytes
- uploadedBy, uploadedAt, updatedAt
- status, isDeleted

Status logic:
- Uploader submissions: PENDING
- Moderator/Admin direct uploads: APPROVED
- Soft delete: ARCHIVED + isDeleted=true

## Validation Rules
- Course code format enforced (uppercase pattern).
- semKey allowed values fixed (Y1S1 to Y4S2).
- File extension allowlist enforced.
- Maximum file size: 25 MB.
- Duplicate guard on: courseCode + type + year + session + variant.

## Read/Display Integration
- Viewer list only includes APPROVED and non-deleted records.
- Search over title, course code, filename.
- Filters by semester, year, type, session, and course code.
- Default sort: uploadedAt descending.

Drive links:
- Preview: https://drive.google.com/file/d/{fileId}/view
- Download: https://drive.google.com/uc?export=download&id={fileId}

## UX and Error Handling
- Thumbnails from Drive with fallback icons by file type.
- Broken/missing files show graceful non-blocking errors.
- Mobile navigation keeps Resources under More panel.
- Cached fallback used during temporary fetch failures.

## QA and Launch Readiness
Validated:
- End-to-end flow on desktop and mobile.
- Role-based access behavior.
- Broken-link and permission-failure handling.

Launch mode:
- Soft launch for 72 hours.
- Monitor uploads, broken links, and metadata quality.

## Next Phase
- Firestore migration for scale.
- Bulk historical import.
- In-app moderation queue.
- Advanced filters and issue analytics.
