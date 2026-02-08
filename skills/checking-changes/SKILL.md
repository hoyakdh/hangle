---
name: checking-changes
description: Validates all code changes before committing by running format, lint, type, and unit test checks. Use after making backend (Python) or frontend (TypeScript) changes, before committing or finishing a work session.
---

# Checking Changes

**Run at the end of a work session** or after completing a set of changes — not after every small edit.

```bash
npm run lint && npm run build
```

This runs linting (ESLint) and building (TypeScript check + Vite build) on the project.

## Workflow

1. Run `npm run lint && npm run build`
2. If issues are found:
   - Fix the reported errors
   - Re-run the command
   - Repeat until all checks pass
3. Only consider work complete when the command succeeds

## Notes

- E2E tests are not included; use `make run-e2e-test e2e_playwright/<test>_test.py` separately if needed
