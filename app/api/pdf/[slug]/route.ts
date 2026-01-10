export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { projectData } from "@/app/projects/projectData"; // ✅ correct import

export async function GET(
  request: NextRequest,
  context: { params: { slug: string } } // ✅ params is NOT a Promise
) {
  const { slug } = context.params; // ✅ no await

  const project = projectData[slug as keyof typeof projectData];

  if (!project) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const pdfContent = `
${project.title}

${project.description}
`;

  return new NextResponse(pdfContent, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${slug}.pdf"`,
    },
  });
}
