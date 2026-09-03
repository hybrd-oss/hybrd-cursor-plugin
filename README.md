# HYBRD Cursor Plugin

Connect Cursor agents to the HYBRD training system and mobile app through HYBRD MCP.

Learn more about HYBRD MCP at [hybrd.com/mcp](https://www.hybrd.com/mcp).

## Why use it

Most AI training conversations end as unstructured advice in a chat. HYBRD MCP connects a Cursor agent to the training system and mobile app where the athlete's approved context and structured workouts live. That lets the agent work from real training context and turn an approved plan into a workout the athlete can use in HYBRD.

## What you can use it for

- Review the connected athlete's approved training context and current plan.
- Turn an agreed training session into a structured scheduled or completed workout when the live MCP tools support it.
- Keep training conversations connected to the HYBRD mobile app instead of manually copying workouts out of chat.
- Verify the connected account before using athlete data, then clearly report any confirmed change.

The live MCP tool catalog and schemas are authoritative: use the tools Cursor discovers for the connected account rather than assuming a fixed capability set.

## What it includes

- A remote MCP server configuration for `https://mcp.hybrd.com/mcp`.
- A HYBRD skill for safe account verification and workout/profile workflows.
- A `/connect-hybrd` command that guides OAuth sign-in and verifies the connected account.

HYBRD MCP grants your agent profile and workout read/write access. Integration read/write access is coming soon.

## Install

Once this plugin is available in Cursor Marketplace, open **Customize**, find **HYBRD**, and install it at user or project scope. Enable the HYBRD MCP server, complete the HYBRD OAuth sign-in in your browser, then run `/connect-hybrd`.

Sign in with the same account you use in the HYBRD mobile app. Cursor and HYBRD use OAuth; this plugin never stores an API key or your HYBRD password.

## Verify

Run `/connect-hybrd`. It completes only when the MCP `get_account` tool returns successfully. If the tool is not available after sign-in, reload Cursor or reconnect the HYBRD MCP server and try again.

## Local development

Clone this repository, then install it into Cursor's local plugin directory:

```sh
mkdir -p ~/.cursor/plugins/local
ln -s "$(pwd)" ~/.cursor/plugins/local/hybrd
```

Reload Cursor, open **Customize**, and confirm that the HYBRD MCP server, `hybrd-mcp` skill, and `/connect-hybrd` command are present. Complete OAuth and verify with `get_account` before testing any athlete data.

Validate package structure with:

```sh
npm run validate
```

## Safety

- Do not ask for, store, or type an athlete's HYBRD password.
- Treat live MCP tool discovery and schemas as the source of truth.
- Before changing a workout, profile fact, or benchmark, summarize the change and obtain confirmation in the current conversation.
- Use only the signed-in athlete's HYBRD data.

## Support

For help, visit [HYBRD Support](https://www.hybrd.com/support). Review the [Privacy Policy](https://www.hybrd.com/privacy) and [Terms](https://www.hybrd.com/terms).

## License

[MIT](LICENSE)
