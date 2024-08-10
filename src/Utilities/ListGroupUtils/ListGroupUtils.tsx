export default function renderListGroup(descriptions: string[]) {
  return descriptions.map((description) => (
    <li className="list-group-item" key={description}>
      {description}
    </li>
  ));
}
