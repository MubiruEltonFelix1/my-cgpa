# Resources Module Rollout Execution Brief

## Purpose
This document is my one-page execution summary for the Resources module rollout. It captures what was decided, how access works, what is ready to implement, and what is queued next.

## Rollout Objective
Deliver a shared past papers system where:
- Google Drive stores files.
- The app stores and reads metadata.
- Students can quickly browse, search, preview, and download resources.
- Upload and moderation are controlled by role.

## Final Architecture
- File hosting: Google Drive
- Catalog store (MVP): Google Sheet (`resources_catalog`)
- App integration: metadata-driven list and filters
- File actions: Drive preview/download links via `fileId`

## Access Policy (Selected: Option A)
- Read access: public (anyone with link/app access)
- Upload access: restricted to uploader and moderator/admin accounts
- Moderation and delete/archive: moderator/admin only

## Role Permissions
| Action | Viewer | Uploader | Moderator/Admin |
|---|---|---|---|
| Browse/search resources | Yes | Yes | Yes |
| Open/preview/download | Yes | Yes | Yes |
| Upload new resource | No | Yes | Yes |
| Approve/reject pending upload | No | No | Yes |
| Delete/hide resource | No | No | Yes |

## Drive Structure Standard
- Root: `SE_GRADE_TRACKER_RESOURCES`
- Path pattern: `{PROGRAM}/{SEMESTER}/{YEAR}/{TYPE}`
- Example: `BSE/Y3S2/2024/FINAL`

## File Naming Standard
Pattern:
- `{COURSECODE}_{TYPE}_{YEAR}_{SESSION}_{VARIANT}.{ext}`

Examples:
- `CSC3201_FINAL_2024_MAIN_V1.pdf`
- `CSC3201_FINAL_2024_MAIN_SOLUTION.pdf`

## Metadata Contract (MVP)
Required operational fields:
- `resourceId`, `fileId`, `title`, `courseCode`, `semKey`, `year`, `type`
- `program`, `session`, `variant`
- `fileName`, `fileExt`, `fileSizeBytes`
- `uploadedBy`, `uploadedAt`, `updatedAt`
- `status`, `isDeleted`

Status workflow:
- New uploader submission -> `PENDING`
- Moderator/admin direct upload -> `APPROVED`
- Archive/soft delete -> `ARCHIVED` + `isDeleted=true`

## Validation Rules
- Course code format: uppercase 3 letters + 4 digits
- Semester keys: `Y1S1` to `Y4S2`
- Allowed types: `FINAL`, `MIDTERM`, `CAT`, `QUIZ`, `ASSIGNMENT`, `OTHER`
- Allowed extensions: `pdf`, `doc`, `docx`, `ppt`, `pptx`, `zip`
- Max file size: 25 MB
- Duplicate block key: `courseCode + type + year + session + variant`

## Read/Display Integration
- Show viewer list from approved, non-deleted catalog rows only
- Search fields: title, course code, filename
- Filters: semester, year, type, session, course
- Default sorting: newest first (`uploadedAt desc`)
- Open URL: `https://drive.google.com/file/d/{fileId}/view`
- Download URL: `https://drive.google.com/uc?export=download&id={fileId}`

## UX and Reliability
- Thumbnails via Drive thumbnail endpoint, with fallback icons by file type
- Graceful broken-link handling with retry and moderator reporting path
- Mobile nav keeps Resources under More panel to avoid bottom-bar congestion
- Cached fallback available during temporary fetch issues

## QA and Launch Readiness
Validated areas:
- Upload, list, preview, download, hide/archive on desktop and mobile
- Role-based access behavior (viewer/uploader/moderator-admin)
- Error-path behavior for missing or inaccessible files

Launch mode:
- Soft launch for 72 hours to selected student group
- Monitor upload failures, broken links, and metadata quality

## Current Status
- Week plan execution completed from Day 1 through Day 7
- Definition of done achieved
- Rollout documentation approved and implementation-ready

## Phase 2 Backlog
- Move catalog from Google Sheet to Firestore
- Add bulk historical import tool
- Add in-app moderation queue UI
- Add advanced filtering and issue analytics
