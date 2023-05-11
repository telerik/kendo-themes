export function AppearanceNoneUtils () {
  
  return (
    <div className="k-d-flex k-flex-col k-align-items-center k-gap-5">
      <button className="k-appearance-none">Button</button>
      <input className="k-appearance-none" type="text" value="Text Field" />
      <select className="k-appearance-none" name="">
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </div>
  );
}
