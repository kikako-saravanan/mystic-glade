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
          light: "#ede7f6",        // Soft lavender background
          lightgray: "#d1c4e9",    // Light purple for subtle elements
          gray: "#9575cd",         // Vibrant violet for secondary text
          darkgray: "#5e35b1",     // Rich indigo for strong contrast
          dark: "#311b92",         // Deep purple for headers and important elements
          secondary: "#7c4dff",    // Electric purple for buttons and links
          tertiary: "#6200ea",     // Vivid deep violet for subheadings
          highlight: "rgba(98, 0, 234, 0.2)",  // Transparent purple for background highlights
          textHighlight: "#651fff88", // Neon violet text highlight
        },
        darkMode: {
          light: "#1e1b2d",        // Dark, muted blue-violet background
          lightgray: "#2a2540",    // Soft grayish-indigo for contrast
          gray: "#524e74",         // Muted violet-gray for secondary elements
          darkgray: "#a3a0c2",     // Soft lavender-gray for text
          dark: "#c4c1e0",         // Gentle pastel violet for main text
          secondary: "#817caa",    // Muted soft purple for buttons and links
          tertiary: "#5b5789",     // Deep indigo-violet for headings
          highlight: "rgba(75, 70, 109, 0.3)",  // Soft twilight violet for background highlights
          textHighlight: "#9a97c6", // Gentle light blue-violet for text highlights
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
