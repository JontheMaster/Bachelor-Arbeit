#!/usr/bin/env python3
"""Baut aus den Content-Fragmenten die Artifact- und die GitHub-Fassung."""
import pathlib

# Aus dem Ordner _src heraus aufrufen: python3 build.py
# SITE sind die Quellfragmente (dieser Ordner), REPO ist das Repository-Wurzelverzeichnis.
SITE = pathlib.Path(__file__).parent
REPO = SITE.parent

CSS = (SITE / "style.css").read_text(encoding="utf-8")

FONTS = (
    '<link rel="preconnect" href="https://fonts.googleapis.com">\n'
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?'
    'family=IBM+Plex+Mono:wght@400;500;600&amp;'
    'family=IBM+Plex+Sans:wght@400;500;600&amp;'
    'family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&amp;display=swap">'
)

ART_INDEX = "https://claude.ai/code/artifact/793e1a22-d60b-41a0-abae-e5570b657626"
ART_MODELL = "https://claude.ai/code/artifact/dad808cc-ebc7-40c6-a74b-138645f8a509"

PAGES = [
    {
        "content": "index.content.html",
        "title": "Projektakte Post SV",
        "desc": "Arbeitsakte zur Bachelor-Thesis: Argumentationskette, Kapitelstand, "
                "offene Punkte und die vollstaendige Anforderungsspezifikation.",
        "artifact_out": SITE / "artifact-index.html",
        "repo_out": REPO / "index.html",
    },
    {
        "content": "modell.content.html",
        "title": "Domänenmodell Szenario-Baukasten",
        "desc": "Sechzehn Klassen in drei Bereichen: das Inhaltsmodell hinter dem Prototyp, "
                "mit Kardinalitaeten und Rueckbindung an die Anforderungen.",
        "artifact_out": SITE / "artifact-modell.html",
        "repo_out": REPO / "domaenenmodell.html",
    },
]


MODEL_SVG = (SITE / "model.svg").read_text(encoding="utf-8")


def links(body, to_index, to_modell):
    return (body
            .replace("__MODEL_SVG__", MODEL_SVG)
            .replace("__PROJEKTAKTE__", to_index)
            .replace("__DOMAENENMODELL__", to_modell))


for page in PAGES:
    body = (SITE / page["content"]).read_text(encoding="utf-8")

    head = f'<title>{page["title"]}</title>\n{FONTS}\n<style>\n{CSS}\n</style>\n'

    # --- Artifact-Fassung: kein doctype/html/head/body, Querlinks auf die Artifact-URLs
    artifact = head + links(body, ART_INDEX, ART_MODELL)
    page["artifact_out"].write_text(artifact, encoding="utf-8")

    # --- GitHub-Fassung: vollstaendiges Dokument, relative Querlinks
    repo_body = links(body, "index.html", "domaenenmodell.html")
    doc = (
        "<!doctype html>\n"
        '<html lang="de">\n<head>\n'
        '<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width, initial-scale=1">\n'
        f'<meta name="description" content="{page["desc"]}">\n'
        f'<title>{page["title"]}</title>\n'
        '<link rel="icon" href="data:image/svg+xml,'
        "%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E"
        "%3Crect width='32' height='32' rx='4' fill='%230F5C63'/%3E"
        "%3Cpath d='M9 22V10h5.6c2.5 0 4.1 1.4 4.1 3.6 0 1.6-.9 2.7-2.3 3.1l2.9 5.3h-2.7l-2.6-4.9h-2.5V22H9z"
        "m2.5-6.9h2.8c1.3 0 2.1-.6 2.1-1.6s-.8-1.6-2.1-1.6h-2.8v3.2z' fill='%23fff'/%3E%3C/svg%3E"
        '">\n'
        f"<style>\n{CSS}\n</style>\n"
        "</head>\n<body>\n"
        + repo_body
        + "\n</body>\n</html>\n"
    )
    page["repo_out"].write_text(doc, encoding="utf-8")
    print(f'{page["title"]}: {page["artifact_out"].name} + {page["repo_out"].name}')
