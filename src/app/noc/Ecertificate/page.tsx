import { certificates } from "@/lib/certificates";
import React from "react";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function EcertificatePage({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  const q = resolvedParams.q;

  if (!q || typeof q !== "string" || !certificates[q]) {
    return (
      <div style={{ backgroundColor: "white", minHeight: "100vh", padding: "20px" }}>
        <p style={{ color: "black", margin: 0, fontFamily: "sans-serif" }}>Certificate not found</p>
      </div>
    );
  }

  const certificate = certificates[q];

  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <a
        href={certificate.pdfPath}
        target="_blank"
        style={{
          color: "white",
          backgroundColor: "#3070bf",
          padding: "10px 20px",
          borderRadius: "8px",
          textDecoration: "none",
          display: "inline-block",
          width: "156px",
          textAlign: "center"
        }}
      >
        Course Certificate
      </a>
    </div>
  );
}
