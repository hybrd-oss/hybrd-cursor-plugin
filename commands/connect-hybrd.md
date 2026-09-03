---
name: connect-hybrd
description: Connect HYBRD MCP in Cursor and verify the athlete account.
---

# Connect HYBRD

1. Confirm that the HYBRD MCP server is enabled in Cursor's Customize view.
2. Start the HYBRD OAuth sign-in flow and give the athlete the browser URL or prompt. Wait for them to sign in with the same account they use in the HYBRD mobile app and approve access.
3. Never ask for or handle the athlete's HYBRD password.
4. Call `get_account` to verify the connection.
5. Report the connected HYBRD account and approved access. Do not claim success unless `get_account` succeeds.

If `get_account` is unavailable after sign-in, ask the athlete to reload Cursor or reconnect the HYBRD MCP server, then retry verification.
