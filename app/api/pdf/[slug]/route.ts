import { NextResponse } from "next/server";
import { projectData } from "@/app/projects/projectData";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  const project = projectData[params.slug as keyof typeof projectData];

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
      "Content-Disposition": `attachment; filename="${params.slug}.pdf"`,
    },
  });
}
