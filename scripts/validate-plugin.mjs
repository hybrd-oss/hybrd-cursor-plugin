import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const pluginRoot = process.cwd();
const readJson = (path) => JSON.parse(readFileSync(resolve(pluginRoot, path), 'utf8'));
const readText = (path) => readFileSync(resolve(pluginRoot, path), 'utf8');
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const manifest = readJson('.cursor-plugin/plugin.json');
assert(manifest.name === 'hybrd', 'Plugin name must be hybrd.');
assert(manifest.version === '1.0.0', 'Plugin version must be 1.0.0.');
assert(manifest.mcpServers === './mcp.json', 'Manifest must load the root MCP configuration.');
assert(manifest.skills === './skills', 'Manifest must load the HYBRD skill directory.');
assert(manifest.commands === './commands', 'Manifest must load the connect command directory.');
assert(!('variables' in manifest), 'HYBRD OAuth must not require plugin variables.');

const mcp = readJson('mcp.json');
const server = mcp.mcpServers?.hybrd;
assert(server?.url === 'https://mcp.hybrd.com/mcp', 'MCP URL must use the canonical HYBRD endpoint.');
assert(Object.keys(server).length === 1, 'MCP configuration must not contain headers or credentials.');

const skill = readText('skills/hybrd-mcp/SKILL.md');
assert(skill.startsWith('---\nname: hybrd-mcp\n'), 'HYBRD skill frontmatter is invalid.');
assert(skill.includes('get_account'), 'HYBRD skill must require account verification.');

const command = readText('commands/connect-hybrd.md');
assert(command.startsWith('---\nname: connect-hybrd\n'), 'Connect command frontmatter is invalid.');
assert(command.includes('get_account'), 'Connect command must verify the account.');

console.log('HYBRD Cursor plugin is valid.');
