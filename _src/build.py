#!/usr/bin/env python3
"""Baut die Website aus den Quelldateien in diesem Ordner.

Aufruf aus dem Ordner _src heraus:  python3 build.py

Erzeugt
  ../index.html            vollständige, eigenständige Seite für GitHub Pages
  artifact.html            Fassung für den Artifact-Viewer auf claude.ai (nicht einchecken)

Schriften und Abbildungen werden als data-URI eingebettet. Die Seite lädt damit nichts
von fremden Servern nach, auch keine Google Fonts.
"""
import base64
import pathlib

SRC = pathlib.Path(__file__).parent
REPO = SRC.parent

TITLE = "Prävention im Trainingsalltag"
DESC = ("Bachelorarbeit von Jonathan Sommerer (DHfPG, 2026): Konzept für einen Prototyp, mit dem "
        "ehrenamtliche Trainerinnen und Trainer mehrdeutige Situationen aus dem Trainingsalltag üben, "
        "entwickelt für den Post SV Nürnberg.")
REPO_URL = "https://github.com/JontheMaster/Bachelor-Arbeit"

FONTS = [
    ("Big Shoulders Display Variable", "normal", "fonts/big-shoulders-display-latin-wght-normal.woff2", "100 900"),
    ("Atkinson Hyperlegible Next Variable", "normal", "fonts/atkinson-hyperlegible-next-latin-wght-normal.woff2", "200 800"),
    ("Atkinson Hyperlegible Next Variable", "italic", "fonts/atkinson-hyperlegible-next-latin-wght-italic.woff2", "200 800"),
    ("Atkinson Hyperlegible Mono Variable", "normal", "fonts/atkinson-hyperlegible-mono-latin-wght-normal.woff2", "200 800"),
]
LATIN = ("U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,"
         "U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD")

FIGURES = {
    "__ABB1__": ("img/abb1-aktivitaetsdiagramm.png", "image/png"),
    "__ABB2__": ("img/abb2-klassendiagramm.svg", "image/svg+xml"),
    "__ABB3__": ("img/abb3-wireframes.webp", "image/webp"),
}

FAVICON = ("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E"
           "%3Crect width='32' height='32' rx='6' fill='%23143B6C'/%3E"
           "%3Crect x='5' y='8' width='22' height='16' fill='none' stroke='%23fff' stroke-width='1.6'/%3E"
           "%3Cline x1='16' y1='8' x2='16' y2='24' stroke='%23fff' stroke-width='1.6'/%3E"
           "%3Ccircle cx='16' cy='16' r='3.4' fill='none' stroke='%23E8C547' stroke-width='1.6'/%3E%3C/svg%3E")


def b64(rel):
    return base64.b64encode((SRC / rel).read_bytes()).decode("ascii")


def font_css():
    out = []
    for fam, style, rel, wght in FONTS:
        out.append(
            "@font-face{font-family:'%s';font-style:%s;font-display:swap;font-weight:%s;"
            "src:url(data:font/woff2;base64,%s) format('woff2');unicode-range:%s;}" % (fam, style, wght, b64(rel), LATIN))
    return "\n".join(out)


def fill(text):
    for key, (rel, mime) in FIGURES.items():
        text = text.replace(key, "data:%s;base64,%s" % (mime, b64(rel)))
    return text.replace("__REPO__", REPO_URL)


css = font_css() + "\n" + (SRC / "style.css").read_text(encoding="utf-8")
body = (SRC / "page.html").read_text(encoding="utf-8")
js = (SRC / "data.js").read_text(encoding="utf-8") + "\n" + (SRC / "app.js").read_text(encoding="utf-8")

# Artifact-Fassung: ohne doctype/html/head/body, der Viewer ergänzt das Gerüst
artifact = fill(
    f"<title>{TITLE}</title>\n"
    '<meta name="claude:viewport-fit-sides" content="cover">\n'
    f"<style>\n{css}\n</style>\n{body}\n<script>\n{js}\n</script>\n")
(SRC / "artifact.html").write_text(artifact, encoding="utf-8")

# GitHub-Pages-Fassung: vollständiges Dokument
page = fill(
    "<!doctype html>\n<html lang=\"de\">\n<head>\n"
    '<meta charset="utf-8">\n'
    '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
    f'<title>{TITLE} · Bachelorarbeit Jonathan Sommerer</title>\n'
    f'<meta name="description" content="{DESC}">\n'
    '<meta name="author" content="Jonathan Sommerer">\n'
    f'<meta property="og:title" content="{TITLE}">\n'
    f'<meta property="og:description" content="{DESC}">\n'
    '<meta property="og:type" content="website">\n'
    '<meta name="color-scheme" content="light dark">\n'
    f'<link rel="icon" href="{FAVICON}">\n'
    f"<style>\n{css}\n</style>\n</head>\n<body>\n{body}\n<script>\n{js}\n</script>\n</body>\n</html>\n")
(REPO / "index.html").write_text(page, encoding="utf-8")

print(f"index.html: {len(page)/1024:.0f} KB · artifact.html: {len(artifact)/1024:.0f} KB")
