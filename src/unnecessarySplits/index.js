import List from './list';
// import ListItem from './listItem';

const items = [
  { text: 'Google', href: 'https://google.com'},
  { text: 'Bing', },
  { text: 'DuckDuckGo', href: 'https://duckduckgo.com' },
];

/*
  List doesn't need to be it's own component.
  A better implementation would be to map over
  ListItem here, as shown in the comment below
*/
const UnnecessarySplits = () => (
  <section>
    <h2>Don't Create Unnecessary Components</h2>
    <h3>Example...</h3>
    <List items={items} />
  </section>
);

/* const UnnecessarySplits = () => (
  <section>
    <h2>Split components when it makes sense</h2>
    <h3>Example...</h3>
    {items.length > 0 ? items.map(({ text, href}) =>
      <ListItem key={text} text={text} href={href} />;
    ) : null}
  </section>
); */

export default UnnecessarySplits;