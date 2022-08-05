import type MapView from '@arcgis/core/views/MapView';
// import type Map from '@arcgis/core/map';
import type { EChartsType } from 'echarts';
class EchartsLayer {
  public ecContainer;
  constructor(public view: MapView, public ec: EChartsType) {
    const element = (this.ecContainer = document.createElement('div'));
    element.style.position = 'absolute';
    element.style.height = `${view.height}px`;
    element.style.width = `${view.width}px`;
    element.style.top = `${0}px`;
    element.style.left = `${0}px`;
    element.style.pointerEvents = 'none';
    view.container.appendChild(element);
    // this._init(view, echartsObj);
  }
}

export default EchartsLayer;
