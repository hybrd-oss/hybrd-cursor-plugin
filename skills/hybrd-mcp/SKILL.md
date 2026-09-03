---
name: hybrd-mcp
description: Use HYBRD MCP to work with an athlete's approved training profile and workouts.
---

# HYBRD MCP

Use HYBRD MCP only after the athlete has completed the HYBRD OAuth sign-in in Cursor.

## Connection and access

- Verify the connection with `get_account` before saying HYBRD is connected or using athlete data.
- HYBRD MCP grants your agent profile and workout read/write access. Integration read/write access is coming soon.
- Never ask for, store, or type an athlete's HYBRD password. The athlete signs in on a HYBRD-hosted OAuth page.
- If HYBRD tools are unavailable after sign-in, ask the athlete to reconnect or reload Cursor, then verify with `get_account`.

## Safe tool use

- Treat the MCP server's live tool discovery and tool schemas as the source of truth. Do not invent tools, arguments, or access.
- Use only the signed-in athlete's HYBRD data.
- Before creating or changing a workout, profile fact, or benchmark, summarize the intended change and obtain the athlete's confirmation in the current conversation.
- After a successful write, report exactly what changed and any relevant HYBRD response.
