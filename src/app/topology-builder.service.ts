import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopologyBuilderService {
  constructor() {}
}
// export namespace Topologia {
//   export enum Item {
//     Node,
//     Network,
//     Bridge,
//     Cable
//   }
// }

export const Topologia = ["Node", "Network", "Bridge", "Cable"]