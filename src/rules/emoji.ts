import { nameToEmoji } from "gemoji";
import MarkdownIt from "markdown-it";
import emojiPlugin from "markdown-it-emoji";

export default function emoji(md: MarkdownIt) {
  return emojiPlugin(md, {
    defs: nameToEmoji,
    shortcuts: {},
  });
}
