import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Kikako",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "kikako-saravanan.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Offside",
        body: "Overpass",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#e8f5e9",        // Soft mint green background
          lightgray: "#c8e6c9",    // Pale green for subtle elements
          gray: "#81c784",         // Vibrant leaf green for secondary text
          darkgray: "#388e3c",     // Deep forest green for contrast
          dark: "#1b5e20",         // Rich green for headings and key elements
          secondary: "#43a047",    // Bright emerald green for buttons and accents
          tertiary: "#2e7d32",     // Darker jungle green for subheadings
          highlight: "rgba(67, 160, 71, 0.2)",  // Soft transparent green for background highlights
          textHighlight: "#66bb6a88", // Muted neon green for text highlights
        },
        darkMode: {
          light: "#1e2b1e",        // Deep jungle green background
          lightgray: "#2a3d2a",    // Soft muted green for UI elements
          gray: "#4f7050",         // Muted olive-green for secondary elements
          darkgray: "#a8c3a5",     // Soft sage green for text
          dark: "#cfe8cf",         // Gentle pastel green for main text
          secondary: "#81c784",    // Muted emerald for buttons and links
          tertiary: "#5a9e5d",     // Deep moss green for headings
          highlight: "rgba(100, 150, 100, 0.3)",  // Soft forest green for background highlights
          textHighlight: "#a5d6a7", // Gentle light green for text highlights
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
