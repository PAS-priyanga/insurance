import InsuranceListItem from '../InsuranceListItem/InsuranceListItem';

export default function InsuranceList({ insuranceItems }) {
  const items = insuranceItems.map(item =>
    <InsuranceListItem
      key={item._id}
      insuranceItem={item}
    />
  );
  return (
    <main className="InsuranceList">
      {items}
    </main>
  );
}