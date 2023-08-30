// import './InsuranceListItem.css';

export default function InsuranceListItem({ insuranceItem }) {
  return (
    <div className="InsuranceListItem">
      <div className="name">{insuranceItem.name}</div>
      <div className="buy">
        <span>${insuranceItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => console.log('clicked')}>
          ADD
        </button>
      </div>
    </div>
  );
}