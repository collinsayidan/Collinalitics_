export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { projectData } from "@/app/projects/projectData";

export async function GET(_req: Request, { params }: any) {
  const { slug } = await params;

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
