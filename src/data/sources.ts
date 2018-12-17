import Source from "./source";
import { SourceId } from "./sourceId";

class Sources {
public All: Source[] =
[{
  id: SourceId.article_journal,
  name: "Journal Article",
  type: "article-journal",
  hasAutocite: true,
  fields: [{
    id: "author",
    type: "name",
    label: "Article author",
    tooltip: `Enter the author's full name if given.

Middle names can go in the *First Name* field after the first name.

If the author is a company or entity, use the option to change the author to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the author.`,
    isPrimary: true,
    isImportant: true
  },

  {
    id: "editor",
    type: "name",
    label: "Editor",
    tooltip: `Enter the editor's full name if given.

Middle names can go in the *First Name* field after the first name.

If the editor is a company or entity, use the option to change the editor to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the editor.`,
  },

  {
    id: "issued",
    type: "date",
    label: "Date published",
    tooltip: `The date of publication or copyright.`,
    isPrimary: true,
    isImportant: true
  },

  {
    id: "title",
    type: "string",
    label: "Title of article",
    tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
    isPrimary: true,
    isImportant: true,
    hasCaseCheck: true
  },

  {
    id: "containerTitle",
    type: "string",
    label: "Name of journal",
    tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
    isPrimary: true,
    isImportant: true,
    hasCaseCheck: true
  },

  {
    id: "volume",
    type: "string",
    label: "Volume number",
    tooltip: `The volume number of this particular journal.`,
    isPrimary: true,
    isImportant: true
  },

  {
    id: "issue",
    type: "string",
    label: "Issue number",
    tooltip: `The issue number of this particular journal.`,
    isPrimary: true,
    isImportant: true
  },

  {
    id: "page",
    type: "string",
    label: "Page range",
    tooltip: `The page, pages, or page range referred to. Separate each page or range with a comma.`,
    isPrimary: true
  },

  {
    id: "archive",
    type: "string",
    label: "Database name",
    tooltip: `If the article is available via a database, provide the name of the specific database.`,
  },

  {
    id: "url",
    type: "string",
    label: "URL",
    tooltip: `It's always good practice to include the full URL if the source is available online, even though it's optional for some styles (e.g. MLA).

The URL should be direct to the journal article, not the homepage or an index page which may change over time.`,
    isPrimary: true
  },

  {
    id: "accessed",
    type: "date",
    label: "Date accessed/viewed",
    tooltip: `If you entered a URL, enter the date that you visited it.

This is required if the article is not dated, or is revised often.`
  },

  {
    id: "doi",
    type: "string",
    label: "DOI",
    tooltip: `Always provide a DOI if it's available.

This is a unique identifier for the article and can be used to look up the article in the future.`,
    isPrimary: true
  },

  {
    id: "annote",
    type: "text",
    label: "Annotation",
    tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
    isPrimary: true
  }
  ]
},
{
  id: SourceId.artwork,
  name: "Artwork",
  type: "graphic",
  fields: [

    {
      id: "author",
      type: "name",
      label: "Artist",
      tooltip: `Enter the artists's full name if given.

Middle names can go in the *First Name* field after the first name.

If the author is a company or entity, use the option to change the author to an Organization.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "issued",
      type: "date",
      label: "Date published",
      tooltip: `The date of publication or copyright.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "title",
      type: "string",
      label: "Title of Artwork",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*

If the artwork is untitled use a description instead.`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "medium",
      type: "string",
      label: "Medium",
      tooltip: `The materials used or form of the artwork. E.g. Oil on canvas, sculpture etc.`,
      isPrimary: true,
      hasCaseCheck: true
    },

    {
      id: "archive",
      type: "string",
      label: "Museum or Gallery",
      tooltip: `If you viewed this artwork in a museum or gallery, provide the name or the name of the collector (e.g., Collection of Carole Server). If the collector is unknown or anonymous, type *Private collection*.`,
      hasCaseCheck: true
    },

    {
      id: "archiveLocation",
      type: "string",
      label: "Museum or Gallery location",
      tooltip: `Provide the city (if available) in these cases:

- Source was published before 1900
- Museum or Gallery has locations in multiple countries`,
    },

    {
      id: "url",
      type: "string",
      label: "URL",
      tooltip: `If the artwork is accessible online then it's always good practice to include a URL, even though it's optional for some styles (e.g. MLA).`,
      isPrimary: true
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `If you entered a URL, enter the date that you visited it.

This is required if the article is not dated, or is revised often.`,
      isPrimary: true
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
{
  id: SourceId.bill,
  name: "Legal Bill",
  type: "bill",
  fields: [

    {
      id: "author",
      type: "name",
      label: "Sponsor",
      tooltip: `Enter the sponsors's full name if given.

Middle names can go in the *First Name* field after the first name.

If the author is a company or entity, use the option to change the author to an Organization.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "issued",
      type: "date",
      label: "Date issued",
      tooltip: `The date the bill was issued.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "title",
      type: "string",
      label: "Title of bill",
      tooltip: `Unlike other titles, do not modify the capitalization or punctuation of the title of the bill.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "authority",
      type: "string",
      label: "House the bill was heard in"
    },

    {
      id: "dimensions",
      type: "string",
      label: "Session",
      tooltip: `The session of congress this bill was approved in.

Not required for citations to H.R. reports published on or after the 60th Congress.`
    },

    {
      id: "number",
      type: "string",
      label: "Bill number",
      tooltip: `Type just the number. For example, if citing House Bill 101 (H.R. 101), you should type 101 here.`
    },

    {
      id: "publishedPlace",
      type: "string",
      label: "Place of publication"
    },

    {
      id: "publisher",
      type: "string",
      label: "Publisher"
    },

    {
      id: "url",
      type: "string",
      label: "URL",
      tooltip: `If the bill is accessible online then it's always good practice to include a URL, even though it's optional for some styles (e.g. MLA).`
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `If you entered a URL, enter the date that you visited it.

This is required if the article is not dated, or is revised often.`
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
{
  id: SourceId.blog,
  name: "Blog Post",
  type: "post-weblog",
  fields: [

    {
      id: "author",
      type: "name",
      label: "Post author",
      tooltip: `Enter the author's full name if given.

Middle names can go in the *First Name* field after the first name.

If the author is a company or entity, use the option to change the author to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the author.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "editor",
      type: "name",
      label: "Editor",
      tooltip: `Enter the editor's full name if given.

Middle names can go in the *First Name* field after the first name.

If the editor is a company or entity, use the option to change the editor to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the editor.`,
    },

    {
      id: "issued",
      type: "date",
      label: "Date published",
      tooltip: `The date of publication or copyright.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "title",
      type: "string",
      label: "Title of post",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "containerTitle",
      type: "string",
      label: "Blog title",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      hasCaseCheck: true
    },

    {
      id: "url",
      type: "string",
      label: "URL",
      tooltip: `It's always good practice to include the full URL if the source is available online, even though it's optional for some styles (e.g. MLA).

The URL should be direct to the blog post, not the homepage or an index page which may change over time.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `If you entered a URL, enter the date that you visited it.

This is required if the article is not dated, or is revised often.`,
      isPrimary: true
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
{
  id: SourceId.book,
  name: "Book",
  type: "book",
  hasAutocite: true,
  fields: [

    {
      id: "author",
      type: "name",
      label: "Book author",
      tooltip: `Enter the author's full name if given.

Middle names can go in the *First Name* field after the first name.

If the author is a company or entity, use the option to change the author to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the author.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "editor",
      type: "name",
      label: "Editor",
      tooltip: `Enter the editors's full name if given.

Middle names can go in the *First Name* field after the first name.

If the editor is a company or entity, use the option to change the editor to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the editor.`
    },

    {
      id: "translator",
      type: "name",
      label: "Translator",
      tooltip: `Enter the translator's full name if given.

Middle names can go in the *First Name* field after the first name.

If the translator is a company or entity, use the option to change the translator to an Organization.`
    },

    {
      id: "issued",
      type: "date",
      label: "Date published",
      tooltip: `The date of publication or copyright.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "originalDate",
      type: "date",
      label: "Date originally published",
      tooltip: `If the book you're citing is a translated version, enter the date that the original was first published.`
    },

    {
      id: "title",
      type: "string",
      label: "Title of book",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "edition",
      type: "string",
      label: "Edition",
      tooltip: `Enter the number only, not the ordinal indicator (this is the 'nd' in '2nd').

Leave blank if citing a first edition.`,
      isPrimary: true,
    },

    {
      id: "volume",
      type: "string",
      label: "Volume number"
    },

    {
      id: "publisher",
      type: "string",
      label: "Publisher",
      tooltip: `Publishers sometimes group their publications under *imprints*. The publisher Penguin Random House, for example, publishes under imprints such as Delacorte Press and Dorling Kindersley. Provide only the name of the publisher (Penguin Random House) and omit the imprint.`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "publisherPlace",
      type: "string",
      label: "Publisher place",
      tooltip: `Provide the city (if available) in these cases:

- Source was published before 1900
- Publisher has locations in multiple countries`,
      isPrimary: true
    },

    {
      id: "page",
      type: "string",
      label: "Page range",
      tooltip: `The page, pages, or page range referred to. Separate each page or range with a comma.`,
      isPrimary: true
    },

    {
      id: "url",
      type: "string",
      label: "URL",
      tooltip: `It's always good practice to include the full URL if the source is available online, even though it's optional for some styles (e.g. MLA).

The URL should be direct to an accessible copy of the book, not the homepage or an index page which may change over time.`
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `If you entered a URL, enter the date that you visited it.

This is required if the article is not dated, or is revised often.`
    },

    {
      id: "isbn",
      type: "string",
      label: "ISBN"
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
{
  id: SourceId.book_review,
  name: "Book Review",
  type: "review-book",
  fields: [

    {
      id: "author",
      type: "name",
      label: "Review author",
      tooltip: `Enter the author's full name if given.

Middle names can go in the *First Name* field after the first name.

If the author is a company or entity, use the option to change the author to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the author.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "editor",
      type: "name",
      label: "Review editor",
      tooltip: `Enter the editor's full name if given.

Middle names can go in the *First Name* field after the first name.

If the editor is a company or entity, use the option to change the editor to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the editor.`,
    },

    {
      id: "title",
      type: "string",
      label: "Title of review",
      isPrimary: true,
      isImportant: true,
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      hasCaseCheck: true
    },

    {
      id: "page",
      type: "string",
      label: "Page range",
      tooltip: `The page, pages, or page range referred to in the review. Separate each page or range with a comma.`,
      isPrimary: true
    },

    {
      id: "url",
      type: "string",
      label: "URL",
      tooltip: `It's always good practice to include the full URL if the source is available online, even though it's optional for some styles (e.g. MLA).

The URL should be direct to the book review, not the homepage or an index page which may change over time.`,
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `If you entered a URL, enter the date that you visited it.

This is required if the article is not dated, or is revised often.`
    },

    {
      id: "reviewedAuthor",
      type: "name",
      label: "Author of original book",
      tooltip: `Enter the original book author's full name if given.

Middle names can go in the *First Name* field after the first name.

If the author is a company or entity, use the option to change the author to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the author.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "issued",
      type: "date",
      label: "Date original book published",
      tooltip: `The date of publication or copyright.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "reviewedTitle",
      type: "string",
      label: "Title of original book",
      isImportant: true,
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      hasCaseCheck: true
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
{
  id: SourceId.broadcast,
  name: "TV/Radio Broadcast",
  type: "broadcast",
  fields: [

    {
      id: "author",
      type: "name",
      label: "Director or presenter",
      tooltip: `Enter the director or presenter's full name if given.

Middle names can go in the *First Name* field after the first name.

If the director or presenter is a company or entity, use the option to change the author to an Organization. If the same company or entity is also the broadcaster, use it as the broadcaster and not as the author.`,
      isPrimary: true
    },

    {
      id: "editor",
      type: "name",
      label: "Editor",
      tooltip: `Enter the editor's full name if given.

Middle names can go in the *First Name* field after the first name.

If the editor is a company or entity, use the option to change the editor to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the editor.`
    },

    {
      id: "issued",
      type: "date",
      label: "Date of broadcast",
      tooltip: `The date of broadcast or copyright.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "title",
      type: "string",
      label: "Title of broadcast or programme",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "publisher",
      type: "string",
      label: "Publisher, broadcaster, or network",
      tooltip: `This could be a broadcaster like PBS or BBC, or a radio station.`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "url",
      type: "string",
      label: "URL",
      tooltip: `It's always good practice to include the full URL if the source is available online, even though it's optional for some styles (e.g. MLA).

The URL should be direct to the broadcast, not the homepage or an index page which may change over time.`,
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `If you entered a URL, enter the date that you visited it.

This is required if the article is not dated, or is revised often.`
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
{
  id: SourceId.chapter,
  name: "Book Chapter",
  type: "chapter",
  fields: [

    {
      id: "author",
      type: "name",
      label: "Chapter author",
      tooltip: `If the chapter has an distinct author, enter the author's full name if given.

Middle names can go in the *First Name* field after the first name.

If the chapter author is a company or entity, use the option to change the author to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the author.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "title",
      type: "string",
      label: "Title of chapter",
      tooltip: `Only provide a title if the chapter is named.

Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "originalAuthor",
      type: "name",
      label: "Book author",
      tooltip: `Enter the book author's full name if given.

Middle names can go in the *First Name* field after the first name.

If the author is a company or entity, use the option to change the author to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the author.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "editor",
      type: "name",
      label: "Book editor",
      tooltip: `If the book has an editor, enter the editor's full name if given.

Middle names can go in the *First Name* field after the first name.

If the editor is a company or entity, use the option to change the chaoter editor to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the editor.`,
    },

    {
      id: "translator",
      type: "name",
      label: "Translator",
      tooltip: `Enter the translator's full name if given.

Middle names can go in the *First Name* field after the first name.

If the translator is a company or entity, use the option to change the translator to an Organization.`
    },

    {
      id: "issued",
      type: "date",
      label: "Date published",
      tooltip: `The date of publication or copyright of the book.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "containerTitle",
      type: "string",
      label: "Title of book",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "publisher",
      type: "string",
      label: "Publisher",
      tooltip: `Publishers sometimes group their publications under *imprints*. The publisher Penguin Random House, for example, publishes under imprints such as Delacorte Press and Dorling Kindersley. Provide only the name of the publisher (Penguin Random House) and omit the imprint.`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "publisherPlace",
      type: "string",
      label: "Publisher place",
      tooltip: `Provide the city (if available) in these cases:

- Source was published before 1900
- Publisher has locations in multiple countries`,
      isPrimary: true
    },

    {
      id: "page",
      type: "string",
      label: "Page range",
      tooltip: `The page, pages, or page range referred to in the review. Separate each page or range with a comma.`,
      isPrimary: true
    },

    {
      id: "url",
      type: "string",
      label: "URL",
      tooltip: `It's always good practice to include the full URL if the source is available online, even though it's optional for some styles (e.g. MLA).

The URL should be direct to the book chapter, not the homepage or an index page which may change over time.`,
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `If you entered a URL, enter the date that you visited it.

This is required if the article is not dated, or is revised often.`
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
//
// {
//    id: SourceId.classic,
//    name: "Classical Work",
//    type: "classic",
//    fields: [
//    {
//
//        {
//            id: "author",
//            type: "name",
//            label: "Author of classical work",
//            isImportant: true
//        },
//
//        {
//            id: "editor",
//            type: "name",
//            label: "Editor"
//        },
//
//        {
//            id: "issued",
//            type: "date",
//            label: "Date published",
//            isImportant: true
//        },
//
//        {
//            id: "title",
//            type: "string",
//            label: "Title of classical work",
//            isImportant: true
//        },
//
//        {
//            id: "annote",
//            type: "text",
//            label: "Annotation"
//        }
//    }
// },
{
  id: SourceId.communication,
  name: "Personal Communication",
  type: "personal_communication",
  fields: [

    {
      id: "author",
      type: "name",
      label: "Sender / Speaker / Author",
      tooltip: `Enter the participant's full name if given.

Middle names can go in the *First Name* field after the first name.

If the author is a company or entity, use the option to change the author to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the author.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "recipient",
      type: "name",
      label: "Recipient",
      tooltip: `Enter the recipient's full name if given (typically this is you).

Middle names can go in the *First Name* field after the first name.

If the recipient is a company or entity, use the option to change the recipient to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the recipient.`,
    },

    {
      id: "issued",
      type: "date",
      label: "Date of communication",
      tooltip: `The date that the communication was sent on, or happened on.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "title",
      type: "string",
      label: "Title of communication",
      tooltip: `If there is no official title, use a brief description.

Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "medium",
      type: "string",
      label: "Medium",
      tooltip: "The method by which the communication took place. E.g. email, face-to-face etc.",
      hasCaseCheck: true
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true,
    }
  ]
},
{
  id: SourceId.database,
  name: "Database",
  type: "article-journal",
  fields: [

    {
      id: "author",
      type: "name",
      label: "Article author",
      tooltip: `Enter the author's full name if given.

Middle names can go in the *First Name* field after the first name.

If the author is a company or entity, use the option to change the author to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the author.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "editor",
      type: "name",
      label: "Editor",
      tooltip: `Enter the editors's full name if given.

Middle names can go in the *First Name* field after the first name.

If the editor is a company or entity, use the option to change the editor to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the editor.`,
    },

    {
      id: "issued",
      type: "date",
      label: "Date published",
      tooltip: `The date of publication or copyright.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "title",
      type: "string",
      label: "Title of article",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "containerTitle",
      type: "string",
      label: "Publication title",
      tooltip: `If the article is part of a journal or magazine, enter the title of the journal or magazine here.

Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      hasCaseCheck: true
    },

    {
      id: "volume",
      type: "string",
      label: "Volume number",
      tooltip: `If the article is part of a journal, enter the volume number.`
    },

    {
      id: "issue",
      type: "string",
      label: "Issue number",
      tooltip: `If the article is part of a journal, enter the issue number.`
    },

    {
      id: "page",
      type: "string",
      label: "Page range",
      tooltip: `The page, pages, or page range referred to. Separate each page or range with a comma.`
    },

    {
      id: "archive",
      type: "string",
      label: "Database name",
      tooltip: `Provide the name of the specific database.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "url",
      type: "string",
      label: "URL or search text",
      tooltip: `It's always good practice to include the full URL if the source is available online, even though it's optional for some styles (e.g. MLA).

The URL should be direct to the database article, not the homepage or an index page which may change over time.

If the direct URL isn't available, enter the text you used to search the database instead.`
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `If you entered a URL, enter the date that you visited it.

This is required if the article is not dated, or is revised often.`
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
//
// {
//    id: SourceId.dataset,
//    name: "Scientific Dataset",
//    type: "dataset",
//    fields: [
//    {
//
//        {
//            id: "author",
//            type: "name",
//            label: "Author of dataset",
//            isImportant: true
//        },
//
//        {
//            id: "editor",
//            type: "name",
//            label: "Editor"
//        },
//
//        {
//            id: "issued",
//            type: "date",
//            label: "Date published",
//            isImportant: true
//        },
//
//        {
//            id: "title",
//            type: "string",
//            label: "Title of dataset",
//            isImportant: true
//        },
//
//        {
//            id: "url",
//            type: "string",
//            label: "URL"
//        },
//
//        {
//            id: "accessed",
//            type: "date",
//            label: "Date accessed/viewed"
//        },
//
//        {
//            id: "annote",
//            type: "text",
//            label: "Annotation"
//        }
//    }
// },
{
  id: SourceId.dictionary,
  name: "Dictionary Entry",
  type: "entry-dictionary",
  fields: [

    {
      id: "author",
      type: "name",
      label: "Entry author",
      tooltip: `Enter the author's full name if given.

Middle names can go in the *First Name* field after the first name.

If the author is a company or entity, use the option to change the author to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the author.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "editor",
      type: "name",
      label: "Editor",
      tooltip: `Enter the editors's full name if given.

Middle names can go in the *First Name* field after the first name.

If the editor is a company or entity, use the option to change the editor to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the editor.`,
    },

    {
      id: "issued",
      type: "date",
      label: "Date published",
      tooltip: `The date of publication or copyright of the dictionary.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "title",
      type: "string",
      label: "Title of entry",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "containerTitle",
      type: "string",
      label: "Name of dictionary",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "publisher",
      type: "string",
      label: "Publisher",
      tooltip: `Publishers sometimes group their publications under *imprints*. The publisher Penguin Random House, for example, publishes under imprints such as Delacorte Press and Dorling Kindersley. Provide only the name of the publisher (Penguin Random House) and omit the imprint.`,
      hasCaseCheck: true
    },

    {
      id: "publisherPlace",
      type: "string",
      label: "Publisher place",
      tooltip: `Provide the city (if available) in these cases:

- Source was published before 1900
- Publisher has locations in multiple countries`
    },

    {
      id: "page",
      type: "string",
      label: "Page range",
      tooltip: `The page, pages, or page range referred to. Separate each page or range with a comma.`,
      isPrimary: true,
    },

    {
      id: "url",
      type: "string",
      label: "URL",
      tooltip: `It's always good practice to include the full URL if the source is available online, even though it's optional for some styles (e.g. MLA).

The URL should be direct to an accessible copy of the dictionary entry, not the homepage or an index page which may change over time.`
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `If you entered a URL, enter the date that you visited it.

This is required if the article is not dated, or is revised often.`
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
{
  id: SourceId.ebook,
  name: "E-book",
  type: "book",
  hasAutocite: true,
  fields: [

    {
      id: "author",
      type: "name",
      label: "Author",
      tooltip: `Enter the author's full name if given.

Middle names can go in the *First Name* field after the first name.

If the author is a company or entity, use the option to change the author to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the author.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "editor",
      type: "name",
      label: "Editor",
      tooltip: `Enter the editor's full name if given.

Middle names can go in the *First Name* field after the first name.

If the editor is a company or entity, use the option to change the editor to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the editor.`,
    },

    {
      id: "translator",
      type: "name",
      label: "Translator",
      tooltip: `Enter the translator's full name if given.

Middle names can go in the *First Name* field after the first name.

If the translator is a company or entity, use the option to change the translator to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the translator.`,
    },

    {
      id: "issued",
      type: "date",
      label: "Date published",
      tooltip: `The date of publication or copyright.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "title",
      type: "string",
      label: "Title of e-book",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "publisher",
      type: "string",
      label: "Publisher",
      tooltip: `Publishers sometimes group their publications under *imprints*. The publisher Penguin Random House, for example, publishes under imprints such as Delacorte Press and Dorling Kindersley. Provide only the name of the publisher (Penguin Random House) and omit the imprint.`,
      hasCaseCheck: true
    },

    {
      id: "publisherPlace",
      type: "string",
      label: "Publisher place",
      tooltip: `Provide the city (if available) in these cases:

- Source was published before 1900
- Publisher has locations in multiple countries`
    },

    {
      id: "edition",
      type: "string",
      label: "Edition",
      tooltip: `Enter the number only, not the ordinal indicator (this is the 'nd' in '2nd').

Leave blank if citing a first edition.`
    },

    {
      id: "volume",
      type: "string",
      label: "Volume number"
    },

    {
      id: "page",
      type: "string",
      label: "Page range",
      tooltip: `The page, pages, or page range referred to. Separate each page or range with a comma.`,
      isPrimary: true,
    },

    {
      id: "url",
      type: "string",
      label: "URL",
      tooltip: `It's always good practice to include the full URL if the source is available online, even though it's optional for some styles (e.g. MLA).

The URL should be direct to an accessible copy of the e-book, or a landing page from which the e-book can be accessed. Not the homepage or an index page which may change over time.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `If you entered a URL, enter the date that you visited it.

This is required if the article is not dated, or is revised often.`,
      isPrimary: true
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
{
  id: SourceId.encyclopedia,
  name: "Encyclopedia Entry",
  type: "entry-encyclopedia",
  hasAutocite: true,
  fields: [

    {
      id: "author",
      type: "name",
      label: "Entry author",
      tooltip: `Enter the author's full name if given.

Middle names can go in the *First Name* field after the first name.

If the author is a company or entity, use the option to change the author to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the author.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "editor",
      type: "name",
      label: "Editor",
      tooltip: `Enter the editors's full name if given.

Middle names can go in the *First Name* field after the first name.

If the editor is a company or entity, use the option to change the editor to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the editor.`,
    },

    {
      id: "translator",
      type: "name",
      label: "Translator",
      tooltip: `Enter the translator's full name if given.

Middle names can go in the *First Name* field after the first name.

If the translator is a company or entity, use the option to change the translator to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the translator.`,
    },

    {
      id: "issued",
      type: "date",
      label: "Date published",
      tooltip: `The date of publication or copyright of the encyclopedia, or specific entry.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "title",
      type: "string",
      label: "Title of entry",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "containerTitle",
      type: "string",
      label: "Name of encyclopedia",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "edition",
      type: "string",
      label: "Edition",
      tooltip: `Enter the number only, not the ordinal indicator (this is the 'nd' in '2nd').

Leave blank if citing a first edition.`,
    },

    {
      id: "volume",
      type: "string",
      label: "Volume number"
    },

    {
      id: "publisher",
      type: "string",
      label: "Publisher",
      tooltip: `Publishers sometimes group their publications under *imprints*. The publisher Penguin Random House, for example, publishes under imprints such as Delacorte Press and Dorling Kindersley. Provide only the name of the publisher (Penguin Random House) and omit the imprint.`,
      hasCaseCheck: true
    },

    {
      id: "publisherPlace",
      type: "string",
      label: "Publisher place",
      tooltip: `Provide the city (if available) in these cases:

- Source was published before 1900
- Publisher has locations in multiple countries`
    },

    {
      id: "page",
      type: "string",
      label: "Page range",
      tooltip: `The page, pages, or page range referred to. Separate each page or range with a comma.`,
      isPrimary: true
    },

    {
      id: "archive",
      type: "string",
      label: "Database name",
      tooltip: `If the article is available via a database, provide the name of the specific database.`,
    },

    {
      id: "url",
      type: "string",
      label: "URL",
      tooltip: `It's always good practice to include the full URL if the source is available online, even though it's optional for some styles (e.g. MLA).

The URL should be direct to an accessible copy of the entry, not the homepage or an index page which may change over time.`
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `If you entered a URL, enter the date that you visited it.

This is required if the article is not dated, or is revised often.`
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
//
// {
//    id: SourceId.figure,
//    name: "Figure",
//    type: "figure",
//    fields: [
//    {
//
//        {
//            id: "author",
//            type: "name",
//            label: "Author of figure",
//            isImportant: true
//        },
//
//        {
//            id: "editor",
//            type: "name",
//            label: "Editor"
//        },
//
//        {
//            id: "issued",
//            type: "date",
//            label: "Date published",
//            isImportant: true
//        },
//
//        {
//            id: "title",
//            type: "string",
//            label: "Title of figure",
//            isImportant: true
//        },
//
//        {
//            id: "medium",
//            type: "string",
//            label: "Medium"
//        },
//
//        {
//            id: "publisherPlace",
//            type: "string",
//            label: "Publisher place"
//        },
//
//        {
//            id: "url",
//            type: "string",
//            label: "URL",
//        },
//
//        {
//            id: "accessed",
//            type: "date",
//            label: "Date accessed/viewed",
//        },
//
//        {
//            id: "annote",
//            type: "text",
//            label: "Annotation"
//        }
//    }
// },
{
  id: SourceId.film,
  name: "Film/Movie (DVD, etc.)",
  type: "motion_picture",
  fields: [

    {
      id: "author",
      type: "name",
      label: "Director",
      tooltip: `Enter the director's full name if given.

Middle names can go in the *First Name* field after the first name.

If the director or presenter is a company or entity, use the option to change the author to an Organization. If the same company or entity is also the distributor, use it as the distributor and not as the author.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "editor",
      type: "name",
      label: "Editor",
      tooltip: `Enter the editors's full name if given.

Middle names can go in the *First Name* field after the first name.

If the editor is a company or entity, use the option to change the editor to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the editor.`
    },

    {
      id: "issued",
      type: "date",
      label: "Date published",
      tooltip: `The date of distribution or copyright.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "title",
      type: "string",
      label: "Title of film/movie",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "medium",
      type: "string",
      label: "Medium",
      tooltip: "The format that the film or movie was distributed in (e.g. film, DVD, etc.)",
      isPrimary: true,
      hasCaseCheck: true
    },

    {
      id: "publisher",
      type: "string",
      label: "Distributor",
      tooltip: "The distributor is responsible for the marketing of a film. Warner Bros, 20th Century Fox, and Universal Pictures are all distributors",
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "publisherPlace",
      type: "string",
      label: "Distributor location",
      tooltip: `Provide the city (if available) in these cases:

- Source was distributed before 1900
- Distributor has locations in multiple countries`
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
//
// {
//    id: SourceId.hearing,
//    name: "Hearing",
//    type: "hearing",
//    fields: [
//    {
//
//        {
//            id: "author",
//            type: "name",
//            label: "Author of hearing",
//            isImportant: true
//        },
//
//        {
//            id: "editor",
//            type: "name",
//            label: "Editor"
//        },
//
//        {
//            id: "issued",
//            type: "date",
//            label: "Date published",
//            isImportant: true
//        },
//
//        {
//            id: "title",
//            type: "string",
//            label: "Title of hearing",
//            isImportant: true
//        },
//
//        {
//            id: "annote",
//            type: "text",
//            label: "Annotation"
//        }
//    }
// },
{
  id: SourceId.image,
  name: "Image",
  type: "graphic",
  fields: [

    {
      id: "author",
      type: "name",
      label: "Illustrator or copyright holder",
      tooltip: `Enter the illustrator or copyright holder's full name if given.

Middle names can go in the *First Name* field after the first name.

If the illustrator or copyright holder is a company or entity, use the option to change the author to an Organization.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "editor",
      type: "name",
      label: "Editor",
      tooltip: `Enter the editors's full name if given.

Middle names can go in the *First Name* field after the first name.

If the editor is a company or entity, use the option to change the editor to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the editor.`,
    },

    {
      id: "issued",
      type: "date",
      label: "Date of image",
      tooltip: `The date of publication or copyright.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "title",
      type: "string",
      label: "Title or description",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "url",
      type: "string",
      label: "URL",
      tooltip: `It's always good practice to include the full URL if the source is available online, even though it's optional for some styles (e.g. MLA).

The URL should be direct to an accessible copy of the image, not the homepage or an index page which may change over time.`
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `If you entered a URL, enter the date that you visited it.

This is required if the article is not dated, or is revised often.`
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
{
  id: SourceId.interview,
  name: "Interview",
  type: "interview",
  fields: [

    {
      id: "author",
      type: "name",
      label: "Interview with",
      tooltip: `Enter the interviewee's full name if given.

Middle names can go in the *First Name* field after the first name.

If the interviewee or copyright holder is a company or entity, use the option to change the author to an Organization.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "interviewer",
      type: "name",
      label: "Interviewer",
      tooltip: `Enter the interviewer's full name if given.

Middle names can go in the *First Name* field after the first name.

If the interviewer or copyright holder is a company or entity, use the option to change the author to an Organization.`,
      isPrimary: true
    },

    {
      id: "issued",
      type: "date",
      label: "Date of interview",
      tooltip: `The date of publication or copyright.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "title",
      type: "string",
      label: "Title of interview",
      tooltip: `If the interview didn't have an official title, enter a brief description. E.g. Interview with Dr. Foley concerning Cell Duplication in Mice.

Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "containerTitle",
      type: "string",
      label: "Publication or container",
      tooltip: `If the interview is accessible in a newspaper, magazine, journal, or similar containing entity, enter the name of it here.

Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      hasCaseCheck: true
    },

    {
      id: "url",
      type: "string",
      label: "URL",
      tooltip: `It's always good practice to include the full URL if the source is available online, even though it's optional for some styles (e.g. MLA).

The URL should be direct to an accessible copy of the interview, not the homepage or an index page which may change over time.`
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `If you entered a URL, enter the date that you visited it.

This is required if the article is not dated, or is revised often.`
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
{
  id: SourceId.legal_case,
  name: "Legal Case",
  type: "legal_case",
  fields: [

    {
      id: "author",
      type: "name",
      label: "Case author",
      tooltip: `Enter the author's full name if given.

Middle names can go in the *First Name* field after the first name.

If the author or copyright holder is a company or entity, use the option to change the author to an Organization.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "title",
      type: "string",
      label: "Case name",
      tooltip: `This will typically be in the format 'Plaintiff v. Defendant'.

Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "issued",
      type: "date",
      label: "Date of decision",
      tooltip: `The date of court's decision.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "authority",
      type: "string",
      label: "Issuing/judicial authority",
      tooltip: `The name of the court that ruled on the case.`,
      hasCaseCheck: true
    },

    {
      id: "section",
      type: "string",
      label: "Section of law report"
    },

    {
      id: "volume",
      type: "string",
      label: "Volume number"
    },

    {
      id: "url",
      type: "string",
      label: "URL",
      tooltip: `It's always good practice to include the full URL if the source is available online, even though it's optional for some styles (e.g. MLA).

The URL should be direct to an accessible copy of the entry, not the homepage or an index page which may change over time.`
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `If you entered a URL, enter the date that you visited it.

This is required if the article is not dated, or is revised often.`
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
{
  id: SourceId.legislation,
  name: "Legislation",
  type: "legislation",
  fields: [

    {
      id: "author",
      type: "name",
      label: "Legislation author",
      tooltip: `Enter the author's full name if given.

Middle names can go in the *First Name* field after the first name.

If the author or copyright holder is a company or entity, use the option to change the author to an Organization.`,
      isPrimary: true
    },

    {
      id: "title",
      type: "string",
      label: "Title of legislation",
      tooltip: `Or statute/act.

Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "issued",
      type: "date",
      label: "Date published",
      tooltip: `The date the legislation was passed.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "volume",
      type: "string",
      label: "Section number",
      tooltip: `The section number of the legislation.`
    },

    {
      id: "issue",
      type: "string",
      label: "Reprint number",
      tooltip: `The reprint number of the legislation.`
    },

    {
      id: "url",
      type: "string",
      label: "URL",
      tooltip: `It's always good practice to include the full URL if the source is available online, even though it's optional for some styles (e.g. MLA).

The URL should be direct to the article, not the homepage or an index page which may change over time.`
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `If you entered a URL, enter the date that you visited it.

This is required if the article is not dated, or is revised often.`
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
{
  id: SourceId.article_magazine,
  name: "Magazine Article",
  type: "article-magazine",
  fields: [

    {
      id: "author",
      type: "name",
      label: "Article author",
      tooltip: `Enter the authors's full name if given.

Middle names can go in the *First Name* field after the first name.

If the author is a company or entity, use the option to change the author to an Organization.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "editor",
      type: "name",
      label: "Editor",
      tooltip: `Enter the editor's full name if given.

Middle names can go in the *First Name* field after the first name.

If the editor is a company or entity, use the option to change the editor to an Organization.`,
    },

    {
      id: "issued",
      type: "date",
      label: "Date published",
      tooltip: `The date of publication or copyright.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "title",
      type: "string",
      label: "Title of article",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "containerTitle",
      type: "string",
      label: "Name of magazine",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "page",
      type: "string",
      label: "Page range",
      tooltip: `The page, pages, or page range referred to. Separate each page or range with a comma.`,
      isPrimary: true
    },

    {
      id: "archive",
      type: "string",
      label: "Database name",
      tooltip: `If the article is available via a database, provide the name of the specific database.`,
    },

    {
      id: "url",
      type: "string",
      label: "URL",
      tooltip: `It's always good practice to include the full URL if the source is available online, even though it's optional for some styles (e.g. MLA).

The URL should be direct to the article, not the homepage or an index page which may change over time.`
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `If you entered a URL, enter the date that you visited it.

This is required if the article is not dated, or is revised often.`
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
//
// {
//    id: SourceId.manuscript,
//    name: "Manuscript",
//    type: "manuscript",
//    fields: [
//    {
//
//        {
//            id: "author",
//            type: "name",
//            label: "Author of manuscript",
//            isImportant: true
//        },
//
//        {
//            id: "editor",
//            type: "name",
//            label: "Editor"
//        },
//
//        {
//            id: "issued",
//            type: "date",
//            label: "Date published",
//            isImportant: true
//        },
//
//        {
//            id: "title",
//            type: "string",
//            label: "Title of manuscript",
//            isImportant: true
//        },
//
//        {
//            id: "collectionTitle",
//            type: "string",
//            label: "Collection title"
//        },
//
//        {
//            id: "collectionNumber",
//            type: "string",
//            label: "Collection/series number"
//        },
//
//        {
//            id: "archive",
//            type: "string",
//            label: "Archive name"
//        },
//
//        {
//            id: "archiveLocation",
//            type: "string",
//            label: "Box/folder number in archive"
//        },
//
//        {
//            id: "annote",
//            type: "text",
//            label: "Annotation"
//        }
//    }
// },
{
  id: SourceId.map,
  name: "Map",
  type: "map",
  fields: [

    {
      id: "author",
      type: "name",
      label: "Map author",
      tooltip: `Enter the authors's full name if given.

Middle names can go in the *First Name* field after the first name.

If the author is a company or entity, use the option to change the author to an Organization.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "editor",
      type: "name",
      label: "Editor",
      tooltip: `Enter the editors's full name if given.

Middle names can go in the *First Name* field after the first name.

If the editor is a company or entity, use the option to change the editor to an Organization.`,
    },

    {
      id: "issued",
      type: "date",
      label: "Date published",
      tooltip: `The date of publication or copyright.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "title",
      type: "string",
      label: "Title of map",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "collectionTitle",
      type: "string",
      label: "Collection title",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      hasCaseCheck: true
    },

    {
      id: "publisher",
      type: "string",
      label: "Publisher",
      hasCaseCheck: true
    },

    {
      id: "publisherPlace",
      type: "string",
      label: "Publisher place",
      tooltip: `Provide the city (if available) in these cases:

- Source was published before 1900
- Publisher has locations in multiple countries`
    },

    {
      id: "number",
      type: "string",
      label: "Item number",
      tooltip: "If the map has an item number, enter it here."
    },

    {
      id: "scale",
      type: "string",
      label: "Scale of map",
      tooltip: "Enter the scale of the map. E.g. 1:50"
    },

    {
      id: "url",
      type: "string",
      label: "URL",
      tooltip: `It's always good practice to include the full URL if the source is available online, even though it's optional for some styles (e.g. MLA).

The URL should be direct to the map, not the homepage or an index page which may change over time.`
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `If you entered a URL, enter the date that you visited it.

This is required if the article is not dated, or is revised often.`
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
{
  id: SourceId.article_newspaper,
  name: "News Article",
  type: "article-newspaper",
  hasAutocite: true,
  fields: [

    {
      id: "author",
      type: "name",
      label: "Article author",
      tooltip: `Enter the authors's full name if given.

Middle names can go in the *First Name* field after the first name.

If the author is a company or entity, use the option to change the author to an Organization.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "editor",
      type: "name",
      label: "Editor",
      tooltip: `Enter the editor's full name if given.

Middle names can go in the *First Name* field after the first name.

If the editor is a company or entity, use the option to change the editor to an Organization.`,
    },

    {
      id: "issued",
      type: "date",
      label: "Date published",
      tooltip: `The date of publication or copyright.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "title",
      type: "string",
      label: "Title of article",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "containerTitle",
      type: "string",
      label: "Name of news source",
      tooltip: `E.g. The New York Times.

Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "page",
      type: "string",
      label: "Page range",
      tooltip: `The page, pages, or page range referred to. Separate each page or range with a comma.`,
      isPrimary: true
    },

    {
      id: "url",
      type: "string",
      label: "URL",
      tooltip: `It's always good practice to include the full URL if the source is available online, even though it's optional for some styles (e.g. MLA).

The URL should be direct to the article, not the homepage or an index page which may change over time.`,
      isPrimary: true
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `If you entered a URL, enter the date that you visited it.

This is required if the article is not dated, or is revised often.`,
      isPrimary: true
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
//
// {
//    id: SourceId.pamphlet,
//    name: "Pamphlet",
//    type: "pamphlet",
//    fields: [
//    {
//
//        {
//            id: "author",
//            type: "name",
//            label: "Author of pamphlet",
//            isImportant: true
//        },
//
//        {
//            id: "editor",
//            type: "name",
//            label: "Editor"
//        },
//
//        {
//            id: "issued",
//            type: "date",
//            label: "Date published"
//        },
//
//        {
//            id: "title",
//            type: "string",
//            label: "Title of pamphlet",
//            isImportant: true
//        },
//
//        {
//            id: "publisherPlace",
//            type: "string",
//            label: "Publisher place"
//        },
//
//        {
//            id: "publisher",
//            type: "string",
//            label: "Publisher"
//        },
//
//        {
//            id: "annote",
//            type: "text",
//            label: "Annotation"
//        }
//    }
// },
{
  id: SourceId.paper,
  name: "Conference Paper",
  type: "paper-conference",
  fields: [

    {
      id: "author",
      type: "name",
      label: "Paper author",
      tooltip: `Enter the authors's full name if given.

Middle names can go in the *First Name* field after the first name.

If the author is a company or entity, use the option to change the author to an Organization.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "editor",
      type: "name",
      label: "Editor",
      tooltip: `Enter the editors's full name if given.

Middle names can go in the *First Name* field after the first name.

If the editor is a company or entity, use the option to change the editor to an Organization.`,
    },

    {
      id: "issued",
      type: "date",
      label: "Date published",
      tooltip: `The date of publication or copyright.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "title",
      type: "string",
      label: "Title of paper",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "containerTitle",
      type: "string",
      label: "Name of journal/proceedings",
      tooltip: `If the paper was published as part of a larger collection, enter the name of the collection.

Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "publisher",
      type: "string",
      label: "Publisher",
      tooltip: `Publishers sometimes group their publications under *imprints*. The publisher Penguin Random House, for example, publishes under imprints such as Delacorte Press and Dorling Kindersley. Provide only the name of the publisher (Penguin Random House) and omit the imprint.`,
      isPrimary: true,
      hasCaseCheck: true
    },

    {
      id: "publisherPlace",
      type: "string",
      label: "Publisher place",
      tooltip: `Provide the city (if available) in these cases:

- Source was published before 1900
- Publisher has locations in multiple countries`
    },

    {
      id: "volume",
      type: "string",
      label: "Volume number",
      tooltip: `If the proceedings have a volume number, enter this here.`
    },

    {
      id: "issue",
      type: "string",
      label: "Issue number",
      tooltip: `If the proceedings have an issue number, enter this here.`
    },

    {
      id: "page",
      type: "string",
      label: "Page range",
      tooltip: `The page, pages, or page range referred to. Separate each page or range with a comma.`
    },

    {
      id: "event",
      type: "string",
      label: "Name of event",
      hasCaseCheck: true
    },

    {
      id: "eventPlace",
      type: "string",
      label: "Location of event"
    },

    {
      id: "eventDate",
      type: "date",
      label: "Date of event",
    },

    {
      id: "url",
      type: "string",
      label: "URL",
      tooltip: `It's always good practice to include the full URL if the source is available online, even though it's optional for some styles (e.g. MLA).

The URL should be direct to the report, not the homepage or an index page which may change over time.`
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `If you entered a URL, enter the date that you visited it.

This is required if the article is not dated, or is revised often.`
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
{
  id: SourceId.patent,
  name: "Patent",
  type: "patent",
  fields: [

    {
      id: "author",
      type: "name",
      label: "Inventor",
      tooltip: `Enter the inventors's full name if given.

Middle names can go in the *First Name* field after the first name.

If the inventor is a company or entity, use the option to change the inventor to an Organization.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "editor",
      type: "name",
      label: "Editor",
      tooltip: `Enter the editor's full name if given.

Middle names can go in the *First Name* field after the first name.

If the editor is a company or entity, use the option to change the editor to an Organization.`,
    },

    {
      id: "issued",
      type: "date",
      label: "Date issued",
      tooltip: `The date of publication or copyright.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "title",
      type: "string",
      label: "Title of patent",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "issue",
      type: "string",
      label: "Number",
      tooltip: "E.g. 5,676,587 or D324,112 (use commas as shown and include any prefix letters)."
    },

    {
      id: "authority",
      type: "string",
      label: "Issuing authority",
      tooltip: "The patent office that issued the patent. E.g. The United States Patent and Trademark Office (USPTO).",
      hasCaseCheck: true
    },

    {
      id: "url",
      type: "string",
      label: "URL",
      tooltip: `It's always good practice to include the full URL if the source is available online, even though it's optional for some styles (e.g. MLA).

The URL should be direct to the report, not the homepage or an index page which may change over time.`
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `If you entered a URL, enter the date that you visited it.

This is required if the article is not dated, or is revised often.`
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
//
// {
//    id: SourceId.periodical,
//    name: "Periodical",
//    type: "periodical",
//    fields: [
//    {
//
//        {
//            id: "author",
//            type: "name",
//            label: "Author of periodical",
//            isImportant: true
//        },
//
//        {
//            id: "editor",
//            type: "name",
//            label: "Editor"
//        },
//
//        {
//            id: "issued",
//            type: "date",
//            label: "Date published",
//            isImportant: true
//        },
//
//        {
//            id: "title",
//            type: "string",
//            label: "Title of periodical",
//            isImportant: true
//        },
//
//        {
//            id: "page",
//            type: "string",
//            label: "Page range"
//        },
//
//        {
//            id: "annote",
//            type: "text",
//            label: "Annotation"
//        }
//    }
// },
//
// {
//    id: SourceId.post,
//    name: "Post",
//    type: "post",
//    fields: [
//    {
//
//        {
//            id: "author",
//            type: "name",
//            label: "Author of post",
//            isImportant: true
//        },
//
//        {
//            id: "editor",
//            type: "name",
//            label: "Editor"
//        },
//
//        {
//            id: "issued",
//            type: "date",
//            label: "Date published",
//            isImportant: true
//        },
//
//        {
//            id: "title",
//            type: "string",
//            label: "Title of post",
//            isImportant: true
//        },
//
//        {
//            id: "annote",
//            type: "text",
//            label: "Annotation",
//            isPrimary: true
//        }
//    }
// },
{
  id: SourceId.regulation,
  name: "Regulation",
  type: "regulation",
  fields: [

    {
      id: "author",
      type: "name",
      label: "Regulation author",
      tooltip: `Enter the authors's full name if given.

Middle names can go in the *First Name* field after the first name.

If the author is a company or entity, use the option to change the author to an Organization.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "editor",
      type: "name",
      label: "Editor",
      tooltip: `Enter the editor's full name if given.

Middle names can go in the *First Name* field after the first name.

If the editor is a company or entity, use the option to change the editor to an Organization.`,
    },

    {
      id: "issued",
      type: "date",
      label: "Date published",
      tooltip: `The date of publication or copyright.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "title",
      type: "string",
      label: "Title of regulation",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "url",
      type: "string",
      label: "URL",
      tooltip: `It's always good practice to include the full URL if the source is available online, even though it's optional for some styles (e.g. MLA).

The URL should be direct to the regulation, not the homepage or an index page which may change over time.`
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `If you entered a URL, enter the date that you visited it.

This is required if the article is not dated, or is revised often.`
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
{
  id: SourceId.report,
  name: "Report",
  type: "report",
  fields: [

    {
      id: "author",
      type: "name",
      label: "Report author",
      tooltip: `Enter the authors's full name if given.

Middle names can go in the *First Name* field after the first name.

If the author is a company or entity, use the option to change the author to an Organization.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "editor",
      type: "name",
      label: "Editor",
      tooltip: `Enter the editor's full name if given.

Middle names can go in the *First Name* field after the first name.

If the editor is a company or entity, use the option to change the editor to an Organization.`,
    },

    {
      id: "issued",
      type: "date",
      label: "Date published",
      tooltip: `The date of publication or copyright.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "title",
      type: "string",
      label: "Title of report",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "publisher",
      type: "string",
      label: "Publisher",
      tooltip: `Publishers sometimes group their publications under *imprints*. The publisher Penguin Random House, for example, publishes under imprints such as Delacorte Press and Dorling Kindersley. Provide only the name of the publisher (Penguin Random House) and omit the imprint.`,
      isPrimary: true,
      hasCaseCheck: true
    },

    {
      id: "publisherPlace",
      type: "string",
      label: "Publisher place",
      tooltip: `Provide the city (if available) in these cases:

- Source was published before 1900
- Publisher has locations in multiple countries`
    },

    {
      id: "page",
      type: "string",
      label: "Page range",
      tooltip: `The page, pages, or page range referred to. Separate each page or range with a comma.`,
      isPrimary: true
    },

    {
      id: "containerTitle",
      type: "string",
      label: "Website name",
      tooltip: `If the report is available online via a website, enter the website name.

Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      hasCaseCheck: true
    },

    {
      id: "url",
      type: "string",
      label: "URL",
      tooltip: `It's always good practice to include the full URL if the source is available online, even though it's optional for some styles (e.g. MLA).

The URL should be direct to the report, not the homepage or an index page which may change over time.`,
      isPrimary: true
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `If you entered a URL, enter the date that you visited it.

This is required if the article is not dated, or is revised often.`,
      isPrimary: true
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
{
  id: SourceId.review,
  name: "Review",
  type: "review",
  fields: [

    {
      id: "author",
      type: "name",
      label: "Review author",
      tooltip: `Enter the authors's full name if given.

Middle names can go in the *First Name* field after the first name.

If the author is a company or entity, use the option to change the author to an Organization.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "editor",
      type: "name",
      label: "Editor",
      tooltip: `Enter the editors's full name if given.

Middle names can go in the *First Name* field after the first name.

If the editor is a company or entity, use the option to change the editor to an Organization.`
    },

    {
      id: "reviewedAuthor",
      type: "name",
      label: "Author of reviewed item",
      tooltip: `Enter the original authors's full name if given.

Middle names can go in the *First Name* field after the first name.

If the author is a company or entity, use the option to change the author to an Organization.`
    },

    {
      id: "issued",
      type: "date",
      label: "Date published",
      tooltip: `The date of publication or copyright.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "title",
      type: "string",
      label: "Title of review",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "containerTitle",
      type: "string",
      label: "Name of container",
      tooltip: `If the review was part of a collection of reviews, or grouped together somehow, enter the name of the collection.

Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      hasCaseCheck: true
    },

    {
      id: "volume",
      type: "string",
      label: "Volume number",
      tooltip: "If the container has a volume number, enter it here."
    },

    {
      id: "issue",
      type: "string",
      label: "Issue number",
      tooltip: "If the container has an issue number, enter it here."
    },

    {
      id: "page",
      type: "string",
      label: "Page range",
      tooltip: `The page, pages, or page range referred to. Separate each page or range with a comma.`
    },

    {
      id: "url",
      type: "string",
      label: "URL",
      tooltip: `It's always good practice to include the full URL if the source is available online, even though it's optional for some styles (e.g. MLA).

The URL should be direct to the review, not the homepage or an index page which may change over time.`
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `If you entered a URL, enter the date that you visited it.

This is required if the article is not dated, or is revised often.`
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
//
// {
//    id: SourceId.score,
//    name: "Score",
//    type: "musical_score",
//    fields: [
//    {
//
//        {
//            id: "author",
//            type: "name",
//            label: "Composer",
//            isImportant: true
//        },
//
//        {
//            id: "editor",
//            type: "name",
//            label: "Editor"
//        },
//
//        {
//            id: "issued",
//            type: "date",
//            label: "Date published",
//            isImportant: true
//        },
//
//        {
//            id: "title",
//            type: "string",
//            label: "Title of score",
//            isImportant: true
//        },
//
//        {
//            id: "publisherPlace",
//            type: "string",
//            label: "Publisher place"
//        },
//
//        {
//            id: "publisher",
//            type: "string",
//            label: "Publisher"
//        },
//
//        {
//            id: "annote",
//            type: "text",
//            label: "Annotation"
//        }
//    }
// },
{
  id: SourceId.song,
  name: "Song",
  type: "song",
  fields: [

    {
      id: "author",
      type: "name",
      label: "Artist",
      tooltip: `Enter the artist's full name if given.

Middle names can go in the *First Name* field after the first name.

If the artist is a band or entity, use the option to change the author to an Organization.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "editor",
      type: "name",
      label: "Editor",
      tooltip: `If the song was edited or remixed, enter the editors's full name if given.

Middle names can go in the *First Name* field after the first name.

If the editor is a band or entity, use the option to change the editor to an Organization.`,
    },

    {
      id: "issued",
      type: "date",
      label: "Date produced",
      tooltip: `The date the song was released, or copyrighted.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "title",
      type: "string",
      label: "Title of song",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "medium",
      type: "string",
      label: "Medium",
      tooltip: "The medium that the song was recorded to. E.g. MP3, CD, Radio, Vinyl, Streamed.",
      hasCaseCheck: true
    },

    {
      id: "publisher",
      type: "string",
      label: "Publisher/producer",
      tooltip: "The record label that published the song. E.g. Sony Music Entertainment.",
      hasCaseCheck: true
    },

    {
      id: "publisherPlace",
      type: "string",
      label: "Publisher place",
      tooltip: "The location that the song was recorded, or published."
    },

    {
      id: "url",
      type: "string",
      label: "URL",
      tooltip: `If the song was streamed or is available online, provide the URL.

The URL should be direct to an accessible recording, not the homepage or an index page which may change over time.`,
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `If you entered a URL, enter the date that you last visited the URL.`
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
{
  id: SourceId.speech,
  name: "Speech",
  type: "speech",
  fields: [

    {
      id: "author",
      type: "name",
      label: "Speaker",
      tooltip: `Enter the speaker's full name if given.

Middle names can go in the *First Name* field after the first name.

If the speaker is a company or entity, use the option to change the author to an Organization.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "editor",
      type: "name",
      label: "Editor",
      tooltip: `Enter the editor's full name if given.

Middle names can go in the *First Name* field after the first name.

If the editor is a company or entity, use the option to change the author to an Organization.`,
    },

    {
      id: "issued",
      type: "date",
      label: "Date published",
      tooltip: `The date that the speech was given.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "title",
      type: "string",
      label: "Title of speech",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "medium",
      type: "string",
      label: "Medium",
      tooltip: "The medium that the speech was delivered to you in. E.g. In-Person, Radio, TV.",
      hasCaseCheck: true
    },

    {
      id: "event",
      type: "string",
      label: "Name of event",
      tooltip: "If the speech was delivered at an event, enter the name of the event.",
      hasCaseCheck: true
    },

    {
      id: "publisherPlace",
      type: "string",
      label: "Event place",
      tooltip: "The city or location that the speech was delivered."
    },

    {
      id: "url",
      type: "string",
      label: "URL",
      tooltip: `If the speech was streamed or is available online, provide the URL.

The URL should be direct to an accessible recording, not the homepage or an index page which may change over time.`,
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `If you entered a URL, enter the date that you last visited the URL.`
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
{
  id: SourceId.standard,
  name: "Standard",
  type: "standard",
  fields: [

    {
      id: "author",
      type: "name",
      label: "Author",
      tooltip: `Enter the author's full name if given.

Middle names can go in the *First Name* field after the first name.

If the author is a company or entity, use the option to change the author to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the author.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "editor",
      type: "name",
      label: "Editor",
      tooltip: `Enter the editors's full name if given.

Middle names can go in the *First Name* field after the first name.

If the editor is a company or entity, use the option to change the author to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the editor.`,
    },

    {
      id: "issued",
      type: "date",
      label: "Date published",
      tooltip: `The date of publication or copyright.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "title",
      type: "string",
      label: "Title of standard",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "number",
      type: "string",
      label: "Item number"
    },

    {
      id: "publisher",
      type: "string",
      label: "Publisher",
      hasCaseCheck: true
    },

    {
      id: "publisherPlace",
      type: "string",
      label: "Publisher place"
    },

    {
      id: "url",
      type: "string",
      label: "URL",
      tooltip: `If the standard is available online, provide the URL.

The URL should be direct to the document, not the homepage or an index page which may change over time.`,
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `If you entered a URL, enter the date that you last visited the URL.`
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
{
  id: SourceId.thesis,
  name: "Thesis (or Dissertation)",
  type: "thesis",
  fields: [

    {
      id: "author",
      type: "name",
      label: "Author",
      tooltip: `Enter the author's full name if given.

Middle names can go in the *First Name* field after the first name.

If the author is a company or entity, use the option to change the author to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the author.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "editor",
      type: "name",
      label: "Editor",
      tooltip: `Enter the editors's full name if given.

Middle names can go in the *First Name* field after the first name.

If the editor is a company or entity, use the option to change the author to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the editor.`,
    },

    {
      id: "issued",
      type: "date",
      label: "Date published",
      tooltip: `The date of publication or copyright.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "title",
      type: "string",
      label: "Title of thesis (or dissertation)",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "genre",
      type: "string",
      label: "Document type",
      tooltip: `Enter the type of document you're citing. E.g. PhD/MSc Thesis, Undergraduate Dissertation etc.`,
      hasCaseCheck: true
    },

    {
      id: "publisherPlace",
      type: "string",
      label: "Academic publisher or institution name"
    },

    {
      id: "page",
      type: "string",
      label: "Page range",
      tooltip: `The page, pages, or page range referred to. Separate each page or range with a comma.`,
      isPrimary: true
    },

    {
      id: "url",
      type: "string",
      label: "URL",
      tooltip: `It's always good practice to include the full URL if the source is available online, even though it's optional for some styles (e.g. MLA).

The URL should be direct to the article, not the homepage or an index page which may change over time.`
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `If you entered a URL, enter the date that you visited it.

This is required if the article is not dated, or is revised often.`
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
//
// {
//    id: SourceId.treaty,
//    name: "Treaty",
//    type: "treaty",
//    fields: [
//    {
//
//        {
//            id: "author",
//            type: "name",
//            label: "Author of treaty",
//            isImportant: true
//        },
//
//        {
//            id: "editor",
//            type: "name",
//            label: "Editor"
//        },
//
//        {
//            id: "issued",
//            type: "date",
//            label: "Date published",
//            isImportant: true
//        },
//
//        {
//            id: "title",
//            type: "string",
//            label: "Title of treaty",
//            isImportant: true
//        },
//
//        {
//            id: "annote",
//            type: "text",
//            label: "Annotation"
//        }
//    }
// },
{
  id: SourceId.video,
  name: "Video",
  type: "video",
  hasAutocite: true,
  fields: [

    {
      id: "author",
      type: "name",
      label: "Video author",
      tooltip: `Enter the author's full name if given.

Middle names can go in the *First Name* field after the first name.

If the author is a company or entity, use the option to change the author to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the author.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "editor",
      type: "name",
      label: "Editor",
      tooltip: `Enter the editor's full name if given.

Middle names can go in the *First Name* field after the first name.

If the editor is a company or entity, use the option to change the editor to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the editor.`,
    },

    {
      id: "title",
      type: "string",
      label: "Title of video",
      tooltip: `Enter the title of the video. If the video doesnt have an official title, use a brief description.

Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "issued",
      type: "date",
      label: "Date published",
      tooltip: `The date of publication or copyright.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "containerTitle",
      type: "string",
      label: "Publisher",
      tooltip: "Enter the publisher of the video. If the video is on a website (e.g. YouTube), use that as the publisher.",
      isPrimary: true,
      hasCaseCheck: true
    },

    {
      id: "medium",
      type: "string",
      label: "Format",
      tooltip: "What type of video is it, and on what platform? E.g. YouTube Vlog, Website Video, TV Broadcast.",
      isPrimary: true
    },

    {
      id: "url",
      type: "string",
      label: "URL",
      tooltip: `A URL is required for an online video.

The URL should be direct to the video, not the homepage or an index page which may change over time.`,
      isPrimary: true
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `Enter the date that you viewed the video.

This is required if the video is not dated, or is revised often.`,
      isPrimary: true
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
{
  id: SourceId.webpage,
  name: "Website",
  type: "webpage",
  hasAutocite: true,
  fields: [

    {
      id: "author",
      type: "name",
      label: "Webpage author",
      tooltip: `Enter the author's full name if given.

Middle names can go in the *First Name* field after the first name.

If the author is a company or entity, use the option to change the author to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the author.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "editor",
      type: "name",
      label: "Editor",
      tooltip: `Enter the editor's full name if given.

Middle names can go in the *First Name* field after the first name.

If the editor is a company or entity, use the option to change the editor to an Organization. If the same company or entity is also the publisher, use it as the publisher and not as the editor.`,
    },

    {
      id: "issued",
      type: "date",
      label: "Date published",
      tooltip: `The date of publication or copyright.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "title",
      type: "string",
      label: "Title of article or page",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "containerTitle",
      type: "string",
      label: "Website name",
      tooltip: `Capitalize the first letter of the first word, last word, and all principal words.

**Do not capitalize:**
- Articles *(a, an, the)*
- Prepositions *(against, as, between, in, of, to)*
- Coordinating conjunctions *(and, but, for, or, yet)*

**Always capitalize:**
- Nouns *(boat, nurse, Paris)*
- Pronouns *(me, mine, us)*
- Verbs *(start, leave, change)*
- Adjectives *(spicy, hardly, warm)*`,
      isPrimary: true,
      isImportant: true,
      hasCaseCheck: true
    },

    {
      id: "publisher",
      type: "string",
      label: "Publisher",
      tooltip: "If the website is part of a larger organization, enter this here.",
      hasCaseCheck: true,
      isPrimary: true
    },

    {
      id: "url",
      type: "string",
      label: "URL",
      tooltip: `A URL is required for a webpage or online-only source.

The URL should be direct to the article, not the homepage or an index page which may change over time.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "accessed",
      type: "date",
      label: "Date accessed/viewed",
      tooltip: `Enter the date that you took information from the webpage.

This is required if the article is not dated, or is revised often.`,
      isPrimary: true
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
},
{
  id: SourceId.raw,
  name: "📋 Write/paste citation",
  type: "",
  fields: [

    {
      id: "rawStr",
      type: "richtext",
      label: "Citation",
      tooltip: `Copy and paste, or directly type in, a pre-formatted citation from an academic source like Gale, EBSCO, PubMed, or Google Scholar.`,
      isPrimary: true,
      isImportant: true
    },

    {
      id: "annote",
      type: "text",
      label: "Annotation",
      tooltip: "Creating an annotated source list? Enter your annotation here, and if your style supports annotations it will be appended automatically.",
      isPrimary: true
    }
  ]
}];
}

const singleton = new Sources();
export default singleton;
