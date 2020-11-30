import ListItem from './listItem';

/*
 This is component doesn't need to exist.
 It's only being consumed once and isn't
 isolating any significant complexity.
 Should be inlined in the parent.
*/
const List = ({ items }) => {
  if (items.length > 0) {
    return items.map(({ text, href }) => <ListItem key={text} text={text} href={href} />);
  } else {
    return null;
  }
};

export default List;