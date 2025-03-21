import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  const buffer = await readFile(
    path.join(process.cwd(), "src/app/assets", "cv.pdf")
  );

  const headers = new Headers();
  headers.append("Content-Disposition", 'attachment; filename="cv.pdf"');
  headers.append("Content-Type", "pdf");
  console.log(buffer);

  return new Response(buffer, {
    headers,
  });
}
