const ListItem = ({ text, href }) => (
  <li className="fancy-li">
    {href ? <a href={href}>{text}</a> : <span>{text}</span>}
  </li>
);

export default ListItem;