import renderListGroup from "../Utilities/ListGroupUtils/ListGroupUtils";

function DescriptionListGroup({ descriptions }: { descriptions: string[] }) {
  return <ul className="list-group">{renderListGroup(descriptions)}</ul>;
}

export default DescriptionListGroup;
