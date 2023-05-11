export function PositionApplyingUtils () {
  
  return (
    <div className="k-w-full k-h-full">
      <div className="k-pos-relative k-text-white k-bg-secondary k-h-1/5 k-w-1/4 k-mb-5">
        Relative Parent 1
        <div className="k-pos-absolute k-right-0 k-text-white k-bg-primary k-h-20 k-w-20">Absolute Child 1</div>
      </div>
      <div className="k-pos-static k-text-white k-bg-secondary k-h-1/5 k-w-1/4 k-mb-5">
        Static Parent 2
        <div className="k-pos-absolute k-right-0 k-text-white k-bg-primary k-h-20 k-w-20">Absolute Child 2</div>
      </div>
      <div className="k-pos-relative k-text-white k-bg-secondary k-h-1/5 k-w-1/4 k-mb-5">
        Relative Parent 3
        <div className="k-pos-fixed k-right-0 k-text-white k-bg-primary k-h-20 k-w-20">Fixed Child 3</div>
      </div>
      <div className="k-pos-relative k-text-white k-bg-secondary k-h-1/5 k-w-1/4 k-mb-5">
        Relative Parent 4
        <div className="k-pos-relative k-right-0 k-text-white k-bg-primary k-h-20 k-w-20">Relative Child 4</div>
      </div>
    </div>
  );
}
