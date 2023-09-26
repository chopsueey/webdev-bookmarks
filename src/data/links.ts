// type Link = {
// topic: string,
// url: string,
// website: string
// }

interface Collection {
  topic: string;
  url: string;
  homepage: string;
  homepageUrl: string;
}

// {
//     topic: "",
//     url: "",
//     homepage: "",
//     homepageUrl: "",
// },

const HTML: Collection[] = [
  {
    topic: "HTML Elements overview",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
    homepage: "developer.mozilla.org - mdn",
    homepageUrl: "https://developer.mozilla.org/en-US/",
  },
  {
    topic: "Content categories",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories",
    homepage: "developer.mozilla.org - mdn",
    homepageUrl: "https://developer.mozilla.org/en-US/",
  },
  {
    topic: "Semantic HTML",
    url: "https://www.freecodecamp.org/news/semantic-html5-elements/",
    homepage: "freecodecamp.org",
    homepageUrl: "https://www.freecodecamp.org/",
  },
  {
    topic: "HTML Entities",
    url: "https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references",
    homepage: "whatwg.org",
    homepageUrl: "https://whatwg.org/",
  },
  {
    topic: "HTML Forms",
    url: "https://html.com/forms/",
    homepage: "html.com",
    homepageUrl: "https://html.com/",
  },
  {
    topic: "HTML <input>",
    url: "https://www.w3schools.com/tags/tag_input.asp",
    homepage: "w3schools.com",
    homepageUrl: "https://www.w3schools.com/",
  },
  {
    topic: "HTML attribute: pattern",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern",
    homepage: "developer.mozilla.org - mdn",
    homepageUrl: "https://developer.mozilla.org/en-US/",
  },
  {
    topic: "HTML table layout",
    url: "https://css-tricks.com/snippets/html/empty-table-markup/",
    homepage: "css-tricks.com",
    homepageUrl: "https://css-tricks.com",
  },
];

export { HTML };
