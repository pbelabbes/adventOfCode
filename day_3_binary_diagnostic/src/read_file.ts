const fs = require('fs');
const readline = require('readline');

export async function parseFile(filePath: string): Promise<string[]> {
  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  const lines: string[] = [];
  for await (const line of rl) {
    lines.push(line);
  }
  return lines;
}
