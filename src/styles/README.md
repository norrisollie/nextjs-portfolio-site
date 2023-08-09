# CSS Architecture

It's loosely based on Harry Roberts' [ITCSS system](https://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528), where layers are organized by lowest specificity (and highest impact) first, so resets -> elements -> classes etc. (we won't use id's, these we'll reserve for eventually hooking from within JS):

1. **Config** - settings folder, where I defined global Sass variables, mixins and functions used throughout the project. Variables file can be broken down into several files if getting too large
2. **Base** - Styles applied on element selectors, rather than classes. It includes any resets, box-sizing, typography and form elements, some of which may be over-ridden at the component level
3. **Objects** - Any small, reusable pieces of UI, which could appear in multiple components
4. **Globals** - Place for global components used on every page like header, footer. This is also a place for generic layout classes in here - ie. grid, stlyes for containers etc.
5. **Components** - This is for the larger chunks of UI, such as hero sections, cards, media objects and more. **BEM** is used for naming them as it's helpful for precise scoping of styles, and avoiding problems related to cascade nature of CSS. Reference - https://css-tricks.com/bem-101/
6. **Utilities** - This is for single-purpose, reuseable atomic (or utility) classes that could be applied to any element (helper classes)

# Grid System

Thanks to the dropped support of old crappy IE, we've been able to bring real grid, based on [CSS Grid Layout Module](https://www.w3.org/TR/css-grid-1/)
It's worth giving a read to [Flash Grid codebase](https://github.com/CodyHouse/flashgrid) to get familiar with its use
