import { OutputTarget } from '../Summary';
import fs from 'fs';
export class HTMLReport implements OutputTarget {
  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis Output</h1>
        <h2>${report}</h2>
      </div>
    `;
    fs.writeFileSync('report.html', html);
  }
}